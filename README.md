# Anitta Kindergarten & Club – website

Colorful redesign of [anitta.ro](https://anitta.ro/) (Club de copii Anitta, Timișoara – zona Lipovei), inspired by the style of [elitekindergarten.ro](https://www.elitekindergarten.ro/).

Static site (HTML + CSS + vanilla JS), no build step. Content is in Romanian.

## Pages

| Page | Content |
| --- | --- |
| `index.html` | Acasă: hero, despre noi, ce oferim, activități, program și tarife, galerie, înscrieri |
| `galerie.html` | Galerie foto: Despre noi, Activitățile noastre, Serbări (with lightbox) |
| `program.html` | Program 1 (normal) and Program 2 (prelungit) with prices and daily schedule |
| `contact.html` | Address, phone, e-mail, Google Map and access sketch |

## Run locally

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

Any static host works (GitHub Pages, Netlify, cPanel, etc.).

## Adding photos to the gallery

1. Resize the photos to max. 1200 px (e.g. `convert foto.jpg -resize 1200x1200\> -quality 78 foto.jpg`).
2. Copy them to `assets/img/galerie/<album>/` (`despre-noi`, `activitati`, `serbari`).
3. In `galerie.html`, inside the right album's `<div class="photo-grid">`, add one line per photo:

   ```html
   <a href="assets/img/galerie/activitati/foto-noua.jpg" data-lightbox><img src="assets/img/galerie/activitati/foto-noua.jpg" alt="Descriere" loading="lazy"></a>
   ```

   For a new group inside an album, copy a whole `<div class="album-group ...">` block and change the `<h3>` title.

## Publishing (GitHub Pages)

Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
The site is then available at `https://paulbal1.github.io/anitta-website/`.
For a custom domain (e.g. anitta.ro) see [GitHub's guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Structure

```
assets/css/style.css   styles (colors defined as CSS variables in :root)
assets/js/main.js      mobile menu, scroll animations, gallery tabs, lightbox
assets/img/            logo, decorations, gallery photos (from anitta.ro, resized)
```

Fonts: Baloo 2 + Nunito (Google Fonts). Icons: Font Awesome 6 (cdnjs).
