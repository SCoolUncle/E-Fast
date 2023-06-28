//index.js
//获取应用实例

Page({
  
    data: {
      scrollTop:0,
      inform_display:0,       //-------------------------通知栏显示与否判断条件display值为1,2,3为显示其它为隐藏-----方法未写
      order_display:1,        //--------------------------首页订单动态值为1 2 3时为显示状态
      information_title:"节假日通知",
      information_time:"2019.09.09",
      inform_values:"关于五一放假服务暂停通知",//发布内容的标题
      inform_head_image:'',                   //通知信息头像
      inform_values_values:"关于五一放假赞同服务安排如下......", //算法只限显示15个字符
      order_status:"待取件",                              //-------------------------首页订单状态值


      user_name:"TomHanks",
      user_phone:"18812137648",
      payment_amount:"1.00",//预计支付金额
      reLocations: "南门",////////////////////////////////////////修改
      deadline:"12:00" ,///////////////////////////////////////////修改
      button_value:"撤销",//-------------根据用户身份来决定内容【我要接单】
      bgcolor:"#fa3435",
      user_identity:1, ////////用户身份为顾客时值为"1"用户身份为服务人员时值为”0“
      now_time:"2019.10.01 12:00"/////////////////该变量为系统当前时间



  },
  //----------------------------待寄服务弹窗提示--------------------------
  showtoast: function(){
    wx.showToast({
      title: '暂不支持该服务！',
      icon:'none',
      duration:2000
    })
  },
  //----------------------------订单详情路由页面-----------------------
  orderinformation: function(){
    wx.navigateTo({
      url: '../OrderInformation/OrderInformation',
    })
  },
  //----------------------------通知信息页面路由-------------------------
  noticinformation: function(){
    wx.navigateTo({
      url: '../NoticInformation/NoticInformation',
    })
  },
  //----------------------------快递代取页面路由-------------------------
   PickUp: function(){
     wx.navigateTo({
       url: '../PickUpInformation/PickUpInformation',
       success: function(res) {},
       fail: function(res) {},
       complete: function(res) {},
     })
   },
  

  /**
   * 页面的初始数据
   */


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
