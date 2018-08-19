import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ExaminationTypeService} from "../../../service/examination-type.service";
import {ExaminationType} from "../../../model/examinationType.model";
@Component({
  selector: 'app-list-exam',
  templateUrl: './list-exam.component.html',
  styleUrls: ['./list-exam.component.css']
})
export class ListExamComponent implements OnInit {

  constructor(private router: Router, private examinationTypeService: ExaminationTypeService) { }

  ExaminationTypes: ExaminationType[];
  cols: any[];
  selectedClass: ExaminationType;
  ngOnInit() {
    this.examinationTypeService.getExamination()
    .subscribe( data => {
      this.ExaminationTypes = data;
    });
    this.cols = [
      { field: 'ExaminationTypeId', header: 'Id' },
      { field: 'ExamGroup', header: 'ExamGroup' },
      { field: 'ExamName', header: 'ExamName' },
      { field: 'MinMarks', header: 'MinMarks' },
      { field: 'MaxMarks', header: 'MaxMarks' },
      { field: 'FeeLabel', header: 'FeeLabel' },
      { field: 'Amount', header: 'Amount' }
  ];
  ApplicationCache
  }
  ExaminationType : any = {};
  deleteExam(data){
    this.examinationTypeService.deleteExamination(data.ExaminationTypeId)
    .subscribe( data => {
      this.ExaminationTypes=this.ExaminationTypes.filter(s=>s !==data );
    })
  };
  editExam(data){
    localStorage.removeItem("editExaminationTypeId");
    localStorage.setItem("editExaminationTypeId", data.ExaminationTypeId.toString());
    this.router.navigate(['edit-exam']);
  };
  addExam(): void {
    this.router.navigate(['add-exam']);
  };

}

