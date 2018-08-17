import { Component, OnInit } from '@angular/core';
import {SubjectService} from "../../../service/subject.service";
import {Router} from "@angular/router";
import {Subject} from "../../../model/subject.model";
import {FormBuilder, FormGroup, Validators,FormControl} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})
export class EditSubjectComponent implements OnInit {
 subject: Subject;
  editForm :FormGroup= new FormGroup({
    SubjectId: new FormControl(''),
    SubjectCode: new FormControl(''),
    SubjectName: new FormControl(''),
    SKS: new FormControl(''),
    // TheoriticalSKS: new FormControl(''),
    //  PracticalSKS: new FormControl(''),
  });
  constructor(private formBuilder: FormBuilder,private router: Router, private subjectService:SubjectService) { }
 SubjectId
  ngOnInit() {
      this.SubjectId = localStorage.getItem("editSubjectId");
    if(!this.SubjectId) {
      alert("Invalid action.")
      this.router.navigate(['list-subject']);
      return;      
       }
         else{
    this.subjectService.getSubjectById(this.SubjectId)
    .subscribe( data => {
      this.subject=data;
      this.editForm.setValue(this.subject);
    })
      }
}
 onSubmit() {
    this.subjectService.updateSubject(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-subject']);
        },
        error => {
          alert(error);
        });
  }

}
