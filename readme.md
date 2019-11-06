# DotCMS Edit Mode Anywhere Elements

In order to make DotCMS Edit Mode works we need to pass some data-attr in the HTML for containers and contentlets.

In this repo we provide two Web Components that will help you to pass those attributes very easy.

## Elements

We have two:

```html
<dotcms-ema-container container="{}">
  <dotcms-ema-contentlet contenlet="{}">
    <!--HERE GOES YOUR CONTENTLET-->
  </dotcms-ema-contentlet>
</dotcms-ema-container>
```

### Full documentation:

1. [dotcms-ema-container](./src/components/dotcms-ema-container/readme.md)
2. [dotcms-ema-contentlet](./src/components/dotcms-ema-contentlet/readme.md)

## StencilJS

This project was built with StencilJS for more information on how to run it check [this readme](./stencil-readme.md).
