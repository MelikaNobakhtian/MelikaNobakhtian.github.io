# Melika Nobakhtian — Personal Website

Live at **https://melikanobakhtian.github.io**

A single-page static site (no build step): plain HTML + CSS + JS, hosted free on GitHub Pages.

## How to edit content

Almost everything lives in **`index.html`**, in clearly-marked sections:

| To change...        | Look for                                  |
| ------------------- | ----------------------------------------- |
| Name / role / links | `<section class="hero">`                  |
| Bio & interests     | `<section id="about">`                    |
| News items          | `<section id="news">`                     |
| Publications        | `<section id="publications">`             |
| Experience & awards | `<section id="experience">`               |
| Projects            | `<section id="projects">`                 |
| Teaching            | `<section id="teaching">`                 |
| Reviewing / certs   | `<section id="service">`                  |

Colors and fonts are defined at the top of **`style.css`** (in `:root` — light theme — and `html.dark` — dark theme).

Your CV is served at `assets/cv.pdf` and your photo at `assets/melika.jpg` — replace those files to update them (keep the same names, or update the references in `index.html`).

## How to publish changes

Edit files, then:

```bash
git add -A
git commit -m "Update publications"
git push
```

GitHub Pages rebuilds automatically — usually live within a minute.

## Adding a news item

Duplicate a `<li>` inside the news list:

```html
<li class="reveal"><span class="news-date">2026</span><span class="news-text">📄 New paper ...</span></li>
```

## Adding a publication

Duplicate an `<article class="pub">` block inside `#publications`. Set `data-type` to
`conf`, `workshop`, or `review` so the filter buttons keep working.
