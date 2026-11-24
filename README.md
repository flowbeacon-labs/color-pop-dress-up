# Color Pop Fashion Studio

A bright, touch-friendly, child-friendly, original offline dress-up game for browsers.

## Features

- Four stylized, slender fashion illustrations with different skin tones and hair colors.
- Six categories with eight options each: dresses, tops, bottoms, shoes, hairstyles and accessories (48 style selections).
- Twelve outfit colors and four background scenes.
- Combine dresses or separate tops/bottoms with shoes, hair and extras.
- Surprise Look, Surprise This Item, Reset, local Save Look, and SVG image download.
- No accounts, ads, external images, payments, analytics or dependencies.
- Mobile layout, semantic button labels and keyboard focus support.

## Play locally

Open `index.html` in Chrome, Safari, Firefox or Edge; no installation or web server is needed. Keep `index.html`, `style.css` and `game.js` together.

## Publish on GitHub Pages

Create a public GitHub repository, for example `color-pop-dress-up`, in `flowbeacon-labs`. Upload the three game files to the repository root and configure Settings → Pages → Deploy from a branch → `main` → `/(root)`.

Expected site address once published: `https://flowbeacon-labs.github.io/color-pop-dress-up/` (only if the repo has been created and Pages configured).

## About saving

`Save look` stores the latest 15 outfit configurations in browser localStorage on that device; the current MVP does not have a saved-look gallery or a load button. `Photo` downloads an SVG image of the model and current outfit. Some iOS browsers may open the image in a preview or require the Share/Save to Files action rather than silently downloading.

## Implementation details

All assets are generated from layered SVG paths directly in `game.js`. There are no externally hosted images, fonts, libraries, or network calls. Model bodies are stylized fashion illustrations, not representations of real individuals. The garments are built from procedural vector shapes and can be extended by adding entries to the `catalog` and `garmentSVG` functions.