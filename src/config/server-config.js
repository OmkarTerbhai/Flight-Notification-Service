const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    MAILER_EMAIL: process.env.MAILER_EMAIL,
    MAILER_PASSWORD: process.env.MAILER_PASSWORD
}