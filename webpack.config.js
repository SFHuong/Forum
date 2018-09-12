const path = require('path');
const webpack = require('webpack');


module.exports = {
	entry: path.resolve(path.join(__dirname, 'client/index.js')),
	output: {
		path: path.resolve(path.join(__dirname, 'build')),
		publicPath: '/build/',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: ['babel-loader'],
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	resolve: {
		extensions: ['*', '.js', 'jsx']
	}
}