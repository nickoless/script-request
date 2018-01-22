var https = require('https');

function getHTML(opts, cb){

https.get(opts, function(response) {
      var chunks = "";

  response.setEncoding('utf8');
  response.on('data', function(data) {
    chunks += data;
  });
  response.on('end', function(){
    cb(chunks);
  });
});
}

var opts = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function printHTML (data) {
  console.log(data);
}

getHTML(opts, printHTML);