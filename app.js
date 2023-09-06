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

const corsOptions = {
    origin: ['https://task-tracker-fe-mu.vercel.app', 'http://localhost:4200'], // Replace with your actual frontend domain
    // origin: 'http://localhost:4200', // Replace with your actual frontend domain
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // If you are using cookies or sessions
    optionsSuccessStatus: 204, // Some legacy browsers (IE11) choke on a 204 response, so 204 should be returned
};
app.use(CORS(corsOptions));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


// app.use(CORS({ origin: 'http://localhost:4200' }))
// app.use((req, res, next) => {
//     res.setHeader(
//         "Access-Control-Allow-Headers",
//         "Authorization"
//     )
//     next();
// })

app.use("", tasksRoutes)
app.use("/user", authRoutes)

const port = process.env.PORT || 3000
app.listen(port, () => console.log('listening on port ' + port));
