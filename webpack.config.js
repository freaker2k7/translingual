const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'translingual.min.js',
		library: 'Trans',
		libraryTarget: 'umd',
		umdNamedDefine: true
	}
};