import mongoose from "mongoose"

const userMongoose = mongoose.Schema({

    FirstName: {
        type: String,
        required: true
    }
    ,
    LastName: {
        type: String,
        required: true
    },
    UserName: {
        type: String,
        required: true
    }
    ,
    Email:{
        type:String,
        unique:true,
        required:true
    }
    ,
    Password:{
        type:String,
        required:true
    }
    ,
    Mobile:{type:String}





})


const modelofuser=mongoose.model("userData",userMongoose)

export default modelofuser