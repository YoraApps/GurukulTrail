import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { FeeService } from "src/app/service/fee.service";

@Component({
  selector: 'app-add-fee',
  templateUrl: './add-fee.component.html',
  styleUrls: ['./add-fee.component.css']
})
export class AddFeeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private feeService:FeeService) { }

  addForm: FormGroup;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      FeeId: [],
      FeeLabel: ['', Validators.required],
      Amount: ['', Validators.required],
      Description: ['', Validators.required],
      UniversityId: ['', Validators.required]
    });
  }

  onSubmit() {
     debugger
    this.feeService.CreateFee(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-fee']);
      });
  }

}
