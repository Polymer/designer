# Polymer Designer

A UI Designer for HTML, Custom Elements, and Polymer.

## Status

This is a complete, from-scratch, rewrite of Polymer Designer in Polymer 0.8,
sometimes referred to as Designer 2. It it not yet usable, and currently only
allows basic editing of some hard-coded demos. Don't expect too much.

We've moved the Designer 2 source into the master branch because we are no
longer maintaining Designer 1. If you're looking for the Designer 1 source, it's
still available in the designer1 branch.

## Developing

  * Install Bower and npm Dependencies:

        bower install
        npm install

  * Build the vendored dependencies:

        npm run-script build

  * Start the local development server:

        npm start

  * Navigate Chrome Canary to `localhost:8080/` to see the demo interface.

  * All bower components are available at
    `localhost:8080/component/{component-name}/`

## Tests

designer2 does not use WCT *yet*. Tests are run individually by accessing a test
HTML file directly via a `/component/` URL, such as
[http://localhost:8080/component/polymer-designer/test/path/path_test.html]()

## Browser Support

Designer uses some very new browser APIs like `Document.elementsFromPoint`
that are only available in Chrome Canary, as well as some ECMAScript 6 features
like classes, enhanced object literals, template strings, etc., that are
available in Chrome Canary or very recent and preview versions of Firefox or IE.

We will work to build rough polyfills and/or use vendor prefixed
versions like `msElementsFromPoint`. Until then, Designer requires
Chrome Canary.

The pages and components edited by Designer can run in any browsers that they
support, that is, you could edit a page that targets legacy browsers like IE5.
