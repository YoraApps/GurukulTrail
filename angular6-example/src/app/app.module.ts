import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routing } from "./app.routing";
import { AuthenticationService } from "./service/auth.service";
//import {ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { UserService} from "./service/user.service";
import { BatchService} from "./service/batch.service";
import { CampaignService} from "./service/campaign.service";
import { SubjectService} from "./service/subject.service";
import { VehicleService} from "./service/vehicle.service";
import { TaskService} from "./service/task.service";
import { FacultyDeptService } from './service/faculty-dept.service';
import { ExaminationTypeService } from './service/examination-type.service';
import { ChapterMasterServiceService } from './service/chapter-master-service.service';
import { DriverMasterService } from "./service/driver-master.service";


import { AddSemesterMasterComponent } from './Master-Settings/Semester/add-semester-master/add-semester-master.component';
import { SemesterMasterService } from "./service/semester-master.service";
import { AddBatchComponent } from './Master-Settings/Batch/add-batch/add-batch.component';
import { ListBatchComponent } from './Master-Settings/Batch/list-batch/list-batch.component';
import { EditBatchComponent } from './Master-Settings/Batch/edit-batch/edit-batch.component';
import { AddSubjectComponent } from './Master-Settings/Subject/add-subject/add-subject.component';
import { ListSubjectComponent } from './Master-Settings/Subject/list-subject/list-subject.component';
import { EditSubjectComponent } from './Master-Settings/Subject/edit-subject/edit-subject.component';
import { EditSemesterMasterComponent } from './Master-Settings/Semester/edit-semester-master/edit-semester-master.component';
import { ListSemesterMasterComponent } from './Master-Settings/Semester/list-semester-master/list-semester-master.component';
import { ListClassRoomMasterComponent } from './Master-Settings/ClassRoom/list-class-room-master/list-class-room-master.component';
import { GroupMasterService} from "./service/group-master.service";
import { ClassRoomMasterServiceService} from './service/class-room-master-service.service';
import { AddClassRoomMasterComponent } from './Master-Settings/ClassRoom/add-class-room-master/add-class-room-master.component';
import { EditClassRoomMasterComponent } from './Master-Settings/ClassRoom/edit-class-room-master/edit-class-room-master.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule} from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule} from 'primeng/button';
import { PanelModule} from 'primeng/panel';
import { ListTaskComponent } from './Master-Settings/Task/list-task/list-task.component';
import { AddTaskComponent } from './Master-Settings/Task/add-task/add-task.component';
import { EditTaskComponent } from './Master-Settings/Task/edit-task/edit-task.component';
import { FeeService} from "./service/fee.service";
import { ListCampaignComponent } from './Master-Settings/Campaign/list-campaign/list-campaign.component';
import { AddCampaignComponent } from './Master-Settings/Campaign/add-campaign/add-campaign.component';
import { EditCampaignComponent } from './Master-Settings/Campaign/edit-campaign/edit-campaign.component';
import { AddVehicleComponent } from './Master-Settings/Vehicle/add-vehicle/add-vehicle.component';
import { ListVehicleComponent } from './Master-Settings/Vehicle/list-vehicle/list-vehicle.component';
import { EditVehicleComponent } from './Master-Settings/Vehicle/edit-vehicle/edit-vehicle.component';
import { AddFeeComponent } from "src/app/Master-Settings/fee/add-fee/add-fee.component";
import { ListFeeComponent } from "src/app/Master-Settings/fee/list-fee/list-fee.component";
import { EditFeeComponent } from "src/app/Master-Settings/fee/edit-fee/edit-fee.component";
import { ListCampaignItemComponent } from './Master-Settings/campaignItem/list-campaign-item/list-campaign-item.component';
import { AddCampaignItemComponent } from './Master-Settings/campaignItem/add-campaign-item/add-campaign-item.component';
import { EditCampaignItemComponent } from './Master-Settings/campaignItem/edit-campaign-item/edit-campaign-item.component';
import { CampaignItemService } from "src/app/service/campaign-item.service";
import { AddprogramstudyComponent } from './Master-Settings/programstudy/addprogramstudy/addprogramstudy.component';
import { EditprogramstudyComponent } from './Master-Settings/programstudy/editprogramstudy/editprogramstudy.component';
import { ListprogramstudyComponent } from './Master-Settings/programstudy/listprogramstudy/listprogramstudy.component';
import { ProgramstudyService } from 'src/app/service/programstudy.service';
import { AddClubMasterComponent } from './Master-Settings/ClubMaster/add-club-master/add-club-master.component';
import { EditClubMasterComponent } from './Master-Settings/ClubMaster/edit-club-master/edit-club-master.component';
import { ListClubMasterComponent } from './Master-Settings/ClubMaster/list-club-master/list-club-master.component';
import { ClubMasterService } from 'src/app/service/club-master.service';
import { AddDepartmentMasterComponent } from './Master-Settings/DepartmentMaster/add-department-master/add-department-master.component';
import { EditDepartmentMasterComponent } from './Master-Settings/DepartmentMaster/edit-department-master/edit-department-master.component';
import { ListDepartmentMasterComponent } from './Master-Settings/DepartmentMaster/list-department-master/list-department-master.component';
import { DepartmentMasterService } from 'src/app/service/department-master.service';
import { ListGroupMasterComponent } from 'src/app/Master-Settings/GroupMaster/list-group-master/list-group-master.component';
import { AddGroupMasterComponent } from 'src/app/Master-Settings/GroupMaster/add-group-master/add-group-master.component';
import { EditGroupMasterComponent } from 'src/app/Master-Settings/GroupMaster/edit-group-master/edit-group-master.component';
import { ListUserComponent } from 'src/app/Master-Settings/User/list-user/list-user.component';
import { AddUserComponent } from 'src/app/Master-Settings/User/add-user/add-user.component';
import { EditUserComponent } from 'src/app/Master-Settings/User/edit-user/edit-user.component';
import { ListChapterMasterComponent } from './Master-Settings/ChapterMaster/list-chapter-master/list-chapter-master.component';
import { AddChapterMasterComponent} from "./Master-Settings/ChapterMaster/add-chapter-master/add-chapter-master.component";
import { EditChapterMasterComponent} from "./Master-Settings/ChapterMaster/edit-chapter-master/edit-chapter-master.component";
import { ListFacultDeptComponent } from './Master-Settings/FacultDept/list-facult-dept/list-facult-dept.component';
import { AddFacultDeptComponent } from './Master-Settings/FacultDept/add-facult-dept/add-facult-dept.component';
import { EditFacultdeptComponent } from './Master-Settings/FacultDept/edit-facultdept/edit-facultdept.component';
import { ListDriverMasterComponent } from './Master-Settings/driverMaster/list-driver-master/list-driver-master.component';
import { AddDriverMasterComponent } from './Master-Settings/driverMaster/add-driver-master/add-driver-master.component';
import { EditDriverMasterComponent } from './Master-Settings/driverMaster/edit-driver-master/edit-driver-master.component';
import { ListExamComponent } from './Master-Settings/ExaminationType/list-exam/list-exam.component';
import { AddExamComponent } from './Master-Settings/ExaminationType/add-exam/add-exam.component';
import { EditExamComponent } from './Master-Settings/ExaminationType/edit-exam/edit-exam.component';



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
    ListCampaignComponent,
    AddCampaignComponent,
    EditCampaignComponent,
    AddVehicleComponent,
    ListVehicleComponent,
    EditVehicleComponent,
    AddprogramstudyComponent,
    EditprogramstudyComponent,
    ListprogramstudyComponent,
    AddClubMasterComponent,
    EditClubMasterComponent,
    ListClubMasterComponent,
    AddDepartmentMasterComponent,
    EditDepartmentMasterComponent,
    ListDepartmentMasterComponent,
    AddFeeComponent,
    ListFeeComponent,
    EditFeeComponent,
    ListCampaignItemComponent,
    AddCampaignItemComponent,
    EditCampaignItemComponent,
    EditFacultdeptComponent,
    ListDriverMasterComponent,
    AddDriverMasterComponent,
    EditDriverMasterComponent,
    ListExamComponent,
    AddExamComponent,
    EditExamComponent,
    ListChapterMasterComponent,
    EditChapterMasterComponent,
    AddChapterMasterComponent,
    ListFacultDeptComponent,
    AddFacultDeptComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,ReactiveFormsModule,TableModule,
    HttpClientModule,
    ButtonModule,
    PanelModule
  ],
  providers: [AuthenticationService, 
              UserService,TaskService, 
              SemesterMasterService,
              ClassRoomMasterServiceService,
              CampaignService,
              VehicleService,
              GroupMasterService,
              BatchService,
              SubjectService,
              FeeService,
              CampaignItemService,
              FacultyDeptService,
              ChapterMasterServiceService,
              DriverMasterService,
              ExaminationTypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
