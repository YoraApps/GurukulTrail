USE [Gurukulam_Db]
GO
/****** Object:  Table [dbo].[DegreeMaster]    Script Date: 19-08-2018 19:41:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DegreeMaster](
	[DegreeId] [int] IDENTITY(1,1) NOT NULL,
	[DegreeCode] [varchar](50) NULL,
	[DegreeName] [varchar](50) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
 CONSTRAINT [PK_DegreeMaster] PRIMARY KEY CLUSTERED 
(
	[DegreeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  StoredProcedure [dbo].[YSP_GetDegreeMaster]    Script Date: 19-08-2018 19:41:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[YSP_GetDegreeMaster]
As
Begin
select * from DegreeMaster where IsActive=1
End
GO
/****** Object:  StoredProcedure [dbo].[YSP_GetDegreeMasterId]    Script Date: 19-08-2018 19:41:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[YSP_GetDegreeMasterId](
@DegreeId int)
AS
Begin
select * from DegreeMaster where DegreeId = @DegreeId
End
GO
/****** Object:  StoredProcedure [dbo].[YSP_RemoveDegreeMaster]    Script Date: 19-08-2018 19:41:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[YSP_RemoveDegreeMaster](
@DegreeId int

)
AS
Begin
	update DegreeMaster
	set IsActive = 0
	where DegreeId = @DegreeId
End
GO
/****** Object:  StoredProcedure [dbo].[YSP_UpdateDegreeMaster]    Script Date: 19-08-2018 19:41:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[YSP_UpdateDegreeMaster](
@DegreeId int,
@DegreeCode varchar(50),
@DegreeName varchar(50),
@CreatedBy int,
@CreatedDate datetime,
@ModifiedBy int,
@ModifiedDate datetime
)
As
Begin
if NOT EXISTS(select 1 from DegreeMaster where DegreeId =@DegreeId)
   Begin
   insert into DegreeMaster(DegreeCode,DegreeName,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate)
   values(@DegreeCode,@DegreeName,1,GETDATE(),1,GETDATE())
   End

Else

   Begin
      update DegreeMaster
	  set DegreeCode = @DegreeCode,
	      DegreeName = @DegreeName,
		  ModifiedBy = 1,
		  ModifiedDate =GETDATE()
		  where DegreeId =@DegreeId 
   End

End
GO
