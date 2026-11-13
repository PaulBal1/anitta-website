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
| `petreceri.html` | Party offer (linked from the footer, as it was hidden in the original menu) |

## Run locally

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

Any static host works (GitHub Pages, Netlify, cPanel, etc.).

## Structure

```
assets/css/style.css   styles (colors defined as CSS variables in :root)
assets/js/main.js      mobile menu, scroll animations, gallery tabs, lightbox
assets/img/            logo, decorations, gallery photos (from anitta.ro, resized)
```

Fonts: Baloo 2 + Nunito (Google Fonts). Icons: Font Awesome 6 (cdnjs).
