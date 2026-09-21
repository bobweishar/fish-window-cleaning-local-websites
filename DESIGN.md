---
name: Local FISH Window Cleaning
description: A proof-heavy field editorial system for a trusted Chicago-suburban window-cleaning operator.
colors:
  fish-red: "#e51837"
  fish-red-dark: "#b80f29"
  deep-ink: "#141617"
  working-charcoal: "#4d4d4d"
  clear-white: "#ffffff"
  warm-mist: "#f4f3f1"
  route-stone: "#ebe7e1"
  rule-line: "#ddd8d2"
  caption-pink: "#ff6179"
typography:
  display:
    fontFamily: "Fish Condensed, Fish Display, sans-serif"
    fontSize: "clamp(3rem, 6.25vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.018em"
  headline:
    fontFamily: "Fish Condensed, Fish Display, sans-serif"
    fontSize: "clamp(2.25rem, 4.5vw, 4.6rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.018em"
  title:
    fontFamily: "Fish Condensed, Fish Display, sans-serif"
    fontSize: "clamp(1.35rem, 2vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.018em"
  body:
    fontFamily: "Fish Body, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Fish Body, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  logo: "8px"
  control: "12px"
  media: "14px"
  panel: "16px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "22px"
  xl: "24px"
  section-min: "88px"
components:
  button-primary:
    backgroundColor: "{colors.fish-red}"
    textColor: "{colors.clear-white}"
    typography: "{typography.title}"
    rounded: "{rounded.control}"
    padding: "14px 22px"
    height: "54px"
  button-primary-hover:
    backgroundColor: "{colors.fish-red-dark}"
    textColor: "{colors.clear-white}"
    typography: "{typography.title}"
    rounded: "{rounded.control}"
    padding: "14px 22px"
    height: "54px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.deep-ink}"
    typography: "{typography.title}"
    rounded: "{rounded.control}"
    padding: "14px 22px"
    height: "54px"
  button-light:
    backgroundColor: "{colors.clear-white}"
    textColor: "{colors.deep-ink}"
    typography: "{typography.title}"
    rounded: "{rounded.control}"
    padding: "14px 22px"
    height: "54px"
  photo-panel:
    backgroundColor: "{colors.route-stone}"
    textColor: "{colors.clear-white}"
    rounded: "{rounded.panel}"
    padding: "48px"
---

# Design System: Local FISH Window Cleaning

## Overview

**Creative North Star: "The Red Route Board"**

This system should feel like a dependable local crew's field notebook made public: direct, specific, orderly, and full of visible evidence. Official franchise photography, familiar suburban materials, numbered routes, and workmanlike dividers establish trust before promotional language does. FISH red behaves like a van, marker, or dispatch signal against deep ink, clear white, and warm mist—not like decoration spread across every surface.

The editorial scale gives the operation a distinctive voice without making it precious. Condensed headlines are blunt and memorable; the humanist body face stays calm and readable. Composition alternates between large photographic proof and disciplined lists, rails, grids, and scoreboards. Restrained Chicago sports humor can punctuate the experience, but professionalism and local accountability remain the dominant impression.

**Key Characteristics:**

- Proof-heavy and field-forward, with current official work photography doing real informational work.
- Condensed, decisive headlines paired with a readable humanist body voice.
- FISH red used as a directional signal against deep ink, white, and warm suburban neutrals.
- Route-board numbering, rules, labels, and captions that make local operations visible.
- Generous editorial spacing, strong rectangular structure, and gently softened working surfaces.
- One dominant official estimate handoff, supported by a direct local call path.

## Colors

The palette combines unmistakable FISH recognition with warm, practical neutrals that feel at home on brick, stone, glass, uniforms, and neighborhood streets.

### Primary

- **FISH Red** (`fish-red`): The action and attribution color for estimate buttons, route markers, proof accents, selection, and decisive full-width bands.
- **Dispatch Red** (`fish-red-dark`): The deeper interaction state for primary actions; it adds pressure without introducing a second brand hue.

### Secondary

- **Caption Pink** (`caption-pink`): A rare highlight inside dark photographic captions. Keep it subordinate to FISH Red.

### Neutral

- **Deep Ink** (`deep-ink`): The primary text, navigation, footer, and high-contrast section color.
- **Working Charcoal** (`working-charcoal`): The default body-copy color on light surfaces.
- **Clear White** (`clear-white`): The principal canvas, reversed text color, and clean action surface.
- **Warm Mist** (`warm-mist`): The soft alternate section and hero-copy background.
- **Route Stone** (`route-stone`): The warmer media placeholder and material neutral.
- **Rule Line** (`rule-line`): The quiet structural divider across proof rails, route boards, lists, and navigation.

