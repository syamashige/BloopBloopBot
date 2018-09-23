const builder = require('botbuilder');
const env = process.env;

function init(app) {

  // Create chat bot and binding

  const connector = new builder.ChatConnector({
    appID: env.BOT_APP_ID,
    appPassword: env.BOT_APP_PASSWORD,

  });

  app.post('/api/fish-response', connector.listen());
  const bot = new builder.UniversalBot(connector, (session) => {

    session.send('Sorry, I did not understand')
  })

  // Print out help message

  bot.dialog('Help', (session) => {
    session.endDialog(`Hi! this is a helpl message`);
  }).triggerAction({
    matches: `Help`,
  });


}

module.exports.init = init;