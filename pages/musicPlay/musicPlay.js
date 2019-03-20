// pages/musicPlay/musicPlay.js
const myMusic = wx.createInnerAudioContext()
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 单签播放音乐状态
    musicState: {
      loop: false,
      volume: 0,
      firstStart: true,
      autoplay: false,
      willPlayState: true,
      rotateDeg: 0
    },
    // 当前播放音乐信息
    musicInfo: {
      index: 0,
      advartar: 'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=e9c41cdaaac379317d68812fd3ffd078/b90e7bec54e736d1be1a52d49e504fc2d46269e5.jpg',
      author: '周杰伦',
      musicName: '十二新作-明明就',
      musicUrl: 'http://111.202.98.145/amobile.music.tc.qq.com/C400001bbvdB0LyKXC.m4a?guid=2235080482&vkey=23608A8B4B8CDC3705C432B010FBF01F2E3206E34E36DE64B61A148463472066AF59E91378FA1056BB7A9F907EF83BF0819C26B5B351D48A&uin=0&fromtag=66',
      startTime: '00:00',
      duration: '04:15',
      currentSeconds: 0,
      durationSeconds: 255
    }, 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log('this.route', this.route)
    // console.log('this.options', options)
    // 从 url query 中获取当前应当播放的歌曲信息
    for (var key in options) {
      options[key] = decodeURIComponent(options[key])
    }
    this.setData({
      musicInfo: options
    })

    myMusic.src = this.data.musicInfo.musicUrl;
    myMusic.autoplay = this.data.musicState.autoplay;
    myMusic.onPlay(() => {
      console.log('开始播放')

    })
    myMusic.onError((res) => {
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
    console.log('this.data.musicInfo', this.data.musicInfo)
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
    // 滑块变化 拖拽 对音乐进行改变
    myMusic.seek(e.detail.value)
  },
  changeAnotherMusic: function(e) {
    var that = this
    // 替换音乐 变化音乐状态 重置  播放按钮直接开始 
    // 确定播放音乐的方向
    var direction = e.currentTarget.dataset.musicDirection
    console.log('direction~~~~~~', direction)
    var nowIndex = parseInt(this.data.musicInfo.index)
    var nextIndex = nowIndex
    // 判断是上一首歌曲还是下一首歌曲
    if (direction == 'after') {
      nowIndex === 3 ? nextIndex = 0 : nextIndex = nowIndex + 1
    } else {
      nowIndex === 0 ? nextIndex = 3 : nextIndex = nowIndex - 1
    }
    var nextMusicInfo = app.globalData.musicList[nextIndex]
    // console.log('nextMusicInfo~~~~~', app.globalData.musicList)
    // console.log('nextMusicInfo~~~~~', nextMusicInfo)
    // console.log('nowIndex~~~~~', nowIndex)
    // console.log('nextIndex~~~~~', nextIndex)
    var nextMusicState = {
      loop: false,
      autoplay: false,
      willPlayState: false,
      rotateDeg: 0
    }
    this.setData({
      musicState: nextMusicState,
      musicInfo: nextMusicInfo
    })
    myMusic.pause()
    that.data.timer && clearInterval(that.data.timer)
    // 音乐 ur 替换成下一首歌曲
    myMusic.src = this.data.musicInfo.musicUrl;
    myMusic.play()
    that.data.timer && clearInterval(that.data.timer)
    that.data.timer = setInterval(() => {
      var rotateDeg = that.data.musicState.rotateDeg + 0.4
      that.setData({
        'musicState.rotateDeg': rotateDeg
      })
    }, 35)
    console.log('next music info', this.data)
  },
  changePlayState: function () {
    // 播放按钮之后文字改变及按钮变化
    var that = this
    myMusic.title = this.data.musicInfo.musicName
    myMusic.epname = this.data.musicInfo.musicName

    // 按钮表示 将来的状态 一开始进入页面 默认不播放
    // 第一次按键 按钮由 播放 => 暂停 调用 play()方法
    // 第二次按键 按钮由 暂停 => 播放 调用 pause()方法
    // 第三次按键 按钮由 播放 => 暂停 调用 play()方法

    if (this.data.musicState.willPlayState === false) {
      // 更改播放按钮
      this.setData({
        'musicState.willPlayState': true
      })
      // 更改音乐播放状态 变成暂停
      myMusic.pause()
      that.data.timer && clearInterval(that.data.timer)
    } else if (this.data.musicState.willPlayState === true) {
      // 更改播放按钮
      this.setData({
        'musicState.willPlayState': false
      })
      // this.setData({
      //   willPlayState: false,
      // })
      // 更改音乐播放状态 变成播放
      myMusic.play()
      that.data.timer && clearInterval(that.data.timer)
      that.data.timer = setInterval(() => {
      var rotateDeg = that.data.musicState.rotateDeg + 0.8
      that.setData({
        'musicState.rotateDeg': rotateDeg
        })
      }, 35)
    }
    myMusic.onTimeUpdate(() => {
      // 音乐播放过程中 滚动条变化 以及 播放时间变化
      var currentSeconds = parseInt(myMusic.currentTime)
      var duration = myMusic.duration
      var minutes = Math.floor(currentSeconds / 60)
      var seconds = currentSeconds % 60
      minutes < 10 ? minutes = '0' + minutes : minutes = minutes
      seconds < 10 ? seconds = '0' + seconds : seconds = seconds
      var startTime = minutes + ':' + seconds
      // console.log('startTime', startTime)

      that.setData({
        "musicInfo.startTime": startTime, // 滑块进度
        "musicInfo.currentSeconds": currentSeconds // 时间文字
      })
      // console.log('this.data.currentTime', this.data.musicInfo.startTime)
    })
    myMusic.onEnded(() => {
      // 播放结束 切换下一首
      var nowIndex = parseInt(this.data.musicInfo.index)
      var nextIndex
      nowIndex === 3 ? nextIndex = 0 : nextIndex = nowIndex + 1
      var nextMusicInfo = app.globalData.musicList[nextIndex]
      var nextMusicState = {
        loop: false,
        autoplay: true,
        willPlayState: false,
        rotateDeg: 0
      }
      this.setData({
        musicState: nextMusicState,
        musicInfo: nextMusicInfo
      })
      myMusic.pause()
      that.data.timer && clearInterval(that.data.timer)
      // 音乐 ur 替换成下一首歌曲
      myMusic.src = this.data.musicInfo.musicUrl;
      myMusic.play()
      that.data.timer && clearInterval(that.data.timer)
      that.data.timer = setInterval(() => {
        var rotateDeg = that.data.musicState.rotateDeg + 0.4
        that.setData({
          'musicState.rotateDeg': rotateDeg
        })
      }, 35)
      console.log('next music info', this.data)
      // this.setData({
      //   "musicState.startTime": '00:00',
      //   "musicState.currentSeconds": 0,
      //   "musicState.willPlayState": '播放'
      // })
    })
  }
})