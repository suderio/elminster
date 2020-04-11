const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Configure logger settings
var logger = require('winston');
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

// Configure dice roller
const rpgDiceRoller = require('rpg-dice-roller/lib/umd/bundle.js');
const roller = new rpgDiceRoller.DiceRoller();

// Configure dice sound
const fs = require('fs');
const broadcast = client.voice.createBroadcast();


client.on('message', msg => {
  logger.debug(msg.content);
  // Our bot needs to know if it will execute a command
  // It will listen for messages starting with `!e`
  const elminsterCalled = msg.content.substring(0, 2) == '!e'
  if (elminsterCalled) {
    var args = msg.content.slice(msg.content.indexOf(" "));
    var cmd = args.replace(/\ /g, "").toLowerCase();
    try {
      var roll = roller.roll(cmd);
    } catch {
      msg.reply('I understand dice rolls and shit, not this nonsense gibberish jibber-jabber gobbledygook');
      return;
    }
    try {
      // Send the attachment in the message channel
      const attachment = new Discord.MessageAttachment('./assets/48.png');
      msg.reply(`you rolled: ${roll}`, attachment);
      broadcast.play('dice.mp3');
    } catch (err) {
      logger.warn(err);
    }
  } 
});

const { token } = require('./config.json');
client.login(token);

