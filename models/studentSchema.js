const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    studentName:{
        type:String,
        required:true
    },
    contact:{
        type:String,
    },
    cnic:{
        type:String,
        unique:true
    }
})


const UserModel = mongoose.model("users",studentSchema)

module.exports = UserModel