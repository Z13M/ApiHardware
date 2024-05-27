import express from "express"
import router from "./router/router.js"

const app = express()
const port = 3060

app.use(express.json())

app.use('/', router)

app.listen(port, ()=> {
    console.log('conectaido')
})