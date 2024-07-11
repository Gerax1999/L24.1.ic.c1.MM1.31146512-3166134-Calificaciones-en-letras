export default class CL_Estudiante {
    constructor(nombre, notaFinal) {
        this.nombre = nombre;
        this.notaFinal = notaFinal;       
    }
    set nombre(n){
        this._nombre = n;
    }
    get nombre(){
        return this._nombre;
    }
    set notaFinal(nf){
        this._notaFinal = +nf;
    }
    get notaFinal(){
        return this._notaFinal;
    }

    CalcularCalif() {
        if (this.notaFinal >= 90 && this.notaFinal <= 100) {
            return "A";
        } else if (this.notaFinal >= 80 && this.notaFinal <= 89) {
            return "B";
        } else if (this.notaFinal >= 70 && this.notaFinal <= 79) {
            return "C";
        } else if (this.notaFinal >= 60 && this.notaFinal <= 69) {
            return "D";
        } else if (this.notaFinal >= 0 && this.notaFinal <= 59) {
            return "F";
        }
    }
}