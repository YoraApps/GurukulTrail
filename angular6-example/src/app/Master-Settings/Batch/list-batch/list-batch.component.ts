import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { BatchService } from "src/app/Master-Settings/service/batch.service";
import { Batch } from "src/app/Master-Settings/model/batch.model";

@Component({
  selector: 'app-list-batch',  
  templateUrl: './list-batch.component.html',
  styleUrls: ['./list-batch.component.css']
})    
export class ListBatchComponent implements OnInit {
 batchs: Batch[];
  constructor(private router: Router, private batchService: BatchService) { }
  cols: any[];
  selectedClass: Batch;
  
  ngOnInit() {
    this.batchService.getBatchs()
      .subscribe( data => {
        this.batchs = data;
      });
           this.cols = [
        { field: 'BatchName', header: 'Name' },
        { field: 'ResultType', header: 'Type' },
        { field: 'AcademicTerm', header: 'AcademicTerm' },
        // { field: 'SKS', header: 'SKS' },
          ];
    ApplicationCache
  }
    Batch : any = {};

  onRowSelect(data) {
    debugger
    this.Batch = this.deleteBatch(data);

    //this.displayDialog = true;
}
 
   deleteBatch(batch:Batch): void {
    this.batchService.deleteBatch(batch.BatchId)
      .subscribe( data => {
        this.batchs = this.batchs.filter(b => b !== batch);
      })
  };
    editBatch(batch: Batch): void {
    localStorage.removeItem("editBatchId");
    localStorage.setItem("editBatchId", batch.BatchId.toString());
    this.router.navigate(['edit-batch']);
  };
  addBatch(): void {
    this.router.navigate(['add-batch']);
  };
}
