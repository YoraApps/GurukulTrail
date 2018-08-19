import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {first} from "rxjs/operators";
import {FacultyDeptService} from "../../../service/faculty-dept.service";
import {FacultDeptModel} from '../../../model/FacultyDept.model';

@Component({
  selector: 'app-edit-facultdept',
  templateUrl: './edit-facultdept.component.html',
  styleUrls: ['./edit-facultdept.component.css']
})
export class EditFacultdeptComponent implements OnInit {

  facultDeptModel: FacultDeptModel;
  editForm :FormGroup= new FormGroup({
    FacultyDeptId: new  FormControl(''),
    FacultyDeptCode: new  FormControl(''),
    FacultyDeptName: new  FormControl(''),
    FacultyDeptDescription: new  FormControl('')
  });
  constructor(private formBuilder: FormBuilder,private router: Router, private facultyDeptService: FacultyDeptService) { }

  FacultyDeptId
  ngOnInit() {
    this.FacultyDeptId = localStorage.getItem("editFacultyDeptId");
    if(!this.FacultyDeptId) {
      alert("Invalid action.")
      this.router.navigate(['list-facultdept']);
      return;
  }
  else{
    this.facultyDeptService.getFacultDeptById(this.FacultyDeptId)
    .subscribe( data => {
      this.facultDeptModel=data;
      this.editForm.setValue(this.facultDeptModel);
    })
  }
  }
  onSubmit() {
    this.facultyDeptService.updateFaculty(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-facultdept']);
        },
        error => {
          alert(error);
        });
  }

}
