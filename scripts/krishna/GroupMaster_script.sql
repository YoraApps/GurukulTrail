USE [Gurukulam_Db]
GO
/****** Object:  StoredProcedure [dbo].[USP_UpdateGroupMaster]    Script Date: 16-08-2018 09:25:28 ******/
DROP PROCEDURE [dbo].[USP_UpdateGroupMaster]
GO
/****** Object:  StoredProcedure [dbo].[USP_RemoveGroupMaster]    Script Date: 16-08-2018 09:25:28 ******/
DROP PROCEDURE [dbo].[USP_RemoveGroupMaster]
GO
/****** Object:  StoredProcedure [dbo].[USP_GetGroupMasterId]    Script Date: 16-08-2018 09:25:28 ******/
DROP PROCEDURE [dbo].[USP_GetGroupMasterId]
GO
/****** Object:  StoredProcedure [dbo].[SP_GetGroupMaster]    Script Date: 16-08-2018 09:25:28 ******/
DROP PROCEDURE [dbo].[SP_GetGroupMaster]
GO
/****** Object:  Table [dbo].[GroupMaster]    Script Date: 16-08-2018 09:25:28 ******/
DROP TABLE [dbo].[GroupMaster]
GO
/****** Object:  Table [dbo].[GroupMaster]    Script Date: 16-08-2018 09:25:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[GroupMaster](
	[GroupMasterId] [int] IDENTITY(1,1) NOT NULL,
	[GroupCode] [varchar](50) NULL,
	[GroupName] [varchar](100) NULL,
	[UniversityId] [int] NULL,
	[Active] [bit] NULL,
	[lastupdateddt] [datetime] NULL,
	[lastupdatedby] [int] NULL,
 CONSTRAINT [PK_GroupMaster] PRIMARY KEY CLUSTERED 
(
	[GroupMasterId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[GroupMaster] ON 

INSERT [dbo].[GroupMaster] ([GroupMasterId], [GroupCode], [GroupName], [UniversityId], [Active], [lastupdateddt], [lastupdatedby]) VALUES (1, N'ECE', N'Electronics', 2, 0, CAST(N'2018-08-15 00:00:00.000' AS DateTime), 0)
INSERT [dbo].[GroupMaster] ([GroupMasterId], [GroupCode], [GroupName], [UniversityId], [Active], [lastupdateddt], [lastupdatedby]) VALUES (2, N'CSE', N'Computer', 1, 1, CAST(N'2018-08-15 00:00:00.000' AS DateTime), 1)
INSERT [dbo].[GroupMaster] ([GroupMasterId], [GroupCode], [GroupName], [UniversityId], [Active], [lastupdateddt], [lastupdatedby]) VALUES (3, N'ECE', N'Electronics', 1, 1, CAST(N'2018-08-15 19:23:56.483' AS DateTime), 0)
INSERT [dbo].[GroupMaster] ([GroupMasterId], [GroupCode], [GroupName], [UniversityId], [Active], [lastupdateddt], [lastupdatedby]) VALUES (4, N'civil', N'civil', 1, 0, CAST(N'2018-08-15 22:51:59.513' AS DateTime), 0)
SET IDENTITY_INSERT [dbo].[GroupMaster] OFF
/****** Object:  StoredProcedure [dbo].[SP_GetGroupMaster]    Script Date: 16-08-2018 09:25:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[SP_GetGroupMaster]

AS
Begin
select * from GroupMaster where Active = 1
End
GO
/****** Object:  StoredProcedure [dbo].[USP_GetGroupMasterId]    Script Date: 16-08-2018 09:25:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[USP_GetGroupMasterId](
@GroupMasterId int)
As
Begin
 select * from GroupMaster where GroupMasterId = @GroupMasterId and Active =1
End
GO
/****** Object:  StoredProcedure [dbo].[USP_RemoveGroupMaster]    Script Date: 16-08-2018 09:25:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create procedure [dbo].[USP_RemoveGroupMaster](
@GroupMasterId int
)
As
Begin
update GroupMaster set
     Active = 0
	where GroupMasterId = @GroupMasterId
End
GO
/****** Object:  StoredProcedure [dbo].[USP_UpdateGroupMaster]    Script Date: 16-08-2018 09:25:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE procedure [dbo].[USP_UpdateGroupMaster](
@GroupMasterId int,
@GroupCode varchar(50),
@GroupName varchar(100),
@UniversityId int,
@lastupdateddt datetime,
@lastupdatedby int)
As
Begin
If not exists(select 1 from GroupMaster where GroupMasterId = @GroupMasterId)
begin
	Insert Into GroupMaster(GroupCode,GroupName,UniversityId,Active,lastupdateddt,lastupdatedby)
	Values(@GroupCode,@GroupName,@UniversityId,1,GETDATE(),@lastupdatedby)
	
End
Else
Begin
update GroupMaster set

	GroupCode = @GroupCode,
	GroupName = @GroupName,
	UniversityId = @UniversityId,
	lastupdatedby =@lastupdatedby
	where GroupMasterId = @GroupMasterId
	End
End
GO
