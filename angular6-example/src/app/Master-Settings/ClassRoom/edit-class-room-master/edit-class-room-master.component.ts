import { Component, OnInit } from '@angular/core';
import {first} from "rxjs/operators";
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import { ClassRoomMasterServiceService } from "src/app/Master-Settings/service/class-room-master-service.service";
import { classRoomMaster } from "src/app/Master-Settings/model/classRoomMaster.model";

@Component({
  selector: 'app-edit-class-room-master',
  templateUrl: './edit-class-room-master.component.html',
  styleUrls: ['./edit-class-room-master.component.css']
})
export class EditClassRoomMasterComponent implements OnInit {

  classRoomMasters: classRoomMaster;
  editForm :FormGroup= new FormGroup({
    Class_Id: new  FormControl(''),
    UniversityId: new  FormControl(''),
    Class_Name: new  FormControl(''),
  });
  constructor(private formBuilder: FormBuilder,private router: Router, private classRoomMasterServiceService: ClassRoomMasterServiceService) { }
  Class_Id
  ngOnInit() {
    this.Class_Id = localStorage.getItem("editClass_Id");
    if(!this.Class_Id) {
      alert("Invalid action.")
      this.router.navigate(['list-classRoomMaster']);
      return;
  }
  else{
    this.classRoomMasterServiceService.getClassMasterById(this.Class_Id)
    .subscribe( data => {
      this.classRoomMasters=data;
      this.editForm.setValue(this.classRoomMasters);
    })
}
}
onSubmit(){  
  this.classRoomMasterServiceService.updateClassMaster(this.editForm.value)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate(['list-classRoomMaster']);
      },
      error => {
        alert(error);
      });
}
}


