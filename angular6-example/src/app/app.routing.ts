import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from "./login/login.component";
import { AddUserComponent} from "./add-user/add-user.component";
import { ListUserComponent} from "./list-user/list-user.component";
import { EditUserComponent} from "./edit-user/edit-user.component";
import { AddBatchComponent } from './Master-Settings/Batch/add-batch/add-batch.component';
import { ListBatchComponent } from './Master-Settings/Batch/list-batch/list-batch.component';
import { EditBatchComponent } from './Master-Settings/Batch/edit-batch/edit-batch.component';
import { AddSubjectComponent } from './Master-Settings/Subject/add-subject/add-subject.component';
import { ListSubjectComponent } from './Master-Settings/Subject/list-subject/list-subject.component';
import { EditSubjectComponent } from './Master-Settings/Subject/edit-subject/edit-subject.component';
import { AddTaskComponent } from './Master-Settings/Task/add-task/add-task.component';
import { EditTaskComponent } from './Master-Settings/Task/edit-task/edit-task.component';
import { ListSemesterMasterComponent } from './Master-Settings/Semester/list-semester-master/list-semester-master.component';
import { EditSemesterMasterComponent } from './Master-Settings/Semester/edit-semester-master/edit-semester-master.component';
import { AddSemesterMasterComponent} from './Master-Settings/Semester/add-semester-master/add-semester-master.component';
import { ListClassRoomMasterComponent } from './Master-Settings/ClassRoom/list-class-room-master/list-class-room-master.component';
import { AddClassRoomMasterComponent } from './Master-Settings/ClassRoom/add-class-room-master/add-class-room-master.component';
import { EditClassRoomMasterComponent} from './Master-Settings/ClassRoom/edit-class-room-master/edit-class-room-master.component';
import { ListGroupMasterComponent } from "src/app/list-group-master/list-group-master.component";
import { AddGroupMasterComponent } from "src/app/add-group-master/add-group-master.component";
import { EditGroupMasterComponent } from "src/app/edit-group-master/edit-group-master.component";
import { ListTaskComponent } from "./Master-Settings/Task/list-task/list-task.component";
import { AddprogramstudyComponent } from './Master-Settings/programstudy/addprogramstudy/addprogramstudy.component';
import { EditprogramstudyComponent } from './Master-Settings/programstudy/editprogramstudy/editprogramstudy.component';
import { ListprogramstudyComponent } from './Master-Settings/programstudy/listprogramstudy/listprogramstudy.component';
import { AddClubMasterComponent } from './Master-Settings/ClubMaster/add-club-master/add-club-master.component';
import { EditClubMasterComponent } from './Master-Settings/ClubMaster/edit-club-master/edit-club-master.component';
import { ListClubMasterComponent } from './Master-Settings/ClubMaster/list-club-master/list-club-master.component';
import { AddDepartmentMasterComponent } from './Master-Settings/DepartmentMaster/add-department-master/add-department-master.component';
import { EditDepartmentMasterComponent } from './Master-Settings/DepartmentMaster/edit-department-master/edit-department-master.component';
import { ListDepartmentMasterComponent } from './Master-Settings/DepartmentMaster/list-department-master/list-department-master.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'add-batch',component:AddBatchComponent},
  { path: 'edit-batch',component:EditBatchComponent},
  { path: 'list-batch',component:ListBatchComponent},
  { path: 'list-task',component:ListTaskComponent},
  { path: 'edit-task',component:EditTaskComponent}, 
  { path: 'add-subject',component:AddSubjectComponent},
  { path: 'list-subject',component:ListSubjectComponent},
  { path: 'edit-subject',component:EditSubjectComponent},
  { path: 'list-semesterMaster',component:ListSemesterMasterComponent},
  { path: 'edit-semestermaster',component:EditSemesterMasterComponent},
  { path: 'add-semesterMaster',component:AddSemesterMasterComponent},
  { path: 'list-group-master',component:ListGroupMasterComponent},
  { path: 'add-group-master',component:AddGroupMasterComponent},
  { path: 'edit-group-master',component:EditGroupMasterComponent},
  { path: 'list-classRoomMaster',component:ListClassRoomMasterComponent},
  { path: 'add-ClassMaster',component:AddClassRoomMasterComponent},
  { path: 'edit-classRoomMaster',component:EditClassRoomMasterComponent},
  { path: 'add-task',component:AddTaskComponent},
  { path: 'list-programstudy',component:ListprogramstudyComponent},
  { path: 'edit-programstudy',component:EditprogramstudyComponent},
  { path: 'add-programstudy',component:AddClubMasterComponent},
  { path: 'list-club-master',component:ListClubMasterComponent},
  { path: 'edit-club-master',component:EditClubMasterComponent},
  { path: 'add-club-master',component:AddClubMasterComponent},
  { path: 'list-department-master',component:ListDepartmentMasterComponent},
  { path: 'edit-department-master',component:EditDepartmentMasterComponent},
  { path: 'add-department-master',component:AddDepartmentMasterComponent},
  { path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
