const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    image:String,
    title:String,
    price:{
        amount:Number,
        currency:{
            type:String,
            default:"INR",
            enum:["INR","USD"]
        }
    }
})

const productModel = mongoose.model("Product",productSchema);

module.exports=productModel;