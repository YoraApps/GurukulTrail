import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {VehicleService} from "../../service/vehicle.service";
import {Vehicle} from "../../model/vehicle.model";

@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.css']
})
export class ListVehicleComponent implements OnInit {

 vehicles: Vehicle[];
  constructor(private router: Router, private vehicleService: VehicleService) { }
  cols: any[];
  selectedClass: Vehicle;
  ngOnInit() {
    this.vehicleService.getVehicles()
      .subscribe( data => {
        this.vehicles = data;
      });
           this.cols = [
        { field: 'RegistrationNumber', header: 'RegNumber' },
        { field: 'Description', header: 'Description' },
        { field: 'OwnerNumber', header: 'OwnerNumber' },
        { field: 'WeightCapacity', header: 'WeightCapacity' },
        { field: 'VehicleStatus', header: 'Status' },
        // { field: 'SKS', header: 'SKS' },
          ];
    ApplicationCache
  }
    Vehicle : any = {};

  onRowSelect(data) {
    debugger
    this.Vehicle = this.deleteVehicle(data);

    //this.displayDialog = true;
}
 
   deleteVehicle(vehicle:Vehicle): void {
    this.vehicleService.deleteVehicle(vehicle.VehicleId)
      .subscribe( data => {
        this.vehicles = this.vehicles.filter(b => b !== vehicle);
      })
  };
    editVehicle(vehicle:Vehicle): void {
      debugger
    localStorage.removeItem("editVehicleId");
    localStorage.setItem("editVehicleId", vehicle.VehicleId.toString());
    this.router.navigate(['edit-vehicle']);
  };
  addVehicle(): void {
    this.router.navigate(['add-vehicle']);
  };
}

