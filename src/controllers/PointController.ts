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
  
    const insertedIds = await trx('points').insert(point, 'id')
  
    const point_id = insertedIds[0]
  
    const pointItems = items.map((item_id: number) => {
      return {
        item_id,
        point_id
      }
    })
  
    await trx('point_items').insert(pointItems)

    await trx.commit()
  
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

    const items = await connection('items')
    .join('point_items', 'items.id', '=', 'point_items.item_id')
    .where('point_items.point_id', id)
  
    return response.status(200).send({ point, items })
  }

  async index(request: Request, response: Response) {
    const { city, uf, items } = request.query

    const parsedItems = String(items).split(',').map(item => Number(item.trim()))

    const points = await connection('points')
    .join('point_items', 'points.id', '=', 'point_items.point_id')
    .whereIn('point_items.item_id', parsedItems)
    .where('city', String(city))
    .where('uf', String(uf))
    .distinct()
      .select('points.*')

    return response.status(200).send(points)
  }
}

export default new PointController()
