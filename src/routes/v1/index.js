const express = require('express');

const { InfoController } = require('../../controllers');
const emailRoutes = require('./email-routes')

const router = express.Router();

router.get('/info', InfoController.info);

router.use('/ticket', emailRoutes);

module.exports = router;