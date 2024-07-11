/* Un estudiante se concoce su nombre y su nota final 
* tambien tenemos la calificacion en letras: (A: 90-100, B: 80-89, C: 70-79, D:60-69 Y F:0-59) 
* el programa debe calcular la calificacion de un estudiante en letras 
* debe mostrar el nombre, la nota final y la calificacion en letras*/
 import CL_Estudiante from "./CL_Estudiante.js";
 import CL_IEstudiante from "./CL_IEstudiante.js";

 let iestud = new CL_IEstudiante(),
        n=iestud.leerNombre(),
        nf=iestud.leerNotaFinal(),
 
    estud = new CL_Estudiante(n, nf),
    salida = document.getElementById("salida");

    salida.innerHTML = iestud.reporteEstudiante(estud.nombre,estud.notaFinal,estud.CalcularCalif());
