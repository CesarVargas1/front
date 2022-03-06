import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    alert(tipo:string){
        return tipo;
    }
}