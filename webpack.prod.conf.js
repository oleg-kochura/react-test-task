const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');
// const extractCSSModules = new ExtractTextPlugin('stylesheets/[name]-two.css');
// const extractFonts = new ExtractTextPlugin('stylesheets/[name]-two.css');

const extractSCSSModules = new ExtractTextPlugin({
	filename: 'styles.css',
	disable: false,
	allChunks: true,
});

const extractSCSSGlobals = new ExtractTextPlugin({
	filename: 'global-styles.css',
	disable: false,
	allChunks: true,
});


module.exports = options => {
	return {
		entry: './src/index.js',
		output: {
			filename: './bundle.js',
		},
		module: {
			rules: [
				{
					test: /.js$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'babel-loader',
							options: {
								cacheDirectory: true,
							},
						},
					],
				},
				{
					test: /\.css$/,
					use: extractSCSSGlobals.extract({
						fallback: 'style-loader',
						use: [
							{ loader: "style-loader" },
							{ loader: "css-loader" },
						]
					})
				},
				{
					test: /^((?!\.global).)*scss$/,
					use: [
						{ loader: "style-loader" },
						{
							loader: 'css-loader',
							options: {
								modules: true,
								localIdentName: '[local]--[hash:base64:5]'
							}
						},
						{ loader: 'sass-loader', },
					]
				},
				{ test: /\.svg$/, loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]' },
				{ test: /\.woff$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]' },
				{ test: /\.woff2$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]' },
				{ test: /\.[ot]tf$/, loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]' },
				{ test: /\.eot$/, loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]' },
			],
		},
	}
};
