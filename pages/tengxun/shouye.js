// pages/tengxun/shouye.js

var app = getApp()

let swiper_item = [{
  lunbo_img: "http://puui.qpic.cn/tv/0/271802541_1080607/0",
  vip: "vip",
  news: "更新至38集",
  title: "【陆战之王.更新】合成营选拔演训正式开始!"
}, {
  lunbo_img: "http://puui.qpic.cn/tv/0/271633842_1080607/0",
  vip: "vip",
  news: "更新至69集",
  title: "【斗罗大陆】更新啦! 上赛场一分钟内解决对手"
}, {
  lunbo_img: "http://puui.qpic.cn/tv/0/271802518_1080607/0",
  vip: "vip",
  news: "更新至38集",
  title: "【空降利刃.首播】贾乃亮的铁血特种兵人生"
}, {
  lunbo_img: "http://puui.qpic.cn/tv/0/271796858_1080607/0",
  vip: "自制",
  news: "",
  title: "【世界杯】8战全胜夺冠!西班牙时隔13年再登顶"
}, {
  lunbo_img: "http://puui.qpic.cn/tv/0/271826524_1080607/0",
  vip: "",
  news: "",
  title: "【R1SE】新歌MV首发，成团100天炸裂发声"
}]

let swiper_dianshiju = [{
  lunbo_img: "http://puui.qpic.cn/tv/0/272018437_1080607/0",
  vip: "vip",
  news: "更新至38集",
  title: "【因迈思乐园.互动剧】操控小姐姐的命运"
}, {
  lunbo_img: "http://puui.qpic.cn/tv/0/272200489_1080607/0",
  vip: "vip",
  news: "更新至45集",
  title: "【老酒馆】小棉袄执行谷三妹任务，牺牲!"
}, {
  lunbo_img: "http://puui.qpic.cn/tv/0/272197665_1080607/0",
  vip: "vip",
  news: "更新至06集",
  title: "【空降利刃】无名英雄！贾乃亮战友为国牺牲"
}, {
  lunbo_img: "http://puui.qpic.cn/tv/0/271986334_1080607/0",
  vip: "自制",
  news: "更新至24集",
  title: "【柴小七】方冷方烈双双告白，上演“七夺大战”"
}, {
  lunbo_img: "http://puui.qpic.cn/tv/0/273052209_1080607/0",
  vip: "",
  news: "更新至38集",
  title: "【滑魂.会员结局】板友温暖相助 阿布走出抑郁"
}]

let swiper_zongyi = [{
  lunbo_img: "http://puui.qpic.cn/tv/0/271786447_1080607/0",
  vip: "自制",
  news: "2019-09-19",
  title: "【脱口秀大会】毛不易自嘲选秀时唱跳很滑稽"
}, {
  lunbo_img: "http://puui.qpic.cn/tv/0/271583085_1080607/0",
  vip: "",
  news: "2019-09-08",
  title: "【中国好声音】新歌MV首发，成团100天炸裂发声"
}, {
  lunbo_img: "http://puui.qpic.cn/tv/0/273040806_1080607/0",
  vip: "自制",
  news: "2019-09-09",
  title: "【我要打篮球】球员重伤吓坏邓伦 李易峰秀主持功力"
}, {
  lunbo_img: "http://puui.qpic.cn/tv/0/271986334_1080607/0",
  vip: "自制",
  news: "2019-09-08",
  title: "【外星女生.柴小七】新歌MV首发，成团100天炸裂发声"
}, {
  lunbo_img: "http://puui.qpic.cn/tv/0/271460536_1080607/0",
  vip: "",
  news: "2019-08-30",
  title: "【湖南中秋】友谊翻船？何炅谢娜同台飙戏"
}]

let swiper_dianying = [{
  lunbo_img: "http://puui.qpic.cn/tv/0/274065826_1080607/0",
  vip: "vip",
  news: "7.2",
  title: "【目标战】真炮实弹扬我国威"
}, {
  lunbo_img: "http://puui.qpic.cn/tv/0/240584562_1080607/0",
  vip: "vip",
  news: "9.8",
  title: "【扫毒2】刘德华古天乐兄弟反目"
}, {
  lunbo_img: "http://puui.qpic.cn/tv/0/271830676_1080607/0",
  vip: "vip",
  news: "8.1",
  title: "【诛仙2】肖战李沁现场互嗨"
}, {
  lunbo_img: "http://puui.qpic.cn/tv/0/256985635_1080607/0",
  vip: "vip",
  news: "8.8",
  title: "【上海堡垒】鹿晗舒淇末日恋哭爆全场"
}, {
  lunbo_img: "http://puui.qpic.cn/tv/0/271547285_1080607/0",
  vip: "vip",
  news: "9.2",
  title: "【鼠胆英雄】小岳岳牵手佟丽娅成人生赢家？"
}]

