import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-carga-locales',
  templateUrl: './carga-locales.component.html',
  styleUrls: ['./carga-locales.component.css']
})
export class CargaLocalesComponent implements OnInit {
  carga: FormGroup = new FormGroup({
    nombre : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.email, Validators.required]),
    telefono : new FormControl('', [Validators.required, Validators.min(8)]),
    localidad : new FormControl('', [Validators.required]),
  });
  get emailInput(){return this.carga.get('email');}
  mimail = this.emailInput;
  get nombreInput(){return this.carga.get('nombre');}
  minombre = this.nombreInput;
  get telefonoInput(){return this.carga.get('telefono');}
  mitelefono = this.telefonoInput;
  get localidadInput(){return this.carga.get('localidad');}
  milocalidad = this.localidadInput;
  constructor(private firestoreService : FirestoreService) { }

  ngOnInit(): void {
  }

  public cargaBoton()
  {
    let local = {};
    local['email'] = this.mimail.value; 
    local['nombre'] = this.minombre.value;
    local['telefono'] = this.mitelefono.value;
    local['localidad'] = this.milocalidad.value;
    this.firestoreService.guardarLocal(local)
    .then(res => {
      alert("local guardado con exito");
    });
  }
}
