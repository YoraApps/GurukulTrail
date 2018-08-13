import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {semesterMaster} from "../model/semesterMaster.model";

@Injectable()
export class SemesterMasterService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:1487/api/semesterMaster/GetAllsemesterMaster';
  baseUrl2: string = 'http://localhost:1487/api/semesterMaster/Delete';

getSemester() {
  debugger  
  return this.http.get<semesterMaster[]>(this.baseUrl);
}  

createSemester(semester: semesterMaster) {
  return this.http.post(this.baseUrl, semester);
}

updateSemester(semester: semesterMaster) {
  return this.http.post(this.baseUrl + '/' + semester.SemesterId, semester);
}

deleteSemester(id: number) {
  debugger
  return this.http.delete(this.baseUrl2 + '/' + id);
}
}

