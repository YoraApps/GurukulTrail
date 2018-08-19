import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {first} from "rxjs/operators";
import { GroupMasterService } from "src/app/Master-Settings/service/group-master.service";
import { groupMaster } from "src/app/Master-Settings/model/groupMaster.model";

@Component({
  selector: 'app-edit-group-master',
  templateUrl: './edit-group-master.component.html',
  styleUrls: ['./edit-group-master.component.css']
})
export class EditGroupMasterComponent implements OnInit {


 groupMasters: groupMaster;
  editForm :FormGroup= new FormGroup({
    GroupMasterId: new  FormControl(''),
    GroupCode: new  FormControl(''),
    GroupName: new  FormControl(''),
    UniversityId: new  FormControl(''),
  });
  constructor(private formBuilder: FormBuilder,private router: Router, private groupMasterService: GroupMasterService) { }
 GroupMasterId
  ngOnInit() {
    this.GroupMasterId = localStorage.getItem("editGroupId");
    if(!this.GroupMasterId) {
      alert("Invalid action.")
      this.router.navigate(['list-group-master']);
      return;
  }
  else{
    this.groupMasterService.getGroupById(this.GroupMasterId)
    .subscribe( data => {
      this.groupMasters=data;
      this.editForm.setValue(this.groupMasters);
    })
    
  }
}
  onSubmit() {
    this.groupMasterService.updateGroupDetail(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-group-master']);
        },
        error => {
          alert(error);
        });
  }

}
