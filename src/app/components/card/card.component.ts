import { Component, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  isFavorited: boolean = false;
  onHeartClick() {
    this.isFavorited = !this.isFavorited;
  }
}
