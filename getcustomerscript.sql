USE [TMS_DB]
GO
/****** Object:  StoredProcedure [dbo].[Usp_GetAllCustomer]    Script Date: 10-08-2018 09:31:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[Usp_GetAllCustomer]
as
begin

select cm.Id,cm.Name,cm.Address,cm.EmailId,cm.PhoneNumber,cm.AlternatePhoneNumber,cm.FaxNumber,
cm.IsActive,cm.CreatedBy,cm.CreatedDate,cm.ModifiedBy,cm.ModifiedDate,ctm.Name as CustomerName,cm.CustTypeId
from CustomerMaster cm
inner join CustomerTypeMaster ctm
 on cm.CustTypeId = ctm.Id
  where cm.IsActive = 1 and ctm.IsActive = 1
end
GO
