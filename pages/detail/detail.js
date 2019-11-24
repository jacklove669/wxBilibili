// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoInfo: null,
    othersList: [],
    commentsList: [],
    commentTotalCount: null,
    openState: false,
  },


  // 获取推荐视频列表
  getOthersList(videoId) {
    var _this = this;
    wx.request({
      url: 'https://www.fastmock.site/mock/6907fc94db7def085d5f47570c6481b6/bili/othersList?id=' + videoId,
      success(res) {
        if (res.data.code == 0) {
          _this.setData({
            othersList: res.data.data.othersList
          })
        }
      }
    })
  },

  // 展示视频播放
  getCurrentVideo(videoId) {
    var _this = this;
    wx.request({
      url: 'https://www.fastmock.site/mock/6907fc94db7def085d5f47570c6481b6/bili/videoDetail?id=' + videoId,
      success(res) {
        if (res.data.code == 0) {
          _this.setData({
            videoInfo: res.data.data.videoInfo
          })
        }
      }
    })
  },
  // 获取评论列表
  getcommentsList(videoId) {
    var _this = this;
    wx.request({
      url: 'https://www.fastmock.site/mock/6907fc94db7def085d5f47570c6481b6/bili/commentsList?id=' + videoId,
      success(res) {
        if (res.data.code == 0) {
          _this.setData({
            commentsList: res.data.data.commentData.commentList,
            commentTotalCount: res.data.data.commentData.commentTotalCount
          })
          console.log(res.data.data.commentData.commentList)
        }
      }
    })
  },
  open() {
    if (this.openState == true) {
      this.openState = false;
    } else {
      this.openState = true;
    }
    console.log(this.openState)
    if (this.openState==false){
      this.setData({
        height: "50rpx",
        overflow: "hidden"
      })
    } else {
      this.setData({
        height: "100%",
        overflow: "none"
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let videoId = options.id;
    this.getCurrentVideo(videoId);
    this.getOthersList(videoId);
    this.getcommentsList(videoId);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {


  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})