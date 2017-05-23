//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    //console.log(logs)
    logs.unshift(Date.now())
    //console.log(logs)
    wx.setStorageSync('logs', logs)
  }
})