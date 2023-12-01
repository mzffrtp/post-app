const express = require("express")
const app = require("./index");
const database = require("./config/database");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 5173;
database();

app.listen(port, () => {
    console.log(`app listening on ${port} `)
})