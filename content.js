const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8989;
const fishbot = require('./controller/fish-response');

require('dotenv').config();

fishbot.init(app);

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

//middleware
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  console.log(err.stack);

  return res.status(500).json({
    message: err.message
  });
});


app.get('/', (req, res) => res.send('Hello World!'));



app.listen(PORT, () => {
  console.log(`Bleep Bloop listening on port ${PORT}!`)
})