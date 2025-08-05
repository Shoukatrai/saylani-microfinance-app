import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    cnic: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required : true,
        unique: true
    },
    contactNbr: {
        type: String,
        default : null
    },
    address: {
        type: String,
        default : null
    },
    password: {
        type : String,
        required : true
    },
    userType: {
        type : String,
        default : "user"
    }
}, {timestamps : true})

export default mongoose.model("User" , userSchema)