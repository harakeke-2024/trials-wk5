import express from 'express'
import * as Path from 'node:path'

import ghibliRoutes from './routes/ghibli.ts'
import ghibliCharRoutes from './routes/ghibli-chars.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/ghibli', ghibliRoutes)
server.use('/api/v1/ghibli/characters', ghibliCharRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
