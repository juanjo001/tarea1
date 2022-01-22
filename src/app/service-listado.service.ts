import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceListadoService {
 listaPaises: string[];

  constructor() { 
    this.listaPaises= ["Peru","Argentina","Colombia","Brasil"];
    
  }
}
