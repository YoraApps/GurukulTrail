import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Batch } from "src/app/Master-Settings/model/batch.model";
@Injectable({
  providedIn: 'root'
})
export class BatchService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:1487/api/BatchMaster';
    getBatchs() {
       return this.http.get<Batch[]>(this.baseUrl+"/GetAllBatchMaster");
  }
   getBatchById(id: number) {
    return this.http.get<Batch>(this.baseUrl + "/getById/" + id);
  }
  
  createBatch(batch: Batch) {
    debugger
    return this.http.post(this.baseUrl+"/Update", batch);
  }
  updateBatch(batch: Batch) {
  debugger
    return this.http.post(this.baseUrl + "/Update" , batch);
  }

  deleteBatch(id: number) {
    return this.http.delete(this.baseUrl + "/Delete/"+ id);
  }
}

