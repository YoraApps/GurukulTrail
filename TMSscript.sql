USE [TMS_DB]
GO
/****** Object:  Table [dbo].[__MigrationHistory]    Script Date: 8/7/2018 11:19:56 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__MigrationHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ContextKey] [nvarchar](300) NOT NULL,
	[Model] [varbinary](max) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_dbo.__MigrationHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC,
	[ContextKey] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ActivityMaster]    Script Date: 8/7/2018 11:19:56 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ActivityMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NULL,
	[LoginTime] [datetime] NULL,
 CONSTRAINT [PK_ActivityMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AddressMaster]    Script Date: 8/7/2018 11:19:56 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AddressMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NULL,
	[Address] [varchar](200) NULL,
	[City] [varchar](50) NULL,
	[State] [varchar](50) NULL,
	[Country] [varchar](50) NULL,
 CONSTRAINT [PK_AddressMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Book]    Script Date: 8/7/2018 11:19:56 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Book](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[BookName] [varchar](50) NULL,
	[Author] [varchar](50) NULL,
 CONSTRAINT [PK_Book] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CountryMaster]    Script Date: 8/7/2018 11:19:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CountryMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Country_Code] [varchar](100) NULL,
	[Country_Name] [varchar](100) NULL,
	[CurrencyId] [int] NULL,
	[TimeZoneId] [int] NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
 CONSTRAINT [PK_CountryMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CurrencyMaster]    Script Date: 8/7/2018 11:19:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CurrencyMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Currency_Code] [varchar](100) NULL,
	[Currency_Name] [varchar](100) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
 CONSTRAINT [PK_CurrencyMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Customer]    Script Date: 8/7/2018 11:19:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customer](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](100) NOT NULL,
	[LastName] [nvarchar](100) NOT NULL,
	[Email] [nvarchar](200) NOT NULL,
	[IdentityCard] [nvarchar](50) NOT NULL,
	[UniqueKey] [uniqueidentifier] NOT NULL,
	[DateOfBirth] [datetime] NOT NULL,
	[Mobile] [nvarchar](10) NULL,
	[RegistrationDate] [datetime] NOT NULL,
 CONSTRAINT [PK_dbo.Customer] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CustomerMaster]    Script Date: 8/7/2018 11:19:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CustomerMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](200) NULL,
	[Address] [nvarchar](max) NULL,
	[EmailId] [nvarchar](100) NULL,
	[PhoneNumber] [bigint] NULL,
	[AlternatePhoneNumber] [bigint] NULL,
	[FaxNumber] [bigint] NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
 CONSTRAINT [PK_CustomerMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CustomerTypeMaster]    Script Date: 8/7/2018 11:19:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CustomerTypeMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](200) NULL,
	[Description] [varchar](500) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
 CONSTRAINT [PK_CustomerTypeMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Error]    Script Date: 8/7/2018 11:19:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Error](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Message] [nvarchar](max) NULL,
	[StackTrace] [nvarchar](max) NULL,
	[DateCreated] [datetime] NOT NULL,
 CONSTRAINT [PK_dbo.Error] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Genre]    Script Date: 8/7/2018 11:19:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Genre](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_dbo.Genre] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LocationMaster]    Script Date: 8/7/2018 11:19:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LocationMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NULL,
	[Description] [varchar](200) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
	[StoreId] [int] NULL,
 CONSTRAINT [PK_LocationMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Movie]    Script Date: 8/7/2018 11:19:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Movie](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](100) NOT NULL,
	[Description] [nvarchar](2000) NOT NULL,
	[Image] [nvarchar](max) NULL,
	[GenreId] [int] NOT NULL,
	[Director] [nvarchar](100) NOT NULL,
	[Writer] [nvarchar](50) NOT NULL,
	[Producer] [nvarchar](50) NOT NULL,
	[ReleaseDate] [datetime] NOT NULL,
	[Rating] [tinyint] NOT NULL,
	[TrailerURI] [nvarchar](200) NULL,
 CONSTRAINT [PK_dbo.Movie] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MST_LookUps]    Script Date: 8/7/2018 11:19:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MST_LookUps](
	[LookUpType] [nvarchar](50) NOT NULL,
	[LookUpName] [nvarchar](200) NOT NULL,
	[LookUpValue] [int] NOT NULL,
	[LookUpValueStr] [nvarchar](200) NULL,
	[DisplayOrder] [int] NOT NULL,
	[IsActive] [bit] NULL,
 CONSTRAINT [PK_LookUp] PRIMARY KEY CLUSTERED 
(
	[LookUpType] ASC,
	[LookUpName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[organizationMaster]    Script Date: 8/7/2018 11:19:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[organizationMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Code] [varchar](100) NULL,
	[CIN] [varchar](100) NULL,
	[CompanyName] [varchar](100) NULL,
	[PortalName] [varchar](100) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
	[Country_Id] [int] NULL,
 CONSTRAINT [PK_organizationMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PosMaster]    Script Date: 8/7/2018 11:19:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PosMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](200) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
 CONSTRAINT [PK_PostMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ProductCategoryMaster]    Script Date: 8/7/2018 11:19:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProductCategoryMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](200) NULL,
	[Description] [varchar](500) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
	[Prod_Grp_Id] [int] NULL,
 CONSTRAINT [PK_ProductCategoryMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ProductGroupMaster]    Script Date: 8/7/2018 11:19:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProductGroupMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](200) NULL,
	[Description] [varchar](500) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
 CONSTRAINT [PK_ProductGroupMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ProductMaster]    Script Date: 8/7/2018 11:19:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProductMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](200) NULL,
	[Description] [varchar](500) NULL,
	[ImageURI] [nvarchar](500) NULL,
	[GRNCode] [nvarchar](200) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
	[Prod_Cat_Id] [int] NULL,
 CONSTRAINT [PK_ProductMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ProvinceMaster]    Script Date: 8/7/2018 11:19:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProvinceMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Province_Code] [varchar](100) NULL,
	[Province_Name] [varchar](100) NULL,
	[Country_Id] [int] NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
 CONSTRAINT [PK_ProvinceMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PurchaseDetailMaster]    Script Date: 8/7/2018 11:19:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PurchaseDetailMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[PurchaseId] [int] NULL,
	[ProductId] [int] NULL,
	[UomId] [int] NULL,
	[Quantity] [nvarchar](200) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
	[StoreId] [int] NULL,
 CONSTRAINT [PK_PurchaseDetailMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PurchaseMaster]    Script Date: 8/7/2018 11:19:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PurchaseMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[PurchaseDate] [datetime] NULL,
	[Status] [int] NULL,
	[IsActive] [int] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
	[Supplier_Id] [int] NULL,
 CONSTRAINT [PK_PurchaseMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Rental]    Script Date: 8/7/2018 11:19:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Rental](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[CustomerId] [int] NOT NULL,
	[StockId] [int] NOT NULL,
	[RentalDate] [datetime] NOT NULL,
	[ReturnedDate] [datetime] NULL,
	[Status] [nvarchar](10) NOT NULL,
 CONSTRAINT [PK_dbo.Rental] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Role]    Script Date: 8/7/2018 11:19:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Role](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_dbo.Role] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SalesDetail]    Script Date: 8/7/2018 11:19:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SalesDetail](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[SalesId] [int] NULL,
	[Quantity] [nvarchar](200) NULL,
	[ProductId] [int] NULL,
	[UOMId] [int] NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
 CONSTRAINT [PK_SalesDetail] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SalesMaster]    Script Date: 8/7/2018 11:19:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SalesMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[PosId] [int] NULL,
	[UserId] [int] NULL,
	[CustomerId] [int] NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
	[SalesDate] [datetime] NULL,
 CONSTRAINT [PK_SalesMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Stock]    Script Date: 8/7/2018 11:19:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Stock](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[MovieId] [int] NOT NULL,
	[UniqueKey] [uniqueidentifier] NOT NULL,
	[IsAvailable] [bit] NOT NULL,
 CONSTRAINT [PK_dbo.Stock] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[StoreMaster]    Script Date: 8/7/2018 11:19:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[StoreMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
	[Name] [varchar](20) NULL,
 CONSTRAINT [PK_StoreMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[StudentTest]    Script Date: 8/7/2018 11:19:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[StudentTest](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NULL,
	[EmailId] [nvarchar](50) NULL,
	[PhoneNumber] [bigint] NULL,
	[AlternatePhoneNumber] [bigint] NULL,
	[Address] [nvarchar](50) NULL,
	[IsActive] [bit] NULL,
 CONSTRAINT [PK_StudentTest] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SupplierMaster]    Script Date: 8/7/2018 11:19:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SupplierMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](200) NULL,
	[Address] [nvarchar](max) NULL,
	[EmailId] [nvarchar](100) NULL,
	[PhoneNumber] [bigint] NULL,
	[AlternatePhoneNumber] [bigint] NULL,
	[FaxNumber] [bigint] NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
	[SupplierTypeId] [int] NULL,
 CONSTRAINT [PK_SupplierMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SupplierTypeMaster]    Script Date: 8/7/2018 11:19:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SupplierTypeMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](200) NULL,
	[Description] [varchar](500) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
 CONSTRAINT [PK_SupplierTypeMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TimeZoneMaster]    Script Date: 8/7/2018 11:19:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TimeZoneMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Abbr] [varchar](100) NULL,
	[Zone_Name] [varchar](100) NULL,
	[UTC_OffSet] [varchar](100) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
 CONSTRAINT [PK_TimeZoneMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UnitOfMeasurementMaster]    Script Date: 8/7/2018 11:19:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UnitOfMeasurementMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](200) NULL,
	[Description] [varchar](500) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
 CONSTRAINT [PK_UnitOfMeasurementMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 8/7/2018 11:19:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Username] [nvarchar](100) NOT NULL,
	[Email] [nvarchar](200) NOT NULL,
	[HashedPassword] [nvarchar](200) NOT NULL,
	[Salt] [nvarchar](200) NOT NULL,
	[IsLocked] [bit] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
 CONSTRAINT [PK_dbo.User] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserMaster]    Script Date: 8/7/2018 11:19:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [varchar](50) NULL,
	[Password] [varchar](50) NULL,
	[FirstName] [varchar](50) NULL,
	[LastName] [varchar](50) NULL,
	[DateOfBrith] [datetime] NULL,
	[FatherName] [varchar](50) NULL,
	[MobileNumber] [bigint] NULL,
	[Email] [varchar](50) NULL,
 CONSTRAINT [PK_UserMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserRole]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserRole](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[RoleId] [int] NOT NULL,
 CONSTRAINT [PK_dbo.UserRole] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Watch]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Watch](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Price] [bigint] NULL,
	[Brand] [varchar](50) NULL,
 CONSTRAINT [PK_Watche] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Movie]  WITH CHECK ADD  CONSTRAINT [FK_dbo.Movie_dbo.Genre_GenreId] FOREIGN KEY([GenreId])
REFERENCES [dbo].[Genre] ([ID])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Movie] CHECK CONSTRAINT [FK_dbo.Movie_dbo.Genre_GenreId]
GO
ALTER TABLE [dbo].[Rental]  WITH CHECK ADD  CONSTRAINT [FK_dbo.Rental_dbo.Stock_StockId] FOREIGN KEY([StockId])
REFERENCES [dbo].[Stock] ([ID])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Rental] CHECK CONSTRAINT [FK_dbo.Rental_dbo.Stock_StockId]
GO
ALTER TABLE [dbo].[Stock]  WITH CHECK ADD  CONSTRAINT [FK_dbo.Stock_dbo.Movie_MovieId] FOREIGN KEY([MovieId])
REFERENCES [dbo].[Movie] ([ID])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Stock] CHECK CONSTRAINT [FK_dbo.Stock_dbo.Movie_MovieId]
GO
ALTER TABLE [dbo].[UserRole]  WITH CHECK ADD  CONSTRAINT [FK_dbo.UserRole_dbo.Role_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[Role] ([ID])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[UserRole] CHECK CONSTRAINT [FK_dbo.UserRole_dbo.Role_RoleId]
GO
ALTER TABLE [dbo].[UserRole]  WITH CHECK ADD  CONSTRAINT [FK_dbo.UserRole_dbo.User_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([ID])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[UserRole] CHECK CONSTRAINT [FK_dbo.UserRole_dbo.User_UserId]
GO
/****** Object:  StoredProcedure [dbo].[GetAllSales]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[GetAllSales]
as
begin
select sa.Id,sa.IsActive,sa.CreatedBy,sa.CreatedDate,sa.ModifiedBy,sa.ModifiedDate,
post.Name as PosName,post.Id as PosId from SalesMaster sa
inner join PosMaster post
on post.Id = sa.PosId
where sa.IsActive = 1 and post.IsActive=1

end
GO
/****** Object:  StoredProcedure [dbo].[GetAllStoreMAster]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[GetAllStoreMAster]
As 

   Begin
   Select * from StoreMaster where IsActive=1
   End
GO
/****** Object:  StoredProcedure [dbo].[testdev]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[testdev] 
As
Begin

select pcm.Id as ProductCategoryId,pcm.Name as ProductCategoryName ,pcm.Description, Pm.Id as ProductGroupId,pm.Name as ProductGroupName from ProductGroupMaster pm
inner join ProductCategoryMaster pcm on pcm.Prod_Grp_Id = pm.Id
where pm.IsActive = 1 and pcm.IsActive = 1

select * from ProductGroupMaster

End
GO
/****** Object:  StoredProcedure [dbo].[USP_CountryFrom]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE proc [dbo].[USP_CountryFrom](
@CountryId int,
@CurrencyId int,
@TimeZoneId int
)
as
begin

select pm.Id as ProvinceId,pm.Province_Name,pm.Country_Id,pm.Province_Code
from ProvinceMaster pm where pm.IsActive=1 and pm.Country_Id = @CountryId


select crm.Id as CurrencyId,crm.Currency_Name,crm.Currency_Code
from CurrencyMaster crm where crm.IsActive =1 and crm.Id =@CurrencyId 

select tm.Id as TimeZoneId,tm.Zone_Name,tm.Abbr,tm.UTC_OffSet
from TimeZoneMaster tm where tm.IsActive=1 and tm.Id = @TimeZoneId

end








 


  

  
GO
/****** Object:  StoredProcedure [dbo].[USP_CountryMaster]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[USP_CountryMaster]
as
begin

select cm.Id as Country_Id,cm.Country_Name,pm.Id as ProvinceId,pm.Province_Name,crm.Id as CurrencyId,crm.Currency_Name,tm.Id as TimeZoneId,tm.Zone_Name from CountryMaster cm
inner join ProvinceMaster pm on pm.Country_Id = cm.Id
inner join CurrencyMaster crm on crm.Id = cm.CurrencyId
inner join TimeZoneMaster tm on tm.Id =cm.TimeZoneId
where cm.IsActive=1 and pm.IsActive=1 and crm.IsActive =1 and tm.IsActive=1

end
GO
/****** Object:  StoredProcedure [dbo].[Usp_createCountry]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Usp_createCountry]

as
begin
select cm.Id as Country_Id,cm.Country_Name,cm.Country_Code,cm.CurrencyId,cm.TimeZoneId 
from CountryMaster cm where cm.IsActive=1

end
GO
/****** Object:  StoredProcedure [dbo].[Usp_CreateLocationMaster]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE Proc [dbo].[Usp_CreateLocationMaster](
@Id int,
@Name Varchar(50),
@Description Varchar(200),
@IsActive bit,
@CreatedBy int,
@CreatedDate datetime,
@ModifiedBy int,
@ModifiedDate datetime,
@StoreId int )

As
Begin
If not exists(select 1 from LocationMaster where Id = @Id)
begin
	Insert Into LocationMaster(Name,Description,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate,StoreId)
	Values(@Name,@Description,1,@CreatedBy,@CreatedDate,@ModifiedBy,@ModifiedDate,@StoreId)
	select @@IDENTITY as LocationMaster
End
Else
Begin
update LocationMaster set

Name = @Name,
Description=@Description,
IsActive = 1,
CreatedBy = @CreatedBy,
CreatedDate = @CreatedDate,
ModifiedBy = @ModifiedBy,
ModifiedDate = @ModifiedDate,
StoreId = @StoreId

Where Id = @Id
end
end
GO
/****** Object:  StoredProcedure [dbo].[Usp_CreateProductGroup]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE Proc [dbo].[Usp_CreateProductGroup](
@Id int,
@Name varchar(200),
@Description varchar(500),
@IsActive bit,
@CreatedBy int,
@CreatedDate datetime,
@ModifiedBy int,
@ModifiedDate datetime
)
As
Begin
	Insert Into ProductGroupMaster(Name,Description,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate)
	values(@Name,@Description,@IsActive,@CreatedBy,@CreatedDate,@ModifiedBy,@ModifiedDate)
	select @@IDENTITY as Id
End
GO
/****** Object:  StoredProcedure [dbo].[USP_CreateRegistration]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[USP_CreateRegistration](
@CompanyName varchar(100),
@PortalName varchar(100),
@Country_Name varchar(100),
@Province_Name varchar(100),
@CurrencyId int,
@TimeZoneId int,
@Country_Id int,
@IsActive bit,
@CreatedBy int,
@CreatedDate datetime,
@ModifiedBy int,
@ModifiedDate datetime
)
as
begin

 insert into organizationMaster(CompanyName,PortalName,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate,Country_Id)
 values(@CompanyName,@PortalName,1,@CreatedBy,@CreatedDate,@ModifiedBy,@ModifiedDate,@Country_Id);


 INSERT INTO  CountryMaster(Country_Name,CurrencyId,TimeZoneId,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate)
 VALUES (@Country_Name,@CurrencyId,@TimeZoneId,1,@CreatedBy,@CreatedDate,@ModifiedBy,@ModifiedDate);


 insert into ProvinceMaster(Province_Name,Country_Id,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate)
 values (@Province_Name,@Country_Id,1,@CreatedBy,@CreatedDate,@ModifiedBy,@ModifiedDate);

 end
GO
/****** Object:  StoredProcedure [dbo].[USP_DeleteLocationMaster]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create Proc [dbo].[USP_DeleteLocationMaster](
	@Id int
)

As
Begin

Update LocationMaster set IsActive = 0 where Id = @Id

End
GO
/****** Object:  StoredProcedure [dbo].[Usp_GetAllCountry]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[Usp_GetAllCountry]

as
begin
select cm.Id as Country_Id,cm.Country_Name,cm.Country_Code,cm.CurrencyId,cm.TimeZoneId 
from CountryMaster cm where cm.IsActive=1

end
GO
/****** Object:  StoredProcedure [dbo].[USP_GetAllLocationMaster]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[USP_GetAllLocationMaster]
As
Begin

Select  sm.Id as StoreId , sm.Name as StoreName ,lm.Id as LocationId,lm.Name as LocationName ,lm.Description,lm.IsActive,lm.CreatedBy,lm.CreatedDate,lm.ModifiedBy,lm.ModifiedDate  from LocationMaster lm
inner join StoreMaster sm on lm.StoreId = sm.Id
 where  sm.IsActive = 1 and lm.IsActive = 1

Select * from StoreMaster WHERE IsActive =1
End


GO
/****** Object:  StoredProcedure [dbo].[USP_GetAllPOS]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[USP_GetAllPOS]
As 

   Begin
   Select * from PosMaster where IsActive=1
   End

GO
/****** Object:  StoredProcedure [dbo].[Usp_GetAllProductCategory]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Usp_GetAllProductCategory]
As
Begin

select pcm.Id,pcm.Name,pcm.Description,pcm.IsActive,pcm.CreatedBy,pcm.CreatedDate,
pcm.ModifiedBy,pcm.ModifiedDate,pgm.Name as ProductGroupName,pcm.Prod_Grp_Id from ProductCategoryMaster pcm 
inner join ProductGroupMaster pgm 
on pgm.Id = pcm.Prod_Grp_Id
where pcm.IsActive = 1

End

select * from [dbo].[ProductGroupMaster]

select * from ProductCategoryMaster


GO
/****** Object:  StoredProcedure [dbo].[Usp_GetAllProducts]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE  proc [dbo].[Usp_GetAllProducts]
As
Begin
	select p.Id,p.Name,p.Description,p.ImageURI,p.GRNCode,p.IsActive,p.CreatedBy,p.CreatedDate,p.ModifiedBy,p.ModifiedDate,p.Prod_Cat_Id,
	pc.Name as ProductCategoryName from ProductMaster p 
	inner join ProductCategoryMaster pc on p.Prod_Cat_Id = pc.Id
	where p.IsActive=1
End
GO
/****** Object:  StoredProcedure [dbo].[Usp_GetAllPurchase]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Usp_GetAllPurchase]
As
Begin
 select p.Id,p.PurchaseDate,p.Status,p.IsActive,p.CreatedBy,p.CreatedDate,p.ModifiedBy,p.ModifiedDate,
 SM.Name as SupplierName ,SM.Id as Supplier_Id from PurchaseMaster p 
 inner join SupplierMaster SM on  SM.Id =p.Supplier_Id
 where p.IsActive=1 and SM.IsActive=1
End
GO
/****** Object:  StoredProcedure [dbo].[Usp_GetAllSupplier]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Usp_GetAllSupplier]
as
begin
 select sm.Id,sm.Name,sm.Address,sm.EmailId,sm.PhoneNumber,sm.AlternatePhoneNumber,sm.FaxNumber,
 sm.IsActive,sm.CreatedBy,sm.CreatedDate,sm.ModifiedBy,sm.ModifiedDate,
 stm.Name as SupplierName,sm.SupplierTypeId from SupplierMaster sm
 inner join SupplierTypeMaster stm
 on sm.SupplierTypeId = stm.Id
  where sm.IsActive = 1 and stm.IsActive = 1
end
GO
/****** Object:  StoredProcedure [dbo].[Usp_GetProductGroup]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Usp_GetProductGroup]
As
Begin
select pg.Name,pg.Id,pg.Description,pg.CreatedDate,pg.IsActive,pg.ModifiedDate,pg.ModifiedBy,pg.CreatedBy,
u.Username,u.Email from ProductGroupMaster pg
inner join [dbo].[User] u on pg.CreatedBy = u.ID 
End
GO
/****** Object:  StoredProcedure [dbo].[USP_PurchaseFormPopulate]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[USP_PurchaseFormPopulate]
as 
begin

select loc.Name as LocationName,loc.Id as LocationId

from LocationMaster loc

where loc.IsActive=1


select SM.Id as Supplier_Id,SM.Name as SupplierName from SupplierMaster SM

where SM.IsActive = 1 


select uom.Name as UOMName,uom.Id as UOMId from UnitOfMeasurementMaster uom

where uom.IsActive=1



select pm.Name as ProductName, pm.Id as ProductId from ProductMaster pm 

where  pm.IsActive=1


select SM1.Name as StoreName, SM1.Id as StoreId from StoreMaster SM1 

where  SM1.IsActive=1







 

end 
GO
/****** Object:  StoredProcedure [dbo].[USP_PurchaseFormSave]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[USP_PurchaseFormSave]
(
@PurchaseDate dateTime,
@Status int,
@IsActive int,
@CreatedBy int,
@CreatedDate dateTime,
@ModifiedBy int,
@ModifiedDate dateTime,
@Supplier_Id int,
@ProductId int ,
@UomId int,
@StoreId int,

@Quantity nvarchar(200)


)
as
begin
 insert into PurchaseMaster(PurchaseDate,Status,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate,Supplier_Id)
 values(@PurchaseDate,@Status,@IsActive,@CreatedBy,@CreatedDate,@ModifiedBy,@ModifiedDate,@Supplier_Id)


 declare @purchaseId int;
 SELECT @purchaseId = SCOPE_IDENTITY();

 INSERT INTO  PurchaseDetailMaster(purchaseId, ProductId,UomId,StoreId,Quantity,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate)
 VALUES (@purchaseId, @ProductId,@UomId,@StoreId,@Quantity,1,@CreatedBy,@CreatedDate,@ModifiedBy,@ModifiedDate);

end
GO
/****** Object:  StoredProcedure [dbo].[USP_PurchaseGraphicReport]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[USP_PurchaseGraphicReport]
(
@UOMName varchar(200)
)
as
begin
select sm.Name StoreName,pm.Name ProductName,pdm.Quantity, uom.Name UOMName,pum.PurchaseDate,spm.Name SupplierName from PurchaseDetailMaster pdm
inner join StoreMaster sm on sm.Id = pdm.StoreId
inner join ProductMaster pm on pm.Id = pdm.ProductId
inner join UnitOfMeasurementMaster uom on  uom.Id = pdm.UomId
inner join PurchaseMaster pum on pum.Id = pdm.PurchaseId
inner join SupplierMaster spm on spm.Id  = pum.Supplier_Id 
--inner join LocationMaster lm on lm.StoreId = sm.Id
where pdm.IsActive = 1 and pum.IsActive = 1 and uom.Name = @UOMName
end


GO
/****** Object:  StoredProcedure [dbo].[USP_PurchaseReport]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[USP_PurchaseReport]
as
begin

select PDM.Id, PM1.Id as ProductId,PM1.Name ProductName,SM.Id as Supplier_Id, SM.Name SupplierName,PDM.Quantity,UOM.Id as UomId,UOM.Name UOMName,SM1.Id as StoreId,SM1.Name as StoreName,LM.Id as LocationId,LM.Name LocationName,PM.PurchaseDate from PurchaseMaster PM
Inner Join SupplierMaster SM on  SM.Id = PM.Supplier_Id
Inner Join PurchaseDetailMaster PDM on PDM.PurchaseId= PM.Id
Inner Join ProductMaster PM1 on PM1.Id= PDM.ProductId
Inner Join UnitOfMeasurementMaster UOM on UOM.Id=PDM.UomId
Inner Join StoreMaster SM1 on SM1.Id=PDM.StoreId
Inner Join LocationMaster LM on LM.StoreId=SM1.Id
where PM1.IsActive=1 and SM.IsActive=1 and PDM.IsActive=1 and UOM.IsActive=1 and LM.IsActive=1 and PM.IsActive=1 and SM1.IsActive =1

end
GO
/****** Object:  StoredProcedure [dbo].[USP_PurchaseReportUpdate]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE proc [dbo].[USP_PurchaseReportUpdate]
(
@Id int ,
@Supplier_Id int,
@ProductId int ,
@UomId int,
@StoreId int,
@Quantity nvarchar(200),
@ModifiedBy int,
@ModifiedDate dateTime,
@PurchaseDate dateTime
)
as
begin

 update PurchaseMaster 
 set 
    Supplier_Id = @Supplier_Id,
	ModifiedBy  = @ModifiedBy,
	ModifiedDate = @ModifiedDate,
	 PurchaseDate = @PurchaseDate
	where Id = @Id

 update PurchaseDetailMaster
 set 

 ProductId =@ProductId,
 UomId    = @UomId, 
 Quantity = @Quantity,
 ModifiedBy =@ModifiedBy,
 ModifiedDate=@ModifiedDate,
 StoreId = @StoreId
 where PurchaseId = @Id


end

GO
/****** Object:  StoredProcedure [dbo].[USP_RemovePOS]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[USP_RemovePOS](
@Id int
)
As
Begin

Update PosMaster Set IsActive = 0 WHERE Id = @Id

End



GO
/****** Object:  StoredProcedure [dbo].[USP_RemoveSalesReports]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[USP_RemoveSalesReports](
@Id int)

as
begin
update SalesMaster set IsActive = 0 where Id =@Id

update SalesDetail set IsActive = 0 where SalesId = @Id
end
GO
/****** Object:  StoredProcedure [dbo].[USP_RemoveStoreMaster]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[USP_RemoveStoreMaster](
@Id int
)
As
Begin

Update StoreMaster Set IsActive = 0 WHERE Id = @Id

End

select * from  StoreMaster
--execute USP_RemoveStoreMaster "3"
GO
/****** Object:  StoredProcedure [dbo].[USP_SalesFormPopulate]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[USP_SalesFormPopulate]  
as  
begin  
  
select post.Name as PosName,post.Id as PosId 
  
from  PosMaster post where post.IsActive=1  
  
select cm.Name as CustName, cm.Id as CustomerId from CustomerMaster cm  
  
where  cm.IsActive=1  
  
select uom.Name as UOMName,uom.Id as UOMId from UnitOfMeasurementMaster uom
  
where uom.IsActive=1 
  
  
select pm.Name as ProductName, pm.Id as ProductId from ProductMaster pm   
  
where pm.IsActive=1 

  

  
end
GO
/****** Object:  StoredProcedure [dbo].[USP_SalesFormSave]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[USP_SalesFormSave]
(   @PosId int,
    @CustomerId int,
	@ProductId int,
	@UOMId int,
	@Quantity nvarchar(200),
	@SalesDate datetime,
	@IsActive bit,
	@CreatedBy int,
	@CreatedDate datetime,
	@ModifiedBy int,
	@ModifiedDate datetime)

	As
	Begin

		Insert into SalesMaster(IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate,SalesDate,PosId,CustomerId)
		values(@IsActive,@CreatedBy,@CreatedDate,@ModifiedBy,@ModifiedDate,@SalesDate,@PosId, @CustomerId)

	    declare @SalesId int;
        SELECT @SalesId = SCOPE_IDENTITY();

		 INSERT INTO  SalesDetail(SalesId, ProductId,UOMId,Quantity,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate)
       VALUES (@SalesId, @ProductId,@UOMId,@Quantity,1,@CreatedBy,@CreatedDate,@ModifiedBy,@ModifiedDate);

	End
GO
/****** Object:  StoredProcedure [dbo].[USP_SalesGraphicsReports]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[USP_SalesGraphicsReports](
@UOMName varchar(20)
)

As
Begin

Select pm.Name ProductName,cm.Name CustomerName,uom.Name UOMName,p.Name POSName,sd.Quantity,sm.SalesDate from SalesMaster sm

inner join  SalesDetail sd on sd.SalesId = sm.Id

inner join CustomerMaster cm on cm.Id = sm.CustomerId

inner join ProductMaster pm on pm.Id = sd.ProductId

inner join UnitOfMeasurementMaster uom on uom.Id = sd.UOMId

inner join PosMaster p on p.Id = sm.PosId

where uom.Name =@UOMName


End

GO
/****** Object:  StoredProcedure [dbo].[USP_SalesMaster]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[USP_SalesMaster]
As
Begin

select pm.Name as ProductName, pm.Id as ProductId from SalesMaster sm 

inner join SalesDetail sd  on sd.SalesId = sm.Id

inner join ProductMaster pm on pm.Id = sd.ProductId

where sd.IsActive = 1 and pm.IsActive=1 and sm.IsActive = 1

 

End
GO
/****** Object:  StoredProcedure [dbo].[USP_SalesReports]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[USP_SalesReports]

As
Begin
Select sd.Id,pm.Id as ProductId,pm.Name ProductName,cm.Id as CustomerId,cm.Name CustomerName,uom.Id as UOMId ,uom.Name UOMName,p.Id as POSId,p.Name POSName,sd.Quantity,sm.SalesDate from SalesMaster sm

inner join SalesDetail sd on sd.SalesId = sm.Id 

inner join CustomerMaster cm on cm.Id = sm.CustomerId

inner join ProductMaster pm on pm.Id = sd.ProductId

inner join UnitOfMeasurementMaster uom on uom.Id = sd.UOMId

inner join PosMaster p on p.Id = sm.PosId

where sd.IsActive = 1 and sm.IsActive = 1 and cm.IsActive = 1 and pm.IsActive = 1 and uom.IsActive = 1 and p.IsActive = 1
End

GO
/****** Object:  StoredProcedure [dbo].[USP_UpdatePOS]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[USP_UpdatePOS](  
@Id int,  
@Name varchar(100),  
@CreatedBy int,  
@CreatedDate datetime,  
@ModifiedBy int,  
@ModifiedDate datetime  
)  
As   
Begin  
  
 IF Not Exists (select 1 from PosMAster where Id = @Id)  
  Begin  
   Insert into PosMaster (Name,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate) Values  
   (@Name,1,@CreatedBy,@CreatedDate,@ModifiedBy,@ModifiedDate)  
  End  
 Else  
  Begin  
   Update PosMaster  
   set Name =@Name,  
    ModifiedBy =@ModifiedBy,  
    ModifiedDate=@ModifiedDate  
    where Id=@Id;  
  End  
   
    
End  
GO
/****** Object:  StoredProcedure [dbo].[Usp_UpdateSaleReport]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[Usp_UpdateSaleReport](
	@Id int,
    @PosId int,
    @CustomerId int,
	@ProductId int,
	@UOMId int,
	@Quantity nvarchar(200),
	@SalesDate datetime,
	@ModifiedBy int,
	@ModifiedDate datetime)
	As
	Begin

	update SalesMaster set
	PosId = @PosId,
	CustomerId = @CustomerId,
	ModifiedBy = @ModifiedBy,
	ModifiedDate = @ModifiedDate,
	SalesDate = @SalesDate
	 where Id = @Id

	 update SalesDetail set 
	 Quantity = @Quantity,
	 ProductId = @ProductId,
	 UOMId = @UOMId,
	 ModifiedBy = @ModifiedBy,
	 ModifiedDate = @ModifiedDate

	 where SalesId = @Id

	 


	End

GO
/****** Object:  StoredProcedure [dbo].[USP_UpdateStoreMaster]    Script Date: 8/7/2018 11:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE procedure [dbo].[USP_UpdateStoreMaster](
@Id int,
@IsActive bit,
@CreatedBy int,
@CreatedDate datetime,
@ModifiedBy int,
@ModifiedDate datetime,
@Name varchar(100)
)
As
Begin
If not exists(select 1 from StoreMaster where Id = @Id)
begin
	Insert Into StoreMaster(IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate,Name)
	Values(1,1,@CreatedDate,1,@ModifiedDate,@Name)
	
End
Else
Begin
update StoreMaster set

	ModifiedBy = @ModifiedBy,
	ModifiedDate = @ModifiedDate,
	Name = @Name

	where Id = @Id
	End
End
--execute USP_UpdateStoreMaster "1","1",'1',"2018/2/2", '1',"2018/2/3",'mani'
--select * from PosMaster

--truncate table StoreMaster
GO
