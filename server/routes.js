const webpack = require('webpack');
const path = require('path');
const express = require('express');

/**
 * An express-style development middleware 
 * for use with webpack bundles and allows 
 * for serving of the files emitted from webpack. 
 * This should be used for development only.
**/
const webpackDevMiddleware = require('webpack-dev-middleware');
/** 
 * Webpack hot reloading using only webpack-dev-middleware. 
 * This allows you to add hot reloading into an existing 
 * server without webpack-dev-server.
**/
const webpackHotMiddleware = require('webpack-hot-middleware');

// load webpack config
const webpackConfig = require(path.join(process.cwd(), 'webpack.config.js'))

const webpackCompiler = webpack(webpackConfig);


module.exports = (app) => {
	// static folder
	app.use(express.static(path.join(process.cwd(), 'public')))
	// add webpack dev middleware
	app.use(webpackDevMiddleware(webpackCompiler, {
		publicPath: webpackConfig.publicPath,
		hot: true,
		stats: true
	}))
	// add webpack hot middleware
	app.use(webpackHotMiddleware(webpackCompiler))


	app.get('*', (req, res, next) => {
		res.sendFile(path.join(process.cwd(), 'public/index.html'))
	})
}