import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ContacService } from 'src/app/service/contac.service';
import { io } from 'socket.io-client'; //se importa para unir con el back
import { config } from 'src/app/config/config'; // se llama config para unir el back
import { WebSocketService } from 'src/app/service/webSocket';//se llama al servicio wesocketServices en private line 25

const socket = io(config.url) // se llama config.url

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup
  name: AbstractControl
  numJugador: AbstractControl
  nacionalidad: AbstractControl
  altura: AbstractControl
  posicion: AbstractControl
  fechaNacimiento: AbstractControl
  localia: AbstractControl
  equipos: AbstractControl
  
  sub = false

  constructor(private fb: FormBuilder, // formularios reactivos
    private contacService: ContacService,
    private webSocket: WebSocketService ) { //se llama al servicio wesocketServices
    this.form = this.fb.group({
      name: ['', Validators.required],
      posicion: ['delantero', Validators.required],
      nacionalidad: ['', Validators.required],
      numJugador: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      altura: ['', Validators.required],
      localia: ['local', Validators.required],
      equipos :['', Validators.required],
    })
    this.name = this.form.controls['name']
    this.posicion = this.form.controls['posicion']
    this.nacionalidad = this.form.controls['nacionalidad']
    this.numJugador = this.form.controls['numJugador']
    this.fechaNacimiento = this.form.controls['fechaNacimiento']
    this.altura = this.form.controls['altura']
    this.localia = this.form.controls['localia']
    this.equipos = this.form.controls['equipos']
    // this.obtenerRespuesta()// se llama para que se vea la informacion 
  }

  ngOnInit(): void {
  }
  get f() {
    return this.form.controls
  }
  
  sendMessage() { // enlace con bd envia infomracion 
    if (this.form.invalid)
      return //retorna un falso
        this.contacService.save(this.form.value).subscribe((res: any) => {
      if (res.status){
      this.webSocket.saveNewContac(this.form.value)
      }
    })
  }
}

  