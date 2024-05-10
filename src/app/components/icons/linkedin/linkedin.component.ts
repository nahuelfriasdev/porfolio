import { CommonModule } from '@angular/common';
import { Component, Input,  } from '@angular/core';

@Component({
  selector: 'app-linkedin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './linkedin.component.html'
})
export class LinkedinComponent {
  @Input() wPadre?: number;
  @Input() hPadre?: number;
}
