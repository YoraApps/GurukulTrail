import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SemesterMasterService} from "../../../service/semester-master.service";
import {semesterMaster} from "../../../model/semesterMaster.model";

@Component({
  selector: 'app-list-semester-master',
  templateUrl: './list-semester-master.component.html',
  styleUrls: ['./list-semester-master.component.css'],
  
})
export class ListSemesterMasterComponent implements OnInit {

  constructor(private router: Router, private semesterMasterService: SemesterMasterService) { }
 
  semesterMasters: semesterMaster[];
  cols: any[];
  selectedClass: semesterMaster;
  ngOnInit() {
    this.semesterMasterService.getSemester()
      .subscribe( data => {
        this.semesterMasters = data;
      });
      this.cols = [
        { field: 'SemesterId', header: 'Id' },
        { field: 'SemesterCode', header: 'Code' },
        { field: 'SemesterName', header: 'SemesterName' },
        { field: 'SKS', header: 'SKS' }
    ];
    ApplicationCache
  }
  semesterMaster : any = {};
  deleteSemester(data){
    debugger
    this.semesterMasterService.deleteSemester(data.SemesterId)
    .subscribe( data => {
      this.semesterMasters=this.semesterMasters.filter(s=>s !==data );
    })
  };
  editSemester(data){
    localStorage.removeItem("editSemsterId");
    localStorage.setItem("editSemsterId", data.SemesterId.toString());
    this.router.navigate(['edit-semestermaster']);
  };
  addSemester(): void {
    this.router.navigate(['add-semesterMaster']);
  };

}



 
