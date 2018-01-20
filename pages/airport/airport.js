Page({





  /**
   * 页面的初始数据
   */

  data: {
    // text:"这是一个页面"
    array: ['昆明', '天津', '成都', '上海', '北京', '武汉', '呼和浩特'],
    index: 0,
  },

  /**
   * 监听普通picker选择器
   */
  startChange: function (e) {
    //改变index值，通过setData()方法重绘界面
    this.setData({
      start: e.detail.value
    });
  },

  arriveChange: function (e) {
    //改变index值，通过setData()方法重绘界面
    this.setData({
      arrive: e.detail.value
    });
  },

  //表单提交验证

  // formSubmit: function (e) {
  //   if (e.datail.value.name.length != 11) {
  //     wx.showToast({
  //       title: '请输入正确的手机号码',
  //       icon: 'success',
  //       duration: 0,

  //     })
  //     console.log("提交成功");
  //   }
  //   else if (e.datail.value.name.length == 0) {
  //     wx.showToast({
  //       title: '手机号不能为空',
  //     })
  //   }
  // },
  formSubmit: function (e) {
    if (e.detail.value.name.length == 0) {
      wx.showToast({
        title: "请填写联系人",
        duration: 2000
      })
    } else if (e.detail.value.mobile.length !=11) {
      wx.showToast({
        title: '请正确填写电话',
      })
    } else if (e.detail.value.start == e.detail.value.arrive)       {
      wx.showToast({
        title: "城市选择错误",
      })
    }else if(time==null){
          title:"请选择时间";
    }
    else {
      wx.request({
        url: "http://127.0.0.1/wechat/form.php",
        header: {

          "Content-Type": "application/x-www-form-urlencoded"

        },
        method: "POST",
        data: {
          name: e.detail.value.name,
          mobile: e.detail.value.mobile

        },
        success: function (res) {
            wx.showToast({
              title: "提交成功",
            })
        }

      })


    }

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