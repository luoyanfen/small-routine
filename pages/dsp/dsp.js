// pages/dsp/dsp.js
let array = [
  "爱看",
  "健康",
  "新闻",
  "情感",
  "快看",
  "舞蹈",
  "健身",
  "娱乐",
  "游戏",
  "英雄联盟",
  "汽车",
  "美食",
  "搞笑",
];
Page({

  /**
   * 页面的初始数据
   */
  //  导航栏的函数
  activefun: function (e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      active: index
    })
  },
  data: {
    array: array,
    active: 0,
    show: 1,

    video_item: [{
        img: "http://puui.qpic.cn/tv/0/271831046_1080607/0",
        video_title1: "娱乐天天见",
        video_title2: "昆凌",
        video_title3: "周杰伦",
        word: "独家播放诛仙三，给你带来不一样的古代故事"

      },
      {
        img: "http://puui.qpic.cn/vpic/0/b0921klmmbi.png/0",
        video_title1: "娱乐天天见",
        video_title2: "昆凌",
        video_title3: "周杰伦",
        word: "和平精英：苹果妹发布超级福利带粉丝7杀吃鸡 拿500点劵"

      },

      {
        img: "http://puui.qpic.cn/vpic/0/d0926mie29c.png/0",
        video_title1: "娱乐天天见",
        video_title2: "昆凌",
        video_title3: "周杰伦",
        word: "英雄联盟：浪子彦国服第一对线劫，这只是一场杀戮"

      },

      {
        img: "http://puui.qpic.cn/vpic/0/c0926z0kdmn.png/0",
        video_title1: "娱乐天天见",
        video_title2: "昆凌",
        video_title3: "周杰伦",
        word:"迷你世界：小恐龙化身屠龙勇士斩妖除魔，没想到恶龙是表弟"

      },

      {
        img: "http://puui.qpic.cn/vpic/0/f0925yg2cq1.png/0",
        video_title1: "娱乐天天见",
        video_title2: "昆凌",
        video_title3: "周杰伦",
        word: "和平精英：一人钓一队，全歼敌放小队还附送信号枪一只"

      }, 
      {
        img: "http://puui.qpic.cn/vpic/0/p0563j6cljz.png/0",
        video_title1: "娱乐天天见",
        video_title2: "昆凌",
        video_title3: "周杰伦",
        word: "我的世界 75秒教你做一个怪物陷阱，视频教学"
      }
    ],
    // 第一个
video_item1: [{
  img: "http://puui.qpic.cn/vpic/0/a0880mc7s6s.png/0",
      video_title1: "娱乐天天见",
      video_title2: "昆凌",
      video_title3: "周杰伦",
      word: "英雄联盟，pdd骚猪神走位反杀四人笑出猪声"

    },
    {
      img: "http://puui.qpic.cn/vpic/0/a09253iueto.png/0",
      video_title1: "娱乐天天见",
      video_title2: "昆凌",
      video_title3: "周杰伦",
      word: "云顶之弈：卖薇恩保天使成功吃鸡，这下没人说了"

    },

    {
      img: "http://puui.qpic.cn/vpic/0/e0858k3refe.png/0",
      video_title1: "娱乐天天见",
      video_title2: "昆凌",
      video_title3: "周杰伦",
      word: "LOL:mlxg香锅剑魔人头被抢,愤怒中说了一句哪里的方言"

    },

    {
      img: "http://puui.qpic.cn/vpic/0/i09253fru25.png/0",
      video_title1: "娱乐天天见",
      video_title2: "昆凌",
      video_title3: "周杰伦",
      word: " LOL小漠:妖姬仗势欺人被反晕塔下,分身都没出来就死"

    },

    {
      img: "http://puui.qpic.cn/vpic/0/f0925yg2cq1.png/0",
      video_title1: "娱乐天天见",
      video_title2: "昆凌",
      video_title3: "周杰伦",
      word: "和平精英：一人钓一队，全歼敌放小队还附送信号枪一只"

    },
    {
      img: "http://puui.qpic.cn/vpic/0/p0563j6cljz.png/0",
      video_title1: "娱乐天天见",
      video_title2: "昆凌",
      video_title3: "周杰伦",
      word: "我的世界 75秒教你做一个怪物陷阱，视频教学"
    }

    ],
    // 第二个
    video_item2: [{
      img: "http://puui.qpic.cn/vpic/0/a0880mc7s6s.png/0",
      video_title1: "娱乐天天见",
      video_title2: "昆凌",
      video_title3: "周杰伦",
      word: "英雄联盟，pdd骚猪神走位反杀四人笑出猪声"

    },
    {
      img: "http://puui.qpic.cn/vpic/0/a09253iueto.png/0",
      video_title1: "娱乐天天见",
      video_title2: "昆凌",
      video_title3: "周杰伦",
      word: "云顶之弈：卖薇恩保天使成功吃鸡，这下没人说了"

    },

    {
      img: "http://puui.qpic.cn/vpic/0/e0858k3refe.png/0",
      video_title1: "娱乐天天见",
      video_title2: "昆凌",
      video_title3: "周杰伦",
      word: "LOL:mlxg香锅剑魔人头被抢,愤怒中说了一句哪里的方言"

    },

    {
      img: "http://puui.qpic.cn/vpic/0/i09253fru25.png/0",
      video_title1: "娱乐天天见",
      video_title2: "昆凌",
      video_title3: "周杰伦",
      word: " LOL小漠:妖姬仗势欺人被反晕塔下,分身都没出来就死"

    },

    {
      img: "http://puui.qpic.cn/vpic/0/f0925yg2cq1.png/0",
      video_title1: "娱乐天天见",
      video_title2: "昆凌",
      video_title3: "周杰伦",
      word: "和平精英：一人钓一队，全歼敌放小队还附送信号枪一只"

    },
    {
      img: "http://puui.qpic.cn/vpic/0/p0563j6cljz.png/0",
      video_title1: "娱乐天天见",
      video_title2: "昆凌",
      video_title3: "周杰伦",
      word: "我的世界 75秒教你做一个怪物陷阱，视频教学"
    }
// 第三个
    ],
video_item3: [{
  img: "http://puui.qpic.cn/vpic/0/p0924peqv01.png/0",
      video_title1: "娱乐天天见",
      video_title2: "昆凌",
      video_title3: "周杰伦",
      word: "霉霉nba球场上秀扣篮"

    },
    {
      img: "http://puui.qpic.cn/vpic/0/f0923me0rj6.png/0",
      video_title1: "娱乐天天见",
      video_title2: "昆凌",
      video_title3: "周杰伦",
      word: "收入主动上交，在外从不传出绯闻，好男人易建联"

    },

    {
      img: "http://puui.qpic.cn/vpic/0/a07821hctav.png/0",
      video_title1: "娱乐天天见",
      video_title2: "昆凌",
      video_title3: "周杰伦",
      word: "魂斗罗：游戏还是那个游戏但是技术好像有点不同了"

    },

    {
      img: "http://puui.qpic.cn/vpic/0/t0927qoaah5.png/0",
      video_title1: "娱乐天天见",
      video_title2: "昆凌",
      video_title3: "周杰伦",
      word: " 我的世界：全世界的生物都变成了箱子还附带末影箱效果"

    },

    {
      img: "http://puui.qpic.cn/vpic/0/f0922mqovrb.png/0",
      video_title1: "娱乐天天见",
      video_title2: "昆凌",
      video_title3: "周杰伦",
      word: "一大波路障僵族来袭，西瓜投手：砸的你说不出话"

    },
    {
      img: "http://puui.qpic.cn/vpic/0/b0888sr8cwf.png/0",
      video_title1: "娱乐天天见",
      video_title2: "昆凌",
      video_title3: "周杰伦",
      word: "5000个小姐姐拿ak47对战5000个小哥哥手拿m416谁能吃鸡"
    }

    ]
    
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