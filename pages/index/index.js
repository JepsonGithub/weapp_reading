// 加载假数据
const INFO = require("../../data/post_data")



Page({
  
  data: {
    postList: [],
    imgList: [
      "/source/iqiyi.png",
      "/source/vr.png",
      "/source/wx.png"
    ]
  },

  onLoad() {
    console.log( INFO )
    this.setData({ postList: INFO.postList })
  }

})