import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SemesterMasterService} from "../service/semester-master.service";
import {semesterMaster} from "../model/semesterMaster.model";

@Component({
  selector: 'app-list-semester-master',
  templateUrl: './list-semester-master.component.html',
  styleUrls: ['./list-semester-master.component.css'],
  
})
export class ListSemesterMasterComponent implements OnInit {

  constructor(private router: Router, private semesterMasterService: SemesterMasterService) { }
 
  semesterMasters: semesterMaster[];
  ngOnInit() {
    this.semesterMasterService.getSemester()
      .subscribe( data => {
        this.semesterMasters = data;
      });
  }

  deleteSemester(semesterMasters: semesterMaster): void{
    this.semesterMasterService.deleteSemester(semesterMasters.SemesterId)
    .subscribe( data => {
      this.semesterMasters=this.semesterMasters.filter(s=>s !==semesterMasters );
    })
  };


  editSemester(semesterMasters: semesterMaster):void{
    localStorage.removeItem("editSemsterId");
    localStorage.setItem("editSemsterId", semesterMasters.SemesterId.toString());
    this.router.navigate(['edit-semestermaster']);
  };

  addSemester(): void {
    this.router.navigate(['add-semesterMaster']);
  };

}



 
