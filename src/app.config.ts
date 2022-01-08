export default {
  pages: [
    'pages/index/index',
    'pages/category/index',
    'pages/recovery/index',
    'pages/car/index',
    'pages/user/index',
    'pages/search/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '嗨嗨妞',
    navigationBarTextStyle: 'black',
    navigationStyle: 'custom',
  },
  tabBar: {
    position: 'bottom',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        pagePath: 'pages/category/index',
        text: '分类'
      },
      {
        pagePath: 'pages/recovery/index',
        text: '换购'
      },
      {
        pagePath: 'pages/car/index',
        text: '购物车'
      },
      {
        pagePath: 'pages/user/index',
        text: '个人中心'
      },
    ]
  }
}
