import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DepartmentMaster } from 'src/app/model/DepartmentMaster.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentMasterService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:1487/api/DepartmentMaster';

  getUsers() {
    return this.http.get<DepartmentMaster[]>(this.baseUrl + '/GetallDepartmentMaster');
  }
  
  getUserById(id: string) {
    return this.http.get<DepartmentMaster>(this.baseUrl + '/GetSingleDepartmentMaster/' + id);
  }

  createUser(departmentMaster: DepartmentMaster) {
    return this.http.post(this.baseUrl+ '/Update', departmentMaster);
  }

  updateUser(departmentMaster: DepartmentMaster) {
    return this.http.post(this.baseUrl+"/Update", departmentMaster);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl+"/Delete/" + id);
  }
}
