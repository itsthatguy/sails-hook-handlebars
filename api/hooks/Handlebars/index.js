var path = require('path');
var fs = require('fs');
var hb = require('handlebars');

var BASE_TEMPLATE_PATH = path.join(process.cwd(), 'assets', 'templates');

module.exports = function Handlebars(sails) {
  return {
    render: function(filepath, data) {
      var fileContents = getFile(filepath);
      return compile(fileContents, data);
    }
  };

  function getFile(filepath) {
    if (!path.extname(filepath)) { filepath += '.hbs'; }
    return fs.readFileSync(path.join(BASE_TEMPLATE_PATH, filepath), 'utf-8');
  }

  function compile(fileContents, data) {
    template = hb.compile(fileContents);
    return template(data);
  }
};

