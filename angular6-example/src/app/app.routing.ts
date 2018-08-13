import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {ListSemesterMasterComponent } from './list-semester-master/list-semester-master.component';
import {EditSemesterMasterComponent } from './edit-semester-master/edit-semester-master.component';
import {AddSemesterMasterComponent} from './add-semester-master/add-semester-master.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'list-semesterMaster',component:ListSemesterMasterComponent},
  { path: 'edit-semestermaster',component:EditSemesterMasterComponent},
  { path: 'add-semesterMaster',component:AddSemesterMasterComponent},
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
