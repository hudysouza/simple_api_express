import 'reflect-metadata'
import { connection } from '@config/databaseConfig'
import { app } from './app'

connection.then(() => {
  console.log('Conexao Iniciada com Banco de Dados')
}).catch(console.log)

app.listen(3000, () => {
  console.log('Servidor Iniciado')
})
