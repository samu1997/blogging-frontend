import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DialogComponent {
  @Input() showModal: boolean;
  @Input() dialogTitle: string;
  @Output() toggleModal = new EventEmitter();

  constructor() {
    this.showModal = false;
    this.dialogTitle = '';
  }

  toggleModalEmitter() {
    this.toggleModal.emit();
  }
}
