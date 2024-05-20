import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tailwind',
  standalone: true,
  imports: [],
  templateUrl: './tailwind.component.html',
  styleUrl: './tailwind.component.css'
})
export class TailwindComponent {
  @Input() wPadre?: number;
  @Input() hPadre?: number;
}
