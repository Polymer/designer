'use strict';

let dom5 = require('dom5');
let parse5 = require('parse5');
let project = require ('../../src/server/project.js');

suite('project.js', () => {

  test('generateTemplateDocument', () => {
    let doc = parse5.parse('<html><body><template>Foo</template></body></html>');
    // console.log(doc);

    project.addSourceIds(doc);
    // console.log(serializer.serialize(doc));

    project.generateTemplateDocument(doc, '4');
  });


});
