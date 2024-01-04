import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IconDialog } from '../../interfaces';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  icon!: IconDialog;
  title!: string;
  message!: string;
  iconColor!: string;
  titleColor!: string;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any) {}

  ngOnInit() {
    this.icon = this.data.icon;
    this.title = this.data.title;
    this.message = this.data.message;

    switch (this.icon) {
      case IconDialog.WARNING:
        this.iconColor = 'rgb(255, 166, 0)';
        this.titleColor = 'rgb(255, 166, 0)';
        break;
      case IconDialog.ERROR:
        this.iconColor = 'rgb(220, 20, 60)';
        this.titleColor = 'rgb(220, 20, 60)';
        break;
      case IconDialog.SUCCESS:
        this.iconColor = 'rgb(76, 187, 23)';
        this.titleColor = 'rgb(76, 187, 23)';
        break;
      default:
        break;
    }
  }
}
