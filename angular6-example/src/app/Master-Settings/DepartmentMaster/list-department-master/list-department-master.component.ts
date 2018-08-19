import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentMasterService } from "src/app/Master-Settings/service/department-master.service";
import { DepartmentMaster } from "src/app/Master-Settings/model/DepartmentMaster.model";

@Component({
  selector: 'app-list-department-master',
  templateUrl: './list-department-master.component.html',
  styleUrls: ['./list-department-master.component.css']
})
export class ListDepartmentMasterComponent implements OnInit {

  departmentMasters : DepartmentMaster[];
  cols: any[];
  selectedClass: DepartmentMaster;

  constructor(private router: Router, private departmentMasterService: DepartmentMasterService) { }

  ngOnInit() {
    this.departmentMasterService.getUsers()
      .subscribe( data => {
        this.departmentMasters = data;
      });
      this.cols = [
        { field: 'DepartmentId', header: 'Id' },
        { field: 'DepartmentName', header: 'Code' },
        { field: 'UniversityId', header: 'UniversityId' },
    ];
    ApplicationCache
  }
  DepartmentMaster : any = {};

  onRowSelect(data) {
    debugger
    this.DepartmentMaster = this.deleteUser(data);
  }

  deleteUser(data){
    this.departmentMasterService.deleteUser(data.DepartmentId)
    .subscribe( data => {
      this.departmentMasters=this.departmentMasters.filter(s=>s !==data );
    })
  };

  editUser(data): void {
    debugger
    localStorage.removeItem("editDepartmentId");
    localStorage.setItem("editDepartmentId", data.DepartmentId.toString());
    this.router.navigate(['edit-department-master']);
  };

  addUser(): void {
    this.router.navigate(['add-department-master']);
  };

}