### Named Rules

**The Red Is a Signal Rule.** Reserve FISH Red for actions, local markers, proof labels, and a few decisive bands; its clarity depends on restraint.

**The Proof Stays True Rule.** Photography must be official, current franchise work or an approved local portrait; never color-treat an unrelated stock image into apparent proof.

## Typography

**Display Font:** Fish Condensed / Barlow Condensed Bold, with Fish Display / Sora as the fallback
**Body Font:** Fish Body / DM Sans, with sans-serif fallback
**Label Font:** Fish Body / DM Sans

**Character:** Condensed display type feels like a route sheet, work order, or sports-page headline: compact, confident, and locally energetic. DM Sans supplies a plainspoken counterweight for details, proof, and explanations.

### Hierarchy

- **Display** (700, fluid `display` scale, 0.98 line-height): Hero statements only; keep line lengths short enough to preserve the stacked editorial rhythm.
- **Headline** (700, fluid `headline` scale, 1.02 line-height): Major section openings, usually limited to roughly 12 characters per line through container width.
- **Title** (700, fluid `title` scale, 1.1 line-height): Cards, process steps, route rows, and FAQ questions.
- **Body** (400, `body` scale, 1.55 line-height): Explanations and service detail; keep important paragraphs near 40–57 characters per line and long answers under about 70 characters per line.
- **Label** (700, `label` scale, 0.08em tracking, uppercase): Locations, utility text, route markers, and compact provenance cues.

### Named Rules

**The Field Headline Rule.** Headlines are short, stacked, and declarative; do not soften them with thin weights, high-fashion serif styling, or generic centered marketing language.

**The Human Detail Rule.** Operational detail stays in the body face with comfortable line-height; condensed type is an accent and hierarchy tool, not a long-reading face.

## Layout

The desktop system uses full-bleed color and photography around centered editorial interiors. Navigation and proof rails top out at 1380px; primary content sections use an approximately 1180px reading grid with fluid side padding and generous vertical section space. Two-column compositions deliberately contrast a forceful headline or image with a narrower explanatory block. Lists and proof systems use borders as alignment devices rather than floating card collections.

At 1120px, full desktop navigation yields to the menu control and complex hero spacing tightens. At 820px, heroes, editorial splits, owner stories, route sections, and service narratives become single columns; proof and process rails reduce to two columns; a persistent call-and-estimate bar appears. At 520px, actions stack full width, proof and process systems become one column, commercial lists simplify, and media remains large enough to function as evidence rather than a thumbnail.

Spacing should feel generous between stories and compact inside operational lists. Use the documented spacing scale for internal gaps, then the fluid 88–150px section rhythm for major narrative transitions.

**The One Clear Handoff Rule.** Each page should build toward the official estimate action as the dominant endpoint, with the phone call visible as its practical companion rather than a competing funnel.

## Elevation & Depth

The system is flat and structural by default. Rules, ink fields, warm tonal shifts, photographic overlays, and inset image shading establish depth before shadows do. Soft ambient shadows are reserved for large clickable photo panels, the owner portrait, primary red actions, and the fixed mobile handoff bar.

### Shadow Vocabulary

- **Working Panel** (`shadow-panel`): A broad, low-contrast shadow for important photographic panels and the owner portrait.
- **Red Action Rest** (`shadow-action-rest`): A small red-tinted lift that makes the primary estimate action legible without turning it glossy.
- **Red Action Hover** (`shadow-action-hover`): A slightly larger red-tinted shadow paired with a two-pixel rise.
- **Mobile Handoff** (`shadow-mobile-handoff`): An upward shadow separating the persistent mobile actions from page content.

### Named Rules

**The Flat-by-Default Rule.** Do not give every section or list item a shadow; elevation marks action, fixed position, or photographic emphasis.

## Shapes

Corners are gently practical, never pill-like. Small branded images use the `logo` radius, controls use the `control` radius, proof media uses the `media` radius, and large photographic path panels use the `panel` radius. Operational rows, proof rails, FAQ items, and dark process grids remain square and derive structure from rules. Image crops are rectangular, substantial, and frequently edge-to-edge inside their frame.

**The Working Rectangle Rule.** Prefer disciplined rectangles with modest corner softening; avoid capsules, excessive circles, glassmorphism blobs, and ornamental geometry unrelated to the route-board language.

