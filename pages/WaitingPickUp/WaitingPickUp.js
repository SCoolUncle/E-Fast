// pages/WaitingPickUp/WaitingPickUp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowtime:"12:00",//当前时间
    user_identity: 1,//用户身份（当前身份为客户）
    order_display:0, //消息数量决定显示条数
    waiting_status:0 ,  //取件状态显示，值为0时状态为 “待取” 只有该值为 0 时才会在此页中显示
    button_value:"撤销", //按钮内容（由用户身份决定）
    deadline:"12:00" ,  //时间
    order_status: "待取"//由用户身份决定其内容（服务端为“我要接单”）
  },



  orderinformation: function () {
    wx.navigateTo({
      url: '../OrderInformation/OrderInformation',
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