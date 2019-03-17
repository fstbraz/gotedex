import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() id: Number;
  @Input() name: string;
  @Input() gender?: string;
  @Input() culture?: string;
  @Input() born?: string;
  @Input() died?: string;
  @Input() aliases?: string[];
}
