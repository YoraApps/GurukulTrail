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
import {SemesterMasterService} from "./service/semester-master.service";
import { AddSemesterMasterComponent } from './Master-Settings/Semester/add-semester-master/add-semester-master.component';
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
    ReactiveFormsModule,ReactiveFormsModule,TableModule,
    HttpClientModule,
    ButtonModule,
    PanelModule
  ],
  providers: [AuthenticationService, UserService, SemesterMasterService,ClassRoomMasterServiceService,GroupMasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
