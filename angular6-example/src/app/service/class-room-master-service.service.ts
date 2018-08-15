import { Injectable } from '@angular/core';
import {classRoomMaster} from '../model/classRoomMaster.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClassRoomMasterServiceService {

  constructor(private http: HttpClient) {  }
   baseUrl:string='http://localhost:1487api/classRoomMaster';
   getClassMaster() {
    return this.http.get<classRoomMaster[]>(this.baseUrl+"/getclassmaster");
  }

  getClassMasterById(classId) {
    return this.http.get<classRoomMaster>(this.baseUrl+ '/getClassRoomMasterById/' + classId);
  }

  createClassMaster(classmaster: classRoomMaster) {
    return this.http.post(this.baseUrl+"/update", classmaster);
  }

  updateClassMaster(classmaster: classRoomMaster) {
    return this.http.post(this.baseUrl+"/update", classmaster);
  }

  deleteClassMaster(id: number) {
    return this.http.delete(this.baseUrl+"/delete/" + id);
  }
}
