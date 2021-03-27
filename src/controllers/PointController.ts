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

    const point = {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      image: 'str_image'
    }
  
    const lastInserted = await trx('points').insert(point)
  
    const point_id = lastInserted[0]
  
    const pointItems = items.map((item: number) => {
      return {
        item,
        point_id
      }
    })
  
    await trx('point_items').insert(pointItems)
  
    return response.status(201).send({
      id: point_id,
      ...point      
    })
  }

  async show(request: Request, response: Response) {
    const { id } = request.params

    const point = await connection('points').where('id', id).first()

    if (!point) {
      return response.status(404).send({
        message: 'Point not found'
      })
    }

    return response.status(200).send(point)
  }
}

export default new PointController()
