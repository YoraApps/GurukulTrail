import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators,FormControl} from "@angular/forms";
import {first} from "rxjs/operators";
import { BatchService } from "src/app/Master-Settings/service/batch.service";
import { Batch } from "src/app/Master-Settings/model/batch.model";

@Component({
  selector: 'app-edit-batch',
  templateUrl: './edit-batch.component.html',
  styleUrls: ['./edit-batch.component.css']
})
export class EditBatchComponent implements OnInit {
  debugger
 batch: Batch;
//   editForm: FormGroup;
   
    editForm :FormGroup= new FormGroup({
    BatchId: new FormControl(''),
    BatchName: new FormControl(''),
    ResultType: new FormControl(''),
    AcademicTerm: new FormControl(''),
    // UniversityId: new FormControl(''),
    // BatchType: new FormControl(''),
  });
  constructor(private formBuilder: FormBuilder,private router: Router, private batchService: BatchService) { }
  BatchId
  ngOnInit() {
    debugger
    this.BatchId = localStorage.getItem("editBatchId");
    if(!this.BatchId) {
      alert("Invalid action.")
      this.router.navigate(['list-batch']);
      return;      
       }
         else{
    this.batchService.getBatchById(this.BatchId)
    .subscribe( data => {
      this.batch=data;
      this.editForm.setValue(this.batch);
    })
   

    // this.editForm = this.formBuilder.group({
    //     BatchId: [],
    //   BatchName: ['', Validators.required],
    //   ResultType: ['', Validators.required],
    //   AcademicTerm: ['', Validators.required],
    //   BatchType: ['', Validators.required]
    // });
    // this.batchService.getBatchById(+batchId)
    //   .subscribe( data => {
    //     this.editForm.setValue(data);
    //   });
  }
}
 onSubmit() {
    this.batchService.updateBatch(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-batch']);
        },
        error => {
          alert(error);
        });
  }

}




