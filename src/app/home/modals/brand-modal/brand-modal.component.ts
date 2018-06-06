import { Component, Inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as Parse from 'parse';


@Component({
  selector: 'app-brand-modal',
  templateUrl: './brand-modal.component.html',
  styleUrls: ['./brand-modal.component.scss']
})
export class BrandModalComponent {

  post: any = {
    name: "",
    surename: "",
    brandname: "",
    email: "",
    phone: "",
    date: "",
    budget: ""
  }

  constructor(public dialogRef: MatDialogRef<BrandModalComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submitBrandForm(){
      let brandForm = Parse.Object.extend("brandForm");
      let newBrand = new brandForm();

      newBrand.set("Name", this.post.name);
      newBrand.set("Surename", this.post.surename);
      newBrand.set("Brandname", this.post.brandname);
      newBrand.set("Email", this.post.email);
      newBrand.set("Phone", this.post.phone);
      newBrand.set("Date", this.post.date);
      newBrand.set("Budget", this.post.budget);

      newBrand.save(null, {
        success: function(newBrand) {
          // Execute any logic that should take place after the object is saved.


        },
        error: function(newBrand, error) {
          // Execute any logic that should take place if the save fails.
          // error is a Parse.Error with an error code and message.
          alert('Failed to create new object, with error code: ' + error.message);
        }
      });
  }

}
