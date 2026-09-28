import { next } from '@vercel/functions';

const PREVIEW_USER = 'fish';
const encoder = new TextEncoder();

const securityHeaders = {
  'Cache-Control': 'private, no-store',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-Robots-Tag': 'noindex, nofollow, noarchive, nosnippet',
};

const lockedPage = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
    <title>Private preview</title>
    <style>
      :root { color-scheme: light; font-family: Arial, Helvetica, sans-serif; }
      * { box-sizing: border-box; }
      body { min-height: 100vh; margin: 0; display: grid; place-items: center; padding: 24px; background: #f4f1eb; color: #151718; }
      main { width: min(100%, 520px); border-top: 8px solid #ed1b2f; padding: 40px; background: white; box-shadow: 0 24px 70px rgba(21, 23, 24, .14); }
      strong { display: block; margin-bottom: 22px; color: #ed1b2f; font-size: 14px; letter-spacing: .12em; text-transform: uppercase; }
      h1 { max-width: 10ch; margin: 0 0 18px; font-size: clamp(40px, 9vw, 68px); line-height: .92; letter-spacing: -.04em; }
      p { max-width: 38ch; margin: 0; color: #51565a; font-size: 17px; line-height: 1.55; }
    </style>
  </head>
  <body>
    <main>
      <strong>FISH Window Cleaning</strong>
      <h1>Private preview.</h1>
      <p>Enter the shared username and password in your browser’s sign-in prompt to continue.</p>
    </main>
  </body>
</html>`;

function unauthorized() {
  return new Response(lockedPage, {
    status: 401,
    headers: {
      ...securityHeaders,
      'Content-Type': 'text/html; charset=utf-8',
      'WWW-Authenticate': 'Basic realm="FISH website preview", charset="UTF-8"',
    },
  });
}

function decodeCredentials(header: string | null) {
  if (!header?.startsWith('Basic ')) return null;

  try {
    const decoded = atob(header.slice(6));
    const separator = decoded.indexOf(':');
    if (separator < 0) return null;
    return {
      username: decoded.slice(0, separator),
      password: decoded.slice(separator + 1),
    };
  } catch {
    return null;
  }
}

async function digest(value: string) {
  return new Uint8Array(await crypto.subtle.digest('SHA-256', encoder.encode(value)));
}

function equalBytes(left: Uint8Array, right: Uint8Array) {
  if (left.length !== right.length) return false;
  let difference = 0;
  for (let index = 0; index < left.length; index += 1) {
    difference |= left[index] ^ right[index];
  }
  return difference === 0;
}

export const config = {
  matcher: '/(.*)',
};

export default async function passwordGate(request: Request) {
  const expectedPassword = process.env.SITE_PASSWORD;
  if (!expectedPassword) {
    return new Response('Preview unavailable.', {
      status: 503,
      headers: securityHeaders,
    });
  }

  const credentials = decodeCredentials(request.headers.get('authorization'));
  if (!credentials || credentials.username !== PREVIEW_USER) return unauthorized();

  const [providedDigest, expectedDigest] = await Promise.all([
    digest(credentials.password),
    digest(expectedPassword),
  ]);

  if (!equalBytes(providedDigest, expectedDigest)) return unauthorized();

  return next({ headers: securityHeaders });
}
