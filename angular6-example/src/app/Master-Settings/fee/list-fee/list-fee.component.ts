import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { FeeService } from "src/app/service/fee.service";
import { Fee } from "src/app/model/fee.model";

@Component({
  selector: 'app-list-fee',
  templateUrl: './list-fee.component.html',
  styleUrls: ['./list-fee.component.css']
})
export class ListFeeComponent implements OnInit {
fees:Fee[];
  constructor(private router: Router, private feeService:FeeService) { }
   cols: any[];
  selectedClass: Fee;
  ngOnInit() {

     this.feeService.getFee()
      .subscribe( data => {
        this.fees = data;
      });
        this.cols = [
        { field: 'FeeId', header: 'FeeId' },
        { field: 'FeeLabel', header: 'FeeLabel' },
        { field: 'Amount', header: 'Amount' },
         { field: 'Description', header: 'Description' },
          ];
    ApplicationCache
  }
   Fee : any = {};

  onRowSelect(data) {
    debugger
    this.Fee = this.deleteFee(data);

    //this.displayDialog = true;
}

  addfee(): void {
    this.router.navigate(['add-fee']);
  };

   deleteFee(data){
    this.feeService.deleteFee(data.FeeId)
    .subscribe( data => {
      this.fees=this.fees.filter(s=>s !==data );
    })
  };

   editFee(data){
    localStorage.removeItem("editFeeId");
    localStorage.setItem("editFeeId", data.FeeId.toString());
    this.router.navigate(['edit-fee']);
  };

}
