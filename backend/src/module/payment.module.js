const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
  },
  paymentId: {
    type: String,
  },
  signature: {
    type: String,
  },
   price:{
        amount:Number,
        currency:{
            type:String,
            default:"INR",
            enum:["INR","USD"]
        }
    },
satus: {
    type: String,
    default: 'pending',
    enum:['pending' , 'completed' , 'failed']
  },
}, { timestamps: true });

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;