'use strict';

let dom5 = require('dom5');
let parse5 = require('parse5');
let project = require ('../../src/server/project.js');

let parser = new parse5.Parser();
let serializer = new parse5.Serializer();

suite('project.js', () => {

  test('generateTemplateDocument', () => {
    let doc = parser.parse('<html><body><template>Foo</template></body></html>');
    // console.log(doc);

    project.addSourceIds(doc);
    // console.log(serializer.serialize(doc));

    project.generateTemplateDocument(doc, '4');
  });


});
