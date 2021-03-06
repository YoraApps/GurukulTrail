import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/internal/operators/first';
import { DepartmentMasterService } from "src/app/Master-Settings/service/department-master.service";
import { DepartmentMaster } from "src/app/Master-Settings/model/DepartmentMaster.model";

@Component({
  selector: 'app-edit-department-master',
  templateUrl: './edit-department-master.component.html',
  styleUrls: ['./edit-department-master.component.css']
})
export class EditDepartmentMasterComponent implements OnInit {

  departmentMasters: DepartmentMaster;
  editForm :FormGroup= new FormGroup({
    DepartmentId: new  FormControl(''),
    DepartmentName: new  FormControl(''),
    UniversityId: new  FormControl(''),
  });


  constructor(private formBuilder: FormBuilder,private router: Router, private departmentMasterService: DepartmentMasterService) { }
  DepartmentId
  ngOnInit() {
    this.DepartmentId = localStorage.getItem("editDepartmentId");
    if(!this.DepartmentId) {
      alert("Invalid action.")
      this.router.navigate(['list-department-master']);
      return;
    }
    else{
      this.departmentMasterService.getUserById(this.DepartmentId)
      .subscribe( data => {
        this.departmentMasters=data;
        this.editForm.setValue(this.departmentMasters);
      })
    }
  }
  onSubmit() {
    debugger
    this.departmentMasterService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-department-master']);
        },
        error => {
          alert(error);
        });
  }

}
