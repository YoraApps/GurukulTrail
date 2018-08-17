import { Injectable } from '@angular/core';
import {ChapterMaster} from '../model/ChapterMaster.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChapterMasterServiceService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:1487/api/ChapterMaster/';

  gethChapterMaster() {
    return this.http.get<ChapterMaster[]>(this.baseUrl+"/getAllChapterMaster");
  }
  getChapterMasterById(chapterId) {
    return this.http.get<ChapterMaster>(this.baseUrl+ '/getChapterMasterById/' + chapterId);
  }
  createChapterMaster(chapterMaster: ChapterMaster) {
    return this.http.post(this.baseUrl+"/update", chapterMaster);
  }
  updateChapterMaster(chapterMaster: ChapterMaster) {
    return this.http.post(this.baseUrl+"/update", chapterMaster);
  }
  deleteChapterMaster(id: number) {
    return this.http.delete(this.baseUrl+"/Delete/" + id);
  }
}
