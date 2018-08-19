import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClubMasterService } from "src/app/Master-Settings/service/club-master.service";
import { ClubMaster } from "src/app/Master-Settings/model/clubmaster.model";

@Component({
  selector: 'app-list-club-master',
  templateUrl: './list-club-master.component.html',
  styleUrls: ['./list-club-master.component.css']
})
export class ListClubMasterComponent implements OnInit {

  clubMasters: ClubMaster[];
  cols: any[];
  selectedClass: ClubMaster;

  constructor(private router: Router, private clubMasterService: ClubMasterService) { }

  ngOnInit() {
    this.clubMasterService.getUsers()
      .subscribe( data => {
        this.clubMasters = data;
      });
      this.cols = [
        { field: 'ClubId', header: 'Id' },
        { field: 'ClubName', header: 'Code' },
        { field: 'ClubDescription', header: 'ClubDescription' },
    ];
    ApplicationCache
  }
  ClubMaster : any = {};

  onRowSelect(data) {
    debugger
    this.ClubMaster = this.deleteUser(data);

    //this.displayDialog = true;
  }

  deleteUser(data){
    this.clubMasterService.deleteUser(data.ClubId)
    .subscribe( data => {
      this.clubMasters=this.clubMasters.filter(s=>s !==data );
    })
  };

  editUser(data): void {
    debugger
    localStorage.removeItem("editClubId");
    localStorage.setItem("editClubId", data.ClubId.toString());
    this.router.navigate(['edit-club-master']);
  };

  addUser(): void {
    this.router.navigate(['add-club-master']);
  };


}
