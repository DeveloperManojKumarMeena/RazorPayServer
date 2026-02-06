const mongoose = require("mongoose")

const connectToDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGOOSE_URI).then(

            console.log("Connect To Data Base Successfully")
        )
    } catch (error) {
        console.log(error)
    }
}

module.exports=connectToDb