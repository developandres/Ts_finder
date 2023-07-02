import { StudentEntry, NonIdInfoStudentEntryId, NonIdInfoStudentEntryName, NonIdInfoStudentEntryCarreer } from '../../types'
import studentData from './students.json'

const Student: StudentEntry[] = studentData as StudentEntry[]

export const getEntries = (): StudentEntry[] => Student

export const getEntriesWithoutSensitiveInfoId = (): NonIdInfoStudentEntryId[] => {
    return Student.map(({id}) =>{
        return{
            id
        }
    })
}
export const getEntriesWithoutSensitiveInfoName = (): NonIdInfoStudentEntryName[] => {
    return Student.map(({nombre}) =>{
        return{
            nombre
        }
    })
}
export const getEntriesWithoutSensitiveInfoCarreer = (): NonIdInfoStudentEntryCarreer[] => {
    return Student.map(({carrera}) =>{
        return{
            carrera
        }
    })
}
export const addEntry = (): undefined => undefined


