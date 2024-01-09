# 撸毛脚本

## Qna3 Ai

[Qna3 Ai](https://qna3.ai/)

### Quick start
```js
const wallet = new Wallet(process.env.WALLET_PRIVATEKEY);
const qna3 = new Qna3(wallet, 206);

// 登录(第一次登录就需要绑定邀请码)
await qna3.login("78yppP2H");

// 每日签到
await qna3.checkIn();

```


## Auth by

0x0fBA766CBBFFB95831be9F4e99c721Ca47777777
