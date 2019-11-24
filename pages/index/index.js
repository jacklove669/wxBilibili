Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 被点击的首页导航栏菜单的索引
    currentIndexNav: 0,
    // 首页导航数据
    navList: [],
    // 轮播图数据
    swiperList: [],
    videosList: [],

  },
  // 获取视频数据
  getvideoList() {
    var _this = this
    wx.request({
      url: 'https://www.fastmock.site/mock/6907fc94db7def085d5f47570c6481b6/bili/videosList',
      success(res) {
        if (res.data.code === 0) {
          _this.setData({
            videosList: res.data.data.videosList
          })
        }
      }
    })
  },
  //  获取首页轮播图数据
  getSwiperList() {
    var _this = this
    wx.request({
      url: 'https://www.fastmock.site/mock/6907fc94db7def085d5f47570c6481b6/bili/swiperList',
      success(res) {
        if (res.data.code === 0) {
          _this.setData({
            swiperList: res.data.data.swiperList
          })
        }
      }
    })

  },
  //  获取首页导航数据
  getNavList() {
    // 利用小程序的内部发送请求的方法
    var _this = this
    wx.request({
      url: 'https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/navList',
      success(res) {
        if (res.data.code == 0) {
          _this.setData({
            navList: res.data.data.navList
          })
        }
      }
    })
  },
  // 点击首页导航按钮
  activeNav(e) {
    // console.log(123)
    this.setData({
      currentIndexNav: e.target.dataset.index
    })
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 获取首页导航数据
    this.getNavList();
    // 获取轮播图数据
    this.getSwiperList();
    // 获取视频数据
    this.getvideoList();
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