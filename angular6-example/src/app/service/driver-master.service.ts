import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DriverMasterModel} from "../model/DriverMaster.model";
@Injectable()
export class DriverMasterService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:1487/api/driverMaster';
  getDriverMaster() {
    return this.http.get<DriverMasterModel[]>(this.baseUrl+"/GetAllDriverMaster");
  }
  getDriverMasterById(driverId) {    
    return this.http.get<DriverMasterModel>(this.baseUrl+ '/GetDriverMasterById/' + driverId);
  } 
  
  createDriverMaster(driverMasterModel: DriverMasterModel) {
    return this.http.post(this.baseUrl+"/Update", driverMasterModel);
  }
  
  updateDriverMaster(driverMasterModel: DriverMasterModel) {
    return this.http.post(this.baseUrl+"/Update", driverMasterModel);
  }
  
  deleteDriverMaster(id: number) {
    return this.http.delete(this.baseUrl+"/Delete/" + id);
  }

}
