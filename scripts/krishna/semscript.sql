USE [Gurukulam_Db]
GO
/****** Object:  StoredProcedure [dbo].[Ysp_ClassRoomMasterById]    Script Date: 15-08-2018 11:20:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create  proc [dbo].[Ysp_ClassRoomMasterById]  
@Id int  
   
As    
Begin    
    select * from     
     ClassMaster where active=1  and Class_Id = @Id  
End
GO
/****** Object:  StoredProcedure [dbo].[Ysp_DeleteClassMaster]    Script Date: 15-08-2018 11:20:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[Ysp_DeleteClassMaster](
@Class_Id int
)
as
begin
update ClassMaster set Active=0 where Class_Id=@Class_Id
end
GO
/****** Object:  StoredProcedure [dbo].[Ysp_DeleteSemesterMaster]    Script Date: 15-08-2018 11:20:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[Ysp_DeleteSemesterMaster](
@SemesterId int
)
as
begin
update SemesterMaster set active=0 where SemesterId=@SemesterId
end
GO
/****** Object:  StoredProcedure [dbo].[Ysp_getAllClassMaster]    Script Date: 15-08-2018 11:20:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create  proc [dbo].[Ysp_getAllClassMaster]
As
Begin
    select *  from 
     ClassMaster where Active=1
End
GO
/****** Object:  StoredProcedure [dbo].[Ysp_GetAllSemesterMaster]    Script Date: 15-08-2018 11:20:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create  proc [dbo].[Ysp_GetAllSemesterMaster]
As
Begin
    select SemesterId,SemesterCode,SemesterName,SKS,UniversityId,active,lastupdateddt,lastupdatedby from 
     SemesterMaster where active=1
End
GO
/****** Object:  StoredProcedure [dbo].[Ysp_GetSemesterById]    Script Date: 15-08-2018 11:20:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create  proc [dbo].[Ysp_GetSemesterById]
@Id int
 
As  
Begin  
    select SemesterId,SemesterCode,SemesterName,SKS,UniversityId,active,lastupdateddt,lastupdatedby from   
     SemesterMaster where active=1  and SemesterId = @Id
End
GO
/****** Object:  StoredProcedure [dbo].[Ysp_UpdateClassMaster]    Script Date: 15-08-2018 11:20:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Ysp_UpdateClassMaster](
@Class_Id bigint,
@UniversityId int,
@Class_Name nvarchar(500),
@Active bit,
@Created_By nvarchar(50),
@Created_On datetime,
@Created_Ip nvarchar(30)
)



as
begin
IF Not Exists (select 1 from ClassMaster where Class_Id = @Class_Id)  
  Begin 
   Insert into ClassMaster (UniversityId,Class_Name,Active,Created_By,Created_On,Created_Ip)Values  
   (@UniversityId,@Class_Name,1,@Created_By,@Created_On,@Created_Ip)  
  End  
 Else  
  Begin 
   Update ClassMaster  
   set 
   UniversityId=@UniversityId,
   Class_Name =@Class_Name,
   Created_By=@Created_By,
   Created_On=@Created_On,
   Created_Ip=@Created_Ip
    where Class_Id=@Class_Id;  
  End 
End 
GO
/****** Object:  StoredProcedure [dbo].[Ysp_UpdateSemesterMaster]    Script Date: 15-08-2018 11:20:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Ysp_UpdateSemesterMaster](
@SemesterId int,
@SemesterCode varchar(10),
@SemesterName varchar(50),
@SKS int,
@UniversityId int,
@active tinyint,
@lastupdateddt datetime,
@lastupdatedby int
)
as
begin
IF Not Exists (select 1 from SemesterMaster where SemesterId = @SemesterId)  
  Begin 
   Insert into SemesterMaster (SemesterCode,SemesterName,SKS,UniversityId,active,lastupdateddt,lastupdatedby)Values  
   (@SemesterCode,@SemesterName,@SKS,@UniversityId,1,@lastupdateddt,@lastupdatedby)  
  End  
 Else  
  Begin 
   Update SemesterMaster  
   set SemesterCode =@SemesterCode,  
    SemesterName =@SemesterName,  
    SKS=@SKS ,
	UniversityId=@UniversityId,
	lastupdateddt=@lastupdateddt
    where SemesterId=@SemesterId;  
  End 
End  
GO
