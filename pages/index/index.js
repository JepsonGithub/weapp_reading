// 加载假数据
const INFO = require("../../data/post_data")


Page({
  
  data: {
    postList: [],
    imgList: [
      "/images/iqiyi.png",
      "/images/vr.png",
      "/images/wx.png"
    ]
  },

  onLoad() {
    console.log( INFO )
    this.setData({ postList: INFO.postList })
  }

})