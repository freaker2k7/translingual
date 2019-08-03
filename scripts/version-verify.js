const fs = require('fs');


if (fs.existsSync('README.md')) {
	var package = fs.readFileSync('package.json');
	var readme_data = fs.readFileSync('README.md');
	var dockerfile_data = fs.readFileSync('Dockerfile');
	
	
	package = JSON.parse(package);
	readme_data = readme_data.toString().replace(/@\d+\.\d+\.\d+/, '@' + package.version);
	dockerfile_data = dockerfile_data.toString().replace(/@\d+\.\d+\.\d+/, '@' + package.version);
	
	fs.writeFileSync('README.md', readme_data);
	fs.writeFileSync('Dockerfile', dockerfile_data);
}