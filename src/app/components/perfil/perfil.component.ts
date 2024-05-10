import { Component } from '@angular/core';
import { LinkedinComponent } from '../icons/linkedin/linkedin.component';
import { GithubComponent } from '../icons/github/github.component';
import { GmailComponent } from '../icons/gmail/gmail.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [LinkedinComponent, GithubComponent, GmailComponent],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {

}
