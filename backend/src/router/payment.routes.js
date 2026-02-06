const express = require('express');
const { createOrderController } = require('../controller/payment.controller');

const paymentRouter = express.Router();


paymentRouter.post('/createOrder', createOrderController)

module.exports= paymentRouter