let swiper_dongman = [{
  lunbo_img: "http://puui.qpic.cn/tv/0/271931103_1080607/0",
  vip: "vip",
  news: "更新至03集",
  title: "【书灵记】琵琶不是这么用的"
}, {
  lunbo_img: "http://puui.qpic.cn/tv/0/271633842_1080607/0",
  vip: "vip",
  news: "更新至69集",
  title: "【斗罗大陆】更新啦! 上赛场一分钟内解决对手"
}, {
  lunbo_img: "http://puui.qpic.cn/tv/0/256962041_1080607/0",
  vip: "vip",
  news: "更新至10集",
  title: "【太乙仙魔录3】了断舍离，共寻天煞魔宫"
}, {
  lunbo_img: "http://puui.qpic.cn/tv/0/271776224_1080607/0",
  vip: "预告",
  news: "",
  title: "【万盛街】活力少年！泥泥概念PV公布"
}, {
  lunbo_img: "http://puui.qpic.cn/tv/0/271730819_498280/0",
  vip: "vip",
  news: "更新至19集",
  title: "【西行记】热血西行，披荆斩棘"
}]

let swiper_shaoer = [{
  lunbo_img: "http://puui.qpic.cn/tv/0/271635949_498280/0",
  vip: "vip",
  news: "更新至11集",
  title: "【泰迦奥特曼】泰罗之子的成长故事"
}, {
  lunbo_img: "http://puui.qpic.cn/tv/0/271633842_1080607/0",
  vip: "自制",
  news: "全集",
  title: "【斗罗大陆】更新啦! 上赛场一分钟内解决对手"
}, {
  lunbo_img: "http://puui.qpic.cn/tv/0/249687444_498280/0",
  vip: "",
  news: "全集",
  title: "【汪汪队立大功】狗狗的惊险救援任务"
}, {
  lunbo_img: "http://puui.qpic.cn/tv/0/271730594_498280/0",
  vip: "",
  news: "全集",
  title: "【小猪佩奇】城堡里究竟都有些什么"
}, {
  lunbo_img: "http://puui.qpic.cn/tv/0/57415878_1080607/0",
  vip: "",
  news: "",
  title: "【熊出没之探险日记2】探险之旅再出发"
}]


let type1_items = [{
  type1_img: "http://puui.qpic.cn/tv/0/272200489_1080607/0",
  type1_data: "更新至45集",
  type1_juming: "老酒馆",
  type1_main: "陈宝国秦海璐勇闯东关"
}, {
  type1_img: "http://puui.qpic.cn/tv/0/271831804_498280/0",
  type1_data: "更新至29集",
  type1_juming: "外星女生柴小七",
  type1_main: "霸总徐志贤邂逅外星少女"
}, {
  type1_img: "http://puui.qpic.cn/tv/0/272200489_1080607/0",
  type1_data: "更新至45集",
  type1_juming: "老酒馆",
  type1_main: "陈宝国秦海璐勇闯东关"
}, {
  type1_img: "http://puui.qpic.cn/tv/0/271831804_498280/0",
  type1_data: "更新至29集",
  type1_juming: "外星女生柴小七",
  type1_main: "霸总徐志贤邂逅外星少女"
}, {
  type1_img: "http://puui.qpic.cn/tv/0/272200489_1080607/0",
  type1_data: "更新至45集",
  type1_juming: "老酒馆",
  type1_main: "陈宝国秦海璐勇闯东关"
}, {
  type1_img: "http://puui.qpic.cn/tv/0/271831804_498280/0",
  type1_data: "更新至29集",
  type1_juming: "外星女生柴小七",
  type1_main: "霸总徐志贤邂逅外星少女"
}]

