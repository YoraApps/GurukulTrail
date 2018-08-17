import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SubjectService} from "../../../service/subject.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private subjectService: SubjectService) { }
   addForm: FormGroup;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
     
      SubjectCode: ['', Validators.required],
      SubjectName: ['', Validators.required],
      SKS: ['', Validators.required]
      // TheoriticalSKS: ['', Validators.required],
      // PracticalSKS:['',Validators.required]
  });
}
onSubmit() {
    this.subjectService.createSubject(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-subject']);
           });
      }
}
