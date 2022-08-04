const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running.`)
})