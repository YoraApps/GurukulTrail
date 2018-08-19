import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import { ProgramstudyService } from 'src/app/service/programstudy.service';

@Component({
  selector: 'app-addprogramstudy',
  templateUrl: './addprogramstudy.component.html',
  styleUrls: ['./addprogramstudy.component.css']
})
export class AddprogramstudyComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private programstudyService: ProgramstudyService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      AcademicTerm: ['', Validators.required],
      ProgramStudyCode: ['', Validators.required],
      ProgramStudyName: ['', Validators.required],
      SKS: ['', Validators.required],
      UniversityId: ['', Validators.required]
    });
  }

  onSubmit() {
    debugger
    this.programstudyService.createUser(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-programstudy']);
      });
  }

}
