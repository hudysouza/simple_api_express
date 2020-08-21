import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Pessoa } from '@entity/pessoa'

function post (req: Request, res: Response): void {
  const pessoaRepository = getRepository(Pessoa)

  const pessoa = pessoaRepository.create(req.body)
  pessoaRepository.save(pessoa).then(ret => {
    res.send(ret)
  })
}

function getAll (req: Request, res: Response): void {
  const pessoaRepository = getRepository(Pessoa)

  pessoaRepository.find().then(pessoas => {
    res.send(pessoas)
  })
}

function getOne (req: Request, res: Response): void {
  const pessoaId = req.params.id
  const pessoaRepository = getRepository(Pessoa)

  pessoaRepository.findOne(pessoaId).then(pessoas => {
    res.send(pessoas)
  })
}

function put (req: Request, res: Response): void {
  const pessoaId = req.params.id
  const pessoa = req.body
  const pessoaRepository = getRepository(Pessoa)

  pessoaRepository.update(pessoaId, pessoa).then(ret => {
    res.send(ret)
  }).catch(err => res.status(400).send(err))
}

function deletePessoa (req: Request, res: Response): void {
  const pessoaNome = req.params.nome
  const pessoaRepository = getRepository(Pessoa)

  pessoaRepository.delete({ firstName: pessoaNome }).then(() => {
    res.send()
  })
}

export { getAll, getOne, post, put, deletePessoa }
