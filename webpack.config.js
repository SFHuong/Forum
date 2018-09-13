const path = require('path');
const webpack = require('webpack');


module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	entry: [
		'webpack-hot-middleware/client',
		path.resolve(path.join(__dirname, 'client/index.js'))
	],
	output: {
		path: path.resolve(path.join(__dirname, 'public')),
		publicPath: '/public/',
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
		new webpack.NoEmitOnErrorsPlugin(),
	],
	resolve: {
		extensions: ['*', '.js', 'jsx']
	}
}