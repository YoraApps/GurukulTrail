USE [Gurukulam_Db]
GO
/****** Object:  StoredProcedure [dbo].[YSP_GetAllCampaignMaster]    Script Date: 8/19/2018 10:54:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[YSP_GetAllCampaignMaster]
As 

   Begin
   Select * from CampaignMaster where Active=1
   End
GO
/****** Object:  StoredProcedure [dbo].[YSP_GetAllVehicleMaster]    Script Date: 8/19/2018 10:54:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[YSP_GetAllVehicleMaster]
As 

   Begin
   Select * from VehicleMaster where Active=1
   End
GO
/****** Object:  StoredProcedure [dbo].[YSP_RemoveCampaignMaster]    Script Date: 8/19/2018 10:54:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[YSP_RemoveCampaignMaster](
@CampaignId int
)
As
Begin

Update CampaignMaster Set Active = 0 WHERE CampaignId = @CampaignId

End
GO
/****** Object:  StoredProcedure [dbo].[YSP_RemoveVehicleMaster]    Script Date: 8/19/2018 10:54:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[YSP_RemoveVehicleMaster](
@VehicleId int
)
As
Begin

Update VehicleMaster Set Active = 0 WHERE VehicleId = @VehicleId

End
GO
/****** Object:  StoredProcedure [dbo].[YSP_SingleCampaignMaster]    Script Date: 8/19/2018 10:54:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[YSP_SingleCampaignMaster](
@CampaignId int
)
as
begin
SELECT 
CampaignId,
CampaignName,
EmployeeId,
BatchId,
ProvenceId,
DistrictId,
CityId,
FromDate,
ToDate,
StatusId,
Active,
UpdatedOn,
UpdatedBy,
ApprovedOn,
ApprovedBy
 FROM CampaignMaster
  WHERE CampaignId = @CampaignId


  end
GO
/****** Object:  StoredProcedure [dbo].[YSP_SingleVehicleMaster]    Script Date: 8/19/2018 10:54:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[YSP_SingleVehicleMaster](
@VehicleId int
)
as
begin
SELECT 
UniversityId,RegistrationNumber,Description,OwnerNumber,WeightCapacity,VehicleStatus,RegistrationDate,InsuranceDetails,
InsuranceExpiryDate,Active,lastupdateddt,lastupdatedby
 FROM VehicleMaster
  WHERE VehicleId = @VehicleId


  end
GO
/****** Object:  StoredProcedure [dbo].[YSP_UpdateCampaignMaster]    Script Date: 8/19/2018 10:54:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[YSP_UpdateCampaignMaster](
@CampaignId int,
@CampaignName varchar(50),
@EmployeeId int,
@BatchId int,
@ProvenceId int,
@DistrictId int,
@CityId int,
@FromDate datetime,
@ToDate datetime ,
@StatusId int,
@Active bit,
@UpdatedOn datetime,
@UpdatedBy int,
@ApprovedOn datetime,
@ApprovedBy int
)
As 
Begin

	IF Not Exists (select 1 from CampaignMaster where CampaignId = @CampaignId)
		Begin
			Insert into CampaignMaster (CampaignName,EmployeeId,BatchId,ProvenceId,DistrictId,CityId,FromDate,ToDate,StatusId,
			Active,UpdatedOn,UpdatedBy,ApprovedOn,ApprovedBy) Values
			(@CampaignName,@EmployeeId,@BatchId,@ProvenceId,@DistrictId,@CityId,@FromDate,@ToDate,@StatusId,
			1,@UpdatedOn,1,@ApprovedOn,@ApprovedBy)
		End
	Else
		Begin
			Update CampaignMaster
			set CampaignName =@CampaignName
			
				where CampaignId=@CampaignId;
		End		
End

select * from CampaignMaster
GO
/****** Object:  StoredProcedure [dbo].[YSP_UpdateVehicleMaster]    Script Date: 8/19/2018 10:54:48 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[YSP_UpdateVehicleMaster](
@UniversityId int,
@VehicleId int,
@RegistrationNumber varchar(100),
@Description varchar(200),
@OwnerNumber varchar(100),
@WeightCapacity varchar(100),
@VehicleStatus varchar (100),
@RegistrationDate date,
@InsuranceDetails varchar(200) ,
@InsuranceExpiryDate date,
@Active bit,
@lastupdateddt datetime,
@lastupdatedby int
)
As 
Begin

	IF Not Exists (select 1 from VehicleMaster where VehicleId = @VehicleId)
		Begin
			Insert into VehicleMaster (UniversityId,RegistrationNumber,Description,OwnerNumber,WeightCapacity,VehicleStatus,RegistrationDate,InsuranceDetails,
			InsuranceExpiryDate,Active,lastupdateddt,lastupdatedby) Values
			(@UniversityId,@RegistrationNumber,@Description,@OwnerNumber,@WeightCapacity,@VehicleStatus,@RegistrationDate,@InsuranceDetails,
			@InsuranceExpiryDate,1,@lastupdateddt,1)
		End
	Else
		Begin
			Update VehicleMaster
			set RegistrationNumber =@RegistrationNumber,
			    Description=@Description,
				OwnerNumber=@OwnerNumber,
				WeightCapacity=@WeightCapacity,
				VehicleStatus=@VehicleStatus,
				RegistrationDate=@RegistrationDate,
				InsuranceDetails=@InsuranceDetails,
				InsuranceExpiryDate=@InsuranceExpiryDate,
				lastupdateddt=@lastupdateddt
					    
				where VehicleId = @VehicleId;
		End		
End
GO
