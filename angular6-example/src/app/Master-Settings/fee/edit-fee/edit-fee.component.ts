import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {first} from "rxjs/operators";
import { FeeService } from "src/app/service/fee.service";
import { Fee } from "src/app/model/fee.model";

@Component({
  selector: 'app-edit-fee',
  templateUrl: './edit-fee.component.html',
  styleUrls: ['./edit-fee.component.css']
})
export class EditFeeComponent implements OnInit {

fees:Fee;
   editForm :FormGroup= new FormGroup({
    FeeId: new  FormControl(''),
    FeeType: new FormControl(''),
    FeeLabel: new  FormControl(''),
    Amount: new  FormControl(''),
    Description: new  FormControl('')
  });
  constructor(private formBuilder: FormBuilder,private router: Router, private feeService:FeeService) { }
  FeeId 


  ngOnInit() {
    debugger
     this.FeeId = localStorage.getItem("editFeeId");
    if(!this.FeeId) {
      alert("Invalid action.")
      this.router.navigate(['list-fee']);
      return;
  }
  else{
    this.feeService.GetAllFeeId(this.FeeId)
    .subscribe( data => {
      this.fees=data;
      this.editForm.setValue(this.fees);
    })
    
  }
}
  onSubmit() {
    this.feeService.updateFee(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-fee']);
        },
        error => {
          alert(error);
        });
  }

}
