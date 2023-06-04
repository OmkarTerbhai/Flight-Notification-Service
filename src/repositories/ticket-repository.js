const { StatusCodes } = require('http-status-codes');
const { Op } = require('sequelize');
const { Ticket } = require('../models');
const CrudRepository = require('./crud-repository');

class TicketRepository extends CrudRepository {
    constructor() {
        super(Ticket);
    }

    async getPendingTickets() {
        const response = await this.model.findAll({
            where:{
                status: 'Pending'
            }
        });
        return response;
    }
}

module.exports = TicketRepository;