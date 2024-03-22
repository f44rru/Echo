const TelegramBot = require('node-telegram-bot-api');

const token = '7142619678:AAFG3JtZhnYbLmNyxCttkeVh7EpOf-sQL_s';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/hi|Hello/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Hello, how are you?');
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, msg.text);
});

bot.on('polling_error', (error) => console.log(error));

bot.on('error', (error) => console.log(error));
