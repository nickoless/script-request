var https = require('https');

function getAndPrintHTMLChunks(input, input2){

var requestOptions = {
  host: input,
  path: input2
};

https.get(requestOptions, function(response) {
  response.setEncoding('utf8');
  response.on('data', function(data) {
    console.log(data.toString() + '\n');
  });
});

}

getAndPrintHTMLChunks('sytantris.github.io', '/http-examples/step1.html');