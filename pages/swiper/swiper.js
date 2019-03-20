// pages/swiper/swiper.js
Page({
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 5000,
    current: 0
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  bindchange: function(e) {
    this.setData({
      current: e.detail.current
    })
    console.log(this.data.current)
  },
  goPrevious() {
    this.setData({
      current: this.data.current === 0 ? this.data.current = 2 : this.data.current -1
    })
  },
  goAfter() {
    this.setData({
      current: this.data.current === 2 ? this.data.current = 0 : this.data.current + 1
    })
  }
})