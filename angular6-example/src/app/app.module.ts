import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {routing} from "./app.routing";
import {AuthenticationService} from "./service/auth.service";
//import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import {ListUserComponent} from "./list-user/list-user.component";
import {UserService} from "./service/user.service";
import {BatchService} from "./service/batch.service";
import {SubjectService} from "./service/subject.service";
import {TaskService} from "./service/task.service";
import { AddSemesterMasterComponent } from './Master-Settings/Semester/add-semester-master/add-semester-master.component';
import {SemesterMasterService} from "./service/semester-master.service";
import { AddBatchComponent } from './Master-Settings/Batch/add-batch/add-batch.component';
import { ListBatchComponent } from './Master-Settings/Batch/list-batch/list-batch.component';
import { EditBatchComponent } from './Master-Settings/Batch/edit-batch/edit-batch.component';
import { AddSubjectComponent } from './Master-Settings/Subject/add-subject/add-subject.component';
import { ListSubjectComponent } from './Master-Settings/Subject/list-subject/list-subject.component';
import { EditSubjectComponent } from './Master-Settings/Subject/edit-subject/edit-subject.component';

import { EditSemesterMasterComponent } from './Master-Settings/Semester/edit-semester-master/edit-semester-master.component';
import { ListSemesterMasterComponent } from './Master-Settings/Semester/list-semester-master/list-semester-master.component';
import { ListClassRoomMasterComponent } from './Master-Settings/ClassRoom/list-class-room-master/list-class-room-master.component';
import { ListGroupMasterComponent } from './list-group-master/list-group-master.component';
import { AddGroupMasterComponent } from './add-group-master/add-group-master.component';
import { EditGroupMasterComponent } from './edit-group-master/edit-group-master.component';
import {GroupMasterService} from "./service/group-master.service";
import {ClassRoomMasterServiceService} from './service/class-room-master-service.service';
import { AddClassRoomMasterComponent } from './Master-Settings/ClassRoom/add-class-room-master/add-class-room-master.component';
import { EditClassRoomMasterComponent } from './Master-Settings/ClassRoom/edit-class-room-master/edit-class-room-master.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import { ListTaskComponent } from './Master-Settings/Task/list-task/list-task.component';
import { AddTaskComponent } from './Master-Settings/Task/add-task/add-task.component';
import { EditTaskComponent } from './Master-Settings/Task/edit-task/edit-task.component';
import {FeeService} from "./service/fee.service";
import { AddFeeComponent } from "src/app/Master-Settings/fee/add-fee/add-fee.component";
import { ListFeeComponent } from "src/app/Master-Settings/fee/list-fee/list-fee.component";
import { EditFeeComponent } from "src/app/Master-Settings/fee/edit-fee/edit-fee.component";
import { ListCampaignItemComponent } from './Master-Settings/campaignItem/list-campaign-item/list-campaign-item.component';
import { AddCampaignItemComponent } from './Master-Settings/campaignItem/add-campaign-item/add-campaign-item.component';
import { EditCampaignItemComponent } from './Master-Settings/campaignItem/edit-campaign-item/edit-campaign-item.component';
import { CampaignItemService } from "src/app/service/campaign-item.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListUserComponent,
    AddUserComponent,
    EditUserComponent,
    AddSemesterMasterComponent,
    EditSemesterMasterComponent,
    ListSemesterMasterComponent,
    ListClassRoomMasterComponent,
    ListGroupMasterComponent,
    AddGroupMasterComponent,
    EditGroupMasterComponent,
    AddClassRoomMasterComponent,
    EditClassRoomMasterComponent,
    AddBatchComponent,
    ListBatchComponent,
    EditBatchComponent,
    AddSubjectComponent,
    ListSubjectComponent,
    EditSubjectComponent,
    ListTaskComponent,
    AddTaskComponent,
    EditTaskComponent,
    AddFeeComponent,
    ListFeeComponent,
    EditFeeComponent,
    ListCampaignItemComponent,
    AddCampaignItemComponent,
    EditCampaignItemComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,ReactiveFormsModule,TableModule,
    HttpClientModule,
    ButtonModule,
    PanelModule
  ],
  providers: [AuthenticationService, UserService,TaskService, SemesterMasterService,ClassRoomMasterServiceService,
  GroupMasterService,BatchService,SubjectService,FeeService,CampaignItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
