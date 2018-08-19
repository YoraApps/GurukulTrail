import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Vehicle} from "../model/vehicle.model";
@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:1487/api/VehicleMaster';
    getVehicles() {
       return this.http.get<Vehicle[]>(this.baseUrl+"/GetAllVehicleMaster");
  }
   getVehicleById(id: number) {
    return this.http.get<Vehicle>(this.baseUrl + "/getById/" + id);
  }
  
  createVehicle(vehicle: Vehicle) {
    debugger
    return this.http.post(this.baseUrl+"/Update", vehicle);
  }
  updateVehicle(vehicle: Vehicle) {
  debugger
    return this.http.post(this.baseUrl + "/Update" , vehicle);
  }

  deleteVehicle(id: number) {
    return this.http.delete(this.baseUrl + "/Delete/"+ id);
  }
}


