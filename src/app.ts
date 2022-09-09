import express from 'express'

import blueprint from './blueprint'

const app = express()
app.use(express.json({ limit: '50mb' }))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(blueprint)

export default app
