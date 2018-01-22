var https = require('https');

function getAndPrintHTMLChunks(opts){

  https.get(opts, function(response) {
    response.setEncoding('utf8');
    var chunks = '';
    response.on('data', function(data) {
      chunks += data;
      console.log(data);
    });
    response.on('end', function() {
      console.log("That's all folks!");
    });
  });
}

var opts = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

// function myCallback (data) {
//   console.log('my data:', data);
// }


getAndPrintHTMLChunks(opts);

