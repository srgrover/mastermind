export class Calificacion {
    //Ponemos las propiedades como en nuestra store database de firebase incluido el ID del documento
    id: string;
    username: string;
    nombreJugador: string;
    emailJugador: string;
    puntuacion: number;
    tiempo: number;
    fecha: Date;
    dificultad: number;
    numMovimientos: number;
}
