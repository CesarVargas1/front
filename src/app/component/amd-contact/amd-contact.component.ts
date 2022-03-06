import { Component, OnInit } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { config } from 'src/app/config/config';

import { ContacService } from 'src/app/service/contac.service';

@Component({
  selector: 'app-amd-contact',
  templateUrl: './amd-contact.component.html',
  styleUrls: ['./amd-contact.component.css']
})
export class AmdContactComponent implements OnInit {
  updatedSend: any
  reverseData: any
  listContact: any[] = []
  config = config
  socket: Socket

  constructor(private conctacService:  ContacService) {
    this.socket = io(this.config.url)
    this.obtenerRespuesta()
  }

  ngOnInit(): void { // cuando la aplicacion cargue el evento  ngOnInit llama la funcion getContact
    this.getContacts() //se llama la funcion getContacts
  }

  obtenerRespuesta() {
    this.socket.on('emitiendo', (data) => {
      this.getContacts()
    })
  }

  getContacts(){  // se crea la funcion getContacts
    this.conctacService.get().subscribe((res:any)=>{
      res.forEach((i:any) => {  // get contat.service.ts line 34
        i.textAction = "Editar"
      });
      this.listContact = res
    })
  }

  search(event: any){ // metodo busqueda
    this.conctacService.search({ name: event.target.value }).
    subscribe((res:any)=>{
      res.forEach((i:any) => {
        i.status = false
        i.textAction = "Editar" // se agrega campo ya que al buscar salia en blanco
      });
      this.listContact = res
    })
  }
  //resetiar
  reset(index: any){
    console.log( this.reverseData )
   // this.listContact[index] =  this.reverseData
    this.listContact[index]['status'] = false
    this.updatedSend = null
  }
  //orden a boton editar 
  edit(item: any){
    if(typeof this.updatedSend === "object" && this.updatedSend != null ){
      this.update()
    }else{
      this.listContact.forEach(i => {
        i.status = false
        i.textAction = "Editar"
        if(i._id == item._id){
          this.reverseData = i // reversar el campo de lo escrito en cancelar
          i.status = true
          i.textAction = "Guardar"
        }
      });
    }
  }
  //guarda automaticamente
 change(item:any, event: any, index: any , propiedad: any){
    this.listContact[index][propiedad] = event.target.value
    this.updatedSend = this.listContact[index] 
    /*this.listContact.forEach(i => {
      if(i._id == item._id){
        i[propiedad] =  event.target.value
      }
    });*/
  }
  // actualizar info
  update(){
    this.conctacService.update(this.updatedSend).subscribe((res:any)=>{
      console.log( res )
      this.updatedSend = null
    })
  }

  delete(_id: string) {
    console.log(_id)
    this.conctacService.deleteById(_id).subscribe((res: any) => {
      this.getContacts()
    })
  }

  findById(_id: string) {
    console.log(_id)
    this.conctacService.findById(_id).subscribe((res: any) => {
      console.log(res)
    })
  }
}
