export interface StudentEntry {
    id: number;
    cedula: number;
    nombre: string;
    apellido: string;
    correo: string;
    carrera: string;
}


export type NonIdInfoStudentEntryId = Pick<StudentEntry, 'id' >

export type NonIdInfoStudentEntryName = Pick<StudentEntry, 'nombre' >

export type NonIdInfoStudentEntryCarreer = Pick<StudentEntry, 'carrera' >




