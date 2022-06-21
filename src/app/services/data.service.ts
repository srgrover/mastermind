import { Injectable } from '@angular/core';

//Importamos los modulos para DB con firebase
import { AngularFirestore } from "@angular/fire/compat/firestore";
//Importamos nuestro modelo
import { Calificacion } from "../models/calificacion.model";

@Injectable({
  providedIn: 'root'
})

export class DataService {
  calificacionCollection: any

  constructor(private angularfirestore: AngularFirestore) {
    this.calificacionCollection = this.angularfirestore.collection("calificacion")
  }

  //Creamos métodos para el CRUD

  getCalificaciones(){
    var t = this.angularfirestore
      .collection("calificacion")
      .snapshotChanges();

      return t
  }

  getCalificacionById(id: string){
    return this.calificacionCollection
      .doc(id)
      .valueChanges();
  }

  createCalificacion(calificacion: Calificacion){
    return new Promise<any>((resolve, reject) => {
      this.calificacionCollection
        .add(calificacion)
        .then((response) => {
          console.log(response);
        },
        (error) => {
          reject(error);
        })
    })
  }

  updateCalificacion(calificacion: Calificacion, id: string){
    return this.calificacionCollection
      .doc(id)
      .update(calificacion);
  }

  deleteCalificacion(calificacion: Calificacion){
    return this.calificacionCollection
      .doc(calificacion.id)
      .delete()
  }
}
