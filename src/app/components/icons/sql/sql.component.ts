import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sql',
  standalone: true,
  imports: [],
  templateUrl: './sql.component.html',
  styleUrl: './sql.component.css'
})
export class SqlComponent {
  @Input() wPadre?: number;
  @Input() hPadre?: number;
}
