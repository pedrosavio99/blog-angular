import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() id: number = 0;
  @Input() imageUrl: string = 'https://via.placeholder.com/600x300'; // Imagem padrão
}