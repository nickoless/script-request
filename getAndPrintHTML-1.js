var https = require('https');

function getAndPrintHTMLChunks(input, input2){

var requestOptions = {
  host: input,
  path: input2
};

https.get(requestOptions, function(response) {
  response.setEncoding('utf8');
  response.on('data', function(data) {
    console.log('\n');
    console.log('[-- New Chunk, length: ' + data.length + ' --]');
    console.log('\n');
    console.log(data.toString());
  });

  response.on('end', function() {
    console.log('[ -- Response stream complete. --]');
  });
});
}

console.log(getAndPrintHTMLChunks('sytantris.github.io', '/http-examples/step1.html'));