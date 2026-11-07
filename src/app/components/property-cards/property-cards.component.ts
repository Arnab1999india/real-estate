import { Component, Input } from '@angular/core';
import { Property } from '../../mock-data/properties';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-property-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-cards.component.html',
  styleUrls: ['./property-cards.component.css'],
})
export class PropertyCardsComponent {
  @Input() property!: Property;

  viewDetails() {
    // For now just alert, replace with router navigation later
    alert(`View details for: ${this.property.title}`);
  }
}
