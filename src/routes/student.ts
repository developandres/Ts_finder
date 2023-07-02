import express from 'express'
const app = express()
import * as studentServices from '../services/studentServices'

app.use(express.json())

app.get('/id', (_req, res) => {
  res.send(studentServices.getEntriesWithoutSensitiveInfoId())
})
app.get('/name', (_req, res) => {
  res.send(studentServices.getEntriesWithoutSensitiveInfoName())
})
app.get('/carreer', (_req, res) => {
  res.send(studentServices.getEntriesWithoutSensitiveInfoCarreer())
})
app.post('/', (_req, res) => {
  res.send('saving a movie')
})

export default app
