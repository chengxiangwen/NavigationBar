// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'showData':[],
    'drinkData': [
      {
        "productId": 70177271657,
        "brandName": "川宁",
        "appPrice": 0.1,
        "image": "/assets/images/pic.png",
        "name": "川宁冰茶饮料"
      },
      {
        "productId": 70177271657,
        "brandName": "川宁",
        "appPrice": 0.1,
        "image": "/assets/images/pic.png",
        "name": "川宁冰茶饮料"
      },
      {
        "productId": 70177271657,
        "brandName": "川宁",
        "appPrice": 0.1,
        "image": "/assets/images/pic.png",
        "name": "川宁冰茶饮料"
      },
      {
        "productId": 70177271657,
        "brandName": "川宁",
        "appPrice": 0.1,
        "image": "/assets/images/pic.png",
        "name": "川宁冰茶饮料"
      },
      {
        "productId": 70177271657,
        "brandName": "川宁",
        "appPrice": 0.1,
        "image": "/assets/images/pic.png",
        "name": "川宁冰茶饮料"
      },
      {
        "productId": 70177271657,
        "brandName": "川宁",
        "appPrice": 0.1,
        "image": "/assets/images/pic.png",
        "name": "川宁冰茶饮料"
      },
      {
        "productId": 70177271657,
        "brandName": "川宁",
        "appPrice": 0.1,
        "image": "/assets/images/pic.png",
        "name": "川宁冰茶饮料"
      },
      {
        "productId": 70177271657,
        "brandName": "川宁",
        "appPrice": 0.1,
        "image": "/assets/images/pic.png",
        "name": "川宁冰茶饮料"
      }
    ],
    'snacksData': [
      {
        "productId": 70177271657,
        "brandName": "手指饼干",
        "appPrice": 0.1,
        "image": "/assets/images/pic1.png",
        "name": "手指饼干"
      },
      {
        "productId": 70177271657,
        "brandName": "手指饼干",
        "appPrice": 0.1,
        "image": "/assets/images/pic1.png",
        "name": "手指饼干"
      },
      {
        "productId": 70177271657,
        "brandName": "手指饼干",
        "appPrice": 0.1,
        "image": "/assets/images/pic1.png",
        "name": "手指饼干"
      },
      {
        "productId": 70177271657,
        "brandName": "手指饼干",
        "appPrice": 0.1,
        "image": "/assets/images/pic1.png",
        "name": "手指饼干"
      },
      {
        "productId": 70177271657,
        "brandName": "手指饼干",
        "appPrice": 0.1,
        "image": "/assets/images/pic1.png",
        "name": "手指饼干"
      },
      {
        "productId": 70177271657,
        "brandName": "手指饼干",
        "appPrice": 0.1,
        "image": "/assets/images/pic1.png",
        "name": "手指饼干"
      },
      {
        "productId": 70177271657,
        "brandName": "手指饼干",
        "appPrice": 0.1,
        "image": "/assets/images/pic1.png",
        "name": "手指饼干"
      },
      {
        "productId": 70177271657,
        "brandName": "手指饼干",
        "appPrice": 0.1,
        "image": "/assets/images/pic1.png",
        "name": "手指饼干"
      }
    ],
    'afterteaData':[
      {
        "productId": 70177271657,
        "brandName": "手指饼干",
        "appPrice": 0.1,
        "image": "/assets/images/pic1.png",
        "name": "手指饼干"
      }, {
        "productId": 70177271657,
        "brandName": "手指饼干",
        "appPrice": 0.1,
        "image": "/assets/images/pic1.png",
        "name": "手指饼干"
      },
      {
        "productId": 70177271657,
        "brandName": "川宁",
        "appPrice": 0.1,
        "image": "/assets/images/pic.png",
        "name": "川宁冰茶饮料"
      },
    ],
    activeNav: 'drink',
    'statusData': [],
    category: [
      
      {
        name: '饮料',
        alias: 'drink',
      }, {
        name: '零食',
        alias: 'snacks'
      }, {
        name: '护理',
        alias: 'aftertea'
      }],
    'bannerData': [
      {
        "id": 1,
        "bannerId": 1,
        "appImg": "/assets/images/A01t20170508.jpg",
        "name": "小程序来袭"
      },
      {
        "id": 2,
        "bannerId": 2,
        "appImg": "/assets/images/A03t20170508.jpg",
        "name": "小程序来袭"
      },
      {
        "id": 3,
        "bannerId": 3,
        "appImg": "/assets/images/A02t20170508.jpg",
        "name": "小程序来袭"
      }
    ],
    indicatorDots: !0,
    autoplay: true,
    current: 0,
    interval: 3000,
    duration: 1000,
    circular: !0,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      'showData': this.data.drinkData
    });
      
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

  },

  /*切换列表 */
  changeList(e) {
    const alias = e.target.dataset.alias;
  
    if (alias !== this.data.activeNav) {
      this.setData({
        activeNav: e.target.dataset.alias,
        loading: true
      });
    }
    const that = this;
    if (alias == 'drink') {
      status = 0;
      this.setData({
        'showData': that.data.drinkData
      });
    } else if (alias == 'snacks') {
      status = 1;
      this.setData({
        'showData': that.data.snacksData
      });
    } else if (alias == 'aftertea') {
      status = 2;
      this.setData({
        'showData': that.data.afterteaData
      });
    }
    //GetList(that, status, count);
  },
})