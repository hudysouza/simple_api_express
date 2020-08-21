import { createConnection } from 'typeorm'
import { Pessoa } from '@entity/pessoa'

const connection = createConnection({
  type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'sa',
  password: 'KNLM90@admin',
  database: 'teste',
  entities: [Pessoa],
  synchronize: true,
  logging: false,
  options: {
    enableArithAbort: true
  }
})

export { connection }
