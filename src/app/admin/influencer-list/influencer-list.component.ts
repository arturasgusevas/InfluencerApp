import { Component, OnInit } from '@angular/core';
import { InfluencerModalComponent } from '../../home/modals/influencer-modal/influencer-modal.component';
import * as Parse from 'parse';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-influencer-list',
  templateUrl: './influencer-list.component.html',
  styleUrls: ['./influencer-list.component.scss']
})
export class InfluencerListComponent implements OnInit {

  influencers: any;

  constructor() { }

  ngOnInit() {
    this.getInfluencers();
  }

  getInfluencers(){
    let influencerForm = Parse.Object.extend("influencerForm");
    let query = new Parse.Query(influencerForm);
    query.find( {
      success: (influencerForm) => {
        this.influencers = influencerForm;
        console.log(influencerForm.attributes)
        // The object was retrieved successfully.
      },
      error: function(object, error) {
        console.log(error)
        // The object was not retrieved successfully.
        // error is a Parse.Error with an error code and message.
      }
    });
  }

}
