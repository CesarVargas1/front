import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { config } from '../config/config';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  socket: Socket
  config = config  // se llama config.ts  '../config/config' del front 

  constructor() {
    this.socket = io(this.config.url) // conecta a la url de config front
  }

  sendMessage(data: any | string) { //enviar mensaje
    this.socket.emit('sendMessage', { messages: data })
  }

  //escuchar mensaje
  listenNewMessages() {
    return new Observable(observer => {
      this.socket.on('getNewMessage', message => {
        observer.next(message)
      })
    })
  }

  saveNewContac(data: any) {
    this.socket.emit('newcontact', data)
  }

}


