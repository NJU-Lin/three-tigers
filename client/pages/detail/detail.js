// posts.js
var Api = require('../../utils/api.js');
var util = require('../../utils/util.js');
var bbsurl = "http://bbs.nju.edu.cn/bbstcon?";
Page({
  data: {
    title: '话题详情',
    collectText:"收藏",
    detail: [],
    hidden: true,
    modalHidden: true
  },

  onLoad: function () {
    var appInstance = getApp();
     this.fetchData(appInstance.href);
     console.log(detail)
  },

  // 获取数据
  fetchData: function (href) {
    var that = this;
    var ApiUrl = "http://localhost:8080/bbs/context";
 //   var href = bbsurl + "board=" + options.board + "&amp=" + options.amp + "&file=" + options.file; 
  //  var href = "http://bbs.nju.edu.cn/bbstcon?board=Pictures&amp&file=M.1495992445.A";
    that.setData({
      hidden: false
    });
    Api.fetchPost(ApiUrl, href, (err, res) => {
   //   if (res.success) {
        // var detail = that.data.detail;
        // var replies = detail.replies[index];

        // if (res.action === "up") {
        //   replies.zanNum = replies.zanNum + 1;
        // } else {
        //   replies.zanNum = replies.zanNum - 1;
        // }

        that.setData({ 
          detail: res.data
          })

 //     }

    })

  },

  // 收藏文章
  collect: function(e) {
    var that = this;
    var ApiUrl = Api.collect;
    var accesstoken = wx.getStorageSync('CuserInfo').accesstoken;
    var id = e.currentTarget.id;
    if(!id) return;
    if(!accesstoken){
      that.setData({ modalHidden: false });
      return;
    }

    Api.fetchPost(ApiUrl, { accesstoken:accesstoken, topic_id:id }, (err, res) => {
      if(res.success){
          var detail = that.data.detail;
          detail.is_collect = true;
          that.setData({
            collectText: "取消收藏",
            detail: detail
          });
      }
    })
  },

  // 点赞
  reply: function(e) {
    console.log(e);
    var that = this;
    var accesstoken = wx.getStorageSync('CuserInfo').accesstoken;
    var id = e.currentTarget.id;
    var index = e.currentTarget.dataset.index;
    var ApiUrl = Api.reply(id);
    if(!id) return;
    if(!accesstoken){
      that.setData({ modalHidden: false });
      return;
    }

    Api.fetchPost(ApiUrl, { accesstoken:accesstoken }, (err, res) => {
      if(res.success){
        var detail = that.data.detail;
        var replies = detail.replies[index];

        if(res.action === "up"){
          replies.zanNum = replies.zanNum + 1;
        }else{
          replies.zanNum = replies.zanNum - 1;
        }

        that.setData({ detail: detail });

      }
    })

  },

  // 关闭--模态弹窗
  cancelChange: function() {
    this.setData({ modalHidden: true });
  },
  // 确认--模态弹窗
  confirmChange: function() {
    this.setData({ modalHidden: true });
    wx.navigateTo({
      url: '/pages/login/login'
    });
  }

})
