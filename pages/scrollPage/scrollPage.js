const order = ['red', 'yellow', 'green', 'blue', 'red']
const orderHorizontal = ['red', 'yellow', 'green', 'blue', 'red']
Page({
  data: {
    toView: 'red',
    toViewHorizontal: 'red',
    scrollTop: 100,
    scrollLeft: 100,
  },
  upper(e) {
    console.log(e)
  },
  lower(e) {
    console.log(e)
  },
  scroll(e) {
    console.log(e)
  },
  tap(e) {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  tap2(e) {
    for (let i = 0; i < orderHorizontal.length; ++i) {
      if (orderHorizontal[i] === this.data.toViewHorizontal) {
        this.setData({
          toViewHorizontal: orderHorizontal[i + 1]
        })
        break
      }
    }
  },
  tapMove2(e) {
    this.setData({
      scrollLeft: this.data.scrollLeft + 10
    })
  }
})