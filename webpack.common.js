const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: './index.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'template.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-react',
							['@babel/preset-env', { targets: { node: '12' } }]
						]
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader']
			},
			{
				test: /\.(svg|png|jpg|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[hash].[ext]',
						outputPath: 'img'
					}
				}
			}
		]
	}
};
