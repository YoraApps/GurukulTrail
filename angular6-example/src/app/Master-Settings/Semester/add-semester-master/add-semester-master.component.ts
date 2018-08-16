import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SemesterMasterService} from "../../../service/semester-master.service";

@Component({
  selector: 'app-add-semester-master',
  templateUrl: './add-semester-master.component.html',
  styleUrls: ['./add-semester-master.component.css']
})
export class AddSemesterMasterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private semesterMasterService: SemesterMasterService) { }
 
  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      SemesterId: [],
      SemesterCode: ['', Validators.required],
      SemesterName: ['', Validators.required],
      SKS: ['', Validators.required]
    });
  }
  onSubmit() {
    this.semesterMasterService.createSemester(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-semesterMaster']);
      });
  }

}


