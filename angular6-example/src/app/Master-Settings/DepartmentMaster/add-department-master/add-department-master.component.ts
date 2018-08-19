import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {first} from "rxjs/operators";
import { DepartmentMasterService } from "src/app/Master-Settings/service/department-master.service";

@Component({
  selector: 'app-add-department-master',
  templateUrl: './add-department-master.component.html',
  styleUrls: ['./add-department-master.component.css']
})
export class AddDepartmentMasterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private departmentMasterService: DepartmentMasterService) { }
  addForm: FormGroup;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      DepartmentName: ['', Validators.required],
      UniversityId: ['', Validators.required]
    });
  }
  onSubmit() {
    debugger
    this.departmentMasterService.createUser(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-department-master']);
      });
  }

}