let type2_items = [{
  type2_img: "http://puui.qpic.cn/tv/0/272200489_1080607/0",
  type2_jishu: "更新至14集",
  type2_juming: "亲.爱的味道",
  type2_main: "王俊凯爆笑模仿大厨撒娇"
}, {
  type2_img: "http://puui.qpic.cn/tv/0/242415769_498280/0",
  type2_jishu: "7.4",
  type2_juming: "大江大河",
  type2_main: "156位明星推荐4亿票房神片"
}, {
  type2_img: "http://puui.qpic.cn/vcover_hz_pic/0/8l8dpqzvij9kza31568083034/0",
  type2_jishu: "更新至14集",
  type2_juming: "亲.爱的味道",
  type2_main: "2019金庸武侠经典重现"
}, {
  type2_img: "http://puui.qpic.cn/tv/0/242429095_498280/0",
  type2_jishu: "全50集",
  type2_juming: "你和我的倾城时光",
  type2_main: "霸道军官爱上赵丽颖"
}, {
  type2_img: "http://puui.qpic.cn/vcover_hz_pic/0/xmw2gfef226jygj1545286360/0",
  type2_jishu: "全18集",
  type2_juming: "青云志2",
  type2_main: "李易峰华丽变身霸气鬼厉"
}, {
  type2_img: "http://puui.qpic.cn/vcover_hz_pic/0/mzc002009rrrr0r1566799845/0",
  type2_jishu: "更新至40集",
  type2_juming: "遇见幸福",
  type2_main: "蒋欣李光洁郭京飞直面中年"
}, {
  type2_img: "http://puui.qpic.cn/vcover_hz_pic/0/jzhtr2cgy35ejz01504093603/0",
  type2_jishu: "全42集",
  type2_juming: "兰桐花开",
  type2_main: "揭秘贫困县致富经"
}, {
  type2_img: "http://puui.qpic.cn/vcover_hz_pic/0/xpu952oo5tr9yzl1563933188/0",
  type2_jishu: "全40集",
  type2_juming: "全职高手",
  type2_main: "洋洋江疏影功夫荣耀之路"
}, {
  type2_img: "http://puui.qpic.cn/vcover_hz_pic/0/215clyixyo03ydm1514891348/0",
  type2_jishu: "全40集",
  type2_juming: "怒海潜沙",
  type2_main: "无邪张起灵王胖子秘境探险"
}, {
  type2_img: "http://puui.qpic.cn/tv/0/271635949_498280/0",
  type2_jishu: "更新至11集",
  type2_juming: "泰迦奥特曼",
  type2_main: "泰罗之子的成长故事"
}, {
  type2_img: "http://puui.qpic.cn/tv/0/271730819_498280/0",
  type2_jishu: "更新至19集",
  type2_juming: "西行记",
  type2_main: "热血西行，披荆斩棘"
}, {
  type2_img: "http://puui.qpic.cn/tv/0/274100732_498280/0",
  type2_jishu: "更新至24集",
  type2_juming: "外星女柴小七",
  type2_main: "霸总徐志贤邂逅外星少女"
}, {
  type2_img: "http://puui.qpic.cn/tv/0/249687444_498280/0",
  type2_jishu: "全集",
  type2_juming: "汪汪队立大功",
  type2_main: "狗狗的惊险救援任务"
}, {
  type2_img: "http://puui.qpic.cn/tv/0/271776224_1080607/0",
  type2_jishu: "",
  type2_juming: "万盛街",
  type2_main: "活力少年！泥泥概念PV公布"
}, {
  type2_img: "http://puui.qpic.cn/tv/0/256962041_1080607/0",
  type2_jishu: "更新至10集",
  type2_juming: "太乙仙魔录3",
  type2_main: "了断舍离，共寻天煞魔宫"
}, {
  type2_img: "http://puui.qpic.cn/tv/0/271931103_1080607/0",
  type2_jishu: "更新至03集",
  type2_juming: "书灵记",
  type2_main: "琵琶不是这么用的"
}, {
  type2_img: "http://puui.qpic.cn/tv/0/272068448_1080607/0",
  type2_jishu: "更新至19集",
  type2_juming: "西行记",
  type2_main: "心机猪八戒上线坑队友"
}, {
  type2_img: "http://puui.qpic.cn/tv/0/271730594_498280/0",
  type2_jishu: "全集",
  type2_juming: "小猪佩奇",
  type2_main: "城堡里究竟都有些什么"
}]

