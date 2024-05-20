import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typescript',
  standalone: true,
  imports: [],
  templateUrl: './typescript.component.html',
  styleUrl: './typescript.component.css'
})
export class TypescriptComponent {
  @Input() wPadre?: number;
  @Input() hPadre?: number;
}
