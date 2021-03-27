
import express, { Express, Request, Response } from 'express'

const app: Express = express()

app.get('/', (_: Request, response: Response) => {
  return response.status(200).send({
    message: 'Hello world!'
  })
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`App listening on port ${port}`))
