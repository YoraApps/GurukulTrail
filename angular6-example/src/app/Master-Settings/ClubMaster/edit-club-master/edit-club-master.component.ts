import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ClubMasterService } from "src/app/Master-Settings/service/club-master.service";
import { ClubMaster } from "src/app/Master-Settings/model/clubmaster.model";

@Component({
  selector: 'app-edit-club-master',
  templateUrl: './edit-club-master.component.html',
  styleUrls: ['./edit-club-master.component.css']
})
export class EditClubMasterComponent implements OnInit {

  clubMasters: ClubMaster;
  editForm :FormGroup= new FormGroup({
    ClubId: new  FormControl(''),
    ClubName: new  FormControl(''),
    ClubDescription: new  FormControl(''),
  });

  constructor(private formBuilder: FormBuilder,private router: Router, private clubMasterService: ClubMasterService) { }
  ClubId
  ngOnInit() {
    this.ClubId = localStorage.getItem("editClubId");
    if(!this.ClubId) {
      alert("Invalid action.")
      this.router.navigate(['list-club-master']);
      return;
    }
    else{
      this.clubMasterService.getUserById(this.ClubId)
      .subscribe( data => {
        this.clubMasters=data;
        this.editForm.setValue(this.clubMasters);
      })
    }
  }
  onSubmit() {
    debugger
    this.clubMasterService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-club-master']);
        },
        error => {
          alert(error);
        });
  }
}

