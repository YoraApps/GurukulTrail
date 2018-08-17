import { Component, OnInit } from '@angular/core';
import {ChapterMaster} from '../../../model/ChapterMaster.model';
import {Router} from "@angular/router";
import {ChapterMasterServiceService} from "../../../service/chapter-master-service.service";
@Component({
  selector: 'app-list-chapter-master',
  templateUrl: './list-chapter-master.component.html',
  styleUrls: ['./list-chapter-master.component.css']
})
export class ListChapterMasterComponent implements OnInit {

  constructor(private router: Router, private chapterMasterServiceService: ChapterMasterServiceService) { }
  ChapterMasters:ChapterMaster[];
  cols:any[];
  selectedClass:ChapterMaster;
  ngOnInit() {
    this.chapterMasterServiceService.gethChapterMaster()
      .subscribe( data => {
        this.ChapterMasters = data;
      });
      this.cols = [
        { field: 'ChapterId', header: 'Id' },
        { field: 'ChapterNumber', header: 'ChapterNumber' },
        { field: 'ChapterTitle', header: 'ChapterTitle' },
        { field: 'ModeOfTeaching', header: 'ModeOfTeaching' },
        { field: 'ChapterDetails', header: 'ChapterDetails' },
        { field: 'SKS', header: 'SKS' }
    ];
    ApplicationCache
  }
  ChapterMaster : any = {};
  deleteChapter(data){
    debugger
    this.chapterMasterServiceService.deleteChapterMaster(data.ChapterId)
    .subscribe( data => {
      this.ChapterMasters=this.ChapterMasters.filter(s=>s !==data );
    })
  };

  addChapter(): void {
    this.router.navigate(['add-chapterMaster']);
  };
  editChapter(data){
    localStorage.removeItem("editChapterId");
    localStorage.setItem("editChapterId", data.ChapterId.toString());
    this.router.navigate(['edit-ChapterMaster']);
  };

}
