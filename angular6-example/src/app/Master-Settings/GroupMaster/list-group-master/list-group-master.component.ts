import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { GroupMasterService } from "src/app/Master-Settings/service/group-master.service";
import { groupMaster } from "src/app/Master-Settings/model/groupMaster.model";

@Component({
  selector: 'app-list-group-master',
  templateUrl: './list-group-master.component.html',
  styleUrls: ['./list-group-master.component.css']
})
export class ListGroupMasterComponent implements OnInit {
groupmasters:groupMaster[];
  constructor(private router: Router, private groupMasterService: GroupMasterService) { }

   cols:any[];
  selectedClass: groupMaster;
  ngOnInit() {

     this.groupMasterService.getGroupMaster()
      .subscribe( data => {
        this.groupmasters = data;
      });
        this.cols = [

        { field: 'GroupCode', header: 'GroupCode' },
        { field: 'GroupName', header: 'GroupName' },
        { field: 'UniversityId', header: 'UniversityId' },
     
          ];
 
    ApplicationCache
  }
   groupMaster : any = {};

  onRowSelect(data) {
    debugger
    this.groupMaster = this.deletegroup(data);

   
}
  
  
 
  editGroup(data){
    localStorage.removeItem("GroupMasterId");
    localStorage.setItem("editGroupId", data.GroupMasterId.toString());
    this.router.navigate(['edit-group-master']);
  };

     deletegroup(data){
    this.groupMasterService.deleteGroup(data.GroupMasterId)
    .subscribe( data => {
      this.groupmasters=this.groupmasters.filter(s=>s !==data );
    })
  };
 
    addGroup(): void {
    this.router.navigate(['add-group-master']);
  };

}
  
