import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {first} from "rxjs/operators";
import {Degree} from "../../../model/DegreeMaster.model";
import {DegreemasterService} from "../../../service/degreemaster.service";

@Component({
  selector: 'app-edit-degree-master',
  templateUrl: './edit-degree-master.component.html',
  styleUrls: ['./edit-degree-master.component.css']
})
export class EditDegreeMasterComponent implements OnInit {

  degrees: Degree;
  editForm :FormGroup= new FormGroup({
    DegreeId: new  FormControl(''),
    DegreeCode: new  FormControl(''),
    DegreeName: new  FormControl(''),
    
  });
  constructor(private formBuilder: FormBuilder,private router: Router, private degreemasterService: DegreemasterService) { }
  DegreeId
   ngOnInit() {
     this.DegreeId = localStorage.getItem("editDegreeId");
     if(!this.DegreeId) {
       alert("Invalid action.")
       this.router.navigate(['list-degreemaster']);
       return;
   }
   else{
     this.degreemasterService.getDegreeById(this.DegreeId)
     .subscribe( data => {
       this.degrees=data;
       this.editForm.setValue(this.degrees);
     })
     
   }
 }
   onSubmit() {
     this.degreemasterService.updateDegreeDetail(this.editForm.value)
       .pipe(first())
       .subscribe(
         data => {
           this.router.navigate(['list-degreemaster']);
         },
         error => {
           alert(error);
         });
   }

}
