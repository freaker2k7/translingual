const fs = require('fs');


if (fs.existsSync('README.md')) {
	var package = fs.readFileSync('package.json');
	var data = fs.readFileSync('README.md');
	
	
	package = JSON.parse(package);
	data = data.toString().replace(/@\d+\.\d+\.\d+/, '@' + package.version);
	
	fs.writeFileSync('README.md', data);
}