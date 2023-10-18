import express from "express";
import handlebars from 'express-handlebars'
import path from 'path'

import { __dirname } from './utils.js'
import router from "./routes/index.router.js";
// import userRouter from "./routes/users.router.js";

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../public')))

app.engine('handlebars', handlebars.engine())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'handlebars')

app.use('/', router)

app.use((error, req, res, next) => {
    const message = `error 😕 ${error}`
    console.log(message)
    res.status(500).json({ status: 'error', message })
})

export default app