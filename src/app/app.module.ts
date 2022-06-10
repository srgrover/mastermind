import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//PASO 2: Importamos los modulos de angular fire
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";

//PASO 3: Importamos la configuracion de Firebase
import { environment } from "src/environments/environment";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),  //PASO 4: Agregamos la importacion y hacemos referencia al apartado firebaseConfig en environment
    AngularFireAuthModule,                                        //
    AngularFirestoreModule                                        //
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
