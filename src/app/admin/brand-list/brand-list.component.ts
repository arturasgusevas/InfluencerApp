import { Component, OnInit } from '@angular/core';
import { BrandModalComponent } from '../../home/modals/brand-modal/brand-modal.component';
import * as Parse from 'parse';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {

  brands: any;

  constructor() { }

  ngOnInit() {
    this.getBrands();
  }

  getBrands(){
    let brandForm = Parse.Object.extend("brandForm");
    let query = new Parse.Query(brandForm);
    query.find( {
      success: (brandForm) => {
        this.brands = brandForm;
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
