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
    AddClassRoomMasterComponent,
    EditClassRoomMasterComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService, UserService, SemesterMasterService,ClassRoomMasterServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
