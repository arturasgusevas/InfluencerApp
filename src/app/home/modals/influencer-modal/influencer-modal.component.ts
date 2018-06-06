import { Component, Inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as Parse from 'parse';


@Component({
  selector: 'app-influencer-modal',
  templateUrl: './influencer-modal.component.html',
  styleUrls: ['./influencer-modal.component.scss']
})
export class InfluencerModalComponent {

  post: any = {
    name: "",
    surename: "",
    email: "",
    phone: "",
    instagram: "",
    youtube: ""
  }

  constructor(public dialogRef: MatDialogRef<InfluencerModalComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submitInfluencerForm(){
      var influencerForm = Parse.Object.extend("influencerForm");
      var newInfluencer = new influencerForm();

      newInfluencer.set("Name", this.post.name);
      newInfluencer.set("Surename", this.post.surename);
      newInfluencer.set("Email", this.post.email);
      newInfluencer.set("Phone", this.post.phone);
      newInfluencer.set("Instagram", this.post.instagram);
      newInfluencer.set("Youtube", this.post.youtube);

      newInfluencer.save(null, {
        success: function(newBrand) {
          
          // Execute any logic that should take place after the object is saved.

        },
        error: function(newInfluencer, error) {
          // Execute any logic that should take place if the save fails.
          // error is a Parse.Error with an error code and message.
          alert('Failed to create new object, with error code: ' + error.message);
        }
      });
  }

}
