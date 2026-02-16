const mongoose = require("mongoose");

const SectionSchema = mongoose.Schema({
    title:String
})

const SectionModel = mongoose.model("sections",SectionSchema)
module.exports = SectionModel