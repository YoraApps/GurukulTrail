import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {ListSemesterMasterComponent } from './Master-Settings/Semester/list-semester-master/list-semester-master.component';
import {EditSemesterMasterComponent } from './Master-Settings/Semester/edit-semester-master/edit-semester-master.component';
import {AddSemesterMasterComponent} from './Master-Settings/Semester/add-semester-master/add-semester-master.component';
import { ListClassRoomMasterComponent } from './Master-Settings/ClassRoom/list-class-room-master/list-class-room-master.component';
import { AddClassRoomMasterComponent } from './Master-Settings/ClassRoom/add-class-room-master/add-class-room-master.component';
import {EditClassRoomMasterComponent} from './Master-Settings/ClassRoom/edit-class-room-master/edit-class-room-master.component';

import { ListGroupMasterComponent } from "src/app/list-group-master/list-group-master.component";
import { AddGroupMasterComponent } from "src/app/add-group-master/add-group-master.component";
import { EditGroupMasterComponent } from "src/app/edit-group-master/edit-group-master.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'list-semesterMaster',component:ListSemesterMasterComponent},
  { path: 'edit-semestermaster',component:EditSemesterMasterComponent},
  { path: 'add-semesterMaster',component:AddSemesterMasterComponent},
   { path: 'list-group-master',component:ListGroupMasterComponent},
   {path:'add-group-master',component:AddGroupMasterComponent},
   {path:'edit-group-master',component:EditGroupMasterComponent},
  {path: 'list-classRoomMaster',component:ListClassRoomMasterComponent},
  {path: 'add-ClassMaster',component:AddClassRoomMasterComponent},
  {path: 'edit-classRoomMaster',component:EditClassRoomMasterComponent},
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
