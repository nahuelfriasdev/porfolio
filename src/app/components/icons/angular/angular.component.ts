import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-angular',
  standalone: true,
  imports: [],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.css'
})
export class AngularComponent {
  @Input() wPadre?: number;
  @Input() hPadre?: number;
}
