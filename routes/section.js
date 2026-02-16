const express = require('express')
const { ResponseObj } = require('../config/helpers')
const SectionModel = require('../models/section')

const Router = express.Router()

Router.get("/", async (req, res) => {
    try {
        const result = await SectionModel.find({})
        res.json(ResponseObj(true, "Success", result))
    } catch (error) {
        res.status(400).json(ResponseObj(false, "Internal Server Error", null, error))
    }
})


module.exports = Router