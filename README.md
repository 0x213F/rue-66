# rue66.band

Website for **Rue '66** — the San Francisco band playing 1960s French yé-yé.

Static HTML/CSS/JS, no build step, served from GitHub Pages at **https://rue66.band**.

```
index.html            the whole site (one page)
assets/css/style.css  styles
assets/js/site.js     video grid (edit VIDEOS to add/reorder videos)
assets/img/           photos, covers, logo
CNAME                 custom domain for GitHub Pages
```

## Editing

**Everything is in `index.html`.** Open it, find the section, change the text.

| To change… | Go to |
| --- | --- |
| Upcoming shows | `<section id="shows">` — replace the `.shows-empty` block with a `<ul class="gigs">` list |
| Past shows | the `<ul class="gigs">` under "Previously" |
| Band lineup | `<ul class="members">` in `<section id="band">` |
| Releases / tracklists | `<section id="music">` |
| Videos | `assets/js/site.js` — the `VIDEOS` array |
| Social links | `<section id="contact">` and the JSON-LD block in `<head>` |

Adding a photo: drop it in `assets/img/`, add a `<figure><img ...></figure>` to
`<div class="gallery">`. Keep images under ~2400px wide.

To preview locally: `python3 -m http.server 8000` then open http://localhost:8000

## Deploying

Push to `main`. GitHub Pages rebuilds automatically, usually within a minute.

## Things worth fixing when you have the info

These were reconstructed from public sources (see below) and should be confirmed
by the band:

- **No booking email.** The contact section currently points people at Facebook.
  If there's a real booking address, add a `mailto:` link in `<section id="contact">`.
- **Debut album tracklist** — ten titles come from the Koolkat Musik listing; the
  last two (*Je T'aime Quand Même*, *Je M'en Fous*) are named on the band's old
  site as originals but their track positions are a guess.
- **Upcoming shows** — none were announced anywhere public as of August 2026.

## Where the content came from

The band's previous site (rue-66.com) is offline and its domain no longer
resolves. Text and images here were recovered and compiled from:

- rue-66.com via the [Internet Archive](https://web.archive.org/web/20220712091608/https://www.rue-66.com/) (Squarespace, 2022) and its earlier Wix incarnation
- [Merci SF](https://mercisf.com/2021/11/01/rue-66-releases-new-ep-tribute-to-serge-martial/) — EP release, credits, tracklist
- [French Morning](https://frenchmorning.com/rue66-orchestre-yeye-san-francisco/) — 2014 interview, band quotes
- [Alliance Française de San Francisco](https://www.afsf.com/news/blog/bculture/discover-rue-66/) — band history
- [San Francisco Chronicle](https://www.sfchronicle.com/music/bandwidth/article/Rue-66-French-ye-ye-now-S-F-pop-music-4407252.php) — press
- [Koolkat Musik](https://shop.koolkatmusik.com/mm5/merchant.mvc?Product_Code=Rue_66&Screen=PROD) — release credits and tracklists
- [DoTheBay](https://dothebay.com/artists/rue-66) — band bio, lineup
- The band's [YouTube channel](https://www.youtube.com/@rue6669) — the fifteen videos

Photographs are the band's own, several credited in-frame to **David Greenfield**.
Get permission sorted before this goes anywhere commercial.
