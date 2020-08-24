const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

async function getConfig() {
	return {
		entry: './dev/common.js',
		watch: false,
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: 'bundle.js'
		},
		module: {
			rules: [
				{ 
					test: /\.styl$/, 
					use: [
						{
							loader: MiniCssExtractPlugin.loader
						},
						{
							loader: 'css-loader',
							options: {
								url: true,
							},
						},
						{
							loader: 'stylus-loader'
						},
					] 
				},
				{
					test: /\.(png|jpe?g|gif)$/i,
					use: [
						{
							loader: 'file-loader',
							options: {
								outputPath: 'images',
								name: '[name].[ext]'
							},
						},
					],
				},
				{
					test: /\.(woff(2)?|ttf|otf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
								outputPath: 'fonts/'
							}
						}
					]
				},
				{
					test: /\.js?$/,
					use: [
						{
							loader: 'babel-loader'
						}
					]
				},

			]
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: '[name].css',
				chunkFilename: '[id].css',
			}),
			new HtmlWebpackPlugin({
				template: `./public/index.html`,
			}),
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery'
			})
		],
		devServer: {
			contentBase: path.join(__dirname, 'build'),
			port: 8080
		}
	}
}

module.exports = async () => await getConfig();