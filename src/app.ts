import express, { Express } from 'express'
import routes from './routes'

const app: Express = express()

app.use(express.json())

app.use(routes)

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`App listening on port ${port}`))
