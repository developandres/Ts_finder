import { StudentEntry, NonIdInfoStudentEntryId, NonIdInfoStudentEntryName, NonIdInfoStudentEntryCarreer } from '../../types'
// => Importamos los tipos e interfaces creadas
import studentData from './students.json'
// => Importamos el JSON para acceder a la informacion

const Student: StudentEntry[] = studentData as StudentEntry[]
// => Asignamos la informacion a una constante

export const getEntries = (): StudentEntry[] => Student
// => Exportamos la informacion para su busqueda


// => Establecemos la logica para la busqueda por solo un parametro
export const getEntriesWithoutSensitiveInfoId = (): NonIdInfoStudentEntryId[] => {
    return Student.map(({id}) =>{
        return{
            id
        }
    })
}

// => Establecemos la logica para la busqueda por solo un parametro
export const getEntriesWithoutSensitiveInfoName = (): NonIdInfoStudentEntryName[] => {
    return Student.map(({nombre}) =>{
        return{
            nombre
        }
    })
}

// => Establecemos la logica para la busqueda por solo un parametro
export const getEntriesWithoutSensitiveInfoCarreer = (): NonIdInfoStudentEntryCarreer[] => {
    return Student.map(({carrera}) =>{
        return{
            carrera
        }
    })
}
export const addEntry = (): undefined => undefined


