import path from 'path'
import cors from 'cors'
import express, { Express } from 'express'
import routes from './routes'

const app: Express = express()

app.use(cors())

app.use(express.json())

app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'src', 'uploads')))

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`App listening on port ${port}`))
