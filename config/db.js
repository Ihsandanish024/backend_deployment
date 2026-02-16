const mongoose = require("mongoose");

const connectDB = () =>{
    return new Promise ((resolve, reject) =>{
        mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log("database connected")
            resolve()
    
        }).catch((err)=>{
            reject(err);
        })
    })
}
module.exports = connectDB
