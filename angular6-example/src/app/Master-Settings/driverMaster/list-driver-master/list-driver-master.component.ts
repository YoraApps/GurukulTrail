import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DriverMasterService} from "../../../service/driver-master.service";
import {DriverMasterModel} from "../../../model/DriverMaster.model";

@Component({
  selector: 'app-list-driver-master',
  templateUrl: './list-driver-master.component.html',
  styleUrls: ['./list-driver-master.component.css']
})
export class ListDriverMasterComponent implements OnInit {

  constructor(private router: Router, private driverMasterService: DriverMasterService) { }

  driverMasterModel:DriverMasterModel[];
  cols:any[];
  selectedClass: DriverMasterModel;
  ngOnInit() {
    this.driverMasterService.getDriverMaster()
      .subscribe( data => {
        this.driverMasterModel = data;
      });

      this.cols = [
        { field: 'DriverId', header: 'Id' },
        {field:'DriverName',header:'Name'},
        { field: 'DriverLicenceNo', header: 'LicenceNo' },
        //{ field: 'DriverLicenceExpDate', header: 'LicenceExpDate' },
        { field: 'DriverMobileNo', header: 'MobileNo' },
        { field: 'AlternativeContactNo', header: 'AlternativeNo' },
        { field: 'ReferenceName', header: 'ReferenceName' },
        { field: 'ReferenceContactNo', header: 'ReferenceNo' },
        { field: 'Address', header: 'Address' },
        { field: 'Experience', header: 'Experience' }
    ];
    ApplicationCache
  }
  DriverMasterModel : any = {};
  deleteDriver(data){
    this.driverMasterService.deleteDriverMaster(data.DriverId)
    .subscribe( data => {
      this.driverMasterModel=this.driverMasterModel.filter(s=>s !==data );
    })
  };
  addDriver(): void {
    this.router.navigate(['add-driver']);
  };
  editDriver(data){
    localStorage.removeItem("editDriverId");
    localStorage.setItem("editDriverId", data.DriverId.toString());
    this.router.navigate(['edit-driver']);
  };

}
