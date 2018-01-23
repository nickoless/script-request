var getHTML = require('./http-functions').getHTML;

function printHTML (data) {
  var split = data.split("");
  var flipIt = split.reverse();
  var result = flipIt.join("");
  console.log(result);
}

var opts = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(opts, printHTML);