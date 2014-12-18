var fs   = require('fs');

exports.mdParse = function findLinks(markdown, callback){
	var links = [];

	fs.readFile(markdown, 'utf8', function(err, data){
		if(err) console.error('Error reading file');
		var start = 0;
		var end   = 0;

		for(var i = 0; i < data.length; i++){
			if(data[i] === '('){
				start = i;
			}
			if(data[i] === ')'){
				end = i;
				links.push(data.substring(start + 1, end));
			}
		}
		return callback(links);
	}); 
}