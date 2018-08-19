import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClubMaster } from 'src/app/model/clubmaster.model';

@Injectable({
  providedIn: 'root'
})
export class ClubMasterService {

  constructor(private http: HttpClient) { }
   baseUrl: string = 'http://localhost:1487/api/ClubMaster';

  getUsers() {
    return this.http.get<ClubMaster[]>(this.baseUrl + '/GetallClubMaster');
  }
  
  getUserById(id: string) {
    return this.http.get<ClubMaster>(this.baseUrl + '/GetSingleClubMaster/' + id);
  }

  createUser(clubMaster: ClubMaster) {
    return this.http.post(this.baseUrl+ '/Update', clubMaster);
  }

  updateUser(clubMaster: ClubMaster) {
    return this.http.post(this.baseUrl+"/Update", clubMaster);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl+"/Delete/" + id);
  }
}
