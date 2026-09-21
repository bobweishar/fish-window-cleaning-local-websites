#!/bin/zsh
set -euo pipefail

project_dir="${0:A:h:h}"
output_dir="$project_dir/public/images/ads"
render_tmp="$(mktemp -d "$project_dir/.fish-reels.XXXXXX")"
frame_dir="$render_tmp/frames"
export REEL_FRAME_DIR="$frame_dir"
export REEL_AUDIO_DIR="$render_tmp"
trap 'rm -rf "$render_tmp"' EXIT

cd "$project_dir"
node scripts/create-facebook-reels.mjs
node scripts/create-reel-audio.mjs

say -v 'Reed (English (US))' -r 245 -o "$render_tmp/vocal-01.aiff" 'Da windows, da gutters, da local crew!'
say -v 'Eddy (English (US))' -r 245 -o "$render_tmp/vocal-02.aiff" 'Fish Window Cleaning coming through!'
say -v 'Reed (English (US))' -r 245 -o "$render_tmp/vocal-03.aiff" 'Storefront glass and homes in view!'
say -v 'Eddy (English (US))' -r 245 -o "$render_tmp/vocal-04.aiff" 'Chicago suburbs, we work near you!'
say -v 'Reed (English (US))' -r 245 -o "$render_tmp/vocal-05.aiff" 'Squeegees up, let the whole block know!'
say -v 'Reed (English (US))' -r 245 -o "$render_tmp/vocal-06a.aiff" 'Get a free estimate, here we go!'
say -v 'Eddy (English (US))' -r 245 -o "$render_tmp/vocal-06b.aiff" 'Get a free estimate, here we go!'

ffmpeg -y \
  -i "$render_tmp/fish-squeegee-shuffle-original-beat.wav" \
  -i "$render_tmp/vocal-01.aiff" -i "$render_tmp/vocal-02.aiff" -i "$render_tmp/vocal-03.aiff" \
  -i "$render_tmp/vocal-04.aiff" -i "$render_tmp/vocal-05.aiff" -i "$render_tmp/vocal-06a.aiff" -i "$render_tmp/vocal-06b.aiff" \
  -filter_complex "[0:a]volume=0.42[beat];[1:a]adelay=250|250,volume=1.2[v1];[2:a]adelay=2650|2650,volume=1.2[v2];[3:a]adelay=5050|5050,volume=1.2[v3];[4:a]adelay=7450|7450,volume=1.2[v4];[5:a]adelay=9850|9850,volume=1.2[v5];[6:a]adelay=12250|12250,volume=0.92,pan=stereo|c0=c0|c1=0*c0[v6a];[7:a]adelay=12290|12290,volume=0.92,pan=stereo|c0=0*c0|c1=c0[v6b];[beat][v1][v2][v3][v4][v5][v6a][v6b]amix=inputs=8:normalize=0,loudnorm=I=-15:TP=-1.5:LRA=7,aresample=48000[mix]" \
  -map "[mix]" -t 15.5 -ar 48000 -c:a pcm_s16le "$render_tmp/fish-squeegee-shuffle-with-vocals.wav"

ffmpeg -y \
  -loop 1 -t 2.0 -framerate 30 -i "$frame_dir/clean-01-windows.png" \
  -loop 1 -t 2.0 -framerate 30 -i "$frame_dir/clean-02-gutters.png" \
  -loop 1 -t 2.0 -framerate 30 -i "$frame_dir/clean-03-crew.png" \
  -loop 1 -t 3.0 -framerate 30 -i "$frame_dir/clean-04-cta.png" \
  -i "$render_tmp/fish-reel-beat.wav" \
  -filter_complex "[0:v]scale=1080:1920,setsar=1[v0];[1:v]scale=1080:1920,setsar=1[v1];[2:v]scale=1080:1920,setsar=1[v2];[3:v]scale=1080:1920,setsar=1[v3];[v0][v1]xfade=transition=wipeleft:duration=0.18:offset=1.82[x1];[x1][v2]xfade=transition=wipeleft:duration=0.18:offset=3.64[x2];[x2][v3]xfade=transition=wipeleft:duration=0.18:offset=5.46,format=yuv420p[v]" \
  -map "[v]" -map 4:a -t 8.45 -r 30 -c:v libx264 -preset medium -crf 18 -c:a aac -b:a 192k -movflags +faststart \
  "$output_dir/facebook-reel-da-windows-local-crew.mp4"

ffmpeg -y \
  -loop 1 -t 3.0 -framerate 30 -i "$frame_dir/shuffle-01.png" \
  -loop 1 -t 3.0 -framerate 30 -i "$frame_dir/shuffle-02.png" \
  -loop 1 -t 3.0 -framerate 30 -i "$frame_dir/shuffle-03.png" \
  -loop 1 -t 3.0 -framerate 30 -i "$frame_dir/shuffle-04.png" \
  -loop 1 -t 4.0 -framerate 30 -i "$frame_dir/shuffle-05.png" \
  -i "$render_tmp/fish-squeegee-shuffle-with-vocals.wav" \
  -filter_complex "[0:v]scale=1080:1920,setsar=1[v0];[1:v]scale=1080:1920,setsar=1[v1];[2:v]scale=1080:1920,setsar=1[v2];[3:v]scale=1080:1920,setsar=1[v3];[4:v]scale=1080:1920,setsar=1[v4];[v0][v1]xfade=transition=slideleft:duration=0.16:offset=2.84[x1];[x1][v2]xfade=transition=slideleft:duration=0.16:offset=5.68[x2];[x2][v3]xfade=transition=slideleft:duration=0.16:offset=8.52[x3];[x3][v4]xfade=transition=slideleft:duration=0.16:offset=11.36,format=yuv420p[v]" \
  -map "[v]" -map 5:a -t 15.35 -r 30 -c:v libx264 -preset medium -crf 18 -c:a aac -b:a 192k -movflags +faststart \
  "$output_dir/facebook-reel-squeegee-shuffle.mp4"

echo "$output_dir/facebook-reel-da-windows-local-crew.mp4"
echo "$output_dir/facebook-reel-squeegee-shuffle.mp4"
