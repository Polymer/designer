designer-selection
==================

`designer-selection` renders a UI for manipulating a graphical element in a graphics-editor style application. It consists of a bounding rectangle, and a configurable set of resize handles.

`designer-selection` listens to mouse events so that it can be moved, but it doesn't move itself, instead it fires `designer-selection-resize` events so that the embedding program can choose how to respond to movements and resizes.

Demo
----

See [The demo](demo.html) for an example that just moves the selection to wherever it requests.
