import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bootstrap',
  standalone: true,
  imports: [],
  templateUrl: './bootstrap.component.html',
  styleUrl: './bootstrap.component.css'
})
export class BootstrapComponent {
  @Input() wPadre?: number;
  @Input() hPadre?: number;
}
