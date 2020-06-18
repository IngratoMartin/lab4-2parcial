import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(public auth: AngularFireAuth, private firestoreService : FirestoreService) { }

  ngOnInit(): void {
  }
  registro: FormGroup = new FormGroup({
    email : new FormControl('', [Validators.min(3),Validators.required, Validators.email]),
    nombre : new FormControl('', [Validators.min(3), Validators.required]),
    clave : new FormControl('', [Validators.required, Validators.min(3)])
  });
  hide = true;

  get emailInput(){return this.registro.get('email');}
  miemail = this.emailInput;
  get nombreInput(){return this.registro.get('nombre');}
  minombre = this.nombreInput;
  get claveInput(){return this.registro.get('clave');}
  miclave = this.claveInput;

  public registroBoton()
  {
    this.auth.createUserWithEmailAndPassword(this.miemail.value, this.miclave.value)
      .then(data => {
        alert("Usuario creado con exito, ya puede loguearse");
      }
      )
      .catch(e => {
        alert(e);
      })

      let usuario = {};
      usuario['email'] = this.miemail.value;
      usuario['nombre'] = this.minombre.value;
    
      this.firestoreService.guardarUsuario(usuario);
  }

}
