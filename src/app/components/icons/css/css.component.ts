import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-css',
  standalone: true,
  imports: [],
  templateUrl: './css.component.html',
  styleUrl: './css.component.css'
})
export class CssComponent {
  @Input() wPadre?: number;
  @Input() hPadre?: number;
}