## Components

### Buttons

Buttons feel like clear dispatch actions: substantial, high-contrast, and compact enough to repeat without looking like promotional banners.

- **Shape:** Gently rounded working control (`control` radius) with a two-pixel border and a minimum 54px touch height.
- **Primary:** FISH Red with clear white text, display typography, and 14px × 22px padding.
- **Hover / Focus:** Shift to Dispatch Red, rise by two pixels, and deepen the red ambient shadow over 200ms with the standard ease. Use the global three-pixel red focus outline with a four-pixel offset.
- **Outline:** Transparent with Deep Ink text and border; fill Deep Ink with white text on hover. On dark fields, use a translucent white border and reverse to white.
- **Light:** Clear White with Deep Ink text on red call-to-action bands; soften to Warm Mist on hover.

### Cards / Containers

Photo-led panels feel like proof boards rather than generic cards.

- **Corner Style:** Large photo paths use the `panel` radius; galleries and portraits use the `media` radius.
- **Background:** Use real photography with a bottom-up Deep Ink gradient when text overlays an image; use Warm Mist or Clear White for editorial copy surfaces.
- **Shadow Strategy:** Only major clickable photo paths and the owner portrait use the Working Panel shadow.
- **Border:** Structural lists use Rule Line dividers; avoid boxing every item on all four sides.
- **Internal Padding:** Scale from 28px on compact/mobile surfaces to 48px on large photo panels.

### Navigation

The navigation combines a slim Deep Ink utility strip with a Clear White primary row. The official square logo and local-owner descriptor lead; route links are compact bold body text with a FISH Red underline that draws from left to right on hover. The estimate action is the only filled button in the row. Below 1120px, hide the link row and show a three-rule menu control; the expanded menu is a simple divided list, not a floating overlay.

### Proof Rail

Proof statements form a four-column ruled strip on desktop, two columns on tablet, and one column on narrow phones. Each statement pairs a condensed title with a smaller charcoal explanation. Keep claims concrete and attributable, and place source context adjacent when a claim depends on franchise information.

### Route Board

The route board is a dense, table-like local signature: a heavy Deep Ink top rule, quiet row dividers, red two-digit numbers, condensed town names, and red state labels. It should read as an active service route rather than a decorative location cloud.

### FAQ Rows

FAQ items use a heavy top rule, quiet row dividers, condensed questions, and a red plus that rotates 45 degrees when open. Answers remain unboxed and align with the question rhythm. Preserve native disclosure semantics and a generous keyboard focus state.

### Estimate Band

The closing handoff is a full-width FISH Red field with a short condensed headline, concise light copy, one white estimate button, and one underlined white call link. On mobile, the persistent bottom bar repeats the same hierarchy as two large tap targets: call first, estimate emphasized in red.

### Motion

Reveal content with a restrained 24px upward settle over 700ms using the standard ease. The homepage hero may use the signature squeegee-clear treatment: a light blur layer wipes from left to right over 1.25 seconds after a 150ms delay, revealing the official route photograph. Hover movement stays quiet—two-pixel button lift or a 1.035 image scale. When reduced motion is requested, remove the squeegee layer, stop smooth scrolling, collapse animation and transition durations, and render all reveal content immediately.

## Do's and Don'ts

### Do:

- **Do** lead with official, current franchise photography and identify what the image proves.
- **Do** use FISH Red as a scarce directional marker for estimate actions, route cues, active details, and the occasional full-width handoff.
- **Do** pair compact field-editorial headlines with plainspoken, readable explanations.
- **Do** use rules, numbering, captions, and provenance notes to make local operational proof scannable.
- **Do** preserve the estimate-first, call-second action hierarchy on desktop and mobile.
- **Do** keep every motion flourish legible and complete when reduced motion is enabled.

### Don't:

- **Don't** invent reviews, ratings, customer identities, project claims, or local photography to fill a layout.
- **Don't** turn the interface into a generic franchise template, a luxury-home brochure, or a collection of interchangeable rounded cards.
- **Don't** use FISH Red as a broad decorative wash across unrelated surfaces; it is the system's dispatch signal.
- **Don't** introduce pill controls, glassmorphism, gradients unrelated to photo legibility, or playful sports graphics.
- **Don't** let Chicago sports humor overwhelm service clarity, local credibility, or professional tone.
- **Don't** create a second conversion funnel when the official FISH estimate and local phone path already provide the handoff.
