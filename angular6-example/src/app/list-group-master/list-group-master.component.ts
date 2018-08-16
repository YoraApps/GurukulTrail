import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GroupMasterService} from "../service/group-master.service";
import {groupMaster} from "../model/groupMaster.model";

@Component({
  selector: 'app-list-group-master',
  templateUrl: './list-group-master.component.html',
  styleUrls: ['./list-group-master.component.css']
})
export class ListGroupMasterComponent implements OnInit {

  constructor(private router: Router, private groupMasterService: GroupMasterService) { }
 
  groupmasters:groupMaster[];
  ngOnInit() {
    this.groupMasterService.getGroupMaster()
      .subscribe( data => {
        this.groupmasters = data;
      });
  
  }
    editGroup(groupmasters: groupMaster):void{
    localStorage.removeItem("editGroupId");
    localStorage.setItem("editGroupId", groupmasters.GroupMasterId.toString());
    this.router.navigate(['edit-group-master']);
  };

   deletegroup(groupmasters: groupMaster): void{
    this.groupMasterService.deleteGroup(groupmasters.GroupMasterId)
    .subscribe( data => {
      this.groupmasters=this.groupmasters.filter(s=>s !==groupmasters );
    })
  };

    addGroup(): void {
    this.router.navigate(['add-group-master']);
  };

}
