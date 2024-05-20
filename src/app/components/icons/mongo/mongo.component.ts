import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mongo',
  standalone: true,
  imports: [],
  templateUrl: './mongo.component.html',
  styleUrl: './mongo.component.css'
})
export class MongoComponent {
  @Input() wPadre?: number;
  @Input() hPadre?: number;
}
