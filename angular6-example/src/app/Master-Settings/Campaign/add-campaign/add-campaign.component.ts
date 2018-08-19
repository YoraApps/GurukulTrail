import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CampaignService} from "../../../service/campaign.service"; 
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-campaign',
  templateUrl: './add-campaign.component.html',
  styleUrls: ['./add-campaign.component.css']
})
export class AddCampaignComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private campaignService: CampaignService) { }
  addForm: FormGroup;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
     
      CampaignName: ['', Validators.required],
       });
  }
  onSubmit() {
    this.campaignService.createCampaign(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-campaign']);
      });
  }

}
