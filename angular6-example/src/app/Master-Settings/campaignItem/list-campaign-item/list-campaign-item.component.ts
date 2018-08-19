import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { CampaignItemService } from "src/app/Master-Settings/service/campaign-item.service";
import { campaignItem } from "src/app/Master-Settings/model/campaignItem.model";

@Component({
  selector: 'app-list-campaign-item',
  templateUrl: './list-campaign-item.component.html',
  styleUrls: ['./list-campaign-item.component.css']
})
export class ListCampaignItemComponent implements OnInit {

  constructor(private router:Router,private campaignItemService:CampaignItemService) { }

campaignitems:campaignItem[];
cols:any[];
selectedClass:campaignItem;
  ngOnInit() {
    this.campaignItemService.getcampaignItem()
    .subscribe( data =>{
      this.campaignitems = data;
    });
    this.cols = [
      { field: 'CampaignItemId', header: 'Id' },
        { field: 'ItemName', header: 'ItemName' },
        { field: 'Price', header: 'Price' },
        { field: 'Remarks', header: 'Remarks' }
    ];
    ApplicationCache
  }
  campaignItem : any = {};

addcampaign():void{
  this.router.navigate(['add-campaign-item']);
};

 editCampaign(data){
    localStorage.removeItem("editCampaignItemId");
    localStorage.setItem("editCampaignItemId", data.CampaignItemId.toString());
    this.router.navigate(['edit-campaign-item']);
  };
}
