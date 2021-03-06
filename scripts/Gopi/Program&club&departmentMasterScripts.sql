USE [Gurukulam_Db]
GO
/****** Object:  StoredProcedure [dbo].[Ysp_CreateClubMaster]    Script Date: 18-08-2018 22:22:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Ysp_CreateClubMaster](
@ClubId int,
@ClubName varchar(100),
@ClubDescription varchar(200),
@Active bit,
@lastupdateddt datetime,
@lastupdatedby int
)
As
Begin

	if Not exists (select 1 from ClubMaster where ClubId = @ClubId)

Begin
	Insert Into ClubMaster(ClubName,ClubDescription,Active,lastupdateddt,lastupdatedby)
	values(@ClubName,@ClubDescription,@Active,@lastupdateddt,@lastupdatedby)
	
End
Else
	Begin
	update ClubMaster
	set 
		ClubName = @ClubName,
	    ClubDescription = @ClubDescription,
		Active = @Active,
		lastupdateddt = @lastupdateddt,
		lastupdatedby = @lastupdatedby
		where ClubId = @ClubId;

End
End
GO
/****** Object:  StoredProcedure [dbo].[Ysp_CreateDepartmentMaster]    Script Date: 18-08-2018 22:22:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Ysp_CreateDepartmentMaster](
@DepartmentId int,
@DepartmentName varchar(20),
@UniversityId int,
@Active tinyint,
@lastupdateddt datetime,
@lastupdatedby int
)
As
Begin

	if Not exists (select 1 from DepartmentMaster where DepartmentId = @DepartmentId)

Begin
	Insert Into DepartmentMaster(DepartmentName,UniversityId,Active,lastupdateddt,lastupdatedby)
	values(@DepartmentName,@UniversityId,@Active,@lastupdateddt,@lastupdatedby)
	
End
Else
	Begin
	update DepartmentMaster
	set 
		DepartmentName = @DepartmentName,
	    UniversityId = @UniversityId,
		Active = @Active,
		lastupdateddt = @lastupdateddt,
		lastupdatedby = @lastupdatedby
		where DepartmentId = @DepartmentId;

End
End
GO
/****** Object:  StoredProcedure [dbo].[Ysp_createProgramStudy]    Script Date: 18-08-2018 22:22:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Ysp_createProgramStudy](
@ProgramStudyId int,
@ProgramStudyCode varchar(10),
@ProgramStudyName varchar(100),
@AcademicTerm varchar(100),
@SKS int,
@Status bit,
@UniversityId int,
@active tinyint,
@lastupdateddt datetime,
@lastupdatedby int
)
As
Begin

	if Not exists (select 1 from ProgramStudyMaster where ProgramStudyId = @ProgramStudyId)

Begin
	Insert Into ProgramStudyMaster(ProgramStudyCode,ProgramStudyName,AcademicTerm,SKS,Status,UniversityId,active,lastupdateddt,lastupdatedby)
	values(@ProgramStudyCode,@ProgramStudyName,@AcademicTerm,@SKS,@Status,@UniversityId,@active,@lastupdateddt,@lastupdatedby)
	select @@IDENTITY as Id
End
Else
	Begin
	update ProgramStudyMaster
	set 
		ProgramStudyCode = @ProgramStudyCode,
	    ProgramStudyName = @ProgramStudyName,
		AcademicTerm = @AcademicTerm,
		SKS = @SKS,
		Status = @Status,
		UniversityId = @UniversityId,
		active = @active,
		lastupdateddt = @lastupdateddt,
		lastupdatedby = @lastupdatedby
		where ProgramStudyId = @ProgramStudyId;

End
End

GO
/****** Object:  StoredProcedure [dbo].[Ysp_GetAllClubMaster]    Script Date: 18-08-2018 22:22:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[Ysp_GetAllClubMaster]

 As
 Begin

 select * from ClubMaster where Active=1

 End
GO
/****** Object:  StoredProcedure [dbo].[Ysp_GetAllDepartmentMaster]    Script Date: 18-08-2018 22:22:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[Ysp_GetAllDepartmentMaster]

 As
 Begin

 select * from DepartmentMaster where Active=1

 End
GO
/****** Object:  StoredProcedure [dbo].[Ysp_GetallProgramStudy]    Script Date: 18-08-2018 22:22:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Ysp_GetallProgramStudy]

 As
 Begin

 select * from ProgramStudyMaster where Active=1

 End
GO
/****** Object:  StoredProcedure [dbo].[Ysp_GetClubSingleId]    Script Date: 18-08-2018 22:22:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[Ysp_GetClubSingleId]
@ClubId int

as
Begin
	select * from ClubMaster where active=1 and ClubId=@ClubId
End
GO
/****** Object:  StoredProcedure [dbo].[Ysp_GetDepartmentSingleId]    Script Date: 18-08-2018 22:22:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Ysp_GetDepartmentSingleId]
@DepartmentId int

as
Begin
	select * from DepartmentMaster where Active=1 and DepartmentId=@DepartmentId
End
GO
/****** Object:  StoredProcedure [dbo].[Ysp_GetSingleId]    Script Date: 18-08-2018 22:22:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Ysp_GetSingleId]
@ProgramStudyId int

as
Begin
	select * from ProgramStudyMaster where active=1 and ProgramStudyId=@ProgramStudyId
End
GO
/****** Object:  StoredProcedure [dbo].[Ysp_RemoveClubMaster]    Script Date: 18-08-2018 22:22:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[Ysp_RemoveClubMaster](
@ClubId int
)

 As
 Begin

 update ClubMaster set Active = 0 Where ClubId=@ClubId

 End
GO
/****** Object:  StoredProcedure [dbo].[Ysp_RemoveDepartmentMaster]    Script Date: 18-08-2018 22:22:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create proc [dbo].[Ysp_RemoveDepartmentMaster](
@DepartmentId int
)

 As
 Begin

 update DepartmentMaster set Active = 0 Where DepartmentId=@DepartmentId

 End
GO
/****** Object:  StoredProcedure [dbo].[Ysp_RemoveProgramStudy]    Script Date: 18-08-2018 22:22:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[Ysp_RemoveProgramStudy](
@ProgramStudyId int
)

 As
 Begin

 update ProgramStudyMaster set Active = 0 Where ProgramStudyId=@ProgramStudyId

 End
GO
/****** Object:  Table [dbo].[ClubMaster]    Script Date: 18-08-2018 22:22:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[ClubMaster](
	[ClubId] [int] IDENTITY(1,1) NOT NULL,
	[ClubName] [varchar](100) NULL,
	[ClubDescription] [varchar](200) NULL,
	[Active] [bit] NULL,
	[lastupdateddt] [datetime] NULL,
	[lastupdatedby] [int] NULL,
 CONSTRAINT [PK_ClubMaster] PRIMARY KEY CLUSTERED 
(
	[ClubId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[DepartmentMaster]    Script Date: 18-08-2018 22:22:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
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
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[ProgramStudyMaster]    Script Date: 18-08-2018 22:22:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[ProgramStudyMaster](
	[ProgramStudyId] [int] IDENTITY(1,1) NOT NULL,
	[ProgramStudyCode] [varchar](10) NULL,
	[ProgramStudyName] [varchar](100) NULL,
	[AcademicTerm] [varchar](100) NULL,
	[SKS] [int] NULL,
	[Status] [bit] NULL,
	[UniversityId] [int] NULL,
	[active] [tinyint] NULL,
	[lastupdateddt] [datetime] NULL,
	[lastupdatedby] [int] NULL,
 CONSTRAINT [PK_ProgramStudyMaster] PRIMARY KEY CLUSTERED 
(
	[ProgramStudyId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[ClubMaster] ON 

INSERT [dbo].[ClubMaster] ([ClubId], [ClubName], [ClubDescription], [Active], [lastupdateddt], [lastupdatedby]) VALUES (1, N'Pragathi', N'very good', 1, CAST(0x0000A94000000000 AS DateTime), 52)
INSERT [dbo].[ClubMaster] ([ClubId], [ClubName], [ClubDescription], [Active], [lastupdateddt], [lastupdatedby]) VALUES (2, N'Lahari', N'not bad', 1, CAST(0x0000A94000000000 AS DateTime), 62)
INSERT [dbo].[ClubMaster] ([ClubId], [ClubName], [ClubDescription], [Active], [lastupdateddt], [lastupdatedby]) VALUES (3, N'Durga', N'very very good', 1, CAST(0x0000A94000000000 AS DateTime), 96)
INSERT [dbo].[ClubMaster] ([ClubId], [ClubName], [ClubDescription], [Active], [lastupdateddt], [lastupdatedby]) VALUES (4, N'Lahari', N'very very good', 1, CAST(0x0000A94001079FAA AS DateTime), 0)
INSERT [dbo].[ClubMaster] ([ClubId], [ClubName], [ClubDescription], [Active], [lastupdateddt], [lastupdatedby]) VALUES (5, N'Lahari', N'good', 0, CAST(0x0000A88100000000 AS DateTime), 1)
INSERT [dbo].[ClubMaster] ([ClubId], [ClubName], [ClubDescription], [Active], [lastupdateddt], [lastupdatedby]) VALUES (6, N'', N'esrdtykujx', 0, CAST(0x0000A94000B92FDC AS DateTime), 0)
INSERT [dbo].[ClubMaster] ([ClubId], [ClubName], [ClubDescription], [Active], [lastupdateddt], [lastupdatedby]) VALUES (7, N'', N'olkjhg', 0, CAST(0x0000A94000BC3318 AS DateTime), 0)
INSERT [dbo].[ClubMaster] ([ClubId], [ClubName], [ClubDescription], [Active], [lastupdateddt], [lastupdatedby]) VALUES (8, N'sdfghf', N'sdfcgb', 0, CAST(0x0000A94000BEB07D AS DateTime), 0)
INSERT [dbo].[ClubMaster] ([ClubId], [ClubName], [ClubDescription], [Active], [lastupdateddt], [lastupdatedby]) VALUES (9, N'', N'', 0, CAST(0x0000A94000BED754 AS DateTime), 0)
INSERT [dbo].[ClubMaster] ([ClubId], [ClubName], [ClubDescription], [Active], [lastupdateddt], [lastupdatedby]) VALUES (10, N'bavani', N'middle on krishna river', 1, CAST(0x0000A9400107E6E0 AS DateTime), 0)
SET IDENTITY_INSERT [dbo].[ClubMaster] OFF
SET IDENTITY_INSERT [dbo].[DepartmentMaster] ON 

INSERT [dbo].[DepartmentMaster] ([DepartmentId], [DepartmentName], [UniversityId], [Active], [lastupdateddt], [lastupdatedby]) VALUES (1, N'Cse', 365845, 1, CAST(0x0000A94000000000 AS DateTime), 2)
INSERT [dbo].[DepartmentMaster] ([DepartmentId], [DepartmentName], [UniversityId], [Active], [lastupdateddt], [lastupdatedby]) VALUES (2, N'EEE', 552265, 1, CAST(0x0000A92300000000 AS DateTime), 1)
INSERT [dbo].[DepartmentMaster] ([DepartmentId], [DepartmentName], [UniversityId], [Active], [lastupdateddt], [lastupdatedby]) VALUES (3, N'Mech', 396599, 1, CAST(0x0000A8DC00000000 AS DateTime), 3)
INSERT [dbo].[DepartmentMaster] ([DepartmentId], [DepartmentName], [UniversityId], [Active], [lastupdateddt], [lastupdatedby]) VALUES (4, N'E', NULL, NULL, NULL, NULL)
INSERT [dbo].[DepartmentMaster] ([DepartmentId], [DepartmentName], [UniversityId], [Active], [lastupdateddt], [lastupdatedby]) VALUES (5, NULL, NULL, 0, NULL, 5)
INSERT [dbo].[DepartmentMaster] ([DepartmentId], [DepartmentName], [UniversityId], [Active], [lastupdateddt], [lastupdatedby]) VALUES (6, N'ece', 995998, 0, CAST(0x0000A94000F29446 AS DateTime), 0)
INSERT [dbo].[DepartmentMaster] ([DepartmentId], [DepartmentName], [UniversityId], [Active], [lastupdateddt], [lastupdatedby]) VALUES (7, N'ece', 99596, 1, CAST(0x0000A940010705AC AS DateTime), 0)
INSERT [dbo].[DepartmentMaster] ([DepartmentId], [DepartmentName], [UniversityId], [Active], [lastupdateddt], [lastupdatedby]) VALUES (8, N'Civil', 25896, 1, CAST(0x0000A94001076B46 AS DateTime), 0)
SET IDENTITY_INSERT [dbo].[DepartmentMaster] OFF
SET IDENTITY_INSERT [dbo].[ProgramStudyMaster] ON 

INSERT [dbo].[ProgramStudyMaster] ([ProgramStudyId], [ProgramStudyCode], [ProgramStudyName], [AcademicTerm], [SKS], [Status], [UniversityId], [active], [lastupdateddt], [lastupdatedby]) VALUES (1, N'985623', N'985623', N'fourth', 6554, 0, 5535535, 1, CAST(0x0000A93F00BDF944 AS DateTime), 0)
INSERT [dbo].[ProgramStudyMaster] ([ProgramStudyId], [ProgramStudyCode], [ProgramStudyName], [AcademicTerm], [SKS], [Status], [UniversityId], [active], [lastupdateddt], [lastupdatedby]) VALUES (2, N'985623', N'985623', N'fourth', 6554, 1, 86522, 0, CAST(0x0000A9B000000000 AS DateTime), 53)
INSERT [dbo].[ProgramStudyMaster] ([ProgramStudyId], [ProgramStudyCode], [ProgramStudyName], [AcademicTerm], [SKS], [Status], [UniversityId], [active], [lastupdateddt], [lastupdatedby]) VALUES (3, N'dfghj', N'difference', N'third', 6986, 1, 36962, 1, CAST(0x0000A9B000000000 AS DateTime), 90)
INSERT [dbo].[ProgramStudyMaster] ([ProgramStudyId], [ProgramStudyCode], [ProgramStudyName], [AcademicTerm], [SKS], [Status], [UniversityId], [active], [lastupdateddt], [lastupdatedby]) VALUES (4, N'hggf', N'rsf', N'tyrt', 4855, 0, 27832, 1, CAST(0x0000A93E00DAC44A AS DateTime), 0)
INSERT [dbo].[ProgramStudyMaster] ([ProgramStudyId], [ProgramStudyCode], [ProgramStudyName], [AcademicTerm], [SKS], [Status], [UniversityId], [active], [lastupdateddt], [lastupdatedby]) VALUES (5, N'', N'', N'', 0, 0, 0, 0, CAST(0x0000A93E0084164C AS DateTime), 0)
INSERT [dbo].[ProgramStudyMaster] ([ProgramStudyId], [ProgramStudyCode], [ProgramStudyName], [AcademicTerm], [SKS], [Status], [UniversityId], [active], [lastupdateddt], [lastupdatedby]) VALUES (6, N'a', N'a', N'a', 11, 0, 11, 0, CAST(0x0000A93E0084711E AS DateTime), 0)
INSERT [dbo].[ProgramStudyMaster] ([ProgramStudyId], [ProgramStudyCode], [ProgramStudyName], [AcademicTerm], [SKS], [Status], [UniversityId], [active], [lastupdateddt], [lastupdatedby]) VALUES (7, N'a', N'a', N'a', 11, 0, 11, 0, CAST(0x0000A93E0084727F AS DateTime), 0)
INSERT [dbo].[ProgramStudyMaster] ([ProgramStudyId], [ProgramStudyCode], [ProgramStudyName], [AcademicTerm], [SKS], [Status], [UniversityId], [active], [lastupdateddt], [lastupdatedby]) VALUES (8, N'fhn', N'adsvbfb', N'ygu', 355325, 0, 5535535, 0, CAST(0x0000A93E00A535F1 AS DateTime), 0)
INSERT [dbo].[ProgramStudyMaster] ([ProgramStudyId], [ProgramStudyCode], [ProgramStudyName], [AcademicTerm], [SKS], [Status], [UniversityId], [active], [lastupdateddt], [lastupdatedby]) VALUES (9, N'', N'', N'', 0, 0, 0, 0, CAST(0x0000A93E00C37A84 AS DateTime), 0)
INSERT [dbo].[ProgramStudyMaster] ([ProgramStudyId], [ProgramStudyCode], [ProgramStudyName], [AcademicTerm], [SKS], [Status], [UniversityId], [active], [lastupdateddt], [lastupdatedby]) VALUES (10, N'first', N'bubble', N'second', 8526, 0, 5535535, 1, CAST(0x0000A93E00F8DF07 AS DateTime), 0)
INSERT [dbo].[ProgramStudyMaster] ([ProgramStudyId], [ProgramStudyCode], [ProgramStudyName], [AcademicTerm], [SKS], [Status], [UniversityId], [active], [lastupdateddt], [lastupdatedby]) VALUES (11, N'', N'', N'fifth', 0, 0, 0, 0, CAST(0x0000A93F00763BD8 AS DateTime), 0)
INSERT [dbo].[ProgramStudyMaster] ([ProgramStudyId], [ProgramStudyCode], [ProgramStudyName], [AcademicTerm], [SKS], [Status], [UniversityId], [active], [lastupdateddt], [lastupdatedby]) VALUES (12, N'first', N'bubble', N'second', 8526, 0, 27832, 0, CAST(0x0000A93F00AFE9B3 AS DateTime), 0)
INSERT [dbo].[ProgramStudyMaster] ([ProgramStudyId], [ProgramStudyCode], [ProgramStudyName], [AcademicTerm], [SKS], [Status], [UniversityId], [active], [lastupdateddt], [lastupdatedby]) VALUES (13, N'tytuiklk', N'fgjk', N'dkjsg', 963, 0, 9699, 0, CAST(0x0000A93F00E7603A AS DateTime), 0)
SET IDENTITY_INSERT [dbo].[ProgramStudyMaster] OFF
