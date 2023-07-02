// => Creamos una interfaz con los datos y los tipo de los mismos...
// => para manejarlos en otros objetos
export interface StudentEntry {
    id: number;
    cedula: number;
    nombre: string;
    apellido: string;
    correo: string;
    carrera: string;
}


// => Creamos un tipo que toma como referencia la interfaz(StudentEntry)...
// => y seleccionamos que dato deseamos mostrar (id)
export type NonIdInfoStudentEntryId = Pick<StudentEntry, 'id' >

// => Creamos un tipo que toma como referencia la interfaz(StudentEntry)...
// => y seleccionamos que dato deseamos mostrar (nombre)
export type NonIdInfoStudentEntryName = Pick<StudentEntry, 'nombre' >

// => Creamos un tipo que toma como referencia la interfaz(StudentEntry)...
// => y seleccionamos que dato deseamos mostrar (carrera)
export type NonIdInfoStudentEntryCarreer = Pick<StudentEntry, 'carrera' >




