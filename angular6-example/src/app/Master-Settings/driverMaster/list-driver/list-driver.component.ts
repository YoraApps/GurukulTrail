import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DriverMasterService} from "../../../service/driver-master.service";
import {DriverMasterModel} from "../../../model/DriverMaster.model";


@Component({
  selector: 'app-list-driver',
  templateUrl: './list-driver.component.html',
  styleUrls: ['./list-driver.component.css']
})
export class ListDriverComponent implements OnInit {

  constructor(private router: Router, private driverMasterService: DriverMasterService) { }
  
  driverMasterModel:DriverMasterModel[];
  cols: any[];
  selectedClass: DriverMasterModel;
  ngOnInit() {
    this.driverMasterService.getDriverMaster()
      .subscribe( data => {
        this.driverMasterModel = data;
      });
      this.cols = [
        { field: 'DriverId', header: 'Id' },
        { field: 'UniversityId', header: 'UniversityId' },
        { field: 'DriverLicenceNo', header: 'DriverLicenceNo' },
        { field: 'DriverLicenceExpDate', header: 'DriverLicenceExpDate' },
        { field: 'DriverMobileNo', header: 'DriverMobileNo' },
        { field: 'AlternativeContactNo', header: 'AlternativeContactNo' },
        { field: 'ReferenceName', header: 'ReferenceName' },
        { field: 'ReferenceContactNo', header: 'ReferenceContactNo' },
        { field: 'Address', header: 'Address' },
        { field: 'Experience', header: 'Experience' }
    ];
    ApplicationCache
  }
  DriverMasterModel : any = {};
  deleteSemester(data){
    debugger
    this.driverMasterService.deleteDriverMaster(data.DriverId)
    .subscribe( data => {
      this.driverMasterModel=this.driverMasterModel.filter(s=>s !==data );
    })
  };
  editDriver(data){
    localStorage.removeItem("editDriverId");
    localStorage.setItem("editDriverId", data.DriverId.toString());
    this.router.navigate(['edit-semestermaster']);
  };
  addDriver(): void {
    this.router.navigate(['add-semesterMaster']);
  };

}
