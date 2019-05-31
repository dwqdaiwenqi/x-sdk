# x-sdk

### 全局
* 不能把jssdk用到pc上的吧
* 游戏和jssdk需要放到一个页面上,需要重构现有的页面 
* 是把jssdk放到http://www.xy.com/h5/game/play?gameid=37#forward 还是游戏方的
https://cdn0.myh5.90wmoyu.com/index.ky.html?token=4002496f259136c56c8fe3aae0366508&logintime=1559281173&uid=88360930&indulge=2&isad=no&logotype=1&logo_url=test&from=browser&channel=Android
* 和游戏需要进行js交互，获取点击进入游戏事件和允许进入游戏事件

### P1主页面
* 主页面的逻辑和游戏不放到一个页面中是不行了

### P2一键登录
* 和ios进行截屏交互

### P3帐号登录
* 点击登录成后，到哪里？

### P4帐号注册
* 注册成功后，到哪里？

### P5忘记密码
* 没有绑定过手机号到哪里？

### P6手机登录
* 选择游戏帐号，确定后到哪里 ？

### p10账号管理
* 换绑要不要验证手机号


///////////////////////////////


```js
//ios截屏回调
window.handlescreenshort = (data)=>{
  //用户开启了相册权限，截屏成功
  if(data.success){
    //...
  } else{
    //截屏失败

    //.....

  }
}
// 调用ios截屏
window.webkit.messageHandlers.screenshort.postMessage({})

```

