const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

module.exports = (env, argv) => ({
	// This is necessary because Figma's 'eval' works differently than normal eval
	devtool: argv.mode === 'production' ? false : 'inline-source-map',

	entry: {
		ui: './src/ui/ui.ts', // The entry point for your UI code
		code: './src/code.ts' // The entry point for your plugin code
	},

	module: {
		rules: [
			// Converts TypeScript code to JavaScript
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					appendTsSuffixTo: [/\.vue$/]
				}
			},

			// Enables including CSS by doing "import './file.css'" in your TypeScript code
			{ test: /\.css$/, loader: [{ loader: 'style-loader' }, { loader: 'css-loader' }] },
			{
				test: /\.styl(us)?$/,
				loader: 'style-loader!css-loader!stylus-loader'
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader',
						options: {
							implementation: require('sass')
						}
					}
				]
			},

			{
				test: /\.pug$/,
				loader: 'pug-plain-loader'
			},

			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},

			// svg 加载
			{
				test: /\.svg$/,
				exclude: path.resolve(__dirname, 'src/ui/assets/icons')
			},
			{
				test: /\.svg$/,
				loader: 'svg-sprite-loader',
				include: path.resolve(__dirname, 'src/ui/assets/icons'),
				options: { extract: false }
			},

			// Allows you to use "<%= require('./file.svg') %>" in your HTML code to get a data URI
			{ test: /\.(png|jpg|gif|webp)$/, loader: [{ loader: 'url-loader' }] }
		]
	},

	// Webpack tries these extensions for you if you omit the extension like "import './file'"
	resolve: { extensions: ['.tsx', '.ts', '.jsx', '.js'] },

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist') // Compile into a folder called "dist"
	},

	// Tells Webpack to generate "ui.html" and to inline "ui.ts" into it
	plugins:
		argv.mode === 'production'
			? [
				new VueLoaderPlugin(),
				new RemovePlugin({
					after: { include: ['dist/ui.js'] }
				}),
				new HtmlWebpackPlugin({
					template: './src/ui/ui.html',
					filename: 'ui.html',
					inlineSource: '.(js|css|scss|stylus|styl)$',
					chunks: ['ui']
				}),
				new HtmlWebpackInlineSourcePlugin(),
				new SpriteLoaderPlugin({ plainSprite: true })
			]
			: [
				new VueLoaderPlugin(),
				new HtmlWebpackPlugin({
					template: './src/ui/ui.html',
					filename: 'ui.html',
					inlineSource: '.(js|css|scss|stylus|styl)$',
					chunks: ['ui']
				}),
				new HtmlWebpackInlineSourcePlugin(),
				new SpriteLoaderPlugin({ plainSprite: true })
			]
});
