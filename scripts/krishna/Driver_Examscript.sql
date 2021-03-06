USE [Gurukulam_Db]
GO
/****** Object:  StoredProcedure [dbo].[Ysp_UpdateDriverMaster]    Script Date: 19-08-2018 12:51:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Ysp_UpdateDriverMaster](
@DriverId int,
@UniversityId int,
@DriverName varchar(100),
@DriverLicenceNo varchar(100),
@DriverLicenceExpDate varchar(100),
@DriverMobileNo varchar(100),
@AlternativeContactNo varchar(100),
@lastupdateddt datetime, 
@lastupdatedby int,
@DateofBirth date,
@ReferenceName varchar(100),
@ReferenceContactNo varchar(100),
@Address varchar(100),
@Experience varchar(50)
)
as
begin
IF Not Exists (select 1 from DriverMaster where DriverId = @DriverId)  
  Begin 
   Insert into DriverMaster (UniversityId,DriverName,DriverLicenceNo,DriverLicenceExpDate,DriverMobileNo,AlternativeContactNo,Active,lastupdateddt, 
lastupdatedby,DateofBirth,ReferenceName,ReferenceContactNo,Address,Experience)Values  
   (@UniversityId,@DriverName,@DriverLicenceNo,@DriverLicenceExpDate,@DriverMobileNo,@AlternativeContactNo,1,@lastupdateddt, 
@lastupdatedby,@DateofBirth,@ReferenceName,@ReferenceContactNo,@Address,@Experience)  
  End  
 Else  
  Begin 
   Update DriverMaster  
   set DriverName=@DriverName,
   DriverLicenceNo=@DriverLicenceNo,
   DriverLicenceExpDate=@DriverLicenceExpDate,
   DriverMobileNo=@DriverMobileNo,
   AlternativeContactNo=@AlternativeContactNo,
   ReferenceName=@ReferenceName,
   ReferenceContactNo=@ReferenceContactNo,
   Address=@Address,
   Experience=@Experience
    where DriverId = @DriverId 
	end 
	end
GO
/****** Object:  StoredProcedure [dbo].[Ysp_UpdateExaminationType]    Script Date: 19-08-2018 12:51:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Ysp_UpdateExaminationType](
@ExaminationTypeId int,
@ExamGroup varchar(10),
@ExamName varchar(100),
@MinMarks int,
@MaxMarks int,
@FeeLabel varchar(100),
@Amount decimal(18,2),
@UniversityId int,
@Active tinyint,
@lastupdateddt datetime,
@lastupdatedby int
)
as
begin
IF Not Exists (select 1 from ExaminationType where ExaminationTypeId = @ExaminationTypeId)  
  Begin 
   Insert into ExaminationType(ExamGroup,ExamName,MinMarks,MaxMarks,FeeLabel,Amount,UniversityId,Active,lastupdateddt,lastupdatedby)Values  
   (@ExamGroup,@ExamName,@MinMarks,@MaxMarks,@FeeLabel,@Amount,@UniversityId,1,@lastupdateddt,@lastupdatedby)  
  End  
 Else  
  Begin 
   Update ExaminationType  
   set ExamGroup=@ExamGroup,
   ExamName=@ExamName,
   MinMarks=@MinMarks,
   MaxMarks=@MaxMarks,
   FeeLabel=@FeeLabel,
   Amount=@Amount
    where ExaminationTypeId = @ExaminationTypeId 
	end 
	end
GO
