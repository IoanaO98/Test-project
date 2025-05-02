import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() containerTitle: string = '';
  @Input() isDisabled: boolean = false;
  @Input() color: 'blue' | 'green' | 'sunset' | 'red' | 'orange' = 'blue';
  isActive: boolean = false;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
