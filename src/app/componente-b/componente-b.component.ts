import { Component, OnInit } from '@angular/core';
import { ServiceListadoService } from '../service-listado.service';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.css']
})
export class ComponenteBComponent implements OnInit {
  listado:string[];
  constructor(private service:ServiceListadoService ) {

    this.listado=service.listaPaises;
   }

  ngOnInit(): void {
  }

}
