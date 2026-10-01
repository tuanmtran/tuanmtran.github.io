#!/usr/bin/env bash
# Converts a PDF into numbered JPEG page images for use as flipbook pages.
#
# Usage: scripts/pdf-to-pages.sh <input.pdf> <gallery-slug> [dpi]
#
# Output: public/galleries/<gallery-slug>/page-01.jpg, page-02.jpg, ...
# Requires poppler-utils (pdftoppm).

set -euo pipefail

if [[ $# -lt 2 ]]; then
  echo "Usage: $0 <input.pdf> <gallery-slug> [dpi]" >&2
  exit 1
fi

input_pdf="$1"
slug="$2"
dpi="${3:-150}"

if ! command -v pdftoppm >/dev/null 2>&1; then
  echo "pdftoppm not found. Install poppler-utils first." >&2
  exit 1
fi

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
out_dir="$script_dir/../public/galleries/$slug"
mkdir -p "$out_dir"

pdftoppm -jpeg -r "$dpi" "$input_pdf" "$out_dir/page"

# Rename to zero-padded, 1-indexed page-NN.jpg (pdftoppm already zero-pads, but
# normalize to 2 digits minimum for predictable sorting in galleries.ts).
cd "$out_dir"
for f in page-*.jpg; do
  n="${f#page-}"
  n="${n%.jpg}"
  n="${n#"${n%%[!0]*}"}"
  [[ -z "$n" ]] && n=0
  printf -v padded "%02d" "$n"
  [[ "$f" != "page-$padded.jpg" ]] && mv "$f" "page-$padded.jpg"
done

echo "Pages written to $out_dir"
echo "Add the corresponding entries to src/data/galleries.ts"
