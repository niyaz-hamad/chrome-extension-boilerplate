import common from './webpack.common.mjs';
import { merge } from 'webpack-merge';

export default merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
});
