import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms"; 
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import { TaskService } from "src/app/Master-Settings/service/task.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
 addForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private taskService: TaskService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
    
      TaskName: ['', Validators.required],
      TaskDescription: ['', Validators.required],
      TaskDuration: ['', Validators.required]
      //  UniversityId: ['', Validators.required],
      // BatchType: ['', Validators.required]
    });
  }
   onSubmit() {
    this.taskService.createTask(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-task']);
      });
  }

}
