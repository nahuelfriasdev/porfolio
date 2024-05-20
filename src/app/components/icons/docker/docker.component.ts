import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-docker',
  standalone: true,
  imports: [],
  templateUrl: './docker.component.html',
  styleUrl: './docker.component.css'
})
export class DockerComponent {
  @Input() wPadre?: number;
  @Input() hPadre?: number;
}
