const express = require('express');
const mailer = require('./config/mailer-config');
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const { MAILER_EMAIL } = require('./config/server-config');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
