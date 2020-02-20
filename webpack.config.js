// //--------------------------------------------------------------
// // WEBPACK CONFIG
// //
// // @author Rich Edmunds
// //--------------------------------------------------------------
// const defaultConfig = require('@wordpress/scripts/config/webpack.config');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Extract CSS into separate files.
// const pathSource = './styles';

// module.exports = {
//   ...defaultConfig,
//   entry: {
//     ...defaultConfig.entry,
//     admin: `${pathSource}/admin.js`,
//   },
//   module: {
//     // https://webpack.js.org/loaders/
//     rules: [
//       ...defaultConfig.module.rules,
//       {
//         test: /\.(scss|css)$/,
//         use: [
//           MiniCssExtractPlugin.loader,
//           {
//             loader: 'css-loader', // https://webpack.js.org/loaders/css-loader/
//             options: {
//               sourceMap: true,
//               importLoaders: 1, // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
//               url: false,
//             },
//           },
//           {
//             loader: 'postcss-loader', // https://webpack.js.org/loaders/postcss-loader/.
//             options: {
//               sourceMap: true,
//             },
//           },
//           {
//             loader: 'sass-loader',
//             options: {
//               sourceMap: true, // https://github.com/webpack-contrib/sass-loader#source-maps
//               outputStyle: 'compact', // https://github.com/sass/node-sass#outputstyle.
//             },
//           },
//         ],
//       },
//     ],
//   },
//   plugins: [
//     ...defaultConfig.plugins,
//     new MiniCssExtractPlugin({filename: 'styles/[name].css'}), // https://github.com/webpack-contrib/mini-css-extract-plugin
//   ],
// };
