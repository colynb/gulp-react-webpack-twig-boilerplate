var _ = require('lodash');
var path = require('path');
var fs = require('fs');

module.exports = function(file) {
  var pagePath = path.join(__dirname, path.basename(file.path, '.twig'))
  return _.assign(
    JSON.parse(fs.readFileSync(pagePath + '.json')),
    JSON.parse(fs.readFileSync(path.join(__dirname, 'site.json'))));
}
