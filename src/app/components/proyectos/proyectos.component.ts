import { Component, OnInit, inject } from '@angular/core';
import { SectionArticleComponent } from '../section-article/section-article.component';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../../services/service.service';
import { IData, IMainData } from '../../models/proyectos.model'; // -> ver si con mas tiempo puedo aplicarlo al modelo sino lo vuelo

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule ,SectionArticleComponent],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent implements OnInit{

  jsonData: IData[] = []
  private _data = inject(ServiceService)

  proyectos: boolean = true
  trabajos: boolean = false
  texto: string = 'Proyectos'

  respuestaData: Array<any> = [
    {resProyectos: false},
    {resTrabajos: false}
  ]
  
  
  ngOnInit(): void {
    this.updateData();
  }

  seleccion(eleccion: string): void {
    if (eleccion != 'proyectos') {
      this.trabajos = true;
      this.proyectos = false;
      this.texto = 'Trabajos';
    } else {
      this.trabajos = false;
      this.proyectos = true;
      this.texto = 'Proyectos';
    }
    this.updateData(); // Llamo a la función para actualizar el jsonData que utilizo en el for
  }

  updateData(): void {
    this._data.getDataProyectos().subscribe((data: IMainData) => {
      
       // -> hago esto para evitar acceder al primer elemento de data con el [0] queda mas lindo asi :S
      
      if (Array.isArray(data) && data.length != 0) {
        const [respuesta] = data;
        this.respuestaData[0].resProyectos = respuesta.proyectos.length != 0
        this.respuestaData[1].resTrabajos = respuesta.trabajos.length != 0

        this.jsonData = respuesta && this.proyectos ? respuesta.proyectos : respuesta.trabajos
      } else {
        console.error("No llego nunca la info, chequealo!")
      }
    });
  }

}
