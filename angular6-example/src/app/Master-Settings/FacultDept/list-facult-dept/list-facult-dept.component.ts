import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FacultDeptModel} from '../../../model/FacultyDept.model';
import {FacultyDeptService} from '../../../service/faculty-dept.service';

@Component({
  selector: 'app-list-facult-dept',
  templateUrl: './list-facult-dept.component.html',
  styleUrls: ['./list-facult-dept.component.css']
})
export class ListFacultDeptComponent implements OnInit {

  constructor(private router: Router, private facultyDeptService: FacultyDeptService) { }
  facultDeptModel:FacultDeptModel[];
  cols: any[];
  selectedClass: FacultDeptModel;
  ngOnInit() {
    this.facultyDeptService.getFacultDept()
    .subscribe( data => {
      this.facultDeptModel = data;
    });
    this.cols = [
      { field: 'FacultyDeptId', header: 'Id' },
      { field: 'FacultyDeptCode', header: 'FacultyDeptCode' },
      { field: 'FacultyDeptName', header: 'FacultyDeptName' },
      { field: 'FacultyDeptDescription', header: 'FacultyDeptDescription' }    
  ];
  ApplicationCache
  }
  FacultDeptModel : any = {};
  deleteFaculty(data){
    this.facultyDeptService.deleteFaculty(data.FacultyDeptId)
    .subscribe( data => {
      this.facultDeptModel=this.facultDeptModel.filter(s=>s !==data );
    })
  };
  editFaculty(data){
    localStorage.removeItem("editFacultyDeptId");
    localStorage.setItem("editFacultyDeptId", data.FacultyDeptId.toString());
    this.router.navigate(['edit-facultdept']);
  };
  addFaculty(): void {
    this.router.navigate(['add-facultdept']);
  };

}

