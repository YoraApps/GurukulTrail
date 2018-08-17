import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ChapterMasterServiceService} from "../../../service/chapter-master-service.service";


@Component({
  selector: 'app-add-chapter-master',
  templateUrl: './add-chapter-master.component.html',
  styleUrls: ['./add-chapter-master.component.css']
})
export class AddChapterMasterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private chapterMasterServiceService: ChapterMasterServiceService) { }
  
  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      ChapterId: [],
      ChapterNumber: ['', Validators.required],
      ChapterTitle: ['', Validators.required],
      ModeOfTeaching: ['', Validators.required],
      ChapterDetails: ['', Validators.required],
      SKS: ['', Validators.required]
    });
  }
  onSubmit() {
    this.chapterMasterServiceService.createChapterMaster(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-chapterMaster']);
      });
  }

}
