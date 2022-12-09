const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.js',  
  output: { 
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: './images/[name].[ext]',
  },
	plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
	optimization: {
    minimizer: [
      new TerserPlugin({}),
    ],
  },
  module: {
    rules: [
			{
        test: /\.(js|mjs|jsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
            },
          },
        ],
      },
			{
        test: /\.(scss|sass|css)$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
					'sass-loader',
        ],
      },
			{
				test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
				type: 'asset/resource'
			},
      {
        test: /\.(js|mjs|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      }
    ]
  },
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
			watch: true,
		},
		open: true,
		port: 3000,
	}
}