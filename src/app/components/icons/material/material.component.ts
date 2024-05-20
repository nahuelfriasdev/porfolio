import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-material',
  standalone: true,
  imports: [],
  templateUrl: './material.component.html',
  styleUrl: './material.component.css'
})
export class MaterialComponent {
  @Input() wPadre?: number;
  @Input() hPadre?: number;
}
