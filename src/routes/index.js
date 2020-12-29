const routes = [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/',
        redirect: '/privacy-policy',
      },
      {
        path: '/',
        component: '../layouts/PolicyLayout',
        routes: [
          {
            path: '/privacy-policy',
            component: './policy/privacyPolicy',
          },
        ],
      },
      {
        path: '/exception',
        component: '../layouts/ExceptionLayout',
        routes: [
          { path: '/exception/403', title: '无权限', component: './exception/403' },
          { path: '/exception/500', title: '服务器出错了', component: './exception/500' },
        ],
      },
      { component: '404', title: '页面没找到' },
    ],
  },
];

module.exports = routes;
