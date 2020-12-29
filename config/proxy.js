export default {
  dev: {
    '/beelab/bi/staging': {
      target: 'http://console.micsql.pt.intl.miui.com',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
};
