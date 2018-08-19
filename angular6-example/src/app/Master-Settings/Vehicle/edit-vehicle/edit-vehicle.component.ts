import { Component, OnInit } from '@angular/core';
import {VehicleService} from "../../../service/vehicle.service";
import {Router} from "@angular/router";
import {Vehicle} from "../../../model/vehicle.model";
import {FormBuilder, FormGroup, Validators,FormControl} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({  
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})
export class EditVehicleComponent implements OnInit {
   debugger
 vehicle: Vehicle;
//   editForm: FormGroup;  
       
    editForm :FormGroup= new FormGroup({
    VehicleId: new FormControl(''),
    RegistrationNumber: new FormControl(''),
    Description: new FormControl(''),
    OwnerNumber: new FormControl(''),
    WeightCapacity: new FormControl(''),
    VehicleStatus: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder,private router: Router, private vehicleService: VehicleService) { }
  VehicleId
  ngOnInit() {
    debugger
    this.VehicleId = localStorage.getItem("editVehicleId");
    if(!this.VehicleId) {
      alert("Invalid action.")
      this.router.navigate(['list-batch']);
      return;      
       }
         else{
    this.vehicleService.getVehicleById(this.VehicleId)
    .subscribe( data => {
      this.vehicle=data;
      this.editForm.setValue(this.vehicle);
    })
   

    // this.editForm = this.formBuilder.group({
    //     BatchId: [],
    //   BatchName: ['', Validators.required],
    //   ResultType: ['', Validators.required],
    //   AcademicTerm: ['', Validators.required],
    //   BatchType: ['', Validators.required]
    // });
    // this.batchService.getBatchById(+batchId)
    //   .subscribe( data => {
    //     this.editForm.setValue(data);
    //   });
  }
}
 onSubmit() {
   debugger
    this.vehicleService.updateVehicle(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-batch']);
        },
        error => {
          alert(error);
        });
  }

}


  
