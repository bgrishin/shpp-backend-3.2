import express from 'express'
const app = express()

import dotenv from 'dotenv'
dotenv.config();

const port: number = 3000

import MainRoute from "./routes/mainRoute";
import adminRoute from "./routes/adminRoute";

app.use('/admin', adminRoute)
app.use(MainRoute)

app.set('views', __dirname + '/views/templates/')
app.set('view engine', 'pug')

app.use(express.json())
app.use(express.static('public'));
try {
    app.listen(port, () => {
        console.log("\x1b[34m", '[INFO]', "\x1b[0m",`Server started on port - ${port}`)
    });
} catch (e) {
    console.log(`Connection crashed with: ${e}`)
}