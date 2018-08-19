import { Component, OnInit } from '@angular/core';
import {CampaignService} from "../../../service/campaign.service";
import {Router} from "@angular/router";
import {Campaign} from "../../../model/campaignMaster.model";
import {FormBuilder, FormGroup, Validators,FormControl} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({ 
  selector: 'app-edit-campaign',
  templateUrl: './edit-campaign.component.html',
  styleUrls: ['./edit-campaign.component.css']
})
export class EditCampaignComponent implements OnInit {
 campaign: Campaign;
  editForm :FormGroup= new FormGroup({
    CampaignId: new FormControl(''),
    CampaignName: new FormControl(''),
 });
  constructor(private formBuilder: FormBuilder,private router: Router, private campaignService: CampaignService) { }
  CampaignId
  ngOnInit() {
    debugger
    this.CampaignId = localStorage.getItem("editCampaignId");
    if(!this.CampaignId) {
      alert("Invalid action.")
      this.router.navigate(['list-campaign']);
      return;      
       }
         else{
    this.campaignService.getCampaignById(this.CampaignId)
    .subscribe( data => {
      this.campaign=data;
      this.editForm.setValue(this.campaign);
    })
  }
}
 onSubmit() {
    this.campaignService.updateCampaign(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-campaign']);
        },
        error => {
          alert(error);
        });
  }

}





