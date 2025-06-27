import { Hono } from '@hono/hono'
import { cors } from '@hono/hono/cors'
import api from './api/index.ts'

const app = new Hono()

app.use('*', cors())

app.route('/', api)

app.get('/', (c) => {
  return c.text('Hello! Sheets to JSON here.')
})

Deno.serve(app.fetch)
