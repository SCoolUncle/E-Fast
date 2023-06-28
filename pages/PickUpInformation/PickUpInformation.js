// miniprogram/pages/PickUpInformation/index.js
const app = getApp()
var predata = {}

Page({
  /**
   * 页面的初始数据
   */
  data: {
    logged: false,
    showTopTips: false,
    deadline: '13:30',
    reLocations: ['南门', '东门'],
    reIndex: 0,
    time: '18:00',
    deLocations: ['二号公寓', '善技楼'],
    deIndex: 0,
    deliveries: ['京东', '顺丰', '圆通', '中通', '韵达', 'EMS'],
    comIndex: 0,
    roomNumber: 0,
    notes: '',
    isChecked: false,

    send_part:0//////////////////////支持送件服务该值为0


  },
  bindReLocationChange(e) {
    this.setData({
      reIndex: e.detail.value
    })
  },

  bindDeadlineChange(e) {
    this.setData({
      deadline: e.detail.value
    })
  },

  bindTimeChange(e) {
    this.setData({
      time: e.detail.value
    })
  },

  bindDeLocationChange(e) {
    this.setData({
      deIndex: e.detail.value
    })
  },

  bindDeliveryChange(e) {
    this.setData({
      comIndex: e.detail.value
    })
  },

  changeRoomNumber(e) {
    this.setData({
      roomNumber: e.detail.value
    })
  },

  changeNotes(e) {
    this.setData({
      notes: e.detail.value
    })
  },

  notesCheck(e) {
    console.log(e)
    this.setData({
      notes: e.detail.value
    })
  },

  check() {
    var that = this
    const data = {
      'deadline': this.data.deadline,
      'reLocation': this.data.reLocations[this.data.reIndex],
      'delivery': this.data.deliveries[this.data.comIndex],
      'time': this.data.time,
      'deLocation': this.data.deLocations[this.data.deIndex],
      'roomNumber': this.data.roomNumber,
      'notes': this.data.notes,
      'price': 2,
    }
    const isRepeat = (JSON.stringify(data) === JSON.stringify(predata))
    console.log('比较结果', isRepeat)
    if (isRepeat) {
      wx.showModal({
        title: '与上次发布信息相同',
        content: '是否继续',
        success(res) {
          if (res.confirm) {
            that.postOrder(data)
          }
        }
      })
    } else {
      this.postOrder(data)
    }

  },

  postOrder(data) {
    const db = wx.cloud.database()
    db.collection('orders').add({
      data: {
        'deadline': this.data.deadline,
        'reLocation': this.data.reLocations[this.data.reIndex],
        'delivery': this.data.deliveries[this.data.comIndex],
        'time': this.data.time,
        'deLocation': this.data.deLocations[this.data.deIndex],
        'roomNumber': this.data.roomNumber,
        'notes': this.data.notes,
        'price': 2,
        'name': app.globalData.userInfo.name,
        'phone': app.globalData.userInfo.phone,
        'postTime': db.serverDate(),
        'accepted': false
      },
      success: res => {
        predata = data
        wx.showToast({
          title: '发布任务成功',
        })
      }
    })
  },

  showTopTips(e) {
    var that = this;
    this.setData({
      showTopTips: true
    });
    setTimeout(function () {
      that.setData({
        showTopTips: false
      });
    }, 3000);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(app.globalData.userInfo)
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
    if (app.globalData.logged) {
      this.setData({
        logged: true,
      })
    } else {
      this.setData({
        logged: false,
      })
    }
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