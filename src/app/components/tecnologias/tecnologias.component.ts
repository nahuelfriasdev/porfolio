import { Component } from '@angular/core';
import { SectionArticleComponent } from '../section-article/section-article.component';
import { GithubComponent } from '../icons/github/github.component';

@Component({
  selector: 'app-tecnologias',
  standalone: true,
  imports: [SectionArticleComponent, GithubComponent],
  templateUrl: './tecnologias.component.html',
  styleUrl: './tecnologias.component.css'
})
export class TecnologiasComponent {

}
