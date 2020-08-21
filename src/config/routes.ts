import { Router } from 'express'
import { getOne, getAll, post, put, deletePessoa } from 'src/useCases/pessoa/pessoaController'

const routes = Router()

routes.get('/api/pessoa', getAll)
routes.get('/api/pessoa/:id', getOne)
routes.post('/api/pessoa', post)
routes.put('/api/pessoa/:id', put)
routes.delete('/api/pessoa/:nome', deletePessoa)

export { routes }
