import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {first} from "rxjs/operators";
import {ExaminationTypeService} from "../../../service/examination-type.service";
import {ExaminationType} from "../../../model/examinationType.model";
@Component({
  selector: 'app-edit-exam',
  templateUrl: './edit-exam.component.html',
  styleUrls: ['./edit-exam.component.css']
})
export class EditExamComponent implements OnInit {

  ExaminationTypes: ExaminationType;
  editForm :FormGroup= new FormGroup({
    ExaminationTypeId: new  FormControl(''),
    ExamGroup: new  FormControl(''),
    ExamName: new  FormControl(''),
    MinMarks: new  FormControl(''),
    MaxMarks: new  FormControl(''),
    FeeLabel: new  FormControl(''),
    Amount: new  FormControl(''),
    UniversityId:new FormControl(''),
    Active:new FormControl(''),
    lastupdateddt:new FormControl(''),
    lastupdatedby:new FormControl('')
  });
  constructor(private formBuilder: FormBuilder,private router: Router, private examinationTypeService: ExaminationTypeService) { }
  ExaminationTypeId
  ngOnInit() {
    this.ExaminationTypeId = localStorage.getItem("editExaminationTypeId");
    if(!this.ExaminationTypeId) {
      alert("Invalid action.")
      this.router.navigate(['list-exam']);
      return;
  }
  else{
    this.examinationTypeService.getExaminationById(this.ExaminationTypeId)
    .subscribe( data => {
      this.ExaminationTypes=data;
      this.editForm.setValue(this.ExaminationTypes);
    })
  }
}
onSubmit() {
  this.examinationTypeService.updateExamination(this.editForm.value)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate(['list-exam']);
      },
      error => {
        alert(error);
      });
}

}
