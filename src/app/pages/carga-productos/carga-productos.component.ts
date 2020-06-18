import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-carga-productos',
  templateUrl: './carga-productos.component.html',
  styleUrls: ['./carga-productos.component.css']
})
export class CargaProductosComponent implements OnInit {

  constructor(private firestoreService : FirestoreService) { }

  locales;   getLocales = () =>
      this.firestoreService
      .getLocal()
      .subscribe(res =>(this.locales = res));


      carga: FormGroup = new FormGroup({
        nombre : new FormControl('',[Validators.required]),
        marca : new FormControl('',[Validators.required]),
        stock : new FormControl('', [Validators.required]),
        tipo : new FormControl('', [Validators.required]),
        precio : new FormControl('',[Validators.required]),
      });

      get nombreInput(){return this.carga.get('nombre');}
      minombre = this.nombreInput;
      get marcaInput(){return this.carga.get('marca');}
      mimarca = this.marcaInput;
      get stockInput(){return this.carga.get('stock');}
      mistock = this.stockInput;
      get tipoInput(){return this.carga.get('tipo');}
      mitipo = this.tipoInput;
      get precioInput(){return this.carga.get('precio');}
      miprecio = this.precioInput;

  ngOnInit(): void {
    this.firestoreService.getLocal().subscribe(data=>
      {
        this.locales = data.map(
          e=>{
            return{
              id: e.payload.doc.id,
              isEdit: false,
              email :e.payload.doc.data()['email'],
              localidad :e.payload.doc.data()['localidad'],
              nombre: e.payload.doc.data()['nombre'],
              teleono: e.payload.doc.data()['telefono']
            };
          })
      })
      
  }


  public cargaBoton()
  {
    let producto = {};
    producto['nombre'] = this.minombre.value;
    producto['marca'] = this.mimarca.value;
    producto['stock'] = this.mistock.value;
    producto['tipo'] = this.mitipo.value;
    producto['precio'] = this.miprecio.value;
    producto['local'] = this.item;

    console.log(producto);
  }

}
