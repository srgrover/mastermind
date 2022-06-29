import { Timestamp } from "firebase/firestore";

export class Calificacion {
    //Ponemos las propiedades como en nuestra store database de firebase incluido el ID del documento
    id: string;
    username: string;
    nombreJugador: string;
    emailJugador: string;
    puntuacion: number;
    horaStart: Date;
    horaFin: Date;
    tiempo: number;
    fecha: Timestamp;
    dificultad: number;
    numMovimientos: number;
}
