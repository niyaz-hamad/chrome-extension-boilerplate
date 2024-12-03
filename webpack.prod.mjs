import common from './webpack.common.mjs';
import { merge } from 'webpack-merge';

export default merge(common, {
  mode: 'production',
});
