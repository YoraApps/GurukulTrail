import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ProgramstudyService } from "src/app/Master-Settings/service/programstudy.service";
import { ProgramStudyMaster } from "src/app/Master-Settings/model/programstudy.model";


@Component({
  selector: 'app-listprogramstudy',
  templateUrl: './listprogramstudy.component.html',
  styleUrls: ['./listprogramstudy.component.css']
})
export class ListprogramstudyComponent implements OnInit {

  programStudyMasters: ProgramStudyMaster[];
  cols: any[];
  selectedClass: ProgramStudyMaster;

  constructor(private router: Router, private programstudyService: ProgramstudyService) { }

  ngOnInit() {
    this.programstudyService.getUsers()
      .subscribe( data => {
        this.programStudyMasters = data;
      });
      this.cols = [
        { field: 'ProgramStudyId', header: 'Id' },
        { field: 'ProgramStudyCode', header: 'Code' },
        { field: 'ProgramStudyName', header: 'ProgramStudyName' },
        { field: 'SKS', header: 'SKS' },
    ];
    ApplicationCache
  }
  ProgramStudyMaster : any = {};

  onRowSelect(data) {
    debugger
    this.ProgramStudyMaster = this.deleteUser(data);

    //this.displayDialog = true;
  }

  deleteUser(data){
    this.programstudyService.deleteUser(data.ProgramStudyId)
    .subscribe( data => {
      this.programStudyMasters=this.programStudyMasters.filter(s=>s !==data );
    })
  };

  editUser(data): void {
    debugger
    localStorage.removeItem("editProgramStudyId");
    localStorage.setItem("editProgramStudyId", data.ProgramStudyId.toString());
    this.router.navigate(['edit-programstudy']);
  };

  addUser(): void {
    this.router.navigate(['add-programstudy']);
  };

}
