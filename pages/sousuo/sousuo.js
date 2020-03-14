// pages/sousuo/sousuo.js
let array = [
  "热搜",
  "电视剧",
  "少儿",
  "综艺",
  "电影",
  "动漫",
  "明星",
  "游戏",
  "音乐",
  "热点",
  "实时"
];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: array,
    active: 0,
    show: 1,
    
    body_item: [{
      number: 4,
      
      body_title:"鼠胆英雄"

    }, {
        number: 5,
        body_title: "中国达人秀第六季"

      },
      {
        number: 6,
        body_title: "哪吒魔胎降世"

      },
      {
        number: 7,
        body_title: "央视中秋晚会"

      },
      {
        number: 8,
        body_title: "陈情令"

      },
      {
        number: 9,
        body_title: "中餐厅第3季"

      },
      {
        number: 10,
        body_title: "脱口秀大会第2季"

      },
      {
        number: 11,
        body_title: "老酒馆"

      },
      {
        number: 12,
        body_title: "深夜食堂"

      },
      {
        number: 13,
        body_title: "小欢喜"

      },
      {
        number: 14,
        body_title: "小猪佩琪第七季"

      },
      {
        number: 15,
        body_title: "我家小两口"

      },
      {
        number: 16,
        body_title: "魔道祖师"

      },
      {
        number: 17,
        body_title: "我的墨格利男孩"

      },
      {
        number: 18,
        body_title: "中国好声音"

      },
    
    ]




  },

  activefun: function (e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      active: index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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