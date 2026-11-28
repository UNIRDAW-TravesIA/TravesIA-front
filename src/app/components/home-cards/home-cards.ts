import { Component, input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../button/button';

@Component({
  selector: 'app-home-cards',
  imports: [FaIconComponent, Button],
  templateUrl: './home-cards.html',
  styleUrl: './home-cards.css',
  host: {
    'class': 'home-cards'
  }
})
export class HomeCards {
  popular = input<any>();
  faChevronRight = faChevronRight;
}