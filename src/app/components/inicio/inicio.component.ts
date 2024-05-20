import { Component } from '@angular/core';
import { SectionArticleComponent } from '../section-article/section-article.component';
import { LinkedinComponent } from '../icons/linkedin/linkedin.component';
import { GithubComponent } from '../icons/github/github.component';
import { GmailComponent } from '../icons/gmail/gmail.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [SectionArticleComponent, LinkedinComponent, GithubComponent, GmailComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
