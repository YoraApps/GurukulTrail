import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Degree} from "../../../model/DegreeMaster.model";
import {DegreemasterService} from "../../../service/degreemaster.service";


@Component({
  selector: 'app-list-degree-master',
  templateUrl: './list-degree-master.component.html',
  styleUrls: ['./list-degree-master.component.css']
})
export class ListDegreeMasterComponent implements OnInit {
  degrees: Degree[];
  constructor(private router: Router, private degreemasterService: DegreemasterService) { }
  cols: any[];
  selectedClass: Degree;
  ngOnInit() {
     debugger
    this.degreemasterService.getDegreeMaster()
    .subscribe( data => {
      this.degrees = data;
    });
         this.cols = [
      { field: 'DegreeCode', header: 'DegreeCode' },
      { field: 'DegreeName', header: 'DegreeName' },
        ];
  ApplicationCache
  }

  Degree : any = {};

  onRowSelect(data) {
    
    this.Degree = this.deleteDegree(data);
}
  
  addDegree(): void {
    this.router.navigate(['add-degree']);
  };

  editDegree(data){
    localStorage.removeItem("DegreeId");
    localStorage.setItem("editDegreeId", data.DegreeId.toString());
    this.router.navigate(['edit-Degreemaster']);
  };

  deleteDegree(data){
    this.degreemasterService.deleteDegree(data.DegreeId)
    .subscribe( data => {
      this.degrees=this.degrees.filter(s=>s !==data );
    })
  };
  

}
