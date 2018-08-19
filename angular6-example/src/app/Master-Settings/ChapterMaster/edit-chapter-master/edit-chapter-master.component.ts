import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {first} from "rxjs/operators";
import {ChapterMaster} from '../../../model/ChapterMaster.model';
import {ChapterMasterServiceService} from "../../../service/chapter-master-service.service";
@Component({
  selector: 'app-edit-chapter-master',
  templateUrl: './edit-chapter-master.component.html',
  styleUrls: ['./edit-chapter-master.component.css']
})
export class EditChapterMasterComponent implements OnInit {
  ChapterMasters:ChapterMaster;
  editForm :FormGroup= new FormGroup({
    ChapterId: new  FormControl(''),
    ChapterNumber: new  FormControl(''),
    ChapterTitle: new  FormControl(''),
    ModeOfTeaching: new  FormControl(''),
    ChapterDetails:new FormControl(''),
    SKS:new FormControl('')
  });
  constructor(private formBuilder: FormBuilder,private router: Router, private chapterMasterServiceService: ChapterMasterServiceService) { }
  ChapterId
  ngOnInit() {
    this.ChapterId = localStorage.getItem("editChapterId");
    if(!this.ChapterId) {
      alert("Invalid action.")
      this.router.navigate(['list-chapterMaster']);
      return;
  }
  else{
    this.chapterMasterServiceService.getChapterMasterById(this.ChapterId)
    .subscribe( data => {
      this.ChapterMasters=data;
      this.editForm.setValue(this.ChapterMasters);
    })
  
  }
}
onSubmit() { 
  this.chapterMasterServiceService.updateChapterMaster(this.editForm.value)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate(['list-chapterMaster']);
      },
      error => {
        alert(error);
      });
}

}


