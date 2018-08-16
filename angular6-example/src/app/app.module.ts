import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {routing} from "./app.routing";
import {AuthenticationService} from "./service/auth.service";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import {ListUserComponent} from "./list-user/list-user.component";
import {UserService} from "./service/user.service";
import {SemesterMasterService} from "./service/semester-master.service";
import { AddSemesterMasterComponent } from './add-semester-master/add-semester-master.component';
import { EditSemesterMasterComponent } from './edit-semester-master/edit-semester-master.component';
import { ListSemesterMasterComponent } from './list-semester-master/list-semester-master.component';
import { ListClassRoomMasterComponent } from './list-class-room-master/list-class-room-master.component';
import { ListGroupMasterComponent } from './list-group-master/list-group-master.component';
import { AddGroupMasterComponent } from './add-group-master/add-group-master.component';
import { EditGroupMasterComponent } from './edit-group-master/edit-group-master.component';
import {GroupMasterService} from "./service/group-master.service";
import {ClassRoomMasterServiceService} from './service/class-room-master-service.service';
import { AddClassRoomMasterComponent } from './add-class-room-master/add-class-room-master.component';
import { EditClassRoomMasterComponent } from './edit-class-room-master/edit-class-room-master.component';
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
    EditClassRoomMasterComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService, UserService, SemesterMasterService,ClassRoomMasterServiceService,GroupMasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