let shipin_item = [{
  shipin_title: "黄渤排除万难保升旗顺利《我和我的祖国》管虎回溯开国大典前夜",
  shipin_img: "https://puui.qpic.cn/vcover_vt_pic/0/hk765ykwj4bjpcl1567733851/260",
  shipin_video: "https://puui.qpic.cn/tv/0/271795606_285160/0",
  pianming: "我和我的祖国",
  nixihuan: "你可能会喜欢 黄渤/张泽/刘涛/杜江/葛优/宋佳"
}, {
  shipin_title: "黄渤排除万难保升旗顺利《我和我的祖国》管虎回溯开国大典前夜",
  shipin_img: "https://puui.qpic.cn/vcover_vt_pic/0/hk765ykwj4bjpcl1567733851/260",
  shipin_video: "http://puui.qpic.cn/tv/0/274100732_498280/0",
  pianming: "我和我的祖国",
  nixihuan: "你可能会喜欢 黄渤/张泽/刘涛/杜江/葛优/宋佳"
}, {
  shipin_title: "黄渤排除万难保升旗顺利《我和我的祖国》管虎回溯开国大典前夜",
  shipin_img: "https://puui.qpic.cn/vcover_vt_pic/0/hk765ykwj4bjpcl1567733851/260",
  shipin_video: "http://puui.qpic.cn/tv/0/272068448_1080607/0",
  pianming: "我和我的祖国",
  nixihuan: "你可能会喜欢 黄渤/张泽/刘涛/杜江/葛优/宋佳"
}, {
  shipin_title: "黄渤排除万难保升旗顺利《我和我的祖国》管虎回溯开国大典前夜",
  shipin_img: "https://puui.qpic.cn/vcover_vt_pic/0/hk765ykwj4bjpcl1567733851/260",
  shipin_video: "http://puui.qpic.cn/vcover_hz_pic/0/215clyixyo03ydm1514891348/0",
  pianming: "我和我的祖国",
  nixihuan: "你可能会喜欢 黄渤/张泽/刘涛/杜江/葛优/宋佳"
}, {
  shipin_title: "黄渤排除万难保升旗顺利《我和我的祖国》管虎回溯开国大典前夜",
  shipin_img: "https://puui.qpic.cn/vcover_vt_pic/0/hk765ykwj4bjpcl1567733851/260",
  shipin_video: "http://puui.qpic.cn/vcover_hz_pic/0/mzc002009rrrr0r1566799845/0",
  pianming: "我和我的祖国",
  nixihuan: "你可能会喜欢 黄渤/张泽/刘涛/杜江/葛优/宋佳"
}, {
  shipin_title: "黄渤排除万难保升旗顺利《我和我的祖国》管虎回溯开国大典前夜",
  shipin_img: "https://puui.qpic.cn/vcover_vt_pic/0/hk765ykwj4bjpcl1567733851/260",
  shipin_video: "http://puui.qpic.cn/tv/0/242429095_498280/0",
  pianming: "我和我的祖国",
  nixihuan: "你可能会喜欢 黄渤/张泽/刘涛/杜江/葛优/宋佳"
}]



Page({

  /**
   * 页面的初始数据
   */
  data: {
    sousuo_img: 1,
    sousuo_img2: 0,
    sousuo_one: 1,
    sousuo_two: 0,
    active: 0,
    scroll_item1: ["精选", "电视剧", "综艺", "电影", "动漫", "少儿"],
    swiper_item: swiper_item,
    swiper_dianshiju: swiper_dianshiju,
    swiper_zongyi: swiper_zongyi,
    swiper_dianying: swiper_dianying,
    swiper_dongman: swiper_dongman,
    swiper_shaoer: swiper_shaoer,
    type1_items: type1_items,
    type2_items: type2_items,
    shipin_item: shipin_item
  },


  targetChange: function(event) {
    let index = event.currentTarget.dataset.index;
    this.setData({
      active: index
    })
  },

  onPageScroll: function(res) {
    console.log(res);
    if (res.scrollTop <= 100) {
      this.setData({
        sousuo_img: "1",
        sousuo_one: "1",
        sousuo_img2: "0",
        sousuo_two: "0"
      })
    } else {
      this.setData({
        sousuo_img: "0",
        sousuo_one: "0",
        sousuo_img2: "1",
        sousuo_two: "1"
      })
    }
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