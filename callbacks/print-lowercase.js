var getHTML = require('./http-functions').getHTML;

function printHTML (data) {
  console.log(data.toLowerCase());
}

var opts = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(opts, printHTML);

