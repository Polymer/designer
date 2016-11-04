# Polymer Designer

Polymer Designer is a UI Designer for HTML, Custom Elements, and Polymer.

## Status

This is a complete, from-scratch, rewrite of Polymer Designer in Polymer 1.0,
sometimes referred to as Designer 2. It it not yet usable, and currently only
allows basic editing of some hard-coded demos. Don't expect too much.

We've moved the Designer 2 source into the master branch because we are no
longer maintaining Designer 1. If you're looking for the Designer 1 source, it's
still available in the designer1 branch.

## Developing

  * Install global dependencies

        $ npm install -g bower
        $ npm install -g gulp

  * Install Bower and npm Dependencies:

        $ bower install
        $ npm install

  * Build and run the desktop app in Electron

        $ gulp electron
        $ npm run electron

  * Build and run the browser app with the local server:

        $ gulp browser
        $ npm start

    Navigate Chrome Canary to [localhost:8080/]() to see the demo interface.

## Tests

Tests are run with [Web Component Tester](https://github.com/Polymer/web-component-tester).

Install the `wct` command line tool with npm:

    $ npm install -g web-component-tester

Then run `wct` from the designer project folder:

    $ wct

## Browser Support

Designer uses some very new browser APIs like `Document.elementsFromPoint`
as well as some ECMAScript 6 features like classes, enhanced object literals,
template strings, etc., that are available in very recent versions of Chrome and
other browsers. Designer works best in Chrome for now, but ultimately will
support all evergreen browsers.

The pages and components edited by Designer can run in any browsers that they
support, that is, you could edit a page that targets legacy browsers like IE5.
