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

  @Output() activeChange = new EventEmitter<boolean>();
  @Output() resetInputs = new EventEmitter<void>();
  @Output() disabledChange = new EventEmitter<boolean>();

  isActive: boolean = false;

  ngOnInit(): void {
    this.title ||= 'Title 2.2';
    this.subtitle ||= 'Content';
    this.containerTitle ||= 'Title container Input';
  }

  toggleActive(): void {
    if (this.isDisabled) return;

    this.isActive = !this.isActive;
    this.activeChange.emit(this.isActive);
  }

  close(): void {
    this.isActive = false;
    this.isDisabled = true;
    this.title = 'Disable';
    this.activeChange.emit(this.isActive);
    this.disabledChange.emit(this.isDisabled);
    this.resetInputs.emit();
  }

  resetCard(): void {
    this.title = 'Title 2.2';
    this.subtitle = 'Content';
    this.isActive = true;
    this.isDisabled = false;
    this.activeChange.emit(this.isActive);
    this.disabledChange.emit(this.isDisabled);
    this.resetInputs.emit();
  }
}
