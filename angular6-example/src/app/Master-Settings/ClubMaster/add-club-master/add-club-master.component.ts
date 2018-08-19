import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {first} from "rxjs/operators";
import { ClubMasterService } from "src/app/Master-Settings/service/club-master.service";

@Component({
  selector: 'app-add-club-master',
  templateUrl: './add-club-master.component.html',
  styleUrls: ['./add-club-master.component.css']
})
export class AddClubMasterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private clubMasterService: ClubMasterService) { }
  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      ClubName: ['', Validators.required],
      ClubDescription: ['', Validators.required]
    });
  }

  onSubmit() {
    debugger
    this.clubMasterService.createUser(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-club-master']);
      });
  }

}
