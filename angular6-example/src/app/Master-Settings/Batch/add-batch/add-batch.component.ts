import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BatchService} from "../../../service/batch.service"; 
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-batch',
  templateUrl: './add-batch.component.html',
  styleUrls: ['./add-batch.component.css']
})
export class AddBatchComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private batchService: BatchService) { }
  addForm: FormGroup;
  ngOnInit() {
    debugger
    this.addForm = this.formBuilder.group({
      // BatchId: [],
      BatchName: ['', Validators.required],
      ResultType: ['', Validators.required],
      AcademicTerm: ['', Validators.required]
      //  UniversityId: ['', Validators.required],
      // BatchType: ['', Validators.required]
    });
  }
 onSubmit() {
    this.batchService.createBatch(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-batch']);
      });
  }
}
