import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from "../model/subject.model";
@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:1487/api/SubjectMaster';
    getSubjects() {
       return this.http.get<Subject[]>(this.baseUrl+"/GetAllSubjectMaster");
  }
   getSubjectById(id: number) {
    return this.http.get<Subject>(this.baseUrl + "/getById/" + id);
  }
    createSubject(subject: Subject) {
    debugger
    return this.http.post(this.baseUrl+"/Update", subject);
  }
  updateSubject(subject: Subject) {
    
  debugger
    return this.http.post(this.baseUrl + "/Update" , subject);
  }

  deleteSubject(id: number) {
    return this.http.delete(this.baseUrl + "/Delete/"+ id);
  }
}
