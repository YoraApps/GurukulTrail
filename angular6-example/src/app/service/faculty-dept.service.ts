import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FacultDeptModel} from '../model/FacultyDept.model'
@Injectable({
  providedIn: 'root'
})
export class FacultyDeptService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:1487/api/facultydept';
  getFacultDept() {
    return this.http.get<FacultDeptModel[]>(this.baseUrl+"/GetAllFacultyDept");
  }
  getFacultDeptById(facId) {
    return this.http.get<FacultDeptModel>(this.baseUrl+ '/GetFacultyDeptById/' + facId);
  } 
  createFaculty(facultDeptModel: FacultDeptModel) {
    return this.http.post(this.baseUrl+"/Update", facultDeptModel);
  }
  updateFaculty(facultDeptModel: FacultDeptModel) {
    return this.http.post(this.baseUrl+"/Update", facultDeptModel);
  }
  deleteFaculty(id: number) {    
    return this.http.delete(this.baseUrl+"/Delete/" + id);
  }
}
