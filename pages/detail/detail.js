const INFO = require("../../data/post_data")

// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {},
    // 是否收藏了
    isCollect: false,
    // 是否音乐正在播放
    isMusicPlay: false
  },

  checkCollect() {
    let isCollect = this.data.isCollect

    wx.showModal({
      title: isCollect ? "取消收藏": "收藏",
      content: isCollect ? "确认要取消收藏么?" : "是否加入收藏夹?",
      success: res => {
        if (res.confirm ) {
          // 用户点击了确定
          this.setData({ isCollect: !this.data.isCollect })

          if ( this.data.isCollect ) {
            wx.showToast({ title: "收藏成功" })
          }
        }
      }
    })

  },

  // 切换音乐播放停止
  toggleMusic() {
    let isMusicPlay = this.data.isMusicPlay
    if (isMusicPlay ) {
      // 说明正在播放要暂停
      wx.pauseBackgroundAudio()
    } else {
      let musicObj = this.data.info.music
      // 音乐暂停着, 需要播放
      wx.playBackgroundAudio({
        title: musicObj.title,
        coverImgUrl: musicObj.coverImg,
        dataUrl: musicObj.url
      })
    }

    this.setData( { isMusicPlay: !isMusicPlay } )
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ info: INFO.postList[options.postId]} )
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
  
  }
})