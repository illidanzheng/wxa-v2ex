// pages/detail/detail.js
Page({

  /**
   * Page initial data
   */
  data: {
    topicDetail: {}
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(options)

    var that = this;

    var topicDetailUrl = "https://www.v2ex.com/api/topics/show.json?id=" + options.id;

    wx.request({
      url: topicDetailUrl,
      method: "GET",
      success(res) {
        console.log(res);

        that.setData({
          topicDetail: res.data[0]
        })
      }
    })
  },
})