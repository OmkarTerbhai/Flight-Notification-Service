const express = require('express');
const mailer = require('./config/mailer-config');
const { ServerConfig } = require('./config');
const amqplib = require('amqplib');
const apiRoutes = require('./routes');
const { MAILER_EMAIL } = require('./config/server-config');
const { EmailService } = require('./services');

async function connectQueue() {
    try {
        const connection = await amqplib.connect("amqp://localhost");
        const channel = await connection.createChannel();
        await channel.assertQueue("noti-queue");

        channel.consume("noti-queue", async(data) => {
            console.log(`${Buffer.from(data.content)}`);
            const object = JSON.parse(`${Buffer.from(data.content)}`);
            await EmailService.sendEmail("omkar1992000@gmail.com", object.recipientEmail, object.subject, object.text);
            channel.ack(data);
        });
    } catch (error) {
        console.log(error);
    }
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    await connectQueue();
});
