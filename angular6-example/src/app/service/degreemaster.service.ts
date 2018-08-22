import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Degree} from "../model/DegreeMaster.model";

@Injectable({
  providedIn: 'root'
})
export class DegreemasterService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:1487/api/DegreeMaster';

getDegreeMaster() {
return this.http.get<Degree[]>(this.baseUrl+"/GetAllDegreeMaster");
}
getDegreeById(DegreeId) {
return this.http.get<Degree>(this.baseUrl+ '/getById/' + DegreeId);
} 
createDegreeDetail(Group: Degree) {
return this.http.post(this.baseUrl+"/Update", Group);
}

updateDegreeDetail(Group: Degree) {
return this.http.post(this.baseUrl+"/Update", Group);
}
deleteDegree(DegreeId: number) {
return this.http.delete(this.baseUrl+"/Delete/" + DegreeId);
}
}
