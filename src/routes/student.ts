import express from 'express'
const app = express()
import * as studentServices from '../services/studentServices'
app.use(express.json())
// => Importaciones para el funcionamiento de las rutas

app.get('/id', (_req, res) => {
  console.log("Alguien esta viendo los id de los estudiantes")
  res.send(studentServices.getEntriesWithoutSensitiveInfoId())
})

// => Ruta GET que trae un archivo (studentServices => studentServices.ts) y de ella
// => trae una interfaz (getEntriesWithoutSensitiveInfoId) 
app.get('/name', (_req, res) => {
  console.log("Alguien esta viendo los nombres de los estudiantes")
  res.send(studentServices.getEntriesWithoutSensitiveInfoName())
})

// => Ruta GET que trae un archivo (studentServices => studentServices.ts) y de ella
// => trae una interfaz (getEntriesWithoutSensitiveInfoName) 
app.get('/carreer', (_req, res) => {
  console.log("Alguien esta viendo las carreras de los estudiantes")
  res.send(studentServices.getEntriesWithoutSensitiveInfoCarreer())
})

// => Ruta GET que trae un archivo (studentServices => studentServices.ts) y de ella
// => trae una interfaz (getEntriesWithoutSensitiveInfoCarreer) 
app.post('/', (_req, res) => {
  res.send('saving a movie')
})

export default app
