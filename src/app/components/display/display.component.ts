import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  @Output() titleChange = new EventEmitter<string>();
  @Output() subtitleChange = new EventEmitter<string>();
  @Input() isDisabled: boolean = false;
  @Input() resetInput: boolean = false;
  titleInput: string = '';
  subtitleInput: string = '';
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['resetInput'] && changes['resetInput'].currentValue === true) {
      this.titleInput = '';
      this.subtitleInput = '';
      this.titleChange.emit('');
      this.subtitleChange.emit('');
    }
  }
  ngOnInit(): void {}

  onTitleInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.titleChange.emit(input.value);
  }

  onSubtitleInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.subtitleChange.emit(input.value);
  }
}
