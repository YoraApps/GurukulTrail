USE [Gurukulam_Db]
GO
/****** Object:  Table [dbo].[DepartmentMaster]    Script Date: 8/22/2018 9:30:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DepartmentMaster](
	[DepartmentId] [int] IDENTITY(1,1) NOT NULL,
	[DepartmentName] [varchar](20) NULL,
	[UniversityId] [int] NULL,
	[Active] [tinyint] NULL,
	[lastupdateddt] [datetime] NULL,
	[lastupdatedby] [int] NULL,
 CONSTRAINT [PK__DepartmentMaster] PRIMARY KEY CLUSTERED 
(
	[DepartmentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[DepartmentMaster] ON 

INSERT [dbo].[DepartmentMaster] ([DepartmentId], [DepartmentName], [UniversityId], [Active], [lastupdateddt], [lastupdatedby]) VALUES (1, N'Cse', 365845, 1, CAST(N'2018-08-18T00:00:00.000' AS DateTime), 2)
INSERT [dbo].[DepartmentMaster] ([DepartmentId], [DepartmentName], [UniversityId], [Active], [lastupdateddt], [lastupdatedby]) VALUES (2, N'EEE', 552265, 1, CAST(N'2018-07-20T00:00:00.000' AS DateTime), 1)
INSERT [dbo].[DepartmentMaster] ([DepartmentId], [DepartmentName], [UniversityId], [Active], [lastupdateddt], [lastupdatedby]) VALUES (3, N'Mech', 396599, 1, CAST(N'2018-05-10T00:00:00.000' AS DateTime), 3)
INSERT [dbo].[DepartmentMaster] ([DepartmentId], [DepartmentName], [UniversityId], [Active], [lastupdateddt], [lastupdatedby]) VALUES (4, N'E', NULL, NULL, NULL, NULL)
INSERT [dbo].[DepartmentMaster] ([DepartmentId], [DepartmentName], [UniversityId], [Active], [lastupdateddt], [lastupdatedby]) VALUES (5, NULL, NULL, 0, NULL, 5)
INSERT [dbo].[DepartmentMaster] ([DepartmentId], [DepartmentName], [UniversityId], [Active], [lastupdateddt], [lastupdatedby]) VALUES (6, N'ece', 995998, 0, CAST(N'2018-08-18T14:43:12.233' AS DateTime), 0)
INSERT [dbo].[DepartmentMaster] ([DepartmentId], [DepartmentName], [UniversityId], [Active], [lastupdateddt], [lastupdatedby]) VALUES (7, N'ece', 99596, 1, CAST(N'2018-08-18T15:57:38.067' AS DateTime), 0)
INSERT [dbo].[DepartmentMaster] ([DepartmentId], [DepartmentName], [UniversityId], [Active], [lastupdateddt], [lastupdatedby]) VALUES (8, N'Civil', 25896, 1, CAST(N'2018-08-18T15:59:04.767' AS DateTime), 0)
SET IDENTITY_INSERT [dbo].[DepartmentMaster] OFF
/****** Object:  StoredProcedure [dbo].[YSP_GetDegreeMaster]    Script Date: 8/22/2018 9:30:33 PM ******/
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
/****** Object:  StoredProcedure [dbo].[YSP_GetDegreeMasterId]    Script Date: 8/22/2018 9:30:33 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[YSP_GetDegreeMasterId](
@DegreeId int)
AS
Begin
select * from DegreeMaster where DegreeId = @DegreeId and IsActive=1
End
GO
/****** Object:  StoredProcedure [dbo].[YSP_RemoveDegreeMaster]    Script Date: 8/22/2018 9:30:33 PM ******/
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
/****** Object:  StoredProcedure [dbo].[YSP_UpdateDegreeMaster]    Script Date: 8/22/2018 9:30:33 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[YSP_UpdateDegreeMaster](
@DegreeId int,
@DegreeCode varchar(50),
@DegreeName varchar(50)

)
As
Begin
if NOT EXISTS(select 1 from DegreeMaster where DegreeId =@DegreeId)
   Begin
   insert into DegreeMaster(DegreeCode,DegreeName,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate)
   values(@DegreeCode,@DegreeName ,1,1,GETDATE(),1,GETDATE())
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
