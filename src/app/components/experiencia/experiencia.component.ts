import { Component, OnInit, inject } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { SectionArticleComponent } from '../section-article/section-article.component';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [SectionArticleComponent],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.css'
})
export class ExperienciaComponent implements OnInit{

  jsonData: Array<any> = []
  private _data = inject(ServiceService)

  ngOnInit(): void {
    this._data.getData().subscribe((data: any[]) => {
      this.jsonData = data
    })
  }


}
