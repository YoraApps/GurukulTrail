import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SubjectService} from "../../../service/subject.service";
import {Subject} from "../../../model/subject.model";

@Component({
  selector: 'app-list-subject',
  templateUrl: './list-subject.component.html',
  styleUrls: ['./list-subject.component.css']
})
export class ListSubjectComponent implements OnInit {
 subjects: Subject[];
  constructor(private router: Router, private subjectService: SubjectService) { }
 cols: any[];
  selectedClass: Subject;
  ngOnInit() {
     this.subjectService.getSubjects()
      .subscribe( data => {
        this.subjects = data;
      });
         this.cols = [
        { field: 'SubjectCode', header: 'Code' },
        { field: 'SubjectName', header: 'Name' },
        { field: 'SKS', header: 'SKS' },
        // { field: 'TheoriticalSKS', header: 'TheoriticalSKS' },
          ];
    ApplicationCache
  }
    Subject : any = {};

  onRowSelect(data) {
    debugger
    this.Subject = this.deleteSubject(data);

    //this.displayDialog = true;

  }
   deleteSubject(subject:Subject): void {
    this.subjectService.deleteSubject(subject.SubjectId)
      .subscribe( data => {
        this.subjects = this.subjects.filter(b => b !== subject);
      })
  };
    editSubject(subject: Subject): void {
    localStorage.removeItem("editSubjectId");
    localStorage.setItem("editSubjectId", subject.SubjectId.toString());
    this.router.navigate(['edit-subject']);
  };
  addSubject(): void {
    this.router.navigate(['add-subject']);
  };

}
    