//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    // array: [1, 2, 3, 4, 5],
    checkLogTimes: 0,
    // array: [{ msg: ' and u ?' }, { msg: ' I love u' }],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  showMessage() {
    console.log('this.data object', this.data)
  },
  bindViewTap: function() {
    // 不能直接修改 this.data.clickTimes 要用 this.setData 对 值进行修改
    // 或者 可以修改 this.data 之后马上用 setData 设置一下修改了的字段
    // this.data.clickTimes ++;
    this.setData({
      checkLogTimes: this.data.checkLogTimes+1
    })
    console.log('Check logs times', this.data.checkLogTimes)
    wx.redirectTo({
      url: '/pages/audio/audio'
    }) // 如
    // wx.navigateTo({
    //   // 跳转到 navigate 页面
    //   url: '../scrollPage/scrollPage',
    // })
    // wx.navigateTo({
    //   //  保留当前页面 返回键可以回到原页面
    //   url: '../logs/logs'
    // })
    // wx.redirectTo({
    //   // 不保留当前页面 不存在返回键可以回到原页面
    //   url: '../logs/logs'
    // })
  },
  onLoad: function (options) {
    console.log('Page is onLoad now ~ options', options)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShow: function () {
    console.log('Page is onShow now ~')
  },
  onHide: function() {
    console.log('Page is onHide now ~')
  },
  onPageScroll: function () {
    console.log('Page is onPageScroll now ~')
  },
  onReachBottom: function () {
    console.log('Page is onReachBottom now ~')
  },
  onTabItemTap: function (item) {
    console.log('Page is onTabItemTap now ~')
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
