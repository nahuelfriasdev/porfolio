import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-html',
  standalone: true,
  imports: [],
  templateUrl: './html.component.html',
  styleUrl: './html.component.css'
})
export class HtmlComponent {
  @Input() wPadre?: number;
  @Input() hPadre?: number;
}
