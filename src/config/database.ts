require('dotenv').config()
import knex from 'knex'

export const connection = knex({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING
})
