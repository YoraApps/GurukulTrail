import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DegreemasterService} from "../../../service/degreemaster.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-degree-master',
  templateUrl: './add-degree-master.component.html',
  styleUrls: ['./add-degree-master.component.css']
})
export class AddDegreeMasterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private degreemasterService: DegreemasterService) { }
  addForm: FormGroup;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      
      DegreeCode: ['', Validators.required],
      DegreeName: ['', Validators.required] 
    });
  }
  onSubmit() {
    this.degreemasterService.createDegreeDetail(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-degreemaster']);
      });
  }

}
