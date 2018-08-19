import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CampaignService} from "../../../service/campaign.service";
import {Campaign} from "../../../model/campaignMaster.model";

@Component({
  selector: 'app-list-campaign',
  templateUrl: './list-campaign.component.html',
  styleUrls: ['./list-campaign.component.css']
})
export class ListCampaignComponent implements OnInit {
 campaigns: Campaign[];
  constructor(private router: Router, private campaignService: CampaignService) { }
 cols: any[];
  selectedClass: Campaign;
  ngOnInit() {
    this.campaignService.getCampaigns()
      .subscribe( data => {
        this.campaigns = data;
      });
           this.cols = [
        { field: 'CampaignName', header: 'Name' },
    
        // { field: 'SKS', header: 'SKS' }
          ];
    ApplicationCache
  }
    Campaign : any = {};

  onRowSelect(data) {
    debugger
    this.Campaign = this.deleteCampaign(data);

    //this.displayDialog = true;
}
 
   deleteCampaign(campaign:Campaign): void {
    this.campaignService.deleteCampaign(campaign.CampaignId)
      .subscribe( data => {
        this.campaigns = this.campaigns.filter(b => b !== campaign);
      })
  };
    editCampaign(campaign: Campaign): void {
    localStorage.removeItem("editCampaignId");
    localStorage.setItem("editCampaignId", campaign.CampaignId.toString());
    this.router.navigate(['edit-campaign']);
  };
  addCampaign(): void {
    this.router.navigate(['add-campaign']);
  };
}
