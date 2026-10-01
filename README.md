# tuanmtran.github.io

Personal photography portfolio built with Vue 3 + TypeScript + Vite. Photo collections are
displayed as page-flip "flipbooks" using [flipbook-vue3](https://github.com/Gladesinger/flipbook-vue3).

## Project structure

- `src/data/galleries.ts` — list of galleries and their page image paths
- `src/views/HomeView.vue` — gallery grid landing page
- `src/views/GalleryView.vue` — flipbook viewer for a single gallery
- `public/galleries/<slug>/page-NN.jpg` — generated page images, served statically
- `vendor/flipbook-vue3` — vendored build of `@gladesinger/flipbook-vue3`, since the package is
  unpublished on npm. Installed as a local `file:` dependency in `package.json`.

## Adding a new photography collection

1. Put your source PDF anywhere, e.g. `photobooks/my-book.pdf`.
2. Convert it to page images:
   ```bash
   ./scripts/pdf-to-pages.sh photobooks/my-book.pdf my-book-slug
   ```
   This writes `public/galleries/my-book-slug/page-01.jpg`, `page-02.jpg`, etc.
   Requires `poppler-utils` (`pdftoppm`).
3. Add an entry to `src/data/galleries.ts`:
   ```ts
   {
     slug: 'my-book-slug',
     title: 'My Book',
     description: 'Optional description',
     cover: '/galleries/my-book-slug/page-01.jpg',
     pages: pageRange('my-book-slug', <page count>),
   }
   ```

## Development

```bash
npm install
npm run dev       # start dev server
npm run build     # type-check + production build
npm run preview   # preview the production build
```

## Credits

The flipbook component is [flipbook-vue3](https://github.com/Gladesinger/flipbook-vue3) by
[Gladesinger](https://github.com/Gladesinger), itself a Vue 3 port of
[flipbook-vue](https://github.com/ts1/flipbook-vue) by [ts1](https://github.com/ts1). Both are
MIT licensed; see `vendor/flipbook-vue3/LICENSE`.
