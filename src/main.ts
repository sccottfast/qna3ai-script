import { Wallet } from "ethers";
import { Qna3 } from "./scirpts/qna3ai";

(async () => {
   var  ags= await process.argv

  console.error(ags[2])
  console.error(ags[3])

  if(ags[2] && ags[3]){
    const wallet = new Wallet(ags[2]);
     const qna3 = new Qna3(wallet, 206);
    await qna3.login(ags[3]);
    await qna3.checkIn();
  }
  


})();
