import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {DriverMasterService} from "../../../service/driver-master.service";
@Component({
  selector: 'app-add-driver-master',
  templateUrl: './add-driver-master.component.html',
  styleUrls: ['./add-driver-master.component.css']
})
export class AddDriverMasterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private driverMasterService: DriverMasterService) { }
  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      DriverId: [],
      DriverName: ['', Validators.required],
      DriverLicenceNo: ['', Validators.required],
      DriverMobileNo: ['', Validators.required],
      AlternativeContactNo: ['', Validators.required],
      ReferenceName: ['', Validators.required],
      ReferenceContactNo: ['', Validators.required],
      Address: ['', Validators.required],
      Experience: ['', Validators.required]
    });
  }
  onSubmit() {
    this.driverMasterService.createDriverMaster(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-driver']);
      });
  }


}
