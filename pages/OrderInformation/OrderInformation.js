// pages/OrderInformation/OrderInformation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order_status: "待取件",                              //-------------------------首页订单状态值
    payment_amount: "1.00",//预计支付金额
    user_identity: 1, ////////用户身份为顾客时值为"1"用户身份为服务人员时值为”0“
    button_value: "撤销",////////////////////根据用户身份来决定内容【我要接单】
    deadline: "12:00",///////////////////////////////////////////修改
    send_part:0,//支持送件服务该值为0
    deadline: '13:30',
    roomNumber: 0,//房间号
    time:"12:00",//送件时间
    waiting_status: 1  /////////////////该项和Running.js中的含义一样，决定订单详情中是否显示确认收货内容
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