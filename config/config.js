import path from 'path';
import pxToViewPort from 'postcss-px-to-viewport';
import pageRoutes from '../src/routes';

export default {
  dynamicImport: {
    loading: '@/components/PageLoading',
  },
  title: 'test',
  dll: false,
  hd: false,
  hardSource: false,
  locale: {
    default: 'en-US',
    antd: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  //   exportStatic: {},
  // 路由配置
  routes: pageRoutes,
  ignoreMomentLocale: true,
  lessLoader: {
    javascriptEnabled: true,
  },
  cssnano: {
    mergeRules: false,
  },
  targets: {
    android: 5,
    ios: 7,
    chrome: 58,
    ie: 9,
  },
  outputPath: './deploy/dist',
  hash: true,
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
  ssr: {},
  extraPostCSSPlugins: [
    pxToViewPort({
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
    }),
  ],
};
