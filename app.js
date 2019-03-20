// app.js
App({
  onLaunch: function() {
    console.log('App onLaunch start')
    // setTimeout(function() {
    //   getCurrentPages()[0].showMessage()
    // }, 2000)
    // 本地存储功能
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录过程
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // console.log('登陆成功 \n' + res.errMsg + '\n' + res.code)
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 表示已经授权, 可以直接调用 getUserInfo 获取头像昵称, 不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送你给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              this.globalData.res = res
              // console.log('登录成功 用户信息', this.globalData.userInfo)
              // console.log('this.globalData.res', this.globalData.res)
        
              // 考虑 getUserInfo 是网络请求, 可能在 Page.onLoad 之后返回
              // 所以此处加入 callback 防止该情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow: function() {
    // console.log('App onShow start')
  },
  onHide: function () {
    // console.log('App onHide start')
  },
  onError: function () {
    console.log('App onError start')
  },
  onPageNotFound: function () {
    // console.log('App onPageNotFound start')
    wx.redirectTo({
      url: 'pages/swiper/swiper'
    }) // 如果是 tabbar 页面，请使用 wx.switchTab
  },
  globalData: {
    userInfo: null,
    res: null,
    appId: 'wxdde1461f6e2986cd',
    appSecret: '6bed658ef0695b4bcb46397f6e19e37a',
    grant_type: 'authorization_code',
    startDate: '2000-01-01',
    musicList: undefined
  }
})