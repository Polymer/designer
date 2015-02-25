# designer2
A UI Designer for Polymer

## Building

We use browserify to make parse5 available in the browser. When updating
parse5 run, run:

    browserify src/parse5/parse5_modulate.js -o src/parse5/parse5.js

## Browser Support

Designer uses some very new browser APIs like `Document.elementsFromPoint`
that are only available in Chrome Canary.

We will work to build rough polyfills and/or use vendor prefixed
versions like `msElementsFromPoint`. Until then, Designer requires
Chrome Canary.

The pages and components edited by Designer can run in any browsers that they
support, that is, you could edit a page that targets legacy browsers like IE5.
