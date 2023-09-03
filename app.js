const express = require('express')
const dotenv = require("dotenv");
// Load env vars
dotenv.config({ path: './config/config.env' });

const path = require('path')
const bodyParser = require('body-parser')
const CORS = require('cors')
const tasksRoutes = require('./routes/tasks')
const authRoutes = require('./routes/auth')
const db = require('./config/db')
const colors = require('colors')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/images", express.static(path.join("./uploads/images")))

app.use(CORS({ origin: 'http://localhost:4200' }))
app.use((req, res, next) => {
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Authorization"
    )
    next();
})

app.use("", tasksRoutes)
app.use("/user", authRoutes)

const port = process.env.PORT || 3000
app.listen(port, () => console.log('listening on port ' + port));
