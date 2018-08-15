import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ClassRoomMasterServiceService} from "../service/class-room-master-service.service";
import {classRoomMaster} from '../model/classRoomMaster.model';


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

}
