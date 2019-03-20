// pages/musicList/musicList.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navigateUrl: '',
    swiper: {
      imgUrls: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553019299780&di=36247241dff558fcf383c4bdc1a76718&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201512%2F11%2F20151211051727_Ve3zk.jpeg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553019463275&di=e434d26fe9e152a1354ba8841132e67c&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F9fo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F500fd9f9d72a6059e7775a052834349b033bba4e.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553019616991&di=9b1b3c1737f02ec8d559b112435fa646&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201412%2F24%2F20141224021045_dMrCx.jpeg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553019683526&di=8ec763e842be4a25d9c3ab0371e5c9b0&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-4o3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F96dda144ad345982dedcd1020df431adcaef84cf.jpg'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 4000,
      duration: 2000,
    },
    scrollPage: [
      {
        index: 0,
        advartar: 'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=e9c41cdaaac379317d68812fd3ffd078/b90e7bec54e736d1be1a52d49e504fc2d46269e5.jpg',
        author: '周杰伦',
        musicName: '十二新作-明明就',
        musicUrl: 'http://111.202.98.145/amobile.music.tc.qq.com/C400001bbvdB0LyKXC.m4a?guid=2235080482&vkey=23608A8B4B8CDC3705C432B010FBF01F2E3206E34E36DE64B61A148463472066AF59E91378FA1056BB7A9F907EF83BF0819C26B5B351D48A&uin=0&fromtag=66',
        startTime: '00:00',
        currentSeconds: 0,
        duration: '04:15',
        durationSeconds: 255,
        autoPlay: false,
        willPlayState: true
      }, {
        index: 1,
        advartar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553618316&di=7b862435ed17c3c8d6bd02f0e78030a1&imgtype=jpg&er=1&src=http%3A%2F%2Fi.gtimg.cn%2Fqqlive%2Fimg%2Fjpgcache%2Ffiles%2Fqqvideo%2F9%2F9dlcjs4slnbxku3.jpg',
        author: '周杰伦',
        musicName: '电影原声带-不能说的秘密',
        musicUrl: 'http://111.202.98.143/amobile.music.tc.qq.com/C400003IDh0K44WFNG.m4a?guid=2235080482&vkey=4AFA24EEA744DCDC00E3335C1B8219588DE19E37BBDB11F328934B5CD19F7D347815A58508E3E25713D532CC483725BEC64983BDEA7AA178&uin=0&fromtag=66',
        startTime: '00:00',
        currentSeconds: 0,
        duration: '04:57',
        durationSeconds: 297,
        autoPlay: false,
        willPlayState: true
      }, {
        index: 2,
        advartar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553024099266&di=7ac3a61708cedd6208b6a99b4e99cdca&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171107%2F4c68f4722b904bed8e6cab4d87eed761.jpeg',
        author: '周杰伦',
        musicName: '跨时代-雨下一整晚',
        musicUrl: 'http://111.202.98.160/amobile.music.tc.qq.com/C4000048olTf3AzSSl.m4a?guid=2235080482&vkey=4DB4F06DA28512E84192BA6B4DA94CBA23E8A1BBB3AC6F6E5586CF19F7921A496ECCBB55AF312E1F9A1516B305F0FE829C76DA6F0AEA73DD&uin=0&fromtag=66',
        startTime: '00:00',
        currentSeconds: 0,
        duration: '04:13',
        durationSeconds: 253,
        autoPlay: false,
        willPlayState: true
      }, {
        index: 3,
        advartar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553024211973&di=45f6d88ce97f89c24df0f4554af27a3f&imgtype=0&src=http%3A%2F%2Fm.360buyimg.com%2Fn12%2Fjfs%2Ft490%2F321%2F1028849678%2F297261%2F226c4de9%2F54a697f0N3f847f88.jpg%2521q70.jpg',
        author: '周杰伦',
        musicName: '哎呦不错哦-美人鱼',
        musicUrl: 'http://111.202.98.147/amobile.music.tc.qq.com/C400001XPgTm3faHRb.m4a?guid=2235080482&vkey=5340DA192343B63B8AA45EBF81EE1B1AFBE1EE99E39599CC3D13A9A11C45394E52591987C96EF95DF845C1F5DA0BF15B2137E3F920C38BED&uin=0&fromtag=66',
        startTime: '00:00',
        currentSeconds: 0,
        duration: '03:19',
        durationSeconds: 219,
        autoPlay: false,
        willPlayState: true
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  /**
   * 用户在歌单列表点击 跳转到播放页面
   */
  playMusicNow: function(e) {
    // 将所有音乐信息 存储到全局
    app.globalData.musicList = this.data.scrollPage
    console.log('app.globalData.musicList', app.globalData.musicList)
    // 将当前音乐信息存储到 url query 查询歌曲信息
    var url = '?'
    var musicInfoObject = e.currentTarget.dataset.musicInfo
    for (var key in musicInfoObject) {
      url += key + '=' + encodeURIComponent(musicInfoObject[key]) + "&"
    }
    // console.log('urlllllll', url)
    wx.navigateTo({
      url: '../musicPlay/musicPlay' + url
    })
  }
})