import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TaskService} from "../../../service/task.service";
import {Task} from "../../../model/task.model";
@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {
 tasks: Task[];
  constructor(private router: Router, private taskService: TaskService) { }
  cols: any[];
  selectedClass: Task;
  ngOnInit() {
    this.taskService.getTasks()
      .subscribe( data => {
        this.tasks = data;
      });
           this.cols = [
        { field: 'TaskName', header: 'Name' },
        { field: 'TaskDescription', header: 'Description' },
        { field: 'TaskDuration', header: 'Duration' },
        // { field: 'SKS', header: 'SKS' },
          ];
    ApplicationCache
  }
    Task : any = {};

  onRowSelect(data) {
    debugger
    this.Task = this.deleteTask(data);

    //this.displayDialog = true;
}
deleteTask(task:Task): void {
    this.taskService.deleteTask(task.TaskId)
      .subscribe( data => {
        this.tasks = this.tasks.filter(b => b !== task);
      })
  };
    editTask(task: Task): void {
    localStorage.removeItem("editTaskId");
    localStorage.setItem("editTaskId", task.TaskId.toString());
    this.router.navigate(['edit-task']);
  };
  addTask(): void {
    this.router.navigate(['add-task']);
  };
  }


