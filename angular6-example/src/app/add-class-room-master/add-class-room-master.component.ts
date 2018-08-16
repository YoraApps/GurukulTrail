import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ClassRoomMasterServiceService} from "../service/class-room-master-service.service";
@Component({
  selector: 'app-add-class-room-master',
  templateUrl: './add-class-room-master.component.html',
  styleUrls: ['./add-class-room-master.component.css']
})
export class AddClassRoomMasterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private classRoomMasterServiceService: ClassRoomMasterServiceService) { }
  addForm: FormGroup;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      Class_Id: [],
      UniversityId: ['', Validators.required],
      Class_Name: ['', Validators.required],
      Created_Ip: ['', Validators.required]
    });
  }

  onSubmit() {
    debugger
    this.classRoomMasterServiceService.createClassMaster(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-classRoomMaster']);
      });
  }
}


