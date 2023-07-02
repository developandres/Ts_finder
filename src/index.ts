import express from 'express'
import Students from './routes/student'
const app = express()
import * as studentServices from './services/studentServices'
app.use(express.json())
// => Importaciones para las rutas y acceso a documentos

const PORT = 5000
// => Establecemos el puerto (5000)

app.use('/api/students', Students)
// => Enrutamiento a el archivo de las rutas de busqueda

app.get('/ping', (_req, res) => {
  console.log('someone pinged here')
  res.send(studentServices.getEntriesWithoutSensitiveInfoId())
})
// => Ruta que notifica al ser accedida
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})  
// => Ruta de escucha que nos dice el puerto y si accedimos correctamente
