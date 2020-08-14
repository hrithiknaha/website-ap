const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
	mode: 'production',
	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[chunkhash].css'
		}),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				exclude: /(node_modules)/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			}
		]
	}
});
