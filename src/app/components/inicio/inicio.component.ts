import { Component, OnInit } from '@angular/core';
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
export class InicioComponent implements OnInit {

  words: string[] = ['Hola, Soy Nahuel Frias', 'Desarrollador Angular'];
  currentWord: string = '';
  text: string = '';
  i: number = 0;
  j: number = 0;

  type() {
    if ( this.i >= this.words.length) {
      this.i = 0
    }

    this.currentWord = this.words[this.i];
    this.text = this.currentWord.substring(0, this.j+1)
    this.j++
    if (this.j == this.currentWord.length) {
      this.j = 0;
      this.i++
      setTimeout(() => this.type(), 1300)
    } else {
      setTimeout(() => this.type(), 150)
    }

  }

  ngOnInit(): void {
    this.type()
  }

}
