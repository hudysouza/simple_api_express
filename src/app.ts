import express from 'express'
import bodyParser from 'body-parser'
import { routes } from '@config/routes'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(routes)

export { app }
