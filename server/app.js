require('dotenv').config();
const cors = require('cors');
const express = require('express');
const config = require('./config/serverConfig');

const app = express();

const PORT = process.env.PORT || 3000;

const indexRouter = require('./routes/index.routes');

config(app);
app.use(cors());

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`App has been started in port ${PORT}...`);
});
