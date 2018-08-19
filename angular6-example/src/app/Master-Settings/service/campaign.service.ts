import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Campaign} from "../model/campaignMaster.model";

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:1487/api/CampaignMaster';
    getCampaigns() {
       return this.http.get<Campaign[]>(this.baseUrl+"/GetAllCampaignMaster");
  }
   getCampaignById(id: number) {
    return this.http.get<Campaign>(this.baseUrl + "/getById/" + id);
  }
  
  createCampaign(campaign: Campaign) {
    debugger
    return this.http.post(this.baseUrl+"/Update", campaign);
  }
  updateCampaign(campaign: Campaign) {
  debugger
    return this.http.post(this.baseUrl + "/Update" , campaign);
  }
  
  deleteCampaign(id: number) {
    return this.http.delete(this.baseUrl + "/Delete/"+ id);
  }
}