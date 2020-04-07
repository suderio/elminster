const eris = require('eris');

const { token } = require('./config.json');

// Create a Client instance with our bot token.
const bot = new eris.Client(token);

// Configure logger settings
var logger = require('winston');
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'warn';

const rpgDiceRoller = require('rpg-dice-roller/lib/umd/bundle.js');
const roller = new rpgDiceRoller.DiceRoller();

// When the bot is connected and ready, log to console.
bot.on('ready', function (evt) {
    logger.info('Connected');
});

// Every time a message is sent anywhere the bot is present,
// this event will fire and we will check if the bot was mentioned.
// If it was, the bot will attempt to respond with "Present".
bot.on('messageCreate', async (msg) => {
  const botWasMentioned = msg.mentions.find(
    mentionedUser => mentionedUser.id === bot.user.id,
  );
  if (botWasMentioned) {
    try {
      await msg.channel.createMessage('Present');
    } catch (err) {
      // There are various reasons why sending a message may fail.
      // The API might time out or choke and return a 5xx status,
      // or the bot may not have permission to send the
      // message (403 status).
      logger.warn('Failed to respond to mention.');
      logger.warn(err);
    }
  }
});

bot.on('messageCreate', async (msg) => {
  // Our bot needs to know if it will execute a command
  // It will listen for messages starting with `!e`
  logger.info(msg.content);

  const elminsterCalled = msg.content.substring(0, 2) == '!e'
  if (elminsterCalled) {
    var args = msg.content.split(' ');
    var cmd = args[1];
    var roll = roller.roll(cmd);
    logger.info('result ' + roll);
    try {
      await msg.channel.createMessage(`You rolled: ${roll}`)
    } catch (err) {
      logger.warn('I understand dice rolls and shit, not this nonsense gibberish jibber-jabber gobbledygook');
      logger.warn(err);
    }
  }
});

bot.on('error', err => {
  logger.warn(err);
});

bot.connect();
