import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gitlab',
  standalone: true,
  imports: [],
  templateUrl: './gitlab.component.html',
  styleUrl: './gitlab.component.css'
})
export class GitlabComponent {
  @Input() wPadre?: number;
  @Input() hPadre?: number;
}
