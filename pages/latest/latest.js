// pages/latest/latest.js
Page({

  /**
   * Page initial data
   */
  data: {
    latest: [],
    hidden: false
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var that = this;

    wx.request({
      url: "https://www.v2ex.com/api/topics/latest.json",
      method: "GET",
      success(res) {
        console.log(res);

        that.setData({
          latest: res.data,
          hidden: false
        });
      }
    });
  },

  redirectDetail: function(msg) {
    console.log(msg);

    var id = msg.currentTarget.dataset.id;

    console.log(id);

    var pageUrl = '/pages/detail/detail?id=' + id;

    wx.navigateTo({
      url: pageUrl
    })
  }
})