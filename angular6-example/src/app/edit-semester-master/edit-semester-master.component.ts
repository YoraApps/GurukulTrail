import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {first} from "rxjs/operators";
import {SemesterMasterService} from "../service/semester-master.service";
import {semesterMaster} from "../model/semesterMaster.model";


@Component({
  selector: 'app-edit-semester-master',
  templateUrl: './edit-semester-master.component.html',
  styleUrls: ['./edit-semester-master.component.css']
})
export class EditSemesterMasterComponent implements OnInit {

  semesterMasters: semesterMaster;
  editForm :FormGroup= new FormGroup({
    SemesterId: new  FormControl(''),
    SemesterCode: new  FormControl(''),
    SemesterName: new  FormControl(''),
    SKS: new  FormControl(''),
  });
  constructor(private formBuilder: FormBuilder,private router: Router, private semesterMasterService: SemesterMasterService) { }
  SemesterId
  ngOnInit() {
    this.SemesterId = localStorage.getItem("editSemsterId");
    if(!this.SemesterId) {
      alert("Invalid action.")
      this.router.navigate(['list-semesterMaster']);
      return;
  }
  else{
    this.semesterMasterService.getSemesterById(this.SemesterId)
    .subscribe( data => {
      this.semesterMasters=data;
      this.editForm.setValue(this.semesterMasters);
    })
    
    // = new FormGroup({
    //   SemesterCode: new  FormControl(''),
    //   SemesterName: new  FormControl(''),
    //   SKS: new  FormControl(''),
    // });
  }
}
  onSubmit() {
    // console.log(this.editForm.value)
    // console.log(this.SemesterId)
    this.semesterMasterService.updateSemester(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-semesterMaster']);
        },
        error => {
          alert(error);
        });
  }

}

