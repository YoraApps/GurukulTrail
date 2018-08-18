import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Fee} from "../model/fee.model";

@Injectable({
  providedIn: 'root'
})
export class FeeService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:1487/api/Fee';

  getFee() {
  return this.http.get<Fee[]>(this.baseUrl+"/GetAllFee");
}

GetAllFeeId(FeeId) {
  return this.http.get<Fee>(this.baseUrl+ '/GetAllFeeId/' + FeeId);
} 
CreateFee(fee: Fee) {
  return this.http.post(this.baseUrl+"/Update", fee);
}
updateFee(fee: Fee) {
  debugger
  return this.http.post(this.baseUrl+"/Update", fee);
}

deleteFee(Id: number) {
  return this.http.delete(this.baseUrl+"/Delete/" + Id);
}

}
