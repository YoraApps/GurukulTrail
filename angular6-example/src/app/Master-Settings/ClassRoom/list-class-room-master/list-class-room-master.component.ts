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
  ngOnInit() {
    this.classRoomMasterServiceService.getClassMaster()
    .subscribe(data=>{
      this.classRoomMasters = data;
    })
  };


  addClassRoomMaster(): void {
    this.router.navigate(['add-ClassMaster']);
  };


  deleteClassMaster(classRoomMasters: classRoomMaster): void{
    this.classRoomMasterServiceService.deleteClassMaster(classRoomMasters.Class_Id)
    .subscribe( data => {
      this.classRoomMasters=this.classRoomMasters.filter(s=>s !== classRoomMasters );
    })
  };

  editClassMaster(classRoomMasters: classRoomMaster):void{
    localStorage.removeItem("editClass_Id");
    localStorage.setItem("editClass_Id", classRoomMasters.Class_Id.toString());
    this.router.navigate(['edit-classRoomMaster']);
  };

}
