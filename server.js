var express = require('express');
var cors = require('cors');
var path = require('path');
var path = require('path');
var sass = require('node-sass');
var fs = require('fs');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(function (error, req, res, next) {
  if (error instanceof SyntaxError) {
    res.json({ error: 'Could Not Parse JSON Body. '+ error.message });
  } else {
    next();
  }
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('port', process.env.PORT || 3000);

///////////////////////////
// KICK OFF EXPRESS SERVER
///////////////////////////

function processSass(body, cb) {
  // Salesforce Design System Tokens
    var data = '@import "salesforce-design-system/scss/design-tokens.scss";\n';
    console.log('body.designFile ' + body.designFile);
    // Override token values here:
    var tokensToOverride = body.tokensToOverride;
    for(var name in tokensToOverride) {
    	data += name +':'+tokensToOverride[name]+';\n';
    }
    // Salesforce Design System
    data += '@import "salesforce-design-system/scss/'+body.designFile+'";';

    sass.render({
        data: data
    }, function(err, result) {
    	if (err) {
        	console.log(err);
        	return cb({css: '#Error Processing!' + err.message});
        } else {
        	cb({css: result.css.toString()});
        }

    });
}

app.use(express.static(path.resolve(__dirname, 'www')));

app.get('/download/*.css', function(req, res){
	//use a different endpoint like: /download (instead of /custom-styles/) so we can handle intercept app.get and do things like: return file as downloadable file, and delete the file etc.
  var filePath = req.path.replace('/download/', __dirname+'/www/custom-styles/');
  res.download(filePath); // Set disposition and send it.
  //delete file after 60 secs
  setTimeout(function(){
	  fs.unlinkSync(filePath);

  },60000);
});

app.post('/download', function(req, res){
	console.log('in download');
    processSass(req.body, function(result) {
    	var timestamp = new Date().getTime();
        var publicPath = '/custom-styles/custom-slds-' + timestamp + '.css';
        var filePath = __dirname + '/www' + publicPath;
        console.log(filePath);
        fs.writeFile(filePath, result.css, function(err) {
            if (err) {
            	console.log(err.message);
                return res.send(err);
            }
            res.send({file: publicPath.replace('custom-styles', 'download')}); // Set disposition and send it
        });
  	})
});

app.post('/override', function(req, res) {
  	processSass(req.body, function(result) {
  		res.send(result);
  	})
});


var server = app.listen(app.get('port'), function() {
    var host = server.address().address;
    var port = server.address().port;
    console.info('Express: listening on ' + port);
});

module.exports = app;