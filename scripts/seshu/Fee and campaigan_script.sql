USE [Gurukulam_Db]
GO
/****** Object:  Table [dbo].[CampaignItem]    Script Date: 18-08-2018 22:20:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[CampaignItem](
	[CampaignItemId] [int] IDENTITY(1,1) NOT NULL,
	[CampaignId] [int] NULL,
	[ItemName] [varchar](50) NULL,
	[Price] [money] NULL,
	[Remarks] [varchar](200) NULL,
 CONSTRAINT [PK_CampaignItem] PRIMARY KEY CLUSTERED 
(
	[CampaignItemId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Fee]    Script Date: 18-08-2018 22:20:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Fee](
	[FeeId] [int] IDENTITY(1,1) NOT NULL,
	[FeeLabel] [varchar](50) NOT NULL,
	[Amount] [decimal](18, 2) NOT NULL,
	[FeeType] [char](2) NOT NULL,
	[Description] [varchar](100) NOT NULL,
	[UniversityId] [int] NULL,
	[active] [tinyint] NULL CONSTRAINT [DF_feeActive]  DEFAULT ((1)),
	[lastupdateddt] [datetime] NULL CONSTRAINT [DF_feelastupdt]  DEFAULT (getdate()),
	[lastupdatedby] [int] NULL,
	[CurrencyId] [int] NULL,
	[FeeCategoryId] [int] NULL,
	[CalculationType] [int] NULL,
 CONSTRAINT [PK_Fee] PRIMARY KEY CLUSTERED 
(
	[FeeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[CampaignItem] ON 

INSERT [dbo].[CampaignItem] ([CampaignItemId], [CampaignId], [ItemName], [Price], [Remarks]) VALUES (1, 1, N'ab', 1000.0000, N'abcd')
INSERT [dbo].[CampaignItem] ([CampaignItemId], [CampaignId], [ItemName], [Price], [Remarks]) VALUES (2, 0, N'QWERT22', 5000.0000, N'pijkxnuyH')
INSERT [dbo].[CampaignItem] ([CampaignItemId], [CampaignId], [ItemName], [Price], [Remarks]) VALUES (3, 0, N'qwerty', 5200.0000, N'gdisafiu')
SET IDENTITY_INSERT [dbo].[CampaignItem] OFF
SET IDENTITY_INSERT [dbo].[Fee] ON 

INSERT [dbo].[Fee] ([FeeId], [FeeLabel], [Amount], [FeeType], [Description], [UniversityId], [active], [lastupdateddt], [lastupdatedby], [CurrencyId], [FeeCategoryId], [CalculationType]) VALUES (7, N'abc', CAST(15000.00 AS Decimal(18, 2)), N'ca', N'abcde', 1, 1, CAST(N'2018-08-16 11:21:08.097' AS DateTime), 1, 1, 1, 1)
INSERT [dbo].[Fee] ([FeeId], [FeeLabel], [Amount], [FeeType], [Description], [UniversityId], [active], [lastupdateddt], [lastupdatedby], [CurrencyId], [FeeCategoryId], [CalculationType]) VALUES (8, N'abc', CAST(22000.00 AS Decimal(18, 2)), N'ca', N'abcde', 1, 1, CAST(N'2018-08-16 11:21:54.737' AS DateTime), 1, 1, 1, 1)
INSERT [dbo].[Fee] ([FeeId], [FeeLabel], [Amount], [FeeType], [Description], [UniversityId], [active], [lastupdateddt], [lastupdatedby], [CurrencyId], [FeeCategoryId], [CalculationType]) VALUES (15, N'abc', CAST(20000.00 AS Decimal(18, 2)), N'c ', N'qwerty', 1, 0, CAST(N'2018-08-16 16:15:39.743' AS DateTime), 1, 1, 1, 1)
INSERT [dbo].[Fee] ([FeeId], [FeeLabel], [Amount], [FeeType], [Description], [UniversityId], [active], [lastupdateddt], [lastupdatedby], [CurrencyId], [FeeCategoryId], [CalculationType]) VALUES (16, N'abcde', CAST(30000.00 AS Decimal(18, 2)), N'1 ', N'lkjhgf', 0, 1, CAST(N'2018-08-16 16:17:07.923' AS DateTime), 0, 0, 0, 0)
INSERT [dbo].[Fee] ([FeeId], [FeeLabel], [Amount], [FeeType], [Description], [UniversityId], [active], [lastupdateddt], [lastupdatedby], [CurrencyId], [FeeCategoryId], [CalculationType]) VALUES (21, N'QW', CAST(24000.00 AS Decimal(18, 2)), N'1 ', N'SD', 1, 1, CAST(N'2018-08-17 11:30:23.250' AS DateTime), 0, 0, 0, 0)
INSERT [dbo].[Fee] ([FeeId], [FeeLabel], [Amount], [FeeType], [Description], [UniversityId], [active], [lastupdateddt], [lastupdatedby], [CurrencyId], [FeeCategoryId], [CalculationType]) VALUES (22, N'k', CAST(0.00 AS Decimal(18, 2)), N'1 ', N'n', 2, 0, CAST(N'2018-08-17 11:30:53.823' AS DateTime), 0, 0, 0, 0)
INSERT [dbo].[Fee] ([FeeId], [FeeLabel], [Amount], [FeeType], [Description], [UniversityId], [active], [lastupdateddt], [lastupdatedby], [CurrencyId], [FeeCategoryId], [CalculationType]) VALUES (23, N'', CAST(0.00 AS Decimal(18, 2)), N'1 ', N'SD', 0, 0, CAST(N'2018-08-18 10:30:04.750' AS DateTime), 0, 0, 0, 0)
INSERT [dbo].[Fee] ([FeeId], [FeeLabel], [Amount], [FeeType], [Description], [UniversityId], [active], [lastupdateddt], [lastupdatedby], [CurrencyId], [FeeCategoryId], [CalculationType]) VALUES (24, N'ty', CAST(555.00 AS Decimal(18, 2)), N'1 ', N'ggh', 1, 1, CAST(N'2018-08-18 10:30:47.347' AS DateTime), 0, 0, 0, 0)
INSERT [dbo].[Fee] ([FeeId], [FeeLabel], [Amount], [FeeType], [Description], [UniversityId], [active], [lastupdateddt], [lastupdatedby], [CurrencyId], [FeeCategoryId], [CalculationType]) VALUES (25, N'mnb', CAST(3500.00 AS Decimal(18, 2)), N'1 ', N'lk', 0, 1, CAST(N'2018-08-18 10:47:56.473' AS DateTime), 0, 0, 0, 0)
SET IDENTITY_INSERT [dbo].[Fee] OFF
/****** Object:  StoredProcedure [dbo].[USP_CreateFee]    Script Date: 18-08-2018 22:20:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[USP_CreateFee](
@FeeId int,
@FeeLabel varchar(50),
@Amount decimal(18,2),
@FeeType char(2),
@Description varchar(100),
@UniversityId int,
@active tinyint,
@lastupdateddt datetime,
@lastupdatedby int,
@CurrencyId int,
@FeeCategoryId int,
@CalculationType int
)

As
Begin
if not exists (select 1 from Fee where FeeId = @FeeId)

begin 
  insert into Fee (FeeLabel,Amount,FeeType,Description,UniversityId,active,lastupdateddt,lastupdatedby,CurrencyId,FeeCategoryId,CalculationType)
  values (@FeeLabel,@Amount,@FeeType,@Description,@UniversityId,1,GetDate(),@lastupdatedby,@CurrencyId,@FeeCategoryId,@CalculationType)
End
Else
Begin
update Fee set 
FeeLabel = @FeeLabel,
Amount = @Amount,
FeeType = @FeeType,
Description = @Description,
UniversityId = @UniversityId,
lastupdatedby = @lastupdatedby,
CurrencyId = @CurrencyId,
FeeCategoryId = @FeeCategoryId,
CalculationType = @CalculationType
 where FeeId = @FeeId
 end
 end
GO
/****** Object:  StoredProcedure [dbo].[USP_DeleteFee]    Script Date: 18-08-2018 22:20:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[USP_DeleteFee](
@FeeId int
)
As
Begin
update Fee set active = 0 where FeeId= @FeeId
End
GO
/****** Object:  StoredProcedure [dbo].[USP_GetAllFee]    Script Date: 18-08-2018 22:20:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[USP_GetAllFee]
as
begin

select * from Fee where Active = 1 

end
GO
/****** Object:  StoredProcedure [dbo].[USP_GetFeeId]    Script Date: 18-08-2018 22:20:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[USP_GetFeeId](
@FeeId int
)

As
Begin
select * from Fee where FeeId = @FeeId and active = 1
End 
GO
/****** Object:  StoredProcedure [dbo].[Ysp_createCampaignItem]    Script Date: 18-08-2018 22:20:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Ysp_createCampaignItem](
@CampaignItemId int,
@CampaignId int,
@ItemName varchar(50),
@Price money,
@Remarks varchar(200)
)
As
Begin
	if not exists (select 1 from CampaignItem where CampaignItemId =@CampaignItemId)

	begin
	insert into CampaignItem(
	CampaignId,
	ItemName,
	Price,
	Remarks
	)
	values(
	@CampaignId,
	@ItemName,
	@Price,
	@Remarks
	)
	select @@IDENTITY as CampaignItem
	end
	else
	begin
	select 1
		update CampaignItem set 
		CampaignId = @CampaignId,
		ItemName = @ItemName,
		Price = @Price,
		Remarks = @Remarks

		where CampaignItemId  = @CampaignItemId
	end

End
GO
/****** Object:  StoredProcedure [dbo].[Ysp_GetByCampaignItemId]    Script Date: 18-08-2018 22:20:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[Ysp_GetByCampaignItemId](
@CampaignItemId int
)
As
Begin
	Select * from CampaignItem where CampaignItemId = @CampaignItemId  
End
GO
/****** Object:  StoredProcedure [dbo].[Ysp_GetCampaignItem]    Script Date: 18-08-2018 22:20:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create proc [dbo].[Ysp_GetCampaignItem]
As
Begin
select * from CampaignItem
End
GO
