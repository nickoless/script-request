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




module.exports.getHTML = getHTML;
