// pages/audio/audio.js
const innerAudioContext = wx.createInnerAudioContext()
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loop: false,
    volume: 0,
    startTime: '00:00',
    duration: '04:15',
    currentSeconds: 0,
    durationSeconds: 255,
    firstStart: true,
    autoplay: false,
    willPlayState: '播放',
    title: '明明就',
    src: 'http://111.202.85.146/amobile.music.tc.qq.com/C400000oW8J53xPhZA.m4a?guid=2235080482&vkey=84C0966A4AD0FF17B9F3B84FD54BE6464F87342BFF21E8B732522BFD16F0429134BC3A1B12960D9D570EB81F177C9F8E717F8FAC27DBC05B&uin=0&fromtag=66',
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 加载播放器的初始状态及数据
    innerAudioContext.src = this.data.src
    innerAudioContext.autoplay = this.data.autoplay
    innerAudioContext.onPlay(() => {
      console.log('开始播放')

    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  sliderChange: function(e) {
    // 拖动滑块 音乐进行跳转
    // console.log('slider change e', e.detail)
    innerAudioContext.seek(e.detail.value)
  },
  goPrevious: function(e) {
    innerAudioContext.seek(this.data.currentSeconds - 15)
  },
  goAfter: function (e) {
    innerAudioContext.seek(this.data.currentSeconds + 15)
  },
  changePlayState: function() {
    var that = this
    innerAudioContext.title = '明明就'
    innerAudioContext.epname = '明明就'

    // 按钮表示 将来的状态 一开始进入页面 默认不播放
    // 第一次按键 按钮由 播放 => 暂停 调用 play()方法
    // 第二次按键 按钮由 暂停 => 播放 调用 pause()方法
    // 第三次按键 按钮由 播放 => 暂停 调用 play()方法

    if (this.data.willPlayState === '暂停') {
      // 更改播放按文字 
      this.setData({
        willPlayState: '播放',
      })
      // 更改音乐播放状态
      innerAudioContext.pause()
    } else if (this.data.willPlayState === '播放') {
      // 更改播放按文字 
      this.setData({
        willPlayState: '暂停',
      })
      // 更改音乐播放状态
      innerAudioContext.play()
    }
    
    // 此时开始监听音乐播放状态
    innerAudioContext.onTimeUpdate(() => {
      // 音乐播放过程中 滚动条变化 以及 播放时间变化
      var currentSeconds = parseInt(innerAudioContext.currentTime)
      var duration = innerAudioContext.duration
      var minutes = Math.floor(currentSeconds / 60)
      var seconds = currentSeconds % 60
      minutes < 10 ? minutes = '0' + minutes : minutes = minutes
      seconds < 10 ? seconds = '0' + seconds : seconds = seconds
      var startTime = minutes + ':' + seconds
      // console.log('startTime', startTime)

      that.setData({
        startTime: startTime, // 滑块进度
        currentSeconds: currentSeconds // 时间文字
      })
    })
    innerAudioContext.onEnded(() => {
      // 播放结束 回归初始状态
      this.setData({
        startTime: '00:00',
        currentSeconds: 0,
        willPlayState: '播放'
      })
    })
  }
})