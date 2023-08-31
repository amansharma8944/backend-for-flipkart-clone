import mongoose from "mongoose"

export const connect =async()=>{


    try {
        let aman=await mongoose.connect(`mongodb+srv://amandeepsharma28032004:amandeep@project1.y98wgwv.mongodb.net/flipkart`, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("connection successfull")
    } catch (error) {
        console.log("error while connecting database")
    }
}