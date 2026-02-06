const productModel = require('../module/product.module')

async function createProduct(req,res){
    const {image , title,price:{amount , currency} } = req.body;
    try {
        const product = await productModel.create({
            image,title,price:{amount,currency}
        })
        return res.status(201).json({
            "Message": "Product Created Successfully",
            product
        })
        
    } catch (error) {
      return  res.status(400).json({
        "Message":"Mogodb not Conneced Due to Error: ",error
      })
    }
}

async function getproductController(req,res){
   try {
       const product = await productModel.find()

    return res.status(201).json({
        "message":"product fetch successfully",
        product
    })
   } catch (error) {
    console.log(error)
   }
 
}

module.exports={createProduct ,getproductController}