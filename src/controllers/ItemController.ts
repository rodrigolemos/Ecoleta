import { Request, Response } from 'express'
import { connection } from '../config/database'

class ItemController {
  async index(_: Request, response: Response) {
    const items = await connection('items').select('*')

    const serializedItems = items.map(item => {
      return {
        ...item,
        image_url: `http://localhost:3000/uploads/${item.image}`
      }
    })

    return response.status(200).send(serializedItems)
  }
}

export default new ItemController()
