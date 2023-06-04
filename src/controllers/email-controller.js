const { StatusCodes } = require('http-status-codes');
const {EmailService} = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');



async function create(req, res) {
    try {
        const response = await EmailService.createTicket(req.body);
        SuccessResponse.message = "Created new ticket";
        SuccessResponse.data = response;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Could not create ticket";
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

module.exports = {
    create
}