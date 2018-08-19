import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Task} from "../model/task.model";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }
    baseUrl: string = 'http://localhost:1487/api/Task';
    getTasks() {
       return this.http.get<Task[]>(this.baseUrl+"/GetAllBatchTask");
  }
   getTaskById(id: number) {
    return this.http.get<Task>(this.baseUrl + "/getById/" + id);
  }
  
  createTask(task: Task) {
    debugger
    return this.http.post(this.baseUrl+"/Update", task);
  }
  updateTask(task: Task) {
  debugger
    return this.http.post(this.baseUrl + "/Update" , task);
  }

  deleteTask(id: number) {
    return this.http.delete(this.baseUrl + "/Delete/"+ id);
  }
}
