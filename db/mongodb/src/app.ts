import run from "./dbConected";
import express from 'express'
import morgan from 'morgan'

const app = express()
const PORT = process.env.PORT
const URI = process.env.URI

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('Hello From /')
})


app.listen(PORT, () => {
    console.log(`URI: ${URI}`)
    run()
    console.log(`http://localhost:/${PORT}`)
})