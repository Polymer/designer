
var dependencies = [
  'bower_components/imd/imd.js',
  'src/dom-utils/dom-utils.js',
  'src/path/path.js',
  'src/css/css.js',
  'src/dragging/dragging.js',
  'src/commands/commands.js',
  'src/commands/CommandApplier.js',
  'src/commands/DomCommandApplier.js',
  'src/protocol/Request.js',
  'src/async/async.js',
  'src/text/PositionWalker.js',
  'src/text/CursorManager.js',
  'src/protocol/ServerConnection.js',
  'src/protocol/DocumentServer.js',
];

var preamble = '(() => {\n';

var postamble = 'define(["polymer-designer/protocol/ServerConnection", ' +
        '"polymer-designer/protocol/DocumentServer"], ' +
        '(ServerConnection, DocumentServer) => {\n' +
    '  "use strict";\n' +
    '  window.Polymer = { dom: "shadow" };\n' +
    '  var connection = new ServerConnection(window);\n' +
    '  new DocumentServer(connection);\n' +
    '});\n' +
    '})();';

function buildFrameScript(files) {
  return  preamble + files.join('\n') + postamble;
}

module.exports = {
  dependencies: dependencies,
  buildFrameScript: buildFrameScript,
  postamble: postamble,
  preamble: preamble,
};
