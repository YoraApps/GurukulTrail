import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../../service/task.service";
import {Router} from "@angular/router";
import {Task} from "../../../model/task.model";
import {FormBuilder, FormGroup, Validators,FormControl} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
 task:Task;

    editForm :FormGroup= new FormGroup({
    TaskId: new FormControl(''),
    TaskName: new FormControl(''),
    TaskDescription: new FormControl(''),
    TaskDuration: new FormControl('')
  });
  constructor(private formBuilder: FormBuilder,private router: Router, private taskService:TaskService) { }
 TaskId
  ngOnInit() {
    this.TaskId = localStorage.getItem("editTaskId");
    if(!this.TaskId) {
      alert("Invalid action.")
      this.router.navigate(['list-task']);
      return;      
       }
         else{
    this.taskService.getTaskById(this.TaskId)
    .subscribe( data => {
      this.task=data;
      this.editForm.setValue(this.task);
    })
   }
}
 onSubmit() {
    this.taskService.updateTask(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-task']);
        },
        error => {
          alert(error);
        });
  }

}
