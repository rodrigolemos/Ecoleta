import { Request, Response } from 'express'
import { connection } from '../config/database'

class PointController {
  async create(request: Request, response: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items
    } = request.body
  
    const trx = await connection.transaction()
  
    const lastInserted = await trx('points').insert({
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      image: 'str_image'
    })
  
    const point_id = lastInserted[0]
  
    const pointItems = items.map((item: number) => {
      return {
        item,
        point_id
      }
    })
  
    await trx('point_items').insert(pointItems)
  
    return response.status(201).send({
      message: 'success'
    })
  }
}

export default new PointController()
