USE [Gurukulam_Db]
GO
/****** Object:  StoredProcedure [dbo].[Ysp_DeleteChapterMaster]    Script Date: 17-08-2018 22:12:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[Ysp_DeleteChapterMaster](
@ChapterId int
)
as
begin
update ChapterMaster set active=0 where ChapterId=@ChapterId
end
GO
/****** Object:  StoredProcedure [dbo].[Ysp_DeleteFacultyDept]    Script Date: 17-08-2018 22:12:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[Ysp_DeleteFacultyDept](
@FacultyDeptId int
)
as
begin
update FacultyDept set Active=0 where FacultyDeptId=@FacultyDeptId
end
GO
/****** Object:  StoredProcedure [dbo].[Ysp_GetAllChapterMaster]    Script Date: 17-08-2018 22:12:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create  proc [dbo].[Ysp_GetAllChapterMaster]
As
Begin
    select ChapterId,ChapterNumber,ChapterTitle,ModeOfTeaching,ChapterDetails,SKS,UniversityId,active,lastupdateddt,lastupdatedby from 
     ChapterMaster where active=1
End
GO
/****** Object:  StoredProcedure [dbo].[Ysp_GetAllFacultyDept]    Script Date: 17-08-2018 22:12:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create  proc [dbo].[Ysp_GetAllFacultyDept]
As
Begin
    select FacultyDeptId,FacultyDeptCode,FacultyDeptName,FacultyDeptDescription,UniversityId,Active,lastupdateddt,lastupdatedby from 
    FacultyDept where Active=1
End
GO
/****** Object:  StoredProcedure [dbo].[Ysp_GetChapterMasterById]    Script Date: 17-08-2018 22:12:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Ysp_GetChapterMasterById]
@ChapterId int
 
As  
Begin  
    select ChapterId,ChapterNumber,ChapterTitle,ModeOfTeaching,ChapterDetails,SKS,UniversityId,active,lastupdateddt,lastupdatedby from   
     ChapterMaster where active=1  and ChapterId = @ChapterId
End
GO
/****** Object:  StoredProcedure [dbo].[Ysp_GetFacultyDeptById]    Script Date: 17-08-2018 22:12:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[Ysp_GetFacultyDeptById]
@FacultyDeptId int
 
As  
Begin  
    select FacultyDeptId,FacultyDeptCode,FacultyDeptName,FacultyDeptDescription,UniversityId,Active,lastupdateddt,lastupdatedby from 
    FacultyDept where Active=1  and FacultyDeptId = @FacultyDeptId
End
GO
/****** Object:  StoredProcedure [dbo].[Ysp_UpdateChapterMaster]    Script Date: 17-08-2018 22:12:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[Ysp_UpdateChapterMaster](
@ChapterId int,
@ChapterNumber varchar(10),
@ChapterTitle varchar(50),
@ModeOfTeaching varchar(50),
@ChapterDetails varchar(500),
@SKS int,
@UniversityId int,
@lastupdateddt datetime,
@lastupdatedby int
)
as
begin
IF Not Exists (select 1 from ChapterMaster where ChapterId = @ChapterId)  
  Begin 
   Insert into ChapterMaster (ChapterNumber,ChapterTitle,ModeOfTeaching,ChapterDetails,SKS,UniversityId,active,lastupdateddt,lastupdatedby)Values  
   (@ChapterNumber,@ChapterTitle,@ModeOfTeaching,@ChapterDetails,@SKS,@UniversityId,1,@lastupdateddt,@lastupdatedby)  
  End  
 Else  
  Begin 
   Update ChapterMaster  
   set ChapterNumber =@ChapterNumber,  
    ChapterTitle =@ChapterTitle,  
   ModeOfTeaching=@ModeOfTeaching,
	ChapterDetails=@ChapterDetails,
	SKS=@SKS
    where ChapterId=@ChapterId  
  End 
End  






GO
/****** Object:  StoredProcedure [dbo].[Ysp_UpdateFacultyDept]    Script Date: 17-08-2018 22:12:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create proc [dbo].[Ysp_UpdateFacultyDept](
@FacultyDeptId int,
@FacultyDeptCode varchar(20),
@FacultyDeptName varchar(100),
@FacultyDeptDescription varchar(max),
@UniversityId int,
@lastupdateddt datetime,
@lastupdatedby int
)
as
begin
IF Not Exists (select 1 from FacultyDept  where FacultyDeptId = @FacultyDeptId)  
  Begin 
   Insert into FacultyDept (FacultyDeptCode,FacultyDeptName,FacultyDeptDescription,UniversityId,Active,lastupdateddt,lastupdatedby)Values  
   (@FacultyDeptCode,@FacultyDeptName,@FacultyDeptDescription,@UniversityId,1,@lastupdateddt,@lastupdatedby)  
  End  
 Else  
  Begin 
   Update FacultyDept  
   set FacultyDeptCode=@FacultyDeptCode,
   FacultyDeptName=@FacultyDeptName,
   FacultyDeptDescription=@FacultyDeptDescription,
   UniversityId=UniversityId
    where FacultyDeptId=@FacultyDeptId  
  End 
End 
GO
