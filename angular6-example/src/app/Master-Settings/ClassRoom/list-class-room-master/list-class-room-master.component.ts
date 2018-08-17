import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ClassRoomMasterServiceService} from "../../../service/class-room-master-service.service";
import {classRoomMaster} from '../../../model/classRoomMaster.model';


@Component({
  selector: 'app-list-class-room-master',
  templateUrl: './list-class-room-master.component.html',
  styleUrls: ['./list-class-room-master.component.css']
})
export class ListClassRoomMasterComponent implements OnInit {

  constructor(private router:Router,private classRoomMasterServiceService:ClassRoomMasterServiceService) { }
  classRoomMasters:classRoomMaster[];

  cols: any[];
  selectedClass: classRoomMaster;
  ngOnInit() {
    this.classRoomMasterServiceService.getClassMaster()
    .subscribe(data=>{
      this.classRoomMasters = data;
    });
    this.cols = [
      { field: 'Class_Id', header: 'Id' },
      { field: 'UniversityId', header: 'UniversityId' },
      { field: 'Class_Name', header: 'Class_Name' }
  ];
  ApplicationCache
  }
  addClassRoomMaster(): void {
    this.router.navigate(['add-ClassMaster']);
  };

  classRoomMaster: any = {};
  deleteClassMaster(data){
    this.classRoomMasterServiceService.deleteClassMaster(data.Class_Id)
    .subscribe( data => {
      this.classRoomMasters=this.classRoomMasters.filter(s=>s !== data );
    })
  };

  editClassMaster(data){
    localStorage.removeItem("editClass_Id");
    localStorage.setItem("editClass_Id", data.Class_Id.toString());
    this.router.navigate(['edit-classRoomMaster']);
  };

}
