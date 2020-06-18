import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore : AngularFirestore) { }
  guardarUsuario(data) {
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("Usuarios")
            .add(data)
            .then(res => {}, err => reject(err));
    });
  }
  guardarLocal(data) {
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("Locales")
            .add(data)
            .then(res => {}, err => reject(err));
    });
  }
  getLocal()
  {
    return this.firestore.collection("Locales").snapshotChanges();
  }
  
}
