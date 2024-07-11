export default class CL_IEstudiante {
    leerNombre() {
        return prompt("Ingresa el nombre del estudiante");
    }
    leerNotaFinal(){
        return prompt("Ingresa la nota final del estudiante");
    }

    reporteEstudiante(n, nf, c) {
        return ` 
        <br> Nombre: ${n}
        <br> Nota Final: ${nf}
        <br> Calificacion: ${c}
         `
    }

}