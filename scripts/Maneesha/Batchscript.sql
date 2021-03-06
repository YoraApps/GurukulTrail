USE [Gurukulam_Db]
GO
/****** Object:  StoredProcedure [dbo].[YSP_GetAllBatchMaster]    Script Date: 8/17/2018 9:09:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[YSP_GetAllBatchMaster]
As 

   Begin
   Select * from BatchMaster where Active=1
   End
GO
/****** Object:  StoredProcedure [dbo].[YSP_GetAllSubjectMaster]    Script Date: 8/17/2018 9:09:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[YSP_GetAllSubjectMaster]
As 

   Begin
   Select * from SubjectMaster where Active=1
   End
GO
/****** Object:  StoredProcedure [dbo].[YSP_GetAllTask]    Script Date: 8/17/2018 9:09:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[YSP_GetAllTask]
As 

   Begin
   Select * from Task where Active=1
   End
GO
/****** Object:  StoredProcedure [dbo].[YSP_RemoveBatchMaster]    Script Date: 8/17/2018 9:09:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[YSP_RemoveBatchMaster](
@BatchId int
)
As
Begin

Update BatchMaster Set Active = 0 WHERE BatchId = @BatchId

End
GO
/****** Object:  StoredProcedure [dbo].[YSP_RemoveSubjectMaster]    Script Date: 8/17/2018 9:09:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[YSP_RemoveSubjectMaster](
@SubjectId int
)
As
Begin

Update SubjectMaster Set Active = 0 WHERE SubjectId = @SubjectId

End
GO
/****** Object:  StoredProcedure [dbo].[YSP_RemoveTask]    Script Date: 8/17/2018 9:09:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[YSP_RemoveTask](
@TaskId int
)
As
Begin

Update Task Set Active = 0 WHERE TaskId = @TaskId

End
GO
/****** Object:  StoredProcedure [dbo].[YSP_SingleBatchMaster]    Script Date: 8/17/2018 9:09:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[YSP_SingleBatchMaster](
@BatchId int
)
as
begin
SELECT 
BatchId,
BatchName,
ResultType,
AcademicTerm,
UniversityId,
Active,
lastupdateddt,
lastupdatedby,
BatchType

 FROM BatchMaster
  WHERE BatchId = @BatchId


  end
GO
/****** Object:  StoredProcedure [dbo].[YSP_SingleSubjectMaster]    Script Date: 8/17/2018 9:09:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[YSP_SingleSubjectMaster](
@SubjectId int
)
as
begin
SELECT
SubjectId, 
SubjectCode,
SubjectName,
SKS,UniversityId ,
active,
lastupdateddt,
lastupdatedby,
TheoriticalSKS,
PracticalSKS,
CourseType,
Semester,
PreRequisteCourse,
Teacher1,
Teacher2,
Teacher3,
TotalPeriods
 FROM SubjectMaster
  WHERE SubjectId = @SubjectId


  end
GO
/****** Object:  StoredProcedure [dbo].[YSP_SingleTask]    Script Date: 8/17/2018 9:09:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create proc [dbo].[YSP_SingleTask](
@TaskId int
)
as
begin
SELECT 
TaskId,
TaskName,
TaskDescription,
TaskDuration,
UniversityId,
Active,
lastupdateddt,
lastupdatedby
 FROM Task
  WHERE TaskId = @TaskId


  end
GO
/****** Object:  StoredProcedure [dbo].[YSP_UpdateBatchMaster]    Script Date: 8/17/2018 9:09:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[YSP_UpdateBatchMaster](
@BatchId int,
@BatchName varchar(20),
@ResultType varchar(20),
@AcademicTerm varchar(20),
@UniversityId int,
@Active tinyint,
@lastupdateddt datetime,
@lastupdatedby int,
@BatchType int 
)
As 
Begin

	IF Not Exists (select 1 from BatchMaster where BatchId = @BatchId)
		Begin
			Insert into BatchMaster (BatchName,ResultType,AcademicTerm,UniversityId,Active,lastupdateddt,lastupdatedby,BatchType) Values
			(@BatchName,@ResultType,@AcademicTerm ,@UniversityId,1,@lastupdateddt,1,@BatchType)
		End
	Else
		Begin
			Update BatchMaster
			set BatchName =@BatchName,
				ResultType =@ResultType,
				AcademicTerm=@AcademicTerm,
				UniversityId =@UniversityId,
				BatchType=@BatchType
				where BatchId=@BatchId;
		End
	
		
End
GO
/****** Object:  StoredProcedure [dbo].[YSP_UpdateSubjectMaster]    Script Date: 8/17/2018 9:09:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[YSP_UpdateSubjectMaster](
@SubjectId int,
@SubjectCode varchar(20),
@SubjectName varchar(20),
@SKS int,
@UniversityId int,
@active tinyint,
@lastupdateddt datetime,
@lastupdatedby int,
@TheoriticalSKS int,
@PracticalSKS int,
@CourseType int,
@Semester int,
@PreRequisteCourse int,
@Teacher1 int,
@Teacher2 int,
@Teacher3 int,
@TotalPeriods int
)
As 
Begin

	IF Not Exists (select 1 from SubjectMaster where SubjectId = @SubjectId)
		Begin
       
			Insert into SubjectMaster (SubjectCode,SubjectName,SKS,UniversityId ,active,lastupdateddt,lastupdatedby,TheoriticalSKS,
			PracticalSKS,CourseType,Semester,PreRequisteCourse,Teacher1,Teacher2,Teacher3,TotalPeriods) Values
			(@SubjectCode ,@SubjectName ,@SKS ,@UniversityId ,1 ,@lastupdateddt ,1 ,@TheoriticalSKS ,
			@PracticalSKS, @CourseType ,@Semester ,@PreRequisteCourse ,@Teacher1 ,@Teacher2 ,@Teacher3 ,@TotalPeriods )
		End
	Else
		Begin
			Update SubjectMaster
			set SubjectCode=@SubjectCode,
			SubjectName=@SubjectName,			
			SKS=@SKS ,
			TheoriticalSKS=@TheoriticalSKS,
			PracticalSKS=@PracticalSKS
		    where SubjectId = @SubjectId;
		End
	
		
End
GO
/****** Object:  StoredProcedure [dbo].[YSP_UpdateTask]    Script Date: 8/17/2018 9:09:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[YSP_UpdateTask](
@TaskId int,
@TaskName varchar(100),
@TaskDescription varchar(100),
@TaskDuration int,
@UniversityId int,
@Active tinyint,
@lastupdateddt datetime,
@lastupdatedby int
)
As 
Begin

	IF Not Exists (select 1 from Task where TaskId = @TaskId)
		Begin
			Insert into Task (TaskName,TaskDescription,TaskDuration,UniversityId,Active,lastupdateddt,lastupdatedby) Values
			(@TaskName,@TaskDescription,@TaskDuration,@UniversityId,1,@lastupdateddt,1)
		End
	Else
		Begin
			Update Task	
			set TaskName =@TaskName,
				TaskDescription =@TaskDescription,
				TaskDuration=@TaskDuration,
				UniversityId =@UniversityId				
				where TaskId=@TaskId;
		End
End

--execute YSP_UpdateTask 0,"Add","addTable",'1','1',1,'2018/2/2',1
--select * from Task
GO
