import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {VehicleService} from "../../../service/vehicle.service"; 
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

    constructor(private formBuilder: FormBuilder,private router: Router, private vehicleService: VehicleService) { }
  addForm: FormGroup;
  ngOnInit() {
    debugger
    this.addForm = this.formBuilder.group({
      // VehicleId: [],
      RegistrationNumber: ['', Validators.required],
      Description: ['', Validators.required],
      OwnerNumber: ['', Validators.required],
      WeightCapacity: ['', Validators.required],
      VehicleStatus: ['', Validators.required]
    });
  }
 onSubmit() {
    this.vehicleService.createVehicle(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-vehicle']);
      });
  }
}

