import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() id: number = 0;
  @Input() imageUrl: string = 'https://via.placeholder.com/150x100'; // Imagem padrão
}