import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InfluencerModalComponent } from './modals/influencer-modal/influencer-modal.component';
import { BrandModalComponent } from './modals/brand-modal/brand-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  name: string;

  constructor(public dialog: MatDialog) { }

  openInfluencerDialog(): void {
    let dialogRef = this.dialog.open(InfluencerModalComponent, {
      width: '500px',
      height: '600px',
      data: {name: this.name}
    });
  }

  openBrandDialog(): void {
    let dialogRef = this.dialog.open(BrandModalComponent, {
      width: '500px',
      height: '700px',
      data: {name: this.name}
    });
  }

}
