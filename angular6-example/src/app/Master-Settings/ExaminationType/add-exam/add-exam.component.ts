import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ExaminationTypeService} from "../../../service/examination-type.service";
@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css']
})
export class AddExamComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private examinationTypeService: ExaminationTypeService) { }
  addForm: FormGroup;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      ExaminationTypeId: [],
      ExamGroup: ['', Validators.required],
      ExamName: ['', Validators.required],
      MinMarks: ['', Validators.required],
      MaxMarks: ['', Validators.required],
      FeeLabel: ['', Validators.required],
      Amount: ['', Validators.required],
    });
  }
  onSubmit() {
    this.examinationTypeService.createExamination(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-exam']);
      });
  }

}

