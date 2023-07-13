import MondoDbConections from './dbConected'
import express from 'express'
import morgan from 'morgan'

//? Db intance
const dbConectios = new MondoDbConections()


const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('Hello From /')
})


app.listen(PORT, () => {
    dbConectios.main()
        .then(()=>console.log(`http://localhost:/${PORT}`))
        .catch((e)=>console.log(`Error on app.ts ${e}`))
})