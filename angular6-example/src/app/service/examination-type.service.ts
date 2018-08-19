import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ExaminationType} from "../model/examinationType.model";
@Injectable({
  providedIn: 'root'
})
export class ExaminationTypeService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:1487/api/examinationType';
  getExamination() {
    return this.http.get<ExaminationType[]>(this.baseUrl+"/GetAllEmaminationType");
  }
  
  getExaminationById(examId) {
    return this.http.get<ExaminationType>(this.baseUrl+ '/GetExaminationTypeById/' + examId);
  } 
  
  createExamination(examinationType: ExaminationType) {
    return this.http.post(this.baseUrl+"/Update", examinationType);
  }
  
  updateExamination(examinationType: ExaminationType) {
    return this.http.post(this.baseUrl+"/Update", examinationType);
  }
  
  deleteExamination(id: number) {
    return this.http.delete(this.baseUrl+"/Delete/" + id);
  }
}
