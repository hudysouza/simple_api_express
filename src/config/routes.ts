import { Router } from 'express'
import * as pessoaController from 'src/useCases/pessoa/pessoaController'

const routes = Router()

routes.get('/api/pessoa', pessoaController.getAllPessoas)
routes.get('/api/pessoa/:id', pessoaController.getOnePessoa)
routes.post('/api/pessoa', pessoaController.createPessoa)
routes.put('/api/pessoa/:id', pessoaController.updatePessoa)
routes.delete('/api/pessoa/:nome', pessoaController.deletePessoa)

export { routes }
