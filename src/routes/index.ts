import { Router, Request, Response } from 'express'

const routes = Router()

routes.get('/', (_: Request, response: Response) => {
  return response.status(200).send({
    message: 'Hello world!'
  })
})

export default routes
