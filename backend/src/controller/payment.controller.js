const Razorpay = require('razorpay');
const Payment = require('../module/payment.module');

const razorpay = new Razorpay({
    key_id:"rzp_test_SCsxzWnzJfwBU9",
    key_secret:process.env.RAZORPAY_KEY_SECRET
})


const createOrderController =async (req, res) => {

  const orderfrontend = req.body

  const options = {
    amount: orderfrontend.price.amount, // amount in smallest currency unit
    currency: "INR",
  };
  try {
    const order = await razorpay.orders.create(options);
    res.send(order);

    const newPayment = await Payment.create({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      status: 'pending',
    });
    
    return res.status(201).json({
        "Message" : "oder Genrated successfull"
    })

  } catch (error) {
    res.status(500).send('Error creating order');
  }
};


module.exports={createOrderController}