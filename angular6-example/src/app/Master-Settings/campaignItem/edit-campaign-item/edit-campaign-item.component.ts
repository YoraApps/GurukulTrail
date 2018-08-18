import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {first} from "rxjs/operators";
import { CampaignItemService } from "src/app/service/campaign-item.service";
import { campaignItem } from "src/app/model/campaignItem.model";

@Component({
  selector: 'app-edit-campaign-item',
  templateUrl: './edit-campaign-item.component.html',
  styleUrls: ['./edit-campaign-item.component.css']
})
export class EditCampaignItemComponent implements OnInit {

campaignitems:campaignItem;
editForm : FormGroup = new FormGroup({
  CampaignItemId:  new FormControl(''),
  CampaignId: new FormControl(''),
  ItemName: new  FormControl(''),
    Price: new  FormControl(''),
    Remarks: new  FormControl(''),
});
  constructor(private formBuilder:FormBuilder,private router:Router,private campaignItemService:CampaignItemService) { }
  CampaignItemId
  ngOnInit() {
    this.CampaignItemId = localStorage.getItem("editCampaignItemId");
  if(!this.CampaignItemId) {
    alert("Invalid action.")
    this.router.navigate(['list-campaign-item']);
    return;
  }
  else{
    this.campaignItemService.GetByCampaignItemId(this.CampaignItemId)
  .subscribe(data =>{
    this.campaignitems = data;
    this.editForm.setValue(this.campaignitems);
  })
 }
}
  onSubmit(){
    this.campaignItemService.updatecampaignItem(this.editForm.value)
    .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-campaign-item']);
        },
        error => {
          alert(error);
        });

  }

}
