# Color Pop Fashion Studio

An original, colorful, offline-capable dress-up game designed for desktop browsers, iPhone, and tablets.

**Play:** https://flowbeacon-labs.github.io/color-pop-dress-up/

## Features

- Four illustrated fashion models with individual hairstyles and appearances.
- 48 wardrobe options across dresses, tops, bottoms, shoes, hairstyles and accessories.
- **Independent clothing colors** — open a category (Dresses, Tops, Bottoms, Shoes or Extras) and select that item's color. Choosing Hair lets you recolor the hairstyle.
- **Six Fashion Challenges** with clear outfit goals and three-star scoring: Princess Party, Summer Sunshine, Sporty Day, Movie Star, Creative Casual and Cozy Adventure.
- **My Looks** saved-outfit gallery: each saved look has its own outfit thumbnail and **Wear** / **Delete** controls. Stores up to 30 looks on the device using browser localStorage.
- **Undo / Redo** buttons for style changes, plus Ctrl/Cmd+Z and Ctrl/Cmd+Shift+Z keyboard shortcuts.
- Four background scenes, Surprise Me random outfit creation, Surprise This Item, Reset and downloadable SVG photo.
- No external frameworks, sign-in, advertising, tracking, or payments.

## How to play

1. Open the game in a recent Chrome, Edge, Safari or Firefox browser.
2. Select Ava, Mia, Zara or Luna as your fashion model.
3. Tap Dresses for a full outfit or combine Tops + Bottoms. Choose Hair, Shoes and Extras as desired.
4. Select a wardrobe category and choose one of the swatches to recolor **only that item**. Hair can be recolored separately.
5. Follow the Fashion Challenge, then press **Judge my look** for a 0–3 star score. Press **Next challenge** to try another theme.
6. Press **Save look** to store your outfit. Press **My Looks** to see saved thumbnails, wear an outfit again or delete it.
7. Use **Undo / Redo** to reverse styling changes, **Scene** to change backgrounds, or **Photo** to export SVG artwork.

## Offline and data storage

All production assets are local: `index.html`, `style.css`, and `game.js`. Once the files are downloaded, open `index.html` directly without network access. Saved outfits belong to the browser/device and are not uploaded to a server. Some private browsing modes disable persistent storage. SVG download behavior differs on iOS; use the share sheet or save to Files if needed.

## GitHub Pages deployment

Push the three production files to the `main` branch of `flowbeacon-labs/color-pop-dress-up`. In GitHub **Settings → Pages**, select **Deploy from a branch → main → /(root)**. Verify https://flowbeacon-labs.github.io/color-pop-dress-up/ after the deployment finishes.

## Validation

- JavaScript syntax compilation: passed.
- DOM-simulated interaction checks: 11/11 passed for startup rendering, challenges, saving/gallery, SVG thumbnails, close dialog, scoring, random outfit, undo/redo and download action.
- Static check: all DOM element IDs referenced by `game.js` are present in `index.html`.
- **Not verified:** real Safari/iPhone rendering, visual regression in a browser, touch target accessibility across all devices, and persistent storage after restarting a real browser.

## Known limitations / next enhancements

- Saved outfit thumbnails use the SVG artwork; only the current device/browser can access those saves.
- Challenge scoring is rule-based, not subjective or AI-driven, and stars can be accumulated by replaying challenges.
- Clothing still uses a single color per item rather than patterns or textile textures.
- Future: printable fashion cards, adjustable garment patterns, runway animation, multi-model runway lineup, and a structured challenge leaderboard.

## Changelog

### Current update
- Added independent outfit category color controls and hair tint.
- Added saved-look gallery with SVG thumbnails, wear and delete options.
- Added six themed styling challenges and three-star scoring.
- Added undo/redo controls and keyboard shortcuts.
- Updated CSS and cache-busted stylesheet/script references.

### Initial release
- Four models, 48 items, 12 shared swatch colors, four scenes, random outfits, local save and SVG export.
