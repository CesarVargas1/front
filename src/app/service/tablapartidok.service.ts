import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class TablapartidokService {

// se crea el servicio que se injecta en tablapartidoComponent.ts en el constructor


  /*  readonly URL = config.url
   
    sendMessage (data:any){
      return this.http.post(this.URL + "/api/tablapartido", data)
    }*/

  //proceso para unir con back
  config = config
  constructor(private http: HttpClient) {

  }

  save(data: any) { // para guardar con back
    return this.http.post(this.config.url + "/api/tablapartido", data)
  }

  update(data: any) { // para actualizar con back
    return this.http.put(this.config.url + "/api/tablapartido/", data)
  }

  get() { // busqueda por get
    return this.http.get(this.config.url + "/api/tablapartido/")
  }

  getById(id: any | string) { // para buscar con id por get
    return this.http.get(this.config.url + `/api/tablapartido/${id}`)
  }

  search(data: any) { // para buscar con back
    return this.http.post(this.config.url + "/api/tablapartido/search", data)
  }

 /* findById(data: any) { //para buscar con id
    return this.http.post(this.config.url + "/api/tablapartido/findById", data)
  }*/


  findById(_id: string) { //para buscar con id
    return this.http.get(this.config.url + `/api/tablapartido/${_id}`)
  }

  deleteById(id: any | string) { //para eliminar con id
    return this.http.delete(this.config.url + `/api/tablapartido/${id}`)
  }

}

