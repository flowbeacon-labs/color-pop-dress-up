# Color Pop Fashion Studio

## Refined model portraits

All eight fashion models now use a shared, more natural illustrated SVG face renderer. It adds:
- Per-model face proportions with slight changes in cheek/chin width, eye and eyebrow placement.
- Soft radial complexion shading, subtle cheek and jaw contours, ears and highlights.
- Almond-shaped eyes with irises, pupils and catchlights, separately drawn eyebrows.
- A shaped nose, more detailed lips, and a subtle smile.
- Consistent portraits in the dressing room, model picker, My Looks gallery, SVG exports and fashion runway.

The portraits remain stylized vector illustrations—not photographs or photorealistic renders—and require no external image assets.

**Verification:** JavaScript syntax check passed; 15/15 simulated-DOM portrait and regression checks passed, including all eight faces, ethnic clothes, saved looks and runway. Device/browser visual regression testing is still needed.

---


## Punjabi Fashion Collection

**Punjabi Casual and Punjabi Wedding are implemented as playable SVG fashion layers**, not just catalog names. Open the **Punjabi Outfits** wardrobe tab and select **Casual** or **Wedding**. Then choose **Dupattas**, **Jewelry**, **Shoes**, and **Hair** to complete the look. Each layer has independent color selection and is included in saved looks and exported artwork.

### Models
Four additional fashion models—**Simran, Gurleen, Meher, and Noor**—join Ava, Mia, Zara and Luna, for eight models total. All eight can appear in the horizontal-scroll runway lineup, and each has an independent outfit slot.

### Outfit catalog
- **Casual (6):** Patiala Suit, Straight Kurta Set, Phulkari Suit, Printed Kurti Set, Cotton Salwar Suit, Casual Anarkali
- **Wedding (6):** Bridal Lehenga, Sharara Suit, Gharara Suit, Heavy Anarkali, Bridal Patiala, Velvet Wedding Suit
- **Dupattas (9):** None, Plain, Phulkari, Chiffon, Bandhani, Embroidered, Bridal, Double, Net Border
- **Jewelry (10):** None, Jhumka, Bangles, Paranda, Maang Tikka, Chandbali, Chooda, Kaleere, Nath & Tikka, Bridal Jewelry Set
- Added Punjabi Jutti, Bridal Jutti and Festive Sandals, plus Punjabi Braid, Paranda Braid and Bridal Bun hairstyles
- Added 11 festive color swatches in addition to the existing palette
- Added Courtyard, Mustard Fields, Mehndi Celebration, and Wedding Stage scenes
- Added five Punjabi styling challenges and three themed runway backgrounds: Phulkari Parade, Mehndi Night and Shaadi Stage

### How to dress a Punjabi model
1. Pick any of the eight models.
2. Open **Punjabi Outfits**, select Casual or Wedding, and choose a suit.
3. Open **Dupattas** and select a drape. Change the swatch to recolor only the dupatta.
4. Open **Jewelry**, **Shoes**, and **Hair** to complete the outfit.
5. Try **My Looks** to save or restore it; add the look to the **Fashion Show** lineup.
6. Use **Photo** for an SVG of the single model, or **Save Show Picture** for the full runway.

### Design and technical notes
Punjabi garments are stylized vector illustrations fitted to the game's existing body layout. Salwar/patiala, gharara/sharara and lehenga have different lower silhouettes, kameez/anarkali have different upper shapes, and phulkari/bridal items have decorative stitch patterns. Dupattas, jewelry and backgrounds are separate SVG layers. The clothing is **not** derived from photographs, and these are simplified cartoon representations rather than authentic textile reproductions. Saved looks from older versions remain readable.

**Validation:** JavaScript syntax compilation and 17 simulated-DOM checks passed, covering category filtering, SVG garment/jewelry layering, casual/wedding switching, scenes, new model slots, runway persistence and gallery saving. Actual iPhone Safari visual quality and complex outfit combinations still require device testing.

---


## Fashion Runway (new)

The **Fashion Show** button opens a multi-model runway. This is a browser game feature, not a separate service.

1. Dress Ava, Mia, Zara or Luna using the existing wardrobe.
2. Choose **Fashion Show → Add Current Model** to put her in the lineup. Each of the four models has a separate outfit slot.
3. Tap **Dress** or **Edit** on another runway slot, change that model's outfit, then use **Add Current Model** again.
4. Choose one of four runway scenes: **Pink Dream, Royal Night, Sunny Beach, Starry Galaxy**.
5. Press **Start Fashion Show**. Models take turns walking and posing, with lightweight CSS animation. Use **Stop Show** whenever needed.
6. Choose **Save Show Picture** to export an SVG lineup image. **Remove** clears a model from the lineup without deleting an individually saved look.

Lineups and the selected stage theme are saved in local browser storage under `color-pop-runway`, independent of **My Looks**. No sign-in, server, paid assets or network access is needed for the game.

**Limitations:** The runway uses animated 2D SVG models rather than 3D characters; it is a one-show-at-a-time lineup with up to four models. iPhone Safari may open exported SVGs rather than download them directly. Reduced-motion preferences disable the walking animation.

**Validation:** JavaScript syntax and initial 11 simulated-DOM interaction checks passed, including adding a model, lineup persistence, start/stop, theme selection, export action, closing the modal, and original gallery compatibility. This does not substitute for an actual rendered iPhone browser test.

---


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
