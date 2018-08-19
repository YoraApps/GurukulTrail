import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators,FormControl} from "@angular/forms";
import {first} from "rxjs/operators";
import { ProgramstudyService } from "src/app/Master-Settings/service/programstudy.service";
import { ProgramStudyMaster } from "src/app/Master-Settings/model/programstudy.model";


@Component({
  selector: 'ap-editprogramstudy',
  templateUrl: './editprogramstudy.component.html',
  styleUrls: ['./editprogramstudy.component.css']
})
export class EditprogramstudyComponent implements OnInit {
  programStudyMasters: ProgramStudyMaster;
  editForm :FormGroup= new FormGroup({
    ProgramStudyId: new  FormControl(''),
    ProgramStudyCode: new  FormControl(''),
    ProgramStudyName: new  FormControl(''),
    SKS: new  FormControl(''),
    AcademicTerm:new FormControl(''),
    UniversityId: new FormControl(''),
  });

  

  constructor(private formBuilder: FormBuilder,private router: Router, private programstudyService: ProgramstudyService) { }
  ProgramStudyId
  ngOnInit() {
    this.ProgramStudyId = localStorage.getItem("editProgramStudyId");
    if(!this.ProgramStudyId) {
      alert("Invalid action.")
      this.router.navigate(['list-programstudy']);
      return;
  }
  else{
    this.programstudyService.getUserById(this.ProgramStudyId)
    .subscribe( data => {
      this.programStudyMasters=data;
      this.editForm.setValue(this.programStudyMasters);
    })
  }
}

  onSubmit() {
    debugger
    this.programstudyService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-programstudy']);
        },
        error => {
          alert(error);
        });
  }

}
