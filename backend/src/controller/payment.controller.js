const Razorpay = require('razorpay');
const Payment = require('../module/payment.module');
const productModel = require('../module/product.module');

const razorpay = new Razorpay({
    key_id:"rzp_test_SCsxzWnzJfwBU9",
    key_secret:"de7sXtrLH2VZd2FJ5Huu4dIR"
})


const createOrderController =async (req, res) => {

  const {id} = req.body

  const product = await productModel.find({
    _id:id
  })

  console.log( "jai ho : "+ product[0].title)

  const options = {
    amount: product[0].price.amount, // amount in smallest currency unit
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
    console.log(error)
  }
};


module.exports={createOrderController}