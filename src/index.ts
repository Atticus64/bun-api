import { Elysia } from 'elysia'

import data from '../data/projects.json' assert { "type": "json" }
import repos from '../data/repos.json' assert { "type": "json" }

const app = new Elysia()

app.get('/', () => 'test')

app.get('/api', () => {
  return data
})

app.get('/api/repos', () => {
  return repos
})

app.listen(8000)


console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
