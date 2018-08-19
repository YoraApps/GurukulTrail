import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {first} from "rxjs/operators";
import {DriverMasterService} from "../../../service/driver-master.service";
import {DriverMasterModel} from "../../../model/DriverMaster.model";
@Component({
  selector: 'app-edit-driver-master',
  templateUrl: './edit-driver-master.component.html',
  styleUrls: ['./edit-driver-master.component.css']
})
export class EditDriverMasterComponent implements OnInit {
  driverMasterModel: DriverMasterModel;
  editForm :FormGroup= new FormGroup({
    DriverId: new  FormControl(''),
    DriverName: new  FormControl(''),
    DriverLicenceNo: new  FormControl(''),
    DriverMobileNo: new  FormControl(''),
    AlternativeContactNo: new  FormControl(''),
    ReferenceName: new  FormControl(''),
    ReferenceContactNo: new  FormControl(''),
    Address: new  FormControl(''),
    Experience: new  FormControl(''),
  });
 
  constructor(private formBuilder: FormBuilder,private router: Router, private driverMasterService: DriverMasterService) { }
  DriverId
  ngOnInit() {
    this.DriverId = localStorage.getItem("editDriverId");
    if(!this.DriverId) {
      alert("Invalid action.")
      this.router.navigate(['list-driver']);
      return;
  }
  else{
    debugger
    this.driverMasterService.getDriverMasterById(this.DriverId)
    .subscribe( data => {
      this.driverMasterModel=data;
      this.editForm.setValue(this.driverMasterModel);
    })
  }
  }
  onSubmit() {
    this.driverMasterService.updateDriverMaster(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-driver']);
        },
        error => {
          alert(error);
        });
  }

}
