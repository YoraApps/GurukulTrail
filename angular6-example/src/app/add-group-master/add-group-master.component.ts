import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {GroupMasterService} from "../service/group-master.service";

@Component({
  selector: 'app-add-group-master',
  templateUrl: './add-group-master.component.html',
  styleUrls: ['./add-group-master.component.css']
})
export class AddGroupMasterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private groupMasterService: GroupMasterService) { }
  
  addForm: FormGroup;

  ngOnInit() {

      this.addForm = this.formBuilder.group({
      GroupMasterId: [],
      GroupCode: ['', Validators.required],
      GroupName: ['', Validators.required],
      UniversityId: ['', Validators.required]
    });
  }
   onSubmit() {
     debugger
    this.groupMasterService.createGroupDetail(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-group-master']);
      });
  }

}
