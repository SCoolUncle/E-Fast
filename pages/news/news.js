// pages/news/news.js
Page({


  /**
   * 页面的初始数据
   */
  data: {

    order_display: 2,  //--------------------------首页订单动态值为1 2 3时为显示状态
    user_name: "TomHanks",
    user_phone: "18812137648",
    payment_amount: "1.00",
    reLocations: "南门",////////////////////////////////////////修改
    deadline: "12:00",///////////////////////////////////////////修改
    button_value: "撤销",//-------------根据用户身份来决定内容【我要接单】
    bgcolor: "#fa3435",
    user_identity: 1, ////////用户身份为顾客时值为"1"用户身份为服务人员时值为”0“
    now_time: "2019.10.01 12:00"/////////////////该变量为系统当前时间

  },
  orderinformation: function () {
    wx.navigateTo({
      url: '../OrderInformation/OrderInformation',
    })
  },


  waiting_pickup: function(){
    wx.navigateTo({
      url: '../WaitingPickUp/WaitingPickUp',
    })
  },
  running: function () {
    wx.navigateTo({
      url: '../Running/Running',
    })
  },
  finish: function () {
    wx.navigateTo({
      url: '../Finish/Finish',
    })
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

  }
})