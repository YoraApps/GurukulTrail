import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {FacultyDeptService} from "../../../service/faculty-dept.service";
@Component({
  selector: 'app-add-facult-dept',
  templateUrl: './add-facult-dept.component.html',
  styleUrls: ['./add-facult-dept.component.css']
})
export class AddFacultDeptComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private facultyDeptService: FacultyDeptService) { }
  addForm: FormGroup;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      FacultyDeptId: [],
      FacultyDeptCode: ['', Validators.required],
      FacultyDeptName: ['', Validators.required],
      FacultyDeptDescription: ['', Validators.required]
    });
  }
  onSubmit() {
    this.facultyDeptService.createFaculty(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-facultdept']);
      });
  }

}


