USE [TMS_DB]
GO
/****** Object:  Table [dbo].[EmployeeMaster]    Script Date: 09-08-2018 22:11:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EmployeeMaster](
	[EmpId] [int] IDENTITY(1,1) NOT NULL,
	[EmpNumber] [int] NULL,
	[EmpFirstName] [varchar](50) NULL,
	[EmpLastName] [varchar](50) NULL,
	[DOB] [datetime] NULL,
	[BloodGroup] [varchar](50) NULL,
	[MaritalStatus] [varchar](50) NULL,
	[EmailId] [varchar](50) NULL,
	[WorkPhone] [bigint] NULL,
	[IsActive] [bit] NULL,
	[LastUpdatedBy] [int] NULL,
	[LastUpdatedDate] [datetime] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
 CONSTRAINT [PK_EmployeeMaster] PRIMARY KEY CLUSTERED 
(
	[EmpId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EmpOrgDetails]    Script Date: 09-08-2018 22:11:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EmpOrgDetails](
	[EmpId] [int] IDENTITY(1,1) NOT NULL,
	[ReportingTo] [int] NULL,
	[DepartmentId] [int] NULL,
	[SubDepartmentId] [int] NULL,
	[WorkStationId] [int] NULL,
	[LocationId] [int] NULL,
	[BranchId] [int] NULL,
	[BusinessUnitId] [int] NULL,
 CONSTRAINT [PK_EmpOrgDetails] PRIMARY KEY CLUSTERED 
(
	[EmpId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EmpPositionDetails]    Script Date: 09-08-2018 22:12:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EmpPositionDetails](
	[EmpId] [int] NULL,
	[EmployeementType] [int] NULL,
	[EmployeeType] [int] NULL,
	[Grande] [int] IDENTITY(1,1) NOT NULL,
	[BusinessDesignation] [int] NULL,
	[PayRollAreaId] [int] NULL,
	[ConfirmationStatus] [int] NULL,
	[ConfirmationDate] [datetime] NULL,
	[ContractEndDate] [datetime] NULL,
	[NoticePeriod] [int] NULL
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[EmployeeMaster] ON 

INSERT [dbo].[EmployeeMaster] ([EmpId], [EmpNumber], [EmpFirstName], [EmpLastName], [DOB], [BloodGroup], [MaritalStatus], [EmailId], [WorkPhone], [IsActive], [LastUpdatedBy], [LastUpdatedDate], [CreatedBy], [CreatedDate]) VALUES (1, 101, N'mani', N'g', CAST(N'2018-10-09T00:00:00.000' AS DateTime), N'a', N'single', N'mani@gmail.com', 123, 0, 1, CAST(N'2019-02-02T00:00:00.000' AS DateTime), 1, CAST(N'2019-01-02T00:00:00.000' AS DateTime))
INSERT [dbo].[EmployeeMaster] ([EmpId], [EmpNumber], [EmpFirstName], [EmpLastName], [DOB], [BloodGroup], [MaritalStatus], [EmailId], [WorkPhone], [IsActive], [LastUpdatedBy], [LastUpdatedDate], [CreatedBy], [CreatedDate]) VALUES (2, 102, N'nan123i', N'g', CAST(N'2018-08-09T12:16:32.803' AS DateTime), N'a', N'married', N'nani@gmail.com', 78678365782562, 0, 1, CAST(N'2018-08-09T12:16:32.803' AS DateTime), 1, CAST(N'2018-08-09T12:16:32.803' AS DateTime))
INSERT [dbo].[EmployeeMaster] ([EmpId], [EmpNumber], [EmpFirstName], [EmpLastName], [DOB], [BloodGroup], [MaritalStatus], [EmailId], [WorkPhone], [IsActive], [LastUpdatedBy], [LastUpdatedDate], [CreatedBy], [CreatedDate]) VALUES (3, NULL, N'fggf', N'cfcf', CAST(N'2018-08-09T15:06:26.740' AS DateTime), N'fg', N'cfc', N'f', 87897967, 0, 1, CAST(N'2018-08-09T15:06:26.740' AS DateTime), 1, CAST(N'2018-08-09T15:06:26.740' AS DateTime))
INSERT [dbo].[EmployeeMaster] ([EmpId], [EmpNumber], [EmpFirstName], [EmpLastName], [DOB], [BloodGroup], [MaritalStatus], [EmailId], [WorkPhone], [IsActive], [LastUpdatedBy], [LastUpdatedDate], [CreatedBy], [CreatedDate]) VALUES (4, NULL, N'fggf', N'cfcf', CAST(N'2018-08-09T15:06:42.977' AS DateTime), N'fg', N'cfc', N'f', 87897967, 0, 1, CAST(N'2018-08-09T15:06:42.977' AS DateTime), 1, CAST(N'2018-08-09T15:06:42.977' AS DateTime))
INSERT [dbo].[EmployeeMaster] ([EmpId], [EmpNumber], [EmpFirstName], [EmpLastName], [DOB], [BloodGroup], [MaritalStatus], [EmailId], [WorkPhone], [IsActive], [LastUpdatedBy], [LastUpdatedDate], [CreatedBy], [CreatedDate]) VALUES (5, NULL, N'nan', N'rar', CAST(N'2018-08-09T15:07:34.633' AS DateTime), N'dad', N'faf', N'faf@g.cpm', 563252543, 0, 1, CAST(N'2018-08-09T15:07:34.633' AS DateTime), 1, CAST(N'2018-08-09T15:07:34.633' AS DateTime))
INSERT [dbo].[EmployeeMaster] ([EmpId], [EmpNumber], [EmpFirstName], [EmpLastName], [DOB], [BloodGroup], [MaritalStatus], [EmailId], [WorkPhone], [IsActive], [LastUpdatedBy], [LastUpdatedDate], [CreatedBy], [CreatedDate]) VALUES (6, 105, N'mani', N'mani', CAST(N'2018-08-09T15:15:28.097' AS DateTime), N'O+', N'single', N'mani@gmail.com', 987654321, 1, 1, CAST(N'2018-08-09T15:15:28.097' AS DateTime), 1, CAST(N'2018-08-09T15:15:28.097' AS DateTime))
SET IDENTITY_INSERT [dbo].[EmployeeMaster] OFF
/****** Object:  StoredProcedure [dbo].[Usp_GetAllEmployees]    Script Date: 09-08-2018 22:12:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create proc [dbo].[Usp_GetAllEmployees]
As
Begin
	select EmpId,EmpNumber,EmpFirstName,EmpLastName,DOB,BloodGroup,MaritalStatus,EmailId,WorkPhone,IsActive,LastUpdatedBy,LastUpdatedDate,CreatedBy,CreatedDate from EmployeeMaster where IsActive=1
End
GO
