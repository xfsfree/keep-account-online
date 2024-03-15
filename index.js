const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.on("ready", () => {
  // Set the bot's status to "idle" when it's ready
  bot.editStatus("idle");
  console.log("Bot is ready!");
});

bot.connect(); // Get the bot to connect to Discord
