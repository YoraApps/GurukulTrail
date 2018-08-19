import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { CampaignItemService } from "src/app/Master-Settings/service/campaign-item.service";

@Component({
  selector: 'app-add-campaign-item',
  templateUrl: './add-campaign-item.component.html',
  styleUrls: ['./add-campaign-item.component.css']
})
export class AddCampaignItemComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private router:Router,private campaignItemService:CampaignItemService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      CampaignItemId:[],
      ItemName: ['', Validators.required],
      Price: ['', Validators.required],
      Remarks: ['', Validators.required]
    });
  }
  onSubmit() {
    this.campaignItemService.createcampaignItem(this.addForm.value)
    .subscribe( data =>{
      this.router.navigate(['list-campaign-item']);
    });
  }

}
