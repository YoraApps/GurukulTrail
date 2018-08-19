import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {semesterMaster} from "../model/semesterMaster.model";

@Injectable()
export class SemesterMasterService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:1487/api/semesterMaster';
  // baseUrl: string = 'http://localhost:1487/api/semesterMaster/GetAllsemesterMaster';
  // baseUrl2: string = 'http://localhost:1487/api/semesterMaster/Delete';
  // baseUrl3: string = 'http://localhost:1487/api/semesterMaster/Update';
  // baseUrl3: string = 'http://localhost:1487/api/semesterMaster/GetSemesterById';

getSemester() {
  return this.http.get<semesterMaster[]>(this.baseUrl+"/GetAllsemesterMaster");
}
getSemesterById(semId) {
  return this.http.get<semesterMaster>(this.baseUrl+ '/GetSemesterById/' + semId);
} 

createSemester(semester: semesterMaster) {
  return this.http.post(this.baseUrl+"/Update", semester);
}

updateSemester(semester: semesterMaster) {
  return this.http.post(this.baseUrl+"/Update", semester);
}

deleteSemester(id: number) {
  debugger
  return this.http.delete(this.baseUrl+"/Delete/" + id);
}
}

