import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireModule, FirebaseApp} from '@angular/fire';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup = new FormGroup({
    email : new FormControl('', [Validators.min(3),Validators.required, Validators.email]),
    clave : new FormControl('', [Validators.required, Validators.min(3)])
  });
  hide = true;

  get emailInput(){return this.login.get('email');}
  miemail = this.emailInput;
  get claveInput(){return this.login.get('clave');}
  miclave = this.claveInput;

  constructor(public auth: AngularFireAuth, public miFirebase: FirebaseApp, public Router : Router) { }

  ngOnInit(): void {
  }

  public loginBoton()
  {
    this.auth.signInWithEmailAndPassword(this.miemail.value, this.miclave.value)
    .then(user => {
      alert("Exito al ingresar");
      var token: string = JSON.parse(JSON.stringify(this.miFirebase.auth().currentUser)).stsTokenManager.accessToken;
      localStorage.setItem('token', token);
      this.Router.navigate(['home']);
    });
  }
}
