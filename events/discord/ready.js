const register = require('../../utils/slashsync');
module.exports = async (client) => {
  await register(client, client.register_arr.map((command) => ({
    name: command.name,
    description: command.description,
    options: command.options,
    type: 'CHAT_INPUT'
  })), {
    debug: true
  });
  // Register slash commands - ( If you are one of those people who read the codes I highly suggest ignoring this because I am very bad at what I am doing, thanks LMAO )
  console.log(`[ / | Slash Command ] - ✅ Loaded all slash commands!`)
  let invite = `https://discord.com/api/oauth2/authorize?client_id=1023579031293149355&permissions=8&scope=bot`;
  console.log(`[STATUS] ${client.user.tag} is now online!\n[INFO] Bot by Mahmodul Gaming https://www.youtube.com/channel/UCl2hKZ_0h1tx8HSuZA4-KYw\n[Invite Link] ${invite}`);
  const activities = [`All Giveaways Running Smoothly`, `Mahmodul Gaming on YouTube`];
  setInterval(() => {
    let activity = activities[Math.floor(Math.random() * activities.length)];
    client.user.setActivity(activity, { type: "WATCHING" });
  }, 20000);

};
