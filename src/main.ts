import { Wallet } from "ethers";
import { Qna3 } from "./scirpts/qna3ai";

(async () => {
   var  ags=process.argv.splice(2)
  const wallet = new Wallet(ags[0]);
  const qna3 = new Qna3(wallet, 206);
  await qna3.login("78yppP2H");
  await qna3.checkIn();
})();
