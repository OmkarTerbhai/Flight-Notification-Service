const nodemailer = require('nodemailer');

const {MAILER_EMAIL, MAILER_PASSWORD} = require('./server-config');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: MAILER_EMAIL,
        pass: MAILER_PASSWORD
    }
    });

    module.exports = transporter;