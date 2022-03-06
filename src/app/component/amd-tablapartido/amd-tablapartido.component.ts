import { Component, OnInit } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { config } from 'src/app/config/config';

//import { ContacService } from 'src/app/service/contac.service';
import { TablapartidokService } from 'src/app/service/tablapartidok.service';

@Component({
  selector: 'app-amd-tablapartido',
  templateUrl: './amd-tablapartido.Component.html',
  styleUrls: ['./amd-tablapartido.component.css']
})

export class AmdTablapartidoComponent implements OnInit {

    updatedSend: any
    reverseData: any
    listTablapartido: any[] = []
    config = config
    socket: Socket
   
 
  constructor(private tablapartidokService:  TablapartidokService) {
    this.socket = io(this.config.url)
    this.obtenerRespuesta()
  }

  ngOnInit(): void { // cuando la aplicacion cargue el evento  ngOnInit llama la funcion getContact
    this.getTablapartido() //se llama la funcion getTablapartido
  }

  obtenerRespuesta() {
    this.socket.on('emitiendo', (data) => {
      this.getTablapartido()
    })
  }

  getTablapartido(){  // se crea la funcion getTablapartido
    this.tablapartidokService.get().subscribe((res:any)=>{
      res.forEach((i:any) => {  // get contat.service.ts line 34
        i.textAction = "Editar"
      });
      this.listTablapartido = res
    })
  }

  search(event: any){ // metodo busqueda
    this.tablapartidokService.search({ name: event.target.value }).
    subscribe((res:any)=>{
      res.forEach((i:any) => {
        i.status = false
        i.textAction = "Editar" // se agrega campo ya que al buscar salia en blanco
      });
      this.listTablapartido = res
    })
  }
  //resetiar
  reset(index: any){
    console.log( this.reverseData )
   // this.listTablapartido[index] =  this.reverseData
    this.listTablapartido[index]['status'] = false
    this.updatedSend = null
  }
  //orden a boton editar 
  edit(item: any){
    if(typeof this.updatedSend === "object" && this.updatedSend != null ){
      this.update()
    }else{
      this.listTablapartido.forEach(i => {
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
    this.listTablapartido[index][propiedad] = event.target.value
    this.updatedSend = this.listTablapartido[index] 
    /*this.listTablapartido.forEach(i => {
      if(i._id == item._id){
        i[propiedad] =  event.target.value
      }
    });*/
  }
  // actualizar info
  update(){
    this.tablapartidokService.update(this.updatedSend).subscribe((res:any)=>{
      console.log( res )
      this.updatedSend = null
    })
  }

  delete(_id: string) {
    console.log(_id)
    this.tablapartidokService.deleteById(_id).subscribe((res: any) => {
      this.getTablapartido()
    })
  }

  findById(_id: string) {
    console.log(_id)
    this.tablapartidokService.findById(_id).subscribe((res: any) => {
      console.log(res)
    })
  }
}

