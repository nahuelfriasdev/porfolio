import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gmail',
  standalone: true,
  imports: [],
  templateUrl: './gmail.component.html'
})
export class GmailComponent {
  @Input() wPadre?: number;
  @Input() hPadre?: number;
}
