const {TicketRepository} = require('../repositories');
const {MailerConfig} = require('../config')

const ticketRepository = new TicketRepository();
async function sendEmail(mailFrom, mailTo, subj, text) {
    try {
        const response = await MailerConfig.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: subj,
            text: text
        });
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function createTicket(data) {
    try {
        const response = await ticketRepository.create(data);
        return response;
    } catch (error) {
        
    }
}

async function getPendingEmails() {
    const response = await ticketRepository.getPendingTickets();
    return response;
}
module.exports = {
    sendEmail,
    createTicket,
    getPendingEmails
}