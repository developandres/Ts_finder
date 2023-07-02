import express from 'express'

import Students from './routes/student'
const app = express()
import * as studentServices from './services/studentServices'
app.use(express.json())

const PORT = 5000

app.use('/api/students', Students)

app.get('/ping', (_req, res) => {
  console.log('someone pinged here')
  res.send(studentServices.getEntriesWithoutSensitiveInfoId())
})
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})  
