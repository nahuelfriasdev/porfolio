import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-laravel',
  standalone: true,
  imports: [],
  templateUrl: './laravel.component.html',
  styleUrl: './laravel.component.css'
})
export class LaravelComponent {
  @Input() wPadre?: number;
  @Input() hPadre?: number;
}
