import express from 'express'
import * as Path from 'node:path'

import ghibliRoutes from './routes/ghibli.ts'
import ghibliCharRoutes from './routes/ghibli-chars.ts'
import ghibliPlacesRoutes from './routes/ghibli-places.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/ghibli', ghibliRoutes)
server.use('/api/v1/ghibli/characters', ghibliCharRoutes)
server.use('/api/v1/ghibli/places', ghibliPlacesRoutes)

// when routes have not been made yet, consolelogs can be made here that call those Fns to check their functionality.

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
