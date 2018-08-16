import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{groupMaster} from "../model/groupMaster.model";

@Injectable({
  providedIn: 'root'
})
export class GroupMasterService {

  constructor(private http: HttpClient) { }
    baseUrl: string = 'http://localhost:1487/api/GroupMaster';

  getGroupMaster() {
  return this.http.get<groupMaster[]>(this.baseUrl+"/GetAllGroupDetails");
}
getGroupById(GroupMasterId) {
  return this.http.get<groupMaster>(this.baseUrl+ '/GetAllGroupDetails/' + GroupMasterId);
} 
createGroupDetail(Group: groupMaster) {
  return this.http.post(this.baseUrl+"/Update", Group);
}

updateGroupDetail(Group: groupMaster) {
  return this.http.post(this.baseUrl+"/Update", Group);
}
deleteGroup(Id: number) {
  return this.http.delete(this.baseUrl+"/Delete/" + Id);
}
}
