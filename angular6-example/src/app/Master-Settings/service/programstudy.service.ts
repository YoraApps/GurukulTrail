import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ProgramStudyMaster} from "../model/programstudy.model";


@Injectable()
export class ProgramstudyService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:1487/api/ProgramStudyMaster';

  getUsers() {
    return this.http.get<ProgramStudyMaster[]>(this.baseUrl + '/GetallProgramStudyMaster');
  }
  
  getUserById(id: string) {
    return this.http.get<ProgramStudyMaster>(this.baseUrl + '/GetSingleProgramStudyMaster/' + id);
  }

  createUser(programStudyMaster: ProgramStudyMaster) {
    return this.http.post(this.baseUrl+ '/Update', programStudyMaster);
  }

  updateUser(programStudyMaster: ProgramStudyMaster) {
    return this.http.post(this.baseUrl+"/Update", programStudyMaster);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl+"/Delete/" + id);
  }

}
