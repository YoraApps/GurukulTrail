import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { campaignItem } from "src/app/model/campaignItem.model";

@Injectable({
  providedIn: 'root'
})
export class CampaignItemService {

  constructor(private http: HttpClient) { }
  baseUrl:string = 'http://localhost:1487/api/CampaignItem';

  getcampaignItem(){
    return this.http.get<campaignItem[]>(this.baseUrl+"/GetAllCampaignItem");
  }
  GetByCampaignItemId(camId) {
  return this.http.get<campaignItem>(this.baseUrl+ '/GetByCampaignItemId/' + camId);
}

createcampaignItem(campaign: campaignItem) {
  return this.http.post(this.baseUrl+"/Update", campaign);
}

updatecampaignItem(campaign: campaignItem) {
  return this.http.post(this.baseUrl+"/Update", campaign);
}

}
