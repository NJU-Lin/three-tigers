var Api = require('../../utils/api.js');
var util = require('../../utils/util.js');

var navList = [
  {id:"all", title: "十大"},
  {id:"good", title: "精华"},
  {id:"more", title: "关注"},
];

Page({
  data: {
    activeIndex: 0,
    navList: navList,
    title: '话题列表',
    postsList: [],
    hidden: false,
    page: 1,
    limit: 20,
    tab: 'all'
  },

  onLoad: function () {
    this.getData();
  },

  onPullDownRefresh: function () {
    this.getData();
    console.log('下拉刷新', new Date());
  },

  listClick: function(e){
wx.navigateTo({
  url: '/pages/detail/detail',
})
    var appInstance = getApp();
    appInstance.href = e.currentTarget.dataset.item.href;
  },
  onReachBottom: function () {
    this.lower();
    console.log('上拉刷新', new Date());
  },
  // listClick:function(e){
  //   let str = JSON.stringify(e.currentTarget.dataset.item);
  //   wx.navigateTo({
  //     url: '../pages/detail/detail?jsonStr=' + str,
  //     success: function (res) {
  //       // success
  //     },
  //     fail: function () {
  //       // fail
  //     },
  //     complete: function () {
  //       // complete
  //     }
  //   })
  // },
  // 点击获取对应分类的数据
  onTapTag: function(e) {
    var that = this;
    var tab = e.currentTarget.id;
    var index = e.currentTarget.dataset.index;
    that.setData({
      activeIndex: index,
      tab: tab,
      page: 1
    });
    if (tab !== 'all') {
      that.getData({tab: tab});
    } else {
      that.getData();
    }
  },

  //获取文章列表数据
  getData: function() {
    var that = this;
    var tab = that.data.tab;
    var page = that.data.page;
    var limit = that.data.limit;
  //  var ApiUrl = Api.topics +'?tab='+ tab +'&page='+ page +'&limit='+ limit;
    var ApiUrl = 'http://localhost:8080/top10';
    that.setData({ hidden: false });

    // if(page == 1) {
    //   that.setData({ postsList: [] });
    // }
    // get请求方法
      // return callback(null, top250)
    
    Api.fetchGet(ApiUrl, (err, res) => {
      //更新数据
      that.setData({
        // postsList: that.data.postsList.concat(res.data.map(function (item) {
        //   item.last_reply_at = util.getDateDiff(new Date(item.last_reply_at));
        //   return item;
        // }))
        postsList:res.top10
        })
    
      setTimeout(function () {
        that.setData({ hidden: true });
      }, 300);
    }

    )
   // console.log(postsList);
  },

  // 滑动底部加载
  lower: function() {
    console.log('滑动底部加载', new Date());
    var that = this;
    that.setData({
      page: that.data.page + 1
    });
    if (that.data.tab !== 'all') {
      this.getData({tab: that.data.tab, page: that.data.page});
    } else {
      this.getData({page: that.data.page});
    }
  }


})
