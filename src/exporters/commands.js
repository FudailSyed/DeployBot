const Discord = require("discord.js");
const task = require("../helper/web");
const components = require("../helper/msgHelper");

module.exports = async function (msg) {
  if (msg.content.toUpperCase() === "Hello DeployBot".toUpperCase()) {
    //msg.react("😄");
    msg.channel.send("Welcome to Server", {
      tts: true,
    });
  } else if (msg.content.toUpperCase() === "Gay".toUpperCase()) {
    msg.reply("Yes you're gay");
  }

  //help
  if (msg.content.toUpperCase() === "-help".toUpperCase()) {
    msg.channel.send(components.helpMsg);
  }

  //kick

  /*Avatar
  if (msg.content.toUpperCase() === "-av".toUpperCase()) {
    const UserPFP = msg.member.avatarURL();
        msg.reply(UserPFP);
  }
  */

  //delete messages
  /*var blackList = ["YAY", "yay", "yAy", "YaY", "yAY", "Yay", "YAy"];
  for (var i = 0; i < blackList.length; i++) {
    if (msg.content.includes(blackList[i])) {
      let input = msg.content.split(" ").slice(1).join(" "); // Removes the prefix
      msg.delete(); // Deletes the message
      //msg.channel.send("Stop Saying: " + input); //.then(msg=>msg.delete({timeout:"5000"}) <- if you want delete it with delay and sends the finished text
    }
  }*/

  //stocks
  if (msg.content.startsWith("-stocks") || msg.content.startsWith("-stock")) {
    var stockName = msg.content.split(" ");
    if (stockName.length === 2) {
      task.findStocks(stockName[1]).then((x) => msg.reply(x));
    } else {
      msg.reply("Cannot Comprehend");
    }
  }

  //Crypto
  if (msg.content.startsWith("-crypto") || msg.content.startsWith("-Crypto")) {
    var cryptoName = msg.content.split(" ");
    if (cryptoName.length === 2) {
      try {
        task.findCrypto(cryptoName[1]).then((x) => msg.reply(x));
      } catch (err) {
        //console.error(err.message);
        return "Sorry we couldn't find that coin";
      }
    } else {
      msg.reply("Cannot Comprehend");
    }
  }

  //IG
  if (msg.content.startsWith("-ig")) {
    var igName = msg.content.split(" ");
    if (igName.length === 2) {
      task.findIG(igName[1]).then((x) => msg.reply(x));
    } else {
      msg.reply("Cannot Find Such User");
    }
  }
};
