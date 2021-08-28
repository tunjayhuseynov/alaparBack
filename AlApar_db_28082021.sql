USE [master]
GO
/****** Object:  Database [alApar]    Script Date: 8/28/2021 5:54:20 AM ******/
CREATE DATABASE [alApar]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'alApar', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\alApar.mdf' , SIZE = 73728KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'alApar_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\alApar_log.ldf' , SIZE = 73728KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [alApar] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [alApar].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [alApar] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [alApar] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [alApar] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [alApar] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [alApar] SET ARITHABORT OFF 
GO
ALTER DATABASE [alApar] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [alApar] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [alApar] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [alApar] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [alApar] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [alApar] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [alApar] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [alApar] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [alApar] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [alApar] SET  DISABLE_BROKER 
GO
ALTER DATABASE [alApar] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [alApar] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [alApar] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [alApar] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [alApar] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [alApar] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [alApar] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [alApar] SET RECOVERY FULL 
GO
ALTER DATABASE [alApar] SET  MULTI_USER 
GO
ALTER DATABASE [alApar] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [alApar] SET DB_CHAINING OFF 
GO
ALTER DATABASE [alApar] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [alApar] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [alApar] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [alApar] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'alApar', N'ON'
GO
ALTER DATABASE [alApar] SET QUERY_STORE = OFF
GO
USE [alApar]
GO
/****** Object:  Table [dbo].[electro_operators]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[electro_operators](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[categoryId] [int] NULL,
 CONSTRAINT [PK_electro_operators] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[currency]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[currency](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](255) NULL,
	[rate] [float] NULL,
 CONSTRAINT [PK__curreny__3213E83F7D9CE511] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cities]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cities](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](255) NULL,
 CONSTRAINT [PK__cities__3213E83FCAB2E494] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[electro_ads]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[electro_ads](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[privateId] [nvarchar](500) NULL,
	[logId] [int] NULL,
	[statusId] [int] NULL,
	[packageId] [int] NULL,
	[viewed] [int] NULL,
	[categoryId] [int] NULL,
	[typeId] [int] NULL,
	[title] [nvarchar](50) NULL,
	[isNew] [bit] NULL,
	[hasDelivery] [bit] NULL,
	[price] [float] NULL,
	[currencyId] [int] NULL,
	[contactId] [int] NULL,
	[about] [nvarchar](max) NULL,
	[operatorId] [int] NULL,
	[phoneMarkId] [int] NULL,
	[phoneModelId] [int] NULL,
	[operatorPhoneNumber] [nvarchar](50) NULL,
	[computerMarkId] [int] NULL,
	[colorId] [int] NULL,
	[storageId] [int] NULL,
	[guarantee] [bit] NULL,
	[credit] [bit] NULL,
	[cityId] [int] NULL,
 CONSTRAINT [PK_electro_ads] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[electro_categories]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[electro_categories](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[activateType] [bit] NULL,
	[activatePhoneMark] [bit] NULL,
	[activateComputerMark] [bit] NULL,
	[activateOperator] [bit] NULL,
	[activateTitle] [bit] NULL,
 CONSTRAINT [PK_electro_categories] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[electro_types]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[electro_types](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[categoryId] [int] NULL,
 CONSTRAINT [PK_electro_types] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[electro_logs]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[electro_logs](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[createdDate] [datetime2](7) NULL,
	[modifiedDate] [datetime2](7) NULL,
	[fromDate] [datetime2](7) NULL,
	[tillDate] [datetime2](7) NULL,
	[userIpAdresses] [varchar](max) NULL,
 CONSTRAINT [PK_electro_logs] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[electro_contacts]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[electro_contacts](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[email] [nvarchar](100) NULL,
	[phoneNumber] [nvarchar](50) NULL,
	[isWp] [bit] NULL,
	[isCall] [bit] NULL,
	[timespan] [datetime2](7) NULL,
 CONSTRAINT [PK_electro_contacts] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[electro_phone_marks]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[electro_phone_marks](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[categoryId] [int] NOT NULL,
 CONSTRAINT [PK_electro_phone_marks] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[electro_phone_models]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[electro_phone_models](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[markId] [int] NULL,
 CONSTRAINT [PK_electro_phone_models] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[electro_phone_colors]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[electro_phone_colors](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[modelId] [int] NULL,
 CONSTRAINT [PK_electro_phone_colors] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[electro_phone_storages]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[electro_phone_storages](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[modelId] [int] NULL,
 CONSTRAINT [PK_electro_phone_storages] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[electro_computer_marks]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[electro_computer_marks](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[categoryId] [int] NULL,
 CONSTRAINT [PK_electro_computer_marks] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[View_Electro_Ads]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[View_Electro_Ads]
AS
SELECT        dbo.electro_ads.id, dbo.electro_ads.statusId, dbo.electro_ads.packageId, dbo.electro_ads.viewed, dbo.electro_ads.categoryId, dbo.electro_ads.typeId, dbo.electro_ads.title, dbo.electro_ads.isNew, dbo.electro_ads.hasDelivery, 
                         dbo.electro_ads.price, dbo.electro_ads.currencyId, dbo.electro_ads.about, dbo.electro_ads.operatorId, dbo.electro_ads.phoneMarkId, dbo.electro_ads.operatorPhoneNumber, dbo.electro_ads.computerMarkId, 
                         dbo.electro_logs.modifiedDate, dbo.electro_categories.name AS category, dbo.electro_computer_marks.name AS computerMark, dbo.electro_operators.name AS operator, dbo.electro_phone_models.name AS phoneModel, 
                         dbo.electro_phone_colors.name AS phoneColor, dbo.electro_phone_marks.name AS phoneMark, dbo.electro_phone_storages.name AS phoneStorage, dbo.electro_types.name AS phoneType, dbo.currency.name AS currency, 
                         dbo.electro_ads.contactId, dbo.electro_contacts.name, dbo.electro_contacts.email, dbo.electro_contacts.phoneNumber, dbo.electro_contacts.isWp, dbo.electro_contacts.isCall, dbo.electro_ads.colorId, dbo.electro_ads.storageId, 
                         dbo.electro_ads.logId, dbo.electro_ads.guarantee, dbo.electro_ads.credit, dbo.cities.name AS city, dbo.electro_ads.phoneModelId
FROM            dbo.electro_ads LEFT OUTER JOIN
                         dbo.electro_categories ON dbo.electro_ads.categoryId = dbo.electro_categories.id LEFT OUTER JOIN
                         dbo.electro_computer_marks ON dbo.electro_ads.computerMarkId = dbo.electro_computer_marks.id LEFT OUTER JOIN
                         dbo.electro_contacts ON dbo.electro_ads.contactId = dbo.electro_contacts.id LEFT OUTER JOIN
                         dbo.electro_logs ON dbo.electro_ads.logId = dbo.electro_logs.id LEFT OUTER JOIN
                         dbo.electro_operators ON dbo.electro_ads.operatorId = dbo.electro_operators.id LEFT OUTER JOIN
                         dbo.electro_phone_colors ON dbo.electro_ads.id = dbo.electro_phone_colors.id LEFT OUTER JOIN
                         dbo.electro_phone_marks ON dbo.electro_ads.phoneMarkId = dbo.electro_phone_marks.id LEFT OUTER JOIN
                         dbo.electro_phone_models ON dbo.electro_ads.phoneModelId = dbo.electro_phone_models.id LEFT OUTER JOIN
                         dbo.electro_phone_storages ON dbo.electro_phone_models.id = dbo.electro_phone_storages.modelId LEFT OUTER JOIN
                         dbo.electro_types ON dbo.electro_ads.typeId = dbo.electro_types.id LEFT OUTER JOIN
                         dbo.currency ON dbo.electro_ads.currencyId = dbo.currency.id LEFT OUTER JOIN
                         dbo.cities ON dbo.electro_ads.id = dbo.cities.id
GO
/****** Object:  Table [dbo].[auto_marks]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[auto_marks](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
 CONSTRAINT [PK_auto_marks] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[auto_models]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[auto_models](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[markId] [int] NULL,
	[title] [nvarchar](50) NULL,
 CONSTRAINT [PK_auto_model] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[auto_ban_types]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[auto_ban_types](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
 CONSTRAINT [PK_auto_ban_types] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[auto_colors]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[auto_colors](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
 CONSTRAINT [PK_auto_colors] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[auto_fuels]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[auto_fuels](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
 CONSTRAINT [PK_auto_fuels] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[auto_rentPaymentTypes]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[auto_rentPaymentTypes](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](255) NULL,
	[rentId] [int] NULL,
 CONSTRAINT [PK_auto_rentPaymentTypes] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[auto_transmitters]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[auto_transmitters](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
 CONSTRAINT [PK_auto_transmitters] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[auto_ads]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[auto_ads](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[privateId] [nvarchar](50) NULL,
	[viewed] [int] NULL,
	[title] [nvarchar](100) NULL,
	[logId] [int] NULL,
	[statusId] [int] NULL,
	[packageId] [int] NULL,
	[markId] [int] NULL,
	[modelId] [int] NULL,
	[banTypeId] [int] NULL,
	[about] [nvarchar](max) NULL,
	[price] [float] NULL,
	[currencyId] [int] NULL,
	[kredit] [bit] NULL,
	[barter] [bit] NULL,
	[colorId] [int] NULL,
	[motorPower] [float] NULL,
	[motorCapacity] [float] NULL,
	[fuelId] [int] NULL,
	[transmitterId] [int] NULL,
	[transmissionBoxId] [int] NULL,
	[carYear] [int] NULL,
	[mileage] [float] NULL,
	[contactId] [int] NULL,
	[abs] [bit] NULL,
	[yungulDisk] [bit] NULL,
	[lyuk] [bit] NULL,
	[yagisSensor] [bit] NULL,
	[merkeziQapanma] [bit] NULL,
	[parkRadar] [bit] NULL,
	[kondisioner] [bit] NULL,
	[oturacaqIsitme] [bit] NULL,
	[deriSalon] [bit] NULL,
	[yanPerde] [bit] NULL,
	[oturacaqVentilyasiya] [bit] NULL,
	[ksenonLampa] [bit] NULL,
	[arxaKamera] [bit] NULL,
	[bortKomputer] [bit] NULL,
	[esp] [bit] NULL,
	[kruizKontrol] [bit] NULL,
	[startStopSistem] [bit] NULL,
	[rentPaymentTypeId] [int] NULL,
	[sellTypeId] [int] NULL,
	[cityId] [int] NULL,
 CONSTRAINT [PK_auto_ads] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[auto_transmission_boxs]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[auto_transmission_boxs](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
 CONSTRAINT [PK_auto_transmission_boxs] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[auto_ad_logs]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[auto_ad_logs](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[createdDate] [datetime2](7) NULL,
	[modifiedDate] [datetime2](7) NULL,
	[fromDate] [datetime2](7) NULL,
	[tillDate] [datetime2](7) NULL,
	[userIpAdresses] [varchar](max) NULL,
 CONSTRAINT [PK_auto_ad_logs] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[auto_contacts]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[auto_contacts](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[email] [nvarchar](100) NULL,
	[phoneNumber] [nvarchar](50) NULL,
	[isWp] [bit] NULL,
	[isCall] [bit] NULL,
	[timespan] [datetime2](7) NULL,
 CONSTRAINT [PK_auto_contacts] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[adPackages]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[adPackages](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](255) NULL,
 CONSTRAINT [PK_adPackages] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[adStatuses]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[adStatuses](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](255) NULL,
 CONSTRAINT [PK_adStatuses] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[sellTypes]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[sellTypes](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](255) NULL,
	[filtername] [nvarchar](50) NULL,
 CONSTRAINT [PK__sellType__3213E83F04749C1F] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[View_Auto_Ads]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[View_Auto_Ads]
AS
SELECT        dbo.auto_ads.id, dbo.auto_ads.viewed, dbo.auto_ads.title, dbo.auto_ads.price, dbo.auto_ads.about, dbo.auto_ads.kredit, dbo.auto_ads.barter, dbo.auto_ads.carYear, dbo.auto_ads.mileage, dbo.auto_ads.abs, 
                         dbo.auto_ads.yungulDisk, dbo.auto_ads.lyuk, dbo.auto_ads.yagisSensor, dbo.auto_ads.merkeziQapanma, dbo.auto_ads.parkRadar, dbo.auto_ads.kondisioner, dbo.auto_ads.oturacaqIsitme, dbo.auto_ads.deriSalon, 
                         dbo.auto_ads.yanPerde, dbo.auto_ads.oturacaqVentilyasiya, dbo.auto_ads.arxaKamera, dbo.auto_ads.ksenonLampa, dbo.auto_ads.bortKomputer, dbo.auto_ads.esp, dbo.auto_ads.kruizKontrol, dbo.auto_ads.startStopSistem, 
                         dbo.auto_ads.motorPower, dbo.auto_ads.motorCapacity, dbo.auto_ban_types.name AS BanType, dbo.auto_colors.name AS Color, dbo.auto_contacts.name, dbo.auto_contacts.email, dbo.auto_contacts.phoneNumber, 
                         dbo.auto_contacts.isWp, dbo.auto_contacts.isCall, dbo.auto_fuels.name AS Fuel, dbo.auto_marks.name AS Mark, dbo.auto_models.name AS Model, dbo.auto_models.title AS ModelTitle, 
                         dbo.auto_transmitters.name AS Transmitter, dbo.auto_transmission_boxs.name AS TransmissionBox, dbo.auto_ads.statusId, dbo.auto_ads.packageId, dbo.auto_ads.markId, dbo.auto_ads.modelId, dbo.auto_ads.banTypeId, 
                         dbo.auto_ads.currencyId, dbo.auto_ads.colorId, dbo.auto_ads.fuelId, dbo.auto_ads.transmitterId, dbo.auto_ads.transmissionBoxId, dbo.auto_ad_logs.modifiedDate, dbo.auto_ads.contactId, dbo.auto_ads.logId, 
                         dbo.sellTypes.name AS sellTypeName, dbo.auto_rentPaymentTypes.name AS rentPaymentName, dbo.sellTypes.filtername AS sellTypeFilterName, dbo.cities.name AS city, dbo.auto_ads.cityId, 
                         dbo.adPackages.name AS packageName, dbo.adStatuses.name AS statusName
FROM            dbo.auto_ads INNER JOIN
                         dbo.adPackages ON dbo.auto_ads.packageId = dbo.adPackages.id INNER JOIN
                         dbo.adStatuses ON dbo.auto_ads.statusId = dbo.adStatuses.id LEFT OUTER JOIN
                         dbo.cities ON dbo.auto_ads.id = dbo.cities.id LEFT OUTER JOIN
                         dbo.auto_fuels ON dbo.auto_fuels.id = dbo.auto_ads.fuelId LEFT OUTER JOIN
                         dbo.auto_ban_types ON dbo.auto_ads.banTypeId = dbo.auto_ban_types.id LEFT OUTER JOIN
                         dbo.auto_colors ON dbo.auto_ads.colorId = dbo.auto_colors.id LEFT OUTER JOIN
                         dbo.auto_marks ON dbo.auto_ads.markId = dbo.auto_marks.id LEFT OUTER JOIN
                         dbo.auto_models ON dbo.auto_ads.modelId = dbo.auto_models.id LEFT OUTER JOIN
                         dbo.auto_transmission_boxs ON dbo.auto_ads.transmissionBoxId = dbo.auto_transmission_boxs.id LEFT OUTER JOIN
                         dbo.auto_transmitters ON dbo.auto_ads.transmitterId = dbo.auto_transmitters.id LEFT OUTER JOIN
                         dbo.auto_ad_logs ON dbo.auto_ads.logId = dbo.auto_ad_logs.id LEFT OUTER JOIN
                         dbo.sellTypes ON dbo.auto_ads.sellTypeId = dbo.sellTypes.id LEFT OUTER JOIN
                         dbo.auto_rentPaymentTypes ON dbo.auto_ads.rentPaymentTypeId = dbo.auto_rentPaymentTypes.id LEFT OUTER JOIN
                         dbo.auto_contacts ON dbo.auto_ads.contactId = dbo.auto_contacts.id
GO
/****** Object:  Table [dbo].[animal_categories]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[animal_categories](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[genera] [bit] NULL,
	[type] [bit] NULL,
 CONSTRAINT [PK_animal_categories] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[animal_generas]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[animal_generas](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[categoryId] [int] NULL,
 CONSTRAINT [PK_animal_generas] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[animal_types]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[animal_types](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[categoryId] [int] NULL,
 CONSTRAINT [PK_animal_types] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[animal_contacts]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[animal_contacts](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[contactNumber] [nvarchar](255) NULL,
	[isCall] [bit] NULL,
	[isWp] [bit] NULL,
	[email] [nvarchar](255) NULL,
	[name] [nvarchar](50) NULL,
	[timespan] [datetime2](7) NULL,
 CONSTRAINT [PK_animal_contacts] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[animal_logs]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[animal_logs](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[createdDate] [datetime2](7) NULL,
	[modifiedDate] [datetime2](7) NULL,
	[fromDate] [datetime2](7) NULL,
	[tillDate] [datetime2](7) NULL,
	[userIpAdresses] [varchar](max) NULL,
 CONSTRAINT [PK_animal_logs] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[animal_ads]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[animal_ads](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[privateId] [nvarchar](50) NULL,
	[viewed] [int] NULL,
	[logId] [int] NULL,
	[statusId] [int] NULL,
	[packageId] [int] NULL,
	[categoryId] [int] NULL,
	[generaId] [int] NULL,
	[typeId] [int] NULL,
	[hasDelivery] [bit] NULL,
	[title] [nvarchar](500) NULL,
	[price] [float] NULL,
	[currencyId] [int] NULL,
	[cityId] [int] NULL,
	[about] [nvarchar](max) NULL,
	[contactId] [int] NULL,
 CONSTRAINT [PK_animal_ads] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  View [dbo].[View_Animal_Ads]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[View_Animal_Ads]
AS
SELECT        dbo.animal_ads.id, dbo.animal_ads.viewed, dbo.animal_logs.modifiedDate, dbo.adPackages.name AS packageName, dbo.adStatuses.name AS statusName, dbo.animal_ads.about, dbo.animal_ads.price, dbo.animal_ads.title, 
                         dbo.animal_ads.hasDelivery, dbo.animal_categories.name AS categoryName, dbo.animal_categories.genera, dbo.animal_categories.type, dbo.animal_contacts.contactNumber, dbo.animal_contacts.isCall, 
                         dbo.animal_contacts.isWp, dbo.animal_contacts.email, dbo.animal_contacts.name AS contactName, dbo.animal_generas.name AS generaName, dbo.animal_types.name AS typeName, dbo.currency.name AS currencyName, 
                         dbo.cities.name AS cityName, dbo.animal_ads.categoryId, dbo.animal_ads.generaId, dbo.animal_ads.typeId, dbo.animal_ads.logId, dbo.animal_ads.statusId, dbo.animal_ads.packageId, dbo.animal_ads.currencyId, 
                         dbo.animal_ads.cityId, dbo.animal_ads.contactId
FROM            dbo.animal_ads LEFT OUTER JOIN
                         dbo.adStatuses ON dbo.animal_ads.statusId = dbo.adStatuses.id LEFT OUTER JOIN
                         dbo.adPackages ON dbo.adPackages.id = dbo.animal_ads.packageId LEFT OUTER JOIN
                         dbo.animal_categories ON dbo.animal_ads.categoryId = dbo.animal_categories.id LEFT OUTER JOIN
                         dbo.animal_contacts ON dbo.animal_ads.contactId = dbo.animal_contacts.id LEFT OUTER JOIN
                         dbo.animal_generas ON dbo.animal_ads.generaId = dbo.animal_generas.id LEFT OUTER JOIN
                         dbo.animal_logs ON dbo.animal_ads.logId = dbo.animal_logs.id LEFT OUTER JOIN
                         dbo.animal_types ON dbo.animal_ads.typeId = dbo.animal_types.id LEFT OUTER JOIN
                         dbo.cities ON dbo.animal_ads.cityId = dbo.cities.id LEFT OUTER JOIN
                         dbo.currency ON dbo.animal_ads.currencyId = dbo.currency.id
GO
/****** Object:  Table [dbo].[child_categories]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[child_categories](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[new] [bit] NULL,
	[delivery] [bit] NULL,
 CONSTRAINT [PK_child_categories] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[child_clothes_genders]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[child_clothes_genders](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[categoryId] [int] NULL,
 CONSTRAINT [PK_child_clothes_genders] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[child_clothes_types]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[child_clothes_types](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[clothesGenderId] [int] NULL,
	[clothesColor] [bit] NULL,
	[shoesSize] [bit] NULL,
	[clothesSize] [bit] NULL,
 CONSTRAINT [PK_child_clothes_types] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[child_contacts]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[child_contacts](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[contactNumber] [nvarchar](255) NULL,
	[isCall] [bit] NULL,
	[isWp] [bit] NULL,
	[email] [nvarchar](255) NULL,
	[name] [nvarchar](50) NULL,
	[timespan] [datetime2](7) NULL,
 CONSTRAINT [PK_child_contacts] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[child_logs]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[child_logs](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[createdDate] [datetime2](7) NULL,
	[modifiedDate] [datetime2](7) NULL,
	[fromDate] [datetime2](7) NULL,
	[tillDate] [datetime2](7) NULL,
	[userIpAdresses] [varchar](max) NULL,
 CONSTRAINT [PK_child_logs] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[child_types]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[child_types](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[categoryId] [int] NULL,
 CONSTRAINT [PK_child_types] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[child_ads]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[child_ads](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[privateId] [nvarchar](50) NULL,
	[viewed] [int] NULL,
	[logId] [int] NULL,
	[statusId] [int] NULL,
	[packageId] [int] NULL,
	[categoryId] [int] NULL,
	[clothesGenderId] [int] NULL,
	[clothesTypeId] [int] NULL,
	[typeId] [int] NULL,
	[isNew] [bit] NULL,
	[hasDelivery] [bit] NULL,
	[title] [nvarchar](50) NULL,
	[contactId] [int] NULL,
	[cityId] [int] NULL,
	[price] [float] NULL,
	[currencyId] [int] NULL,
	[about] [nvarchar](max) NULL,
	[colorId] [int] NULL,
	[shoesSizeId] [int] NULL,
	[clothesSizeId] [int] NULL,
 CONSTRAINT [PK_child_ads] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[clothes_colors]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[clothes_colors](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
 CONSTRAINT [PK_clothes_colors] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[shoes_sizes]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[shoes_sizes](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[tableName] [nvarchar](5) NULL,
 CONSTRAINT [PK_shoes_sizes] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[clothes_sizes]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[clothes_sizes](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[tableName] [nvarchar](5) NULL,
 CONSTRAINT [PK_clothes_sizes] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[View_Child_Ads]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[View_Child_Ads]
AS
SELECT        dbo.child_ads.id, dbo.adPackages.name, dbo.adStatuses.name AS statusName, dbo.child_categories.name AS categoryName, dbo.child_ads.viewed, dbo.child_ads.categoryId, dbo.currency.name AS currencyName, 
                         dbo.child_logs.modifiedDate, dbo.child_types.name AS typeName, dbo.child_clothes_types.name AS clothesTypeName, dbo.child_contacts.name AS contactName, dbo.child_contacts.email, dbo.child_contacts.isWp, 
                         dbo.child_contacts.isCall, dbo.child_contacts.contactNumber, dbo.child_clothes_genders.name AS clothesGenderName, dbo.child_ads.about, dbo.child_ads.price, dbo.child_ads.title, dbo.child_ads.hasDelivery, 
                         dbo.child_ads.isNew, dbo.child_ads.logId, dbo.child_ads.statusId, dbo.child_ads.packageId, dbo.child_ads.clothesGenderId, dbo.child_ads.clothesTypeId, dbo.child_ads.typeId, dbo.child_ads.contactId, dbo.child_ads.cityId, 
                         dbo.child_ads.currencyId, dbo.child_ads.colorId, dbo.clothes_colors.name AS colorName, dbo.child_ads.shoesSizeId, dbo.shoes_sizes.name AS shoesSizeName, dbo.child_ads.clothesSizeId, 
                         dbo.clothes_sizes.name AS clothesSizeName, dbo.cities.name AS city
FROM            dbo.child_ads LEFT OUTER JOIN
                         dbo.shoes_sizes ON dbo.shoes_sizes.id = dbo.child_ads.shoesSizeId LEFT OUTER JOIN
                         dbo.adPackages ON dbo.adPackages.id = dbo.child_ads.packageId LEFT OUTER JOIN
                         dbo.adStatuses ON dbo.adStatuses.id = dbo.child_ads.statusId LEFT OUTER JOIN
                         dbo.cities ON dbo.cities.id = dbo.child_ads.cityId LEFT OUTER JOIN
                         dbo.currency ON dbo.currency.id = dbo.child_ads.currencyId LEFT OUTER JOIN
                         dbo.child_categories ON dbo.child_ads.categoryId = dbo.child_categories.id LEFT OUTER JOIN
                         dbo.child_clothes_genders ON dbo.child_ads.clothesGenderId = dbo.child_clothes_genders.id LEFT OUTER JOIN
                         dbo.child_clothes_types ON dbo.child_ads.clothesTypeId = dbo.child_clothes_types.id LEFT OUTER JOIN
                         dbo.child_contacts ON dbo.child_ads.contactId = dbo.child_contacts.id LEFT OUTER JOIN
                         dbo.child_logs ON dbo.child_ads.logId = dbo.child_logs.id LEFT OUTER JOIN
                         dbo.child_types ON dbo.child_ads.typeId = dbo.child_types.id LEFT OUTER JOIN
                         dbo.clothes_colors ON dbo.child_ads.colorId = dbo.clothes_colors.id LEFT OUTER JOIN
                         dbo.clothes_sizes ON dbo.clothes_sizes.id = dbo.child_ads.clothesSizeId
GO
/****** Object:  Table [dbo].[home_ads]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[home_ads](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[privateId] [nvarchar](50) NULL,
	[viewed] [int] NULL,
	[title] [nvarchar](100) NULL,
	[logId] [int] NULL,
	[statusId] [int] NULL,
	[packageId] [int] NULL,
	[contactId] [int] NULL,
	[categoryId] [int] NULL,
	[typeId] [int] NULL,
	[cityId] [int] NULL,
	[hasDelivery] [bit] NULL,
	[isNew] [bit] NULL,
	[price] [float] NULL,
	[currencyId] [int] NULL,
	[about] [nvarchar](max) NULL,
 CONSTRAINT [PK_home_ads] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[home_categories]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[home_categories](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[new] [bit] NULL,
	[type] [bit] NULL,
 CONSTRAINT [PK_home_categories] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[home_types]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[home_types](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[categoryId] [int] NULL,
 CONSTRAINT [PK_home_types] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[home_logs]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[home_logs](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[createdDate] [datetime2](7) NULL,
	[modifiedDate] [datetime2](7) NULL,
	[fromDate] [datetime2](7) NULL,
	[tillDate] [datetime2](7) NULL,
	[userIpAdresses] [varchar](max) NULL,
 CONSTRAINT [PK_home_logs] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[home_contacts]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[home_contacts](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[contactNumber] [nvarchar](255) NULL,
	[isCall] [bit] NULL,
	[isWp] [bit] NULL,
	[email] [nvarchar](255) NULL,
	[name] [nvarchar](50) NULL,
	[timespan] [datetime2](7) NULL,
 CONSTRAINT [PK_home_contacts] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[View_Home_Ads]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[View_Home_Ads]
AS
SELECT        dbo.home_ads.id, dbo.home_ads.viewed, dbo.home_ads.title, dbo.home_ads.hasDelivery, dbo.home_ads.isNew, dbo.home_ads.price, dbo.home_ads.about, dbo.home_categories.name, dbo.home_contacts.contactNumber, 
                         dbo.home_contacts.isCall, dbo.home_contacts.isWp, dbo.home_contacts.email, dbo.home_contacts.name AS contactName, dbo.home_logs.modifiedDate, dbo.adStatuses.name AS statusName, dbo.cities.name AS cityName, 
                         dbo.currency.name AS currencyName, dbo.adPackages.name AS packageName, dbo.home_types.name AS typeName, dbo.home_ads.categoryId, dbo.home_ads.currencyId, dbo.home_ads.cityId, dbo.home_ads.typeId, 
                         dbo.home_ads.contactId, dbo.home_ads.packageId, dbo.home_ads.statusId, dbo.home_ads.logId
FROM            dbo.home_ads LEFT OUTER JOIN
                         dbo.home_categories ON dbo.home_ads.categoryId = dbo.home_categories.id LEFT OUTER JOIN
                         dbo.home_contacts ON dbo.home_ads.contactId = dbo.home_contacts.id LEFT OUTER JOIN
                         dbo.home_logs ON dbo.home_ads.logId = dbo.home_logs.id LEFT OUTER JOIN
                         dbo.home_types ON dbo.home_ads.typeId = dbo.home_types.id LEFT OUTER JOIN
                         dbo.adPackages ON dbo.home_ads.packageId = dbo.adPackages.id LEFT OUTER JOIN
                         dbo.adStatuses ON dbo.home_ads.statusId = dbo.adStatuses.id LEFT OUTER JOIN
                         dbo.cities ON dbo.home_ads.cityId = dbo.cities.id LEFT OUTER JOIN
                         dbo.currency ON dbo.home_ads.currencyId = dbo.currency.id
GO
/****** Object:  Table [dbo].[job_categories]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[job_categories](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[title] [nvarchar](50) NULL,
 CONSTRAINT [PK_job_categories] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[job_contacts]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[job_contacts](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[isWp] [bit] NULL,
	[phoneNumber1] [nvarchar](50) NULL,
	[phoneNumber2] [nvarchar](50) NULL,
	[phoneNumber3] [nvarchar](50) NULL,
	[phoneNumber4] [nvarchar](50) NULL,
	[email] [nvarchar](50) NULL,
	[timespan] [datetime2](7) NULL,
 CONSTRAINT [PK_job_contacts] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[job_educations]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[job_educations](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
 CONSTRAINT [PK_job_educations] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[job_practice_durations]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[job_practice_durations](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
 CONSTRAINT [PK_job_practice_durations] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[job_logs]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[job_logs](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[createdDate] [datetime2](7) NULL,
	[modifiedDate] [datetime2](7) NULL,
	[fromDate] [datetime2](7) NULL,
	[tillDate] [datetime2](7) NULL,
	[userIpAdresses] [varchar](max) NULL,
 CONSTRAINT [PK_job_logs] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[job_ad_types]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[job_ad_types](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[filtername] [nvarchar](50) NULL,
	[categoryId] [bit] NULL,
	[educationId] [bit] NULL,
	[practiceId] [bit] NULL,
	[cityId] [bit] NULL,
	[role] [bit] NULL,
	[minWage] [bit] NULL,
	[maxWage] [bit] NULL,
	[minAge] [bit] NULL,
	[maxAge] [bit] NULL,
	[aboutReq] [bit] NULL,
	[aboutJob] [bit] NULL,
	[companyName] [bit] NULL,
	[contactName] [bit] NULL,
	[employeeName] [bit] NULL,
	[employeeSurname] [bit] NULL,
	[employeeFatherName] [bit] NULL,
	[employeeIsGirl] [bit] NULL,
	[employeeAboutEducation] [bit] NULL,
	[employeeAboutPractic] [bit] NULL,
	[employeeSkills] [bit] NULL,
	[employeeAboutExtra] [bit] NULL,
 CONSTRAINT [PK_job_ad_types] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[villages]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[villages](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](255) NULL,
	[regionId] [int] NULL,
 CONSTRAINT [PK__villages__3213E83F465ACBFD] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[regions]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[regions](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](255) NULL,
	[cityId] [int] NULL,
 CONSTRAINT [PK__regions__3213E83FC43B883B] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[job_ads]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[job_ads](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[privateId] [nvarchar](50) NULL,
	[viewed] [int] NULL,
	[logId] [int] NULL,
	[statusId] [int] NULL,
	[packageId] [int] NULL,
	[typeId] [int] NULL,
	[categoryId] [int] NULL,
	[contactId] [int] NULL,
	[educationId] [int] NULL,
	[practiceId] [int] NULL,
	[cityId] [int] NULL,
	[role] [nvarchar](50) NULL,
	[minWage] [int] NULL,
	[maxWage] [int] NULL,
	[minAge] [int] NULL,
	[maxAge] [int] NULL,
	[aboutReq] [nvarchar](max) NULL,
	[aboutJob] [nvarchar](max) NULL,
	[companyName] [nvarchar](50) NULL,
	[contactName] [nvarchar](50) NULL,
	[employeeName] [nvarchar](50) NULL,
	[employeeSurname] [nvarchar](50) NULL,
	[employeeFatherName] [nvarchar](50) NULL,
	[employeeIsGirl] [bit] NULL,
	[employeeAboutEducation] [nvarchar](max) NULL,
	[employeeAboutPractic] [nvarchar](max) NULL,
	[employeeSkills] [nvarchar](max) NULL,
	[employeeAboutExtra] [nvarchar](max) NULL,
	[regionId] [int] NULL,
	[villageId] [int] NULL,
 CONSTRAINT [PK_job_ads] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  View [dbo].[View_Job_Ads]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[View_Job_Ads]
AS
SELECT        dbo.job_ads.id, dbo.job_ads.viewed, dbo.job_ads.statusId, dbo.job_ads.packageId, dbo.job_ads.typeId, dbo.job_ads.categoryId, dbo.job_ads.contactId, dbo.job_ads.educationId, dbo.job_ads.practiceId, dbo.job_ads.cityId, 
                         dbo.job_ads.role, dbo.job_ads.minWage, dbo.job_ads.maxWage, dbo.job_ads.minAge, dbo.job_ads.maxAge, dbo.job_ads.aboutReq, dbo.job_ads.companyName, dbo.job_ads.aboutJob, dbo.job_ads.contactName, 
                         dbo.job_ads.employeeName, dbo.job_ads.employeeSurname, dbo.job_ads.employeeFatherName, dbo.job_ads.employeeIsGirl, dbo.job_ads.employeeAboutEducation, dbo.job_ads.employeeAboutPractic, 
                         dbo.job_ads.employeeSkills, dbo.job_ads.employeeAboutExtra, dbo.job_ad_types.name, dbo.job_contacts.isWp, dbo.job_contacts.phoneNumber1, dbo.job_contacts.phoneNumber2, dbo.job_contacts.phoneNumber3, 
                         dbo.job_contacts.phoneNumber4, dbo.job_contacts.email, dbo.job_categories.name AS categoryName, dbo.job_educations.name AS educationName, dbo.cities.name AS cityName, dbo.job_ads.logId, dbo.job_logs.modifiedDate, 
                         dbo.job_ads.regionId, dbo.job_ads.villageId, dbo.regions.name AS regionName, dbo.villages.name AS villageName
FROM            dbo.job_ads LEFT OUTER JOIN
                         dbo.job_ad_types ON dbo.job_ad_types.id = dbo.job_ads.typeId LEFT OUTER JOIN
                         dbo.job_categories ON dbo.job_ads.categoryId = dbo.job_categories.id LEFT OUTER JOIN
                         dbo.job_contacts ON dbo.job_ads.contactId = dbo.job_contacts.id LEFT OUTER JOIN
                         dbo.job_educations ON dbo.job_ads.educationId = dbo.job_educations.id LEFT OUTER JOIN
                         dbo.job_practice_durations ON dbo.job_ads.practiceId = dbo.job_practice_durations.id LEFT OUTER JOIN
                         dbo.cities ON dbo.job_ads.cityId = dbo.cities.id LEFT OUTER JOIN
                         dbo.job_logs ON dbo.job_ads.logId = dbo.job_logs.id LEFT OUTER JOIN
                         dbo.regions ON dbo.job_ads.regionId = dbo.regions.id LEFT OUTER JOIN
                         dbo.villages ON dbo.job_ads.villageId = dbo.villages.id
GO
/****** Object:  Table [dbo].[private_categories]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[private_categories](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[new] [bit] NULL,
	[delivery] [bit] NULL,
 CONSTRAINT [PK_private_categories] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[private_clothes_genders]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[private_clothes_genders](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[categoryId] [int] NULL,
 CONSTRAINT [PK_private_clothes_genders] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[private_clothes_types]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[private_clothes_types](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[clothesGenderId] [int] NULL,
	[clothesColor] [bit] NULL,
	[shoesSize] [bit] NULL,
	[clothesSize] [bit] NULL,
 CONSTRAINT [PK_private_clothes_types] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[private_types]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[private_types](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[categoryId] [int] NULL,
 CONSTRAINT [PK_private_types] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[private_logs]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[private_logs](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[createdDate] [datetime2](7) NULL,
	[modifiedDate] [datetime2](7) NULL,
	[fromDate] [datetime2](7) NULL,
	[tillDate] [datetime2](7) NULL,
	[userIpAdresses] [varchar](max) NULL,
 CONSTRAINT [PK_private_logs] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[private_contacts]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[private_contacts](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[contactNumber] [nvarchar](255) NULL,
	[isCall] [bit] NULL,
	[isWp] [bit] NULL,
	[email] [nvarchar](255) NULL,
	[name] [nvarchar](50) NULL,
	[timespan] [datetime2](7) NULL,
 CONSTRAINT [PK_private_contacts] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[private_ads]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[private_ads](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[privateId] [nvarchar](50) NULL,
	[viewed] [int] NULL,
	[logId] [int] NULL,
	[statusId] [int] NULL,
	[packageId] [int] NULL,
	[categoryId] [int] NULL,
	[clothesGenderId] [int] NULL,
	[clothesTypeId] [int] NULL,
	[typeId] [int] NULL,
	[isNew] [bit] NULL,
	[hasDelivery] [bit] NULL,
	[title] [nvarchar](50) NULL,
	[contactId] [int] NULL,
	[cityId] [int] NULL,
	[price] [float] NULL,
	[currencyId] [int] NULL,
	[about] [nvarchar](max) NULL,
	[colorId] [int] NULL,
	[shoesSizeId] [int] NULL,
	[clothesSizeId] [int] NULL,
 CONSTRAINT [PK_private_ads] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  View [dbo].[View_Private_Ads]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[View_Private_Ads]
AS
SELECT        dbo.private_ads.id, dbo.adPackages.name, dbo.adStatuses.name AS statusName, dbo.private_categories.name AS categoryName, dbo.private_ads.viewed, dbo.private_ads.categoryId, dbo.currency.name AS currencyName, 
                         dbo.private_logs.modifiedDate, dbo.private_types.name AS typeName, dbo.private_clothes_types.name AS clothesTypeName, dbo.private_contacts.name AS contactName, dbo.private_contacts.email, 
                         dbo.private_contacts.isWp, dbo.private_contacts.isCall, dbo.private_contacts.contactNumber, dbo.private_clothes_genders.name AS clothesGenderName, dbo.private_ads.about, dbo.private_ads.price, dbo.private_ads.title, 
                         dbo.private_ads.hasDelivery, dbo.private_ads.isNew, dbo.private_ads.currencyId, dbo.private_ads.cityId, dbo.private_ads.contactId, dbo.private_ads.typeId, dbo.private_ads.clothesTypeId, dbo.private_ads.clothesGenderId, 
                         dbo.private_ads.packageId, dbo.private_ads.statusId, dbo.private_ads.logId, dbo.private_ads.colorId, dbo.private_ads.shoesSizeId, dbo.private_ads.clothesSizeId, dbo.clothes_sizes.name AS clothesSizeName, 
                         dbo.clothes_colors.name AS colorName, dbo.shoes_sizes.name AS shoesSizeName
FROM            dbo.private_ads LEFT OUTER JOIN
                         dbo.adPackages ON dbo.adPackages.id = dbo.private_ads.packageId LEFT OUTER JOIN
                         dbo.adStatuses ON dbo.adStatuses.id = dbo.private_ads.statusId LEFT OUTER JOIN
                         dbo.cities ON dbo.cities.id = dbo.private_ads.cityId LEFT OUTER JOIN
                         dbo.currency ON dbo.currency.id = dbo.private_ads.currencyId LEFT OUTER JOIN
                         dbo.private_categories ON dbo.private_ads.categoryId = dbo.private_categories.id LEFT OUTER JOIN
                         dbo.private_clothes_genders ON dbo.private_ads.clothesGenderId = dbo.private_clothes_genders.id LEFT OUTER JOIN
                         dbo.private_clothes_types ON dbo.private_ads.clothesTypeId = dbo.private_clothes_types.id LEFT OUTER JOIN
                         dbo.private_contacts ON dbo.private_ads.contactId = dbo.private_contacts.id LEFT OUTER JOIN
                         dbo.private_logs ON dbo.private_ads.logId = dbo.private_logs.id LEFT OUTER JOIN
                         dbo.private_types ON dbo.private_ads.typeId = dbo.private_types.id LEFT OUTER JOIN
                         dbo.shoes_sizes ON dbo.private_ads.shoesSizeId = dbo.shoes_sizes.id LEFT OUTER JOIN
                         dbo.clothes_colors ON dbo.private_ads.colorId = dbo.clothes_colors.id LEFT OUTER JOIN
                         dbo.clothes_sizes ON dbo.clothes_sizes.id = dbo.private_ads.clothesSizeId
GO
/****** Object:  Table [dbo].[service_ads]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[service_ads](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[privateId] [nvarchar](50) NULL,
	[viewed] [int] NULL,
	[logId] [int] NULL,
	[statusId] [int] NULL,
	[packageId] [int] NULL,
	[categoryId] [int] NULL,
	[title] [nvarchar](50) NULL,
	[typeId] [int] NULL,
	[isNew] [bit] NULL,
	[hasDelivery] [bit] NULL,
	[cityId] [int] NULL,
	[price] [float] NULL,
	[currencyId] [int] NULL,
	[about] [nvarchar](max) NULL,
	[contactId] [int] NULL,
 CONSTRAINT [PK_service_ads] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[service_categories]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[service_categories](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[new] [bit] NULL,
	[delivery] [bit] NULL,
	[lableName] [nvarchar](50) NULL,
 CONSTRAINT [PK_service_categories] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[service_types]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[service_types](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[categoryId] [int] NULL,
 CONSTRAINT [PK_service_types] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[service_logs]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[service_logs](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[createdDate] [datetime2](7) NULL,
	[modifiedDate] [datetime2](7) NULL,
	[fromDate] [datetime2](7) NULL,
	[tillDate] [datetime2](7) NULL,
	[userIpAdresses] [varchar](max) NULL,
 CONSTRAINT [PK_service_logs] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[service_contacts]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[service_contacts](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[contactNumber] [nvarchar](255) NULL,
	[isCall] [bit] NULL,
	[isWp] [bit] NULL,
	[email] [nvarchar](255) NULL,
	[name] [nvarchar](50) NULL,
	[timespan] [datetime2](7) NULL,
 CONSTRAINT [PK_service_contacts] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[View_Service_Ads]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[View_Service_Ads]
AS
SELECT        dbo.service_ads.viewed, dbo.service_ads.about, dbo.service_ads.categoryId, dbo.service_ads.title, dbo.service_ads.isNew, dbo.service_ads.hasDelivery, dbo.service_ads.price, dbo.service_types.name, 
                         dbo.service_logs.modifiedDate, dbo.service_contacts.contactNumber, dbo.service_contacts.isCall, dbo.service_contacts.isWp, dbo.service_contacts.email, dbo.service_contacts.name AS contactName, 
                         dbo.service_categories.name AS categoryName, dbo.adPackages.name AS packageName, dbo.currency.name AS currencyName, dbo.adStatuses.name AS statusName, dbo.cities.name AS cityName, dbo.service_ads.id, 
                         dbo.service_ads.contactId, dbo.service_ads.currencyId, dbo.service_ads.cityId, dbo.service_ads.typeId, dbo.service_ads.packageId, dbo.service_ads.statusId, dbo.service_ads.logId, dbo.service_categories.lableName
FROM            dbo.service_ads LEFT OUTER JOIN
                         dbo.service_logs ON dbo.service_ads.logId = dbo.service_logs.id LEFT OUTER JOIN
                         dbo.service_contacts ON dbo.service_ads.contactId = dbo.service_contacts.id LEFT OUTER JOIN
                         dbo.service_categories ON dbo.service_ads.categoryId = dbo.service_categories.id LEFT OUTER JOIN
                         dbo.service_types ON dbo.service_types.id = dbo.service_ads.typeId LEFT OUTER JOIN
                         dbo.adPackages ON dbo.service_ads.packageId = dbo.adPackages.id LEFT OUTER JOIN
                         dbo.adStatuses ON dbo.service_ads.statusId = dbo.adStatuses.id LEFT OUTER JOIN
                         dbo.cities ON dbo.service_ads.cityId = dbo.cities.id LEFT OUTER JOIN
                         dbo.currency ON dbo.service_ads.currencyId = dbo.currency.id
GO
/****** Object:  Table [dbo].[hobby_ads]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hobby_ads](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[privateId] [nvarchar](50) NULL,
	[viewed] [int] NULL,
	[logId] [int] NULL,
	[statusId] [int] NULL,
	[packageId] [int] NULL,
	[categoryId] [int] NULL,
	[typeId] [int] NULL,
	[title] [nvarchar](50) NULL,
	[cityId] [int] NULL,
	[price] [float] NULL,
	[currencyId] [int] NULL,
	[about] [nvarchar](max) NULL,
	[isNew] [bit] NULL,
	[hasDelivery] [bit] NULL,
	[contactId] [int] NULL,
 CONSTRAINT [PK_hobby_ads] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hobby_categories]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hobby_categories](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[new] [bit] NULL,
	[delivery] [bit] NULL,
 CONSTRAINT [PK_hobby_categories] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hobby_types]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hobby_types](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[categoryId] [int] NULL,
 CONSTRAINT [PK_hobby_types] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hobby_contacts]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hobby_contacts](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[contactNumber] [nvarchar](255) NULL,
	[isCall] [bit] NULL,
	[isWp] [bit] NULL,
	[email] [nvarchar](255) NULL,
	[name] [nvarchar](50) NULL,
	[timespan] [datetime2](7) NULL,
 CONSTRAINT [PK_hobby_contacts] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hobby_logs]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hobby_logs](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[createdDate] [datetime2](7) NULL,
	[modifiedDate] [datetime2](7) NULL,
	[fromDate] [datetime2](7) NULL,
	[tillDate] [datetime2](7) NULL,
	[userIpAdresses] [varchar](max) NULL,
 CONSTRAINT [PK_hobby_logs] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  View [dbo].[View_Hobby_Ads]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[View_Hobby_Ads]
AS
SELECT        dbo.hobby_ads.id, dbo.hobby_ads.viewed, dbo.hobby_ads.statusId, dbo.hobby_ads.packageId, dbo.hobby_ads.categoryId, dbo.hobby_ads.typeId, dbo.hobby_ads.title, dbo.hobby_ads.cityId, dbo.hobby_ads.price, 
                         dbo.hobby_ads.currencyId, dbo.hobby_ads.about, dbo.hobby_ads.isNew, dbo.hobby_ads.hasDelivery, dbo.adPackages.name AS packageName, dbo.currency.name AS currencyName, dbo.hobby_contacts.contactNumber, 
                         dbo.hobby_contacts.isCall, dbo.hobby_contacts.isWp, dbo.hobby_contacts.email, dbo.hobby_contacts.name AS contactName, dbo.hobby_categories.name AS categoryName, dbo.hobby_logs.modifiedDate, 
                         dbo.hobby_types.name AS typeName, dbo.cities.name AS cityName, dbo.adStatuses.name AS statusName, dbo.hobby_ads.logId, dbo.hobby_ads.contactId
FROM            dbo.hobby_ads LEFT OUTER JOIN
                         dbo.adPackages ON dbo.adPackages.id = dbo.hobby_ads.packageId LEFT OUTER JOIN
                         dbo.adStatuses ON dbo.adStatuses.id = dbo.hobby_ads.statusId LEFT OUTER JOIN
                         dbo.cities ON dbo.hobby_ads.cityId = dbo.cities.id LEFT OUTER JOIN
                         dbo.currency ON dbo.hobby_ads.currencyId = dbo.currency.id LEFT OUTER JOIN
                         dbo.hobby_categories ON dbo.hobby_ads.categoryId = dbo.hobby_categories.id LEFT OUTER JOIN
                         dbo.hobby_contacts ON dbo.hobby_ads.contactId = dbo.hobby_contacts.id LEFT OUTER JOIN
                         dbo.hobby_logs ON dbo.hobby_ads.logId = dbo.hobby_logs.id LEFT OUTER JOIN
                         dbo.hobby_types ON dbo.hobby_ads.typeId = dbo.hobby_types.id
GO
/****** Object:  Table [dbo].[bina_repairs]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[bina_repairs](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
 CONSTRAINT [PK_bina_repairs] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[bina_ads_personal_logs]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[bina_ads_personal_logs](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[createdDate] [datetime2](7) NULL,
	[modifiedDate] [datetime2](7) NULL,
	[fromDate] [datetime2](7) NULL,
	[tillDate] [datetime2](7) NULL,
	[userIpAdresses] [varchar](max) NULL,
 CONSTRAINT [PK_bina_ads_personal_infos] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[bina_personal_Contacts]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[bina_personal_Contacts](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[contactNumber] [nvarchar](255) NULL,
	[isCall] [bit] NULL,
	[isWp] [bit] NULL,
	[email] [nvarchar](255) NULL,
	[name] [nvarchar](50) NULL,
	[owner] [bit] NULL,
	[timespan] [datetime2](7) NULL,
 CONSTRAINT [PK__personal__3213E83F7384C1A0] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[metro_ways]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[metro_ways](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
 CONSTRAINT [PK_metro_ways] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[bina_categories]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[bina_categories](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](255) NULL,
	[roomAmount] [bit] NULL,
	[buildingFloor] [bit] NULL,
	[floor] [bit] NULL,
	[landAppointment] [bit] NULL,
	[icare] [bit] NULL,
	[belediyye] [bit] NULL,
	[hamam] [bit] NULL,
	[eyvan] [bit] NULL,
	[lift] [bit] NULL,
	[metbex] [bit] NULL,
	[temir] [bit] NULL,
	[hovuz] [bit] NULL,
	[qaz] [bit] NULL,
	[su] [bit] NULL,
	[isig] [bit] NULL,
	[kanalizasiya] [bit] NULL,
	[barter] [bit] NULL,
	[rentalProİd] [int] NULL,
	[subname] [nvarchar](50) NULL,
	[areaUnit] [nvarchar](50) NULL,
	[secondArea] [bit] NULL,
	[houseFloor] [bit] NULL,
	[madeinHouse] [bit] NULL,
	[centralHeatingSystem] [bit] NULL,
	[parkingArea] [bit] NULL,
	[cableTv] [bit] NULL,
	[pvcWindow] [bit] NULL,
	[combi] [bit] NULL,
	[kondisoner] [bit] NULL,
	[garaj] [bit] NULL,
 CONSTRAINT [PK__categori__3213E83F5CC4A793] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[metros]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[metros](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](255) NULL,
	[cityId] [int] NULL,
 CONSTRAINT [PK__metros__3213E83F2E2CE2E7] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[bina_target_points]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[bina_target_points](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](100) NULL,
	[cityId] [int] NULL,
 CONSTRAINT [PK_bina_target_points] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[bina_contract_types]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[bina_contract_types](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
 CONSTRAINT [PK_bina_contract_types] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[bina_ads_personal]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[bina_ads_personal](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[privateId] [nvarchar](100) NULL,
	[logId] [int] NULL,
	[categoryId] [int] NULL,
	[statusId] [int] NULL,
	[packageId] [int] NULL,
	[cityId] [int] NULL,
	[regionId] [int] NULL,
	[villageId] [int] NULL,
	[metroId] [int] NULL,
	[repairId] [int] NULL,
	[sellTypeId] [int] NULL,
	[rentPaymentTypeId] [int] NULL,
	[price] [float] NULL,
	[currencyId] [int] NULL,
	[areaSize] [float] NULL,
	[adress] [nvarchar](max) NULL,
	[longitude] [float] NULL,
	[latitude] [float] NULL,
	[about] [nvarchar](max) NULL,
	[contactId] [int] NULL,
	[landAppointmentId] [int] NULL,
	[roomAmount] [int] NULL,
	[buildingFloor] [int] NULL,
	[floor] [int] NULL,
	[viewed] [int] NULL,
	[hamam] [int] NULL,
	[eyvan] [bit] NULL,
	[lift] [bit] NULL,
	[mebel] [bit] NULL,
	[hovuz] [bit] NULL,
	[qaz] [bit] NULL,
	[su] [bit] NULL,
	[isig] [bit] NULL,
	[kanalizasiya] [bit] NULL,
	[metbexM] [bit] NULL,
	[qabY] [bit] NULL,
	[paltarY] [bit] NULL,
	[soyuducu] [bit] NULL,
	[tv] [bit] NULL,
	[kondicioner] [bit] NULL,
	[internet] [bit] NULL,
	[telefon] [bit] NULL,
	[usag] [bit] NULL,
	[heyvan] [bit] NULL,
	[otagordaire] [bit] NULL,
	[withstuffs] [bit] NULL,
	[metroDuration] [int] NULL,
	[metroWayId] [int] NULL,
	[secondAreaSize] [float] NULL,
	[customAdress] [nvarchar](75) NULL,
	[targetPointId] [int] NULL,
	[contractTypeId] [int] NULL,
	[binasellingTypeId] [int] NULL,
	[nearHospital] [bit] NULL,
	[nearSchool] [bit] NULL,
	[nearShop] [bit] NULL,
	[nearKindigarden] [bit] NULL,
	[nearMall] [bit] NULL,
	[nearBusstop] [bit] NULL,
	[houseFloor] [int] NULL,
	[madeinHouse] [bit] NULL,
	[centralHeatingSystem] [bit] NULL,
	[parkingArea] [bit] NULL,
	[cableTv] [bit] NULL,
	[pvcWindow] [bit] NULL,
	[combi] [bit] NULL,
	[garaj] [bit] NULL,
 CONSTRAINT [PK__ads__3213E83FD57E2407] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[bina_land_Appointments]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[bina_land_Appointments](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](255) NULL,
 CONSTRAINT [PK__landAppo__3213E83FE4B6D254] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[bina_selling_types]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[bina_selling_types](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
 CONSTRAINT [PK_bina_selling_types] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[View_Bina_Personal_General]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[View_Bina_Personal_General]
AS
SELECT        dbo.bina_ads_personal.id, dbo.bina_ads_personal.categoryId, dbo.bina_categories.name AS categoryName, dbo.adPackages.name AS packageName, dbo.bina_ads_personal.cityId, dbo.cities.name AS cityName, 
                         dbo.bina_ads_personal.regionId, dbo.regions.name AS regionName, dbo.bina_ads_personal.villageId, dbo.villages.name AS villageName, dbo.bina_ads_personal.metroId, dbo.metros.name AS metroName, 
                         dbo.bina_ads_personal.sellTypeId, dbo.sellTypes.name AS sellTypeName, dbo.bina_ads_personal.rentPaymentTypeId, dbo.bina_ads_personal.price, dbo.bina_ads_personal.currencyId, dbo.currency.name AS currencyName, 
                         dbo.bina_ads_personal.areaSize, dbo.bina_ads_personal.adress, dbo.adStatuses.name AS statusName, dbo.bina_ads_personal.landAppointmentId, dbo.bina_ads_personal.buildingFloor, dbo.bina_ads_personal.roomAmount, 
                         dbo.bina_ads_personal.floor, dbo.bina_ads_personal.hamam, dbo.bina_ads_personal.lift, dbo.bina_ads_personal.eyvan, dbo.bina_ads_personal.mebel, dbo.bina_ads_personal.hovuz, dbo.bina_ads_personal.qaz, 
                         dbo.bina_ads_personal.su, dbo.bina_ads_personal.isig, dbo.bina_ads_personal.kanalizasiya, dbo.bina_ads_personal.metbexM, dbo.bina_ads_personal.qabY, dbo.bina_ads_personal.paltarY, 
                         dbo.bina_ads_personal.soyuducu, dbo.bina_ads_personal.tv, dbo.bina_ads_personal.kondicioner, dbo.bina_ads_personal.internet, dbo.bina_ads_personal.telefon, dbo.bina_ads_personal.usag, 
                         dbo.bina_ads_personal.heyvan, dbo.bina_ads_personal.metroDuration, dbo.bina_ads_personal.otagordaire, dbo.bina_ads_personal.metroWayId, dbo.metro_ways.name AS metroWayName, 
                         dbo.bina_ads_personal.secondAreaSize, dbo.bina_ads_personal.customAdress, dbo.bina_ads_personal.contactId, dbo.bina_ads_personal.packageId, dbo.bina_ads_personal.statusId, 
                         dbo.bina_personal_Contacts.contactNumber, dbo.bina_personal_Contacts.isCall, dbo.bina_personal_Contacts.isWp, dbo.bina_personal_Contacts.email, dbo.bina_personal_Contacts.name AS personName, 
                         dbo.bina_personal_Contacts.owner, dbo.bina_ads_personal_logs.modifiedDate, dbo.bina_ads_personal.longitude, dbo.bina_ads_personal.latitude, dbo.bina_ads_personal.about, dbo.bina_ads_personal.viewed, 
                         dbo.bina_ads_personal.logId, dbo.bina_land_Appointments.name AS landAppointmentName, dbo.bina_ads_personal.targetPointId, dbo.bina_target_points.name AS targetName, 
                         dbo.bina_selling_types.name AS propertySellingName, dbo.bina_contract_types.name AS contractName, dbo.bina_ads_personal.contractTypeId, dbo.bina_ads_personal.binasellingTypeId, dbo.bina_ads_personal.nearHospital, 
                         dbo.bina_ads_personal.nearSchool, dbo.bina_ads_personal.nearKindigarden, dbo.bina_ads_personal.nearShop, dbo.bina_ads_personal.nearMall, dbo.bina_ads_personal.nearBusstop, dbo.bina_ads_personal.repairId, 
                         dbo.bina_repairs.name AS repairName, dbo.bina_ads_personal.houseFloor, dbo.bina_categories.areaUnit, dbo.bina_ads_personal.garaj, dbo.bina_ads_personal.combi, dbo.bina_ads_personal.pvcWindow, 
                         dbo.bina_ads_personal.cableTv, dbo.bina_ads_personal.parkingArea, dbo.bina_ads_personal.centralHeatingSystem, dbo.bina_ads_personal.madeinHouse, dbo.bina_ads_personal.withstuffs
FROM            dbo.bina_ads_personal LEFT OUTER JOIN
                         dbo.bina_repairs ON dbo.bina_ads_personal.repairId = dbo.bina_repairs.id LEFT OUTER JOIN
                         dbo.bina_land_Appointments ON dbo.bina_ads_personal.landAppointmentId = dbo.bina_land_Appointments.id LEFT OUTER JOIN
                         dbo.bina_target_points ON dbo.bina_ads_personal.targetPointId = dbo.bina_target_points.id LEFT OUTER JOIN
                         dbo.bina_contract_types ON dbo.bina_ads_personal.contractTypeId = dbo.bina_contract_types.id LEFT OUTER JOIN
                         dbo.bina_selling_types ON dbo.bina_ads_personal.binasellingTypeId = dbo.bina_selling_types.id LEFT OUTER JOIN
                         dbo.cities ON dbo.bina_ads_personal.cityId = dbo.cities.id LEFT OUTER JOIN
                         dbo.adPackages ON dbo.bina_ads_personal.packageId = dbo.adPackages.id LEFT OUTER JOIN
                         dbo.adStatuses ON dbo.bina_ads_personal.statusId = dbo.adStatuses.id LEFT OUTER JOIN
                         dbo.currency ON dbo.bina_ads_personal.currencyId = dbo.currency.id LEFT OUTER JOIN
                         dbo.metro_ways ON dbo.bina_ads_personal.metroWayId = dbo.metro_ways.id LEFT OUTER JOIN
                         dbo.metros ON dbo.bina_ads_personal.metroId = dbo.metros.id LEFT OUTER JOIN
                         dbo.regions ON dbo.bina_ads_personal.regionId = dbo.regions.id LEFT OUTER JOIN
                         dbo.sellTypes ON dbo.bina_ads_personal.sellTypeId = dbo.sellTypes.id LEFT OUTER JOIN
                         dbo.villages ON dbo.bina_ads_personal.villageId = dbo.villages.id LEFT OUTER JOIN
                         dbo.bina_categories ON dbo.bina_ads_personal.categoryId = dbo.bina_categories.id LEFT OUTER JOIN
                         dbo.bina_ads_personal_logs ON dbo.bina_ads_personal.logId = dbo.bina_ads_personal_logs.id LEFT OUTER JOIN
                         dbo.bina_personal_Contacts ON dbo.bina_ads_personal.contactId = dbo.bina_personal_Contacts.id
GO
/****** Object:  Table [dbo].[animal_photos]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[animal_photos](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[imagePath] [nvarchar](500) NULL,
	[adId] [bigint] NULL,
	[primaryImage] [int] NULL,
	[thumbnail] [nvarchar](500) NULL,
	[blur] [varchar](max) NULL,
 CONSTRAINT [PK_animal_photos] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[auto_photos]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[auto_photos](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[imagePath] [nvarchar](500) NULL,
	[adId] [bigint] NULL,
	[primaryImage] [int] NULL,
	[thumbnail] [nvarchar](500) NULL,
	[blur] [varchar](max) NULL,
 CONSTRAINT [PK_auto_photos] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[bina_personal_photos]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[bina_personal_photos](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[imagePath] [nvarchar](500) NULL,
	[adId] [bigint] NULL,
	[primaryImage] [int] NULL,
	[thumbnail] [nvarchar](500) NULL,
	[blur] [varchar](max) NULL,
 CONSTRAINT [PK__personal__3213E83F6E9C7B48] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[bina_rentalProps]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[bina_rentalProps](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[metbexM] [bit] NULL,
	[qabY] [bit] NULL,
	[paltarY] [bit] NULL,
	[soyuducu] [bit] NULL,
	[tv] [bit] NULL,
	[kondicioner] [bit] NULL,
	[internet] [bit] NULL,
	[telefon] [bit] NULL,
	[usag] [bit] NULL,
	[heyvan] [bit] NULL,
	[otagordaire] [bit] NULL,
	[centralHeatingSystem] [bit] NULL,
	[parkingArea] [bit] NULL,
	[cableTv] [bit] NULL,
	[pvcWindow] [bit] NULL,
	[combi] [bit] NULL,
	[garaj] [bit] NULL,
 CONSTRAINT [PK_bina_rentalProps] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[bina_rentPaymentTypes]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[bina_rentPaymentTypes](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](255) NULL,
	[rentId] [int] NULL,
 CONSTRAINT [PK__rentPaym__3213E83F1F2880D2] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[child_photos]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[child_photos](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[imagePath] [nvarchar](500) NULL,
	[adId] [bigint] NULL,
	[primaryImage] [int] NULL,
	[thumbnail] [nvarchar](500) NULL,
	[blur] [varchar](max) NULL,
 CONSTRAINT [PK_child_photos] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[electro_photos]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[electro_photos](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[imagePath] [nvarchar](500) NULL,
	[adId] [bigint] NULL,
	[primaryImage] [int] NULL,
	[thumbnail] [nvarchar](500) NULL,
	[blur] [varchar](max) NULL,
 CONSTRAINT [PK_electro_photos] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hobby_photos]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hobby_photos](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[imagePath] [nvarchar](500) NULL,
	[adId] [bigint] NULL,
	[primaryImage] [int] NULL,
	[thumbnail] [nvarchar](500) NULL,
	[blur] [varchar](max) NULL,
 CONSTRAINT [PK_hobby_photos] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[home_photos]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[home_photos](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[imagePath] [nvarchar](500) NULL,
	[adId] [bigint] NULL,
	[primaryImage] [int] NULL,
	[thumbnail] [nvarchar](500) NULL,
	[blur] [varchar](max) NULL,
 CONSTRAINT [PK_home_photos] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[job_employee_photos]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[job_employee_photos](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[imagePath] [nvarchar](500) NULL,
	[adId] [bigint] NULL,
	[primaryImage] [int] NULL,
	[thumbnail] [nvarchar](500) NULL,
	[blur] [varchar](max) NULL,
 CONSTRAINT [PK_job_employee_photos_1] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[last_shared_times]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[last_shared_times](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
 CONSTRAINT [PK_lastSharedTimes] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[private_photos]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[private_photos](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[imagePath] [nvarchar](500) NULL,
	[adId] [bigint] NULL,
	[primaryImage] [int] NULL,
	[thumbnail] [nvarchar](500) NULL,
	[blur] [varchar](max) NULL,
 CONSTRAINT [PK_private_photos] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[service_photos]    Script Date: 8/28/2021 5:54:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[service_photos](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[imagePath] [nvarchar](500) NULL,
	[adId] [bigint] NULL,
	[primaryImage] [int] NULL,
	[thumbnail] [nvarchar](500) NULL,
	[blur] [varchar](max) NULL,
 CONSTRAINT [PK_service_photos] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Index [auto_mark_Key]    Script Date: 8/28/2021 5:54:20 AM ******/
CREATE NONCLUSTERED INDEX [auto_mark_Key] ON [dbo].[auto_ads]
(
	[markId] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [auto_model_Key]    Script Date: 8/28/2021 5:54:20 AM ******/
CREATE NONCLUSTERED INDEX [auto_model_Key] ON [dbo].[auto_ads]
(
	[modelId] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [bina_area]    Script Date: 8/28/2021 5:54:20 AM ******/
CREATE NONCLUSTERED INDEX [bina_area] ON [dbo].[bina_ads_personal]
(
	[areaSize] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [bina_sellType]    Script Date: 8/28/2021 5:54:20 AM ******/
CREATE NONCLUSTERED INDEX [bina_sellType] ON [dbo].[bina_ads_personal]
(
	[sellTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [category]    Script Date: 8/28/2021 5:54:20 AM ******/
CREATE NONCLUSTERED INDEX [category] ON [dbo].[bina_ads_personal]
(
	[categoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [NonClusteredIndex-20210129-031543]    Script Date: 8/28/2021 5:54:20 AM ******/
CREATE NONCLUSTERED INDEX [NonClusteredIndex-20210129-031543] ON [dbo].[bina_personal_photos]
(
	[adId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [NonClusteredIndex-20210408-052936]    Script Date: 8/28/2021 5:54:20 AM ******/
CREATE NONCLUSTERED INDEX [NonClusteredIndex-20210408-052936] ON [dbo].[electro_operators]
(
	[categoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [NonClusteredIndex-20210405-062759]    Script Date: 8/28/2021 5:54:20 AM ******/
CREATE NONCLUSTERED INDEX [NonClusteredIndex-20210405-062759] ON [dbo].[electro_phone_colors]
(
	[modelId] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [NonClusteredIndex-20210408-024843]    Script Date: 8/28/2021 5:54:20 AM ******/
CREATE NONCLUSTERED INDEX [NonClusteredIndex-20210408-024843] ON [dbo].[electro_phone_marks]
(
	[categoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [NonClusteredIndex-20210407-032632]    Script Date: 8/28/2021 5:54:20 AM ******/
CREATE NONCLUSTERED INDEX [NonClusteredIndex-20210407-032632] ON [dbo].[electro_phone_storages]
(
	[modelId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[electro_computer_marks] ADD  CONSTRAINT [DF_electro_computer_marks_categoryId]  DEFAULT ((7)) FOR [categoryId]
GO
ALTER TABLE [dbo].[electro_operators] ADD  CONSTRAINT [DF_electro_operators_categoryId]  DEFAULT ((10)) FOR [categoryId]
GO
ALTER TABLE [dbo].[electro_phone_marks] ADD  CONSTRAINT [DF_electro_phone_marks_categoryId]  DEFAULT ((9)) FOR [categoryId]
GO
ALTER TABLE [dbo].[service_categories] ADD  CONSTRAINT [DF_service_categories_lableName]  DEFAULT (N'Xidmətin Növü') FOR [lableName]
GO
ALTER TABLE [dbo].[animal_ads]  WITH CHECK ADD  CONSTRAINT [animal_ads_category] FOREIGN KEY([categoryId])
REFERENCES [dbo].[animal_categories] ([id])
GO
ALTER TABLE [dbo].[animal_ads] CHECK CONSTRAINT [animal_ads_category]
GO
ALTER TABLE [dbo].[animal_ads]  WITH CHECK ADD  CONSTRAINT [animal_ads_city] FOREIGN KEY([cityId])
REFERENCES [dbo].[cities] ([id])
GO
ALTER TABLE [dbo].[animal_ads] CHECK CONSTRAINT [animal_ads_city]
GO
ALTER TABLE [dbo].[animal_ads]  WITH CHECK ADD  CONSTRAINT [animal_ads_contact] FOREIGN KEY([contactId])
REFERENCES [dbo].[animal_contacts] ([id])
GO
ALTER TABLE [dbo].[animal_ads] CHECK CONSTRAINT [animal_ads_contact]
GO
ALTER TABLE [dbo].[animal_ads]  WITH CHECK ADD  CONSTRAINT [animal_ads_currency] FOREIGN KEY([currencyId])
REFERENCES [dbo].[currency] ([id])
GO
ALTER TABLE [dbo].[animal_ads] CHECK CONSTRAINT [animal_ads_currency]
GO
ALTER TABLE [dbo].[animal_ads]  WITH CHECK ADD  CONSTRAINT [animal_ads_genera] FOREIGN KEY([generaId])
REFERENCES [dbo].[animal_generas] ([id])
GO
ALTER TABLE [dbo].[animal_ads] CHECK CONSTRAINT [animal_ads_genera]
GO
ALTER TABLE [dbo].[animal_ads]  WITH CHECK ADD  CONSTRAINT [animal_ads_logs] FOREIGN KEY([logId])
REFERENCES [dbo].[animal_logs] ([id])
GO
ALTER TABLE [dbo].[animal_ads] CHECK CONSTRAINT [animal_ads_logs]
GO
ALTER TABLE [dbo].[animal_ads]  WITH CHECK ADD  CONSTRAINT [animal_ads_package] FOREIGN KEY([packageId])
REFERENCES [dbo].[adPackages] ([id])
GO
ALTER TABLE [dbo].[animal_ads] CHECK CONSTRAINT [animal_ads_package]
GO
ALTER TABLE [dbo].[animal_ads]  WITH CHECK ADD  CONSTRAINT [animal_ads_status] FOREIGN KEY([statusId])
REFERENCES [dbo].[adStatuses] ([id])
GO
ALTER TABLE [dbo].[animal_ads] CHECK CONSTRAINT [animal_ads_status]
GO
ALTER TABLE [dbo].[animal_ads]  WITH CHECK ADD  CONSTRAINT [animal_ads_types] FOREIGN KEY([typeId])
REFERENCES [dbo].[animal_types] ([id])
GO
ALTER TABLE [dbo].[animal_ads] CHECK CONSTRAINT [animal_ads_types]
GO
ALTER TABLE [dbo].[animal_generas]  WITH CHECK ADD  CONSTRAINT [animal_categories_generas] FOREIGN KEY([categoryId])
REFERENCES [dbo].[animal_categories] ([id])
GO
ALTER TABLE [dbo].[animal_generas] CHECK CONSTRAINT [animal_categories_generas]
GO
ALTER TABLE [dbo].[animal_photos]  WITH CHECK ADD  CONSTRAINT [animal_ad_photos] FOREIGN KEY([adId])
REFERENCES [dbo].[animal_ads] ([id])
GO
ALTER TABLE [dbo].[animal_photos] CHECK CONSTRAINT [animal_ad_photos]
GO
ALTER TABLE [dbo].[animal_types]  WITH CHECK ADD  CONSTRAINT [animal_categories_types] FOREIGN KEY([categoryId])
REFERENCES [dbo].[animal_categories] ([id])
GO
ALTER TABLE [dbo].[animal_types] CHECK CONSTRAINT [animal_categories_types]
GO
ALTER TABLE [dbo].[auto_ads]  WITH CHECK ADD  CONSTRAINT [auto_ad_ban] FOREIGN KEY([banTypeId])
REFERENCES [dbo].[auto_ban_types] ([id])
GO
ALTER TABLE [dbo].[auto_ads] CHECK CONSTRAINT [auto_ad_ban]
GO
ALTER TABLE [dbo].[auto_ads]  WITH CHECK ADD  CONSTRAINT [auto_ad_city] FOREIGN KEY([cityId])
REFERENCES [dbo].[cities] ([id])
GO
ALTER TABLE [dbo].[auto_ads] CHECK CONSTRAINT [auto_ad_city]
GO
ALTER TABLE [dbo].[auto_ads]  WITH CHECK ADD  CONSTRAINT [auto_ad_color] FOREIGN KEY([colorId])
REFERENCES [dbo].[auto_colors] ([id])
GO
ALTER TABLE [dbo].[auto_ads] CHECK CONSTRAINT [auto_ad_color]
GO
ALTER TABLE [dbo].[auto_ads]  WITH CHECK ADD  CONSTRAINT [auto_ad_contact] FOREIGN KEY([contactId])
REFERENCES [dbo].[auto_contacts] ([id])
GO
ALTER TABLE [dbo].[auto_ads] CHECK CONSTRAINT [auto_ad_contact]
GO
ALTER TABLE [dbo].[auto_ads]  WITH CHECK ADD  CONSTRAINT [auto_ad_currency] FOREIGN KEY([currencyId])
REFERENCES [dbo].[currency] ([id])
GO
ALTER TABLE [dbo].[auto_ads] CHECK CONSTRAINT [auto_ad_currency]
GO
ALTER TABLE [dbo].[auto_ads]  WITH CHECK ADD  CONSTRAINT [auto_ad_fuel] FOREIGN KEY([fuelId])
REFERENCES [dbo].[auto_fuels] ([id])
GO
ALTER TABLE [dbo].[auto_ads] CHECK CONSTRAINT [auto_ad_fuel]
GO
ALTER TABLE [dbo].[auto_ads]  WITH CHECK ADD  CONSTRAINT [auto_ad_log] FOREIGN KEY([logId])
REFERENCES [dbo].[auto_ad_logs] ([id])
GO
ALTER TABLE [dbo].[auto_ads] CHECK CONSTRAINT [auto_ad_log]
GO
ALTER TABLE [dbo].[auto_ads]  WITH CHECK ADD  CONSTRAINT [auto_ad_mark] FOREIGN KEY([markId])
REFERENCES [dbo].[auto_marks] ([id])
GO
ALTER TABLE [dbo].[auto_ads] CHECK CONSTRAINT [auto_ad_mark]
GO
ALTER TABLE [dbo].[auto_ads]  WITH CHECK ADD  CONSTRAINT [auto_ad_model] FOREIGN KEY([modelId])
REFERENCES [dbo].[auto_models] ([id])
GO
ALTER TABLE [dbo].[auto_ads] CHECK CONSTRAINT [auto_ad_model]
GO
ALTER TABLE [dbo].[auto_ads]  WITH CHECK ADD  CONSTRAINT [auto_ad_package] FOREIGN KEY([packageId])
REFERENCES [dbo].[adPackages] ([id])
GO
ALTER TABLE [dbo].[auto_ads] CHECK CONSTRAINT [auto_ad_package]
GO
ALTER TABLE [dbo].[auto_ads]  WITH CHECK ADD  CONSTRAINT [auto_ad_rentpayment] FOREIGN KEY([rentPaymentTypeId])
REFERENCES [dbo].[auto_rentPaymentTypes] ([id])
GO
ALTER TABLE [dbo].[auto_ads] CHECK CONSTRAINT [auto_ad_rentpayment]
GO
ALTER TABLE [dbo].[auto_ads]  WITH CHECK ADD  CONSTRAINT [auto_ad_selltype] FOREIGN KEY([sellTypeId])
REFERENCES [dbo].[sellTypes] ([id])
GO
ALTER TABLE [dbo].[auto_ads] CHECK CONSTRAINT [auto_ad_selltype]
GO
ALTER TABLE [dbo].[auto_ads]  WITH CHECK ADD  CONSTRAINT [auto_ad_status] FOREIGN KEY([statusId])
REFERENCES [dbo].[adStatuses] ([id])
GO
ALTER TABLE [dbo].[auto_ads] CHECK CONSTRAINT [auto_ad_status]
GO
ALTER TABLE [dbo].[auto_ads]  WITH CHECK ADD  CONSTRAINT [auto_ad_transmission_box] FOREIGN KEY([transmissionBoxId])
REFERENCES [dbo].[auto_transmission_boxs] ([id])
GO
ALTER TABLE [dbo].[auto_ads] CHECK CONSTRAINT [auto_ad_transmission_box]
GO
ALTER TABLE [dbo].[auto_ads]  WITH CHECK ADD  CONSTRAINT [auto_ad_transmitter] FOREIGN KEY([transmitterId])
REFERENCES [dbo].[auto_transmitters] ([id])
GO
ALTER TABLE [dbo].[auto_ads] CHECK CONSTRAINT [auto_ad_transmitter]
GO
ALTER TABLE [dbo].[auto_models]  WITH CHECK ADD  CONSTRAINT [auto_mark_model] FOREIGN KEY([markId])
REFERENCES [dbo].[auto_marks] ([id])
GO
ALTER TABLE [dbo].[auto_models] CHECK CONSTRAINT [auto_mark_model]
GO
ALTER TABLE [dbo].[auto_photos]  WITH CHECK ADD  CONSTRAINT [auto_ad_photo] FOREIGN KEY([adId])
REFERENCES [dbo].[auto_ads] ([id])
GO
ALTER TABLE [dbo].[auto_photos] CHECK CONSTRAINT [auto_ad_photo]
GO
ALTER TABLE [dbo].[auto_rentPaymentTypes]  WITH CHECK ADD  CONSTRAINT [payment_selltypes] FOREIGN KEY([rentId])
REFERENCES [dbo].[sellTypes] ([id])
GO
ALTER TABLE [dbo].[auto_rentPaymentTypes] CHECK CONSTRAINT [payment_selltypes]
GO
ALTER TABLE [dbo].[bina_ads_personal]  WITH CHECK ADD  CONSTRAINT [ad_metroWay] FOREIGN KEY([metroWayId])
REFERENCES [dbo].[metro_ways] ([id])
GO
ALTER TABLE [dbo].[bina_ads_personal] CHECK CONSTRAINT [ad_metroWay]
GO
ALTER TABLE [dbo].[bina_ads_personal]  WITH CHECK ADD  CONSTRAINT [Adpack] FOREIGN KEY([packageId])
REFERENCES [dbo].[adPackages] ([id])
ON UPDATE SET NULL
ON DELETE SET NULL
GO
ALTER TABLE [dbo].[bina_ads_personal] CHECK CONSTRAINT [Adpack]
GO
ALTER TABLE [dbo].[bina_ads_personal]  WITH CHECK ADD  CONSTRAINT [AdStatus] FOREIGN KEY([statusId])
REFERENCES [dbo].[adStatuses] ([id])
ON UPDATE SET NULL
ON DELETE SET NULL
GO
ALTER TABLE [dbo].[bina_ads_personal] CHECK CONSTRAINT [AdStatus]
GO
ALTER TABLE [dbo].[bina_ads_personal]  WITH CHECK ADD  CONSTRAINT [bina_ads_personal_contracts] FOREIGN KEY([contractTypeId])
REFERENCES [dbo].[bina_contract_types] ([id])
GO
ALTER TABLE [dbo].[bina_ads_personal] CHECK CONSTRAINT [bina_ads_personal_contracts]
GO
ALTER TABLE [dbo].[bina_ads_personal]  WITH CHECK ADD  CONSTRAINT [bina_ads_personal_repair] FOREIGN KEY([repairId])
REFERENCES [dbo].[bina_repairs] ([id])
GO
ALTER TABLE [dbo].[bina_ads_personal] CHECK CONSTRAINT [bina_ads_personal_repair]
GO
ALTER TABLE [dbo].[bina_ads_personal]  WITH CHECK ADD  CONSTRAINT [bina_ads_personal_targets] FOREIGN KEY([targetPointId])
REFERENCES [dbo].[bina_target_points] ([id])
GO
ALTER TABLE [dbo].[bina_ads_personal] CHECK CONSTRAINT [bina_ads_personal_targets]
GO
ALTER TABLE [dbo].[bina_ads_personal]  WITH CHECK ADD  CONSTRAINT [bina_selling_type_id] FOREIGN KEY([binasellingTypeId])
REFERENCES [dbo].[bina_selling_types] ([id])
GO
ALTER TABLE [dbo].[bina_ads_personal] CHECK CONSTRAINT [bina_selling_type_id]
GO
ALTER TABLE [dbo].[bina_ads_personal]  WITH CHECK ADD  CONSTRAINT [FK__ads__categoryId__3B75D760] FOREIGN KEY([categoryId])
REFERENCES [dbo].[bina_categories] ([id])
ON UPDATE SET NULL
ON DELETE SET NULL
GO
ALTER TABLE [dbo].[bina_ads_personal] CHECK CONSTRAINT [FK__ads__categoryId__3B75D760]
GO
ALTER TABLE [dbo].[bina_ads_personal]  WITH CHECK ADD  CONSTRAINT [FK__ads__cityId__3C69FB99] FOREIGN KEY([cityId])
REFERENCES [dbo].[cities] ([id])
ON UPDATE SET NULL
ON DELETE SET NULL
GO
ALTER TABLE [dbo].[bina_ads_personal] CHECK CONSTRAINT [FK__ads__cityId__3C69FB99]
GO
ALTER TABLE [dbo].[bina_ads_personal]  WITH CHECK ADD  CONSTRAINT [FK__ads__currencyId__412EB0B6] FOREIGN KEY([currencyId])
REFERENCES [dbo].[currency] ([id])
ON UPDATE SET NULL
ON DELETE SET NULL
GO
ALTER TABLE [dbo].[bina_ads_personal] CHECK CONSTRAINT [FK__ads__currencyId__412EB0B6]
GO
ALTER TABLE [dbo].[bina_ads_personal]  WITH CHECK ADD  CONSTRAINT [FK__ads__landAppoint__44FF419A] FOREIGN KEY([landAppointmentId])
REFERENCES [dbo].[bina_land_Appointments] ([id])
ON UPDATE SET NULL
ON DELETE SET NULL
GO
ALTER TABLE [dbo].[bina_ads_personal] CHECK CONSTRAINT [FK__ads__landAppoint__44FF419A]
GO
ALTER TABLE [dbo].[bina_ads_personal]  WITH CHECK ADD  CONSTRAINT [FK__ads__metroId__3F466844] FOREIGN KEY([metroId])
REFERENCES [dbo].[metros] ([id])
ON UPDATE CASCADE
ON DELETE SET NULL
GO
ALTER TABLE [dbo].[bina_ads_personal] CHECK CONSTRAINT [FK__ads__metroId__3F466844]
GO
ALTER TABLE [dbo].[bina_ads_personal]  WITH CHECK ADD  CONSTRAINT [FK__ads__regionId__3D5E1FD2] FOREIGN KEY([regionId])
REFERENCES [dbo].[regions] ([id])
ON UPDATE SET NULL
ON DELETE SET NULL
GO
ALTER TABLE [dbo].[bina_ads_personal] CHECK CONSTRAINT [FK__ads__regionId__3D5E1FD2]
GO
ALTER TABLE [dbo].[bina_ads_personal]  WITH CHECK ADD  CONSTRAINT [FK__ads__rentPayment__45F365D3] FOREIGN KEY([rentPaymentTypeId])
REFERENCES [dbo].[bina_rentPaymentTypes] ([id])
ON UPDATE SET NULL
ON DELETE SET NULL
GO
ALTER TABLE [dbo].[bina_ads_personal] CHECK CONSTRAINT [FK__ads__rentPayment__45F365D3]
GO
ALTER TABLE [dbo].[bina_ads_personal]  WITH CHECK ADD  CONSTRAINT [FK__ads__sellTypeId__440B1D61] FOREIGN KEY([sellTypeId])
REFERENCES [dbo].[sellTypes] ([id])
ON UPDATE SET NULL
ON DELETE SET NULL
GO
ALTER TABLE [dbo].[bina_ads_personal] CHECK CONSTRAINT [FK__ads__sellTypeId__440B1D61]
GO
ALTER TABLE [dbo].[bina_ads_personal]  WITH CHECK ADD  CONSTRAINT [FK__ads__villageId__3E52440B] FOREIGN KEY([villageId])
REFERENCES [dbo].[villages] ([id])
ON UPDATE SET NULL
ON DELETE SET NULL
GO
ALTER TABLE [dbo].[bina_ads_personal] CHECK CONSTRAINT [FK__ads__villageId__3E52440B]
GO
ALTER TABLE [dbo].[bina_ads_personal]  WITH CHECK ADD  CONSTRAINT [FK_bina_ads_personal_Info] FOREIGN KEY([logId])
REFERENCES [dbo].[bina_ads_personal_logs] ([id])
GO
ALTER TABLE [dbo].[bina_ads_personal] CHECK CONSTRAINT [FK_bina_ads_personal_Info]
GO
ALTER TABLE [dbo].[bina_ads_personal]  WITH CHECK ADD  CONSTRAINT [personContactID] FOREIGN KEY([contactId])
REFERENCES [dbo].[bina_personal_Contacts] ([id])
ON UPDATE SET NULL
ON DELETE SET NULL
GO
ALTER TABLE [dbo].[bina_ads_personal] CHECK CONSTRAINT [personContactID]
GO
ALTER TABLE [dbo].[bina_categories]  WITH CHECK ADD  CONSTRAINT [category_rentalPro] FOREIGN KEY([rentalProİd])
REFERENCES [dbo].[bina_rentalProps] ([id])
GO
ALTER TABLE [dbo].[bina_categories] CHECK CONSTRAINT [category_rentalPro]
GO
ALTER TABLE [dbo].[bina_personal_photos]  WITH CHECK ADD  CONSTRAINT [FK__personalPh__adId__4316F928] FOREIGN KEY([adId])
REFERENCES [dbo].[bina_ads_personal] ([id])
ON UPDATE SET NULL
ON DELETE SET NULL
GO
ALTER TABLE [dbo].[bina_personal_photos] CHECK CONSTRAINT [FK__personalPh__adId__4316F928]
GO
ALTER TABLE [dbo].[bina_rentPaymentTypes]  WITH CHECK ADD  CONSTRAINT [rent_sellType] FOREIGN KEY([rentId])
REFERENCES [dbo].[sellTypes] ([id])
GO
ALTER TABLE [dbo].[bina_rentPaymentTypes] CHECK CONSTRAINT [rent_sellType]
GO
ALTER TABLE [dbo].[bina_target_points]  WITH CHECK ADD  CONSTRAINT [bina_target_points_city] FOREIGN KEY([cityId])
REFERENCES [dbo].[cities] ([id])
GO
ALTER TABLE [dbo].[bina_target_points] CHECK CONSTRAINT [bina_target_points_city]
GO
ALTER TABLE [dbo].[child_ads]  WITH CHECK ADD  CONSTRAINT [child_ads_category] FOREIGN KEY([categoryId])
REFERENCES [dbo].[child_categories] ([id])
GO
ALTER TABLE [dbo].[child_ads] CHECK CONSTRAINT [child_ads_category]
GO
ALTER TABLE [dbo].[child_ads]  WITH CHECK ADD  CONSTRAINT [child_ads_city] FOREIGN KEY([cityId])
REFERENCES [dbo].[cities] ([id])
GO
ALTER TABLE [dbo].[child_ads] CHECK CONSTRAINT [child_ads_city]
GO
ALTER TABLE [dbo].[child_ads]  WITH CHECK ADD  CONSTRAINT [child_ads_clothesGender] FOREIGN KEY([clothesGenderId])
REFERENCES [dbo].[child_clothes_genders] ([id])
GO
ALTER TABLE [dbo].[child_ads] CHECK CONSTRAINT [child_ads_clothesGender]
GO
ALTER TABLE [dbo].[child_ads]  WITH CHECK ADD  CONSTRAINT [child_ads_clothessize] FOREIGN KEY([clothesSizeId])
REFERENCES [dbo].[clothes_sizes] ([id])
GO
ALTER TABLE [dbo].[child_ads] CHECK CONSTRAINT [child_ads_clothessize]
GO
ALTER TABLE [dbo].[child_ads]  WITH CHECK ADD  CONSTRAINT [child_ads_clothesType] FOREIGN KEY([clothesTypeId])
REFERENCES [dbo].[child_clothes_types] ([id])
GO
ALTER TABLE [dbo].[child_ads] CHECK CONSTRAINT [child_ads_clothesType]
GO
ALTER TABLE [dbo].[child_ads]  WITH CHECK ADD  CONSTRAINT [child_ads_color] FOREIGN KEY([colorId])
REFERENCES [dbo].[clothes_colors] ([id])
GO
ALTER TABLE [dbo].[child_ads] CHECK CONSTRAINT [child_ads_color]
GO
ALTER TABLE [dbo].[child_ads]  WITH CHECK ADD  CONSTRAINT [child_ads_contact] FOREIGN KEY([contactId])
REFERENCES [dbo].[child_contacts] ([id])
GO
ALTER TABLE [dbo].[child_ads] CHECK CONSTRAINT [child_ads_contact]
GO
ALTER TABLE [dbo].[child_ads]  WITH CHECK ADD  CONSTRAINT [child_ads_currency] FOREIGN KEY([currencyId])
REFERENCES [dbo].[currency] ([id])
GO
ALTER TABLE [dbo].[child_ads] CHECK CONSTRAINT [child_ads_currency]
GO
ALTER TABLE [dbo].[child_ads]  WITH CHECK ADD  CONSTRAINT [child_ads_log] FOREIGN KEY([logId])
REFERENCES [dbo].[child_logs] ([id])
GO
ALTER TABLE [dbo].[child_ads] CHECK CONSTRAINT [child_ads_log]
GO
ALTER TABLE [dbo].[child_ads]  WITH CHECK ADD  CONSTRAINT [child_ads_package] FOREIGN KEY([packageId])
REFERENCES [dbo].[adPackages] ([id])
GO
ALTER TABLE [dbo].[child_ads] CHECK CONSTRAINT [child_ads_package]
GO
ALTER TABLE [dbo].[child_ads]  WITH CHECK ADD  CONSTRAINT [child_ads_shoesize] FOREIGN KEY([shoesSizeId])
REFERENCES [dbo].[shoes_sizes] ([id])
GO
ALTER TABLE [dbo].[child_ads] CHECK CONSTRAINT [child_ads_shoesize]
GO
ALTER TABLE [dbo].[child_ads]  WITH CHECK ADD  CONSTRAINT [child_ads_status] FOREIGN KEY([statusId])
REFERENCES [dbo].[adStatuses] ([id])
GO
ALTER TABLE [dbo].[child_ads] CHECK CONSTRAINT [child_ads_status]
GO
ALTER TABLE [dbo].[child_ads]  WITH CHECK ADD  CONSTRAINT [child_ads_type] FOREIGN KEY([typeId])
REFERENCES [dbo].[child_types] ([id])
GO
ALTER TABLE [dbo].[child_ads] CHECK CONSTRAINT [child_ads_type]
GO
ALTER TABLE [dbo].[child_clothes_genders]  WITH CHECK ADD  CONSTRAINT [child_clothes_genders_categories] FOREIGN KEY([categoryId])
REFERENCES [dbo].[child_categories] ([id])
GO
ALTER TABLE [dbo].[child_clothes_genders] CHECK CONSTRAINT [child_clothes_genders_categories]
GO
ALTER TABLE [dbo].[child_clothes_types]  WITH CHECK ADD  CONSTRAINT [child_clothes_types_genders] FOREIGN KEY([clothesGenderId])
REFERENCES [dbo].[child_clothes_genders] ([id])
GO
ALTER TABLE [dbo].[child_clothes_types] CHECK CONSTRAINT [child_clothes_types_genders]
GO
ALTER TABLE [dbo].[child_photos]  WITH CHECK ADD  CONSTRAINT [child_photos_ads] FOREIGN KEY([adId])
REFERENCES [dbo].[child_ads] ([id])
GO
ALTER TABLE [dbo].[child_photos] CHECK CONSTRAINT [child_photos_ads]
GO
ALTER TABLE [dbo].[child_types]  WITH CHECK ADD  CONSTRAINT [child_types_categories] FOREIGN KEY([categoryId])
REFERENCES [dbo].[child_categories] ([id])
GO
ALTER TABLE [dbo].[child_types] CHECK CONSTRAINT [child_types_categories]
GO
ALTER TABLE [dbo].[electro_ads]  WITH CHECK ADD  CONSTRAINT [electro_ad_category] FOREIGN KEY([categoryId])
REFERENCES [dbo].[electro_categories] ([id])
GO
ALTER TABLE [dbo].[electro_ads] CHECK CONSTRAINT [electro_ad_category]
GO
ALTER TABLE [dbo].[electro_ads]  WITH CHECK ADD  CONSTRAINT [electro_ad_color] FOREIGN KEY([colorId])
REFERENCES [dbo].[electro_phone_colors] ([id])
GO
ALTER TABLE [dbo].[electro_ads] CHECK CONSTRAINT [electro_ad_color]
GO
ALTER TABLE [dbo].[electro_ads]  WITH CHECK ADD  CONSTRAINT [electro_ad_contact] FOREIGN KEY([contactId])
REFERENCES [dbo].[electro_contacts] ([id])
GO
ALTER TABLE [dbo].[electro_ads] CHECK CONSTRAINT [electro_ad_contact]
GO
ALTER TABLE [dbo].[electro_ads]  WITH CHECK ADD  CONSTRAINT [electro_ad_currency] FOREIGN KEY([currencyId])
REFERENCES [dbo].[currency] ([id])
GO
ALTER TABLE [dbo].[electro_ads] CHECK CONSTRAINT [electro_ad_currency]
GO
ALTER TABLE [dbo].[electro_ads]  WITH CHECK ADD  CONSTRAINT [electro_ad_log] FOREIGN KEY([logId])
REFERENCES [dbo].[electro_logs] ([id])
GO
ALTER TABLE [dbo].[electro_ads] CHECK CONSTRAINT [electro_ad_log]
GO
ALTER TABLE [dbo].[electro_ads]  WITH CHECK ADD  CONSTRAINT [electro_ad_operator] FOREIGN KEY([operatorId])
REFERENCES [dbo].[electro_operators] ([id])
GO
ALTER TABLE [dbo].[electro_ads] CHECK CONSTRAINT [electro_ad_operator]
GO
ALTER TABLE [dbo].[electro_ads]  WITH CHECK ADD  CONSTRAINT [electro_ad_package] FOREIGN KEY([packageId])
REFERENCES [dbo].[adPackages] ([id])
GO
ALTER TABLE [dbo].[electro_ads] CHECK CONSTRAINT [electro_ad_package]
GO
ALTER TABLE [dbo].[electro_ads]  WITH CHECK ADD  CONSTRAINT [electro_ad_phone_mark] FOREIGN KEY([phoneMarkId])
REFERENCES [dbo].[electro_phone_marks] ([id])
GO
ALTER TABLE [dbo].[electro_ads] CHECK CONSTRAINT [electro_ad_phone_mark]
GO
ALTER TABLE [dbo].[electro_ads]  WITH CHECK ADD  CONSTRAINT [electro_ad_status] FOREIGN KEY([statusId])
REFERENCES [dbo].[adStatuses] ([id])
GO
ALTER TABLE [dbo].[electro_ads] CHECK CONSTRAINT [electro_ad_status]
GO
ALTER TABLE [dbo].[electro_ads]  WITH CHECK ADD  CONSTRAINT [electro_ad_storage] FOREIGN KEY([storageId])
REFERENCES [dbo].[electro_phone_storages] ([id])
GO
ALTER TABLE [dbo].[electro_ads] CHECK CONSTRAINT [electro_ad_storage]
GO
ALTER TABLE [dbo].[electro_ads]  WITH CHECK ADD  CONSTRAINT [electro_ad_type] FOREIGN KEY([typeId])
REFERENCES [dbo].[electro_types] ([id])
GO
ALTER TABLE [dbo].[electro_ads] CHECK CONSTRAINT [electro_ad_type]
GO
ALTER TABLE [dbo].[electro_ads]  WITH CHECK ADD  CONSTRAINT [electro_ads_city] FOREIGN KEY([cityId])
REFERENCES [dbo].[cities] ([id])
GO
ALTER TABLE [dbo].[electro_ads] CHECK CONSTRAINT [electro_ads_city]
GO
ALTER TABLE [dbo].[electro_ads]  WITH CHECK ADD  CONSTRAINT [electro_computer_mark] FOREIGN KEY([computerMarkId])
REFERENCES [dbo].[electro_computer_marks] ([id])
GO
ALTER TABLE [dbo].[electro_ads] CHECK CONSTRAINT [electro_computer_mark]
GO
ALTER TABLE [dbo].[electro_ads]  WITH CHECK ADD  CONSTRAINT [electro_phone_ad_model] FOREIGN KEY([phoneModelId])
REFERENCES [dbo].[electro_phone_models] ([id])
GO
ALTER TABLE [dbo].[electro_ads] CHECK CONSTRAINT [electro_phone_ad_model]
GO
ALTER TABLE [dbo].[electro_computer_marks]  WITH CHECK ADD  CONSTRAINT [electro_computer_category] FOREIGN KEY([categoryId])
REFERENCES [dbo].[electro_categories] ([id])
GO
ALTER TABLE [dbo].[electro_computer_marks] CHECK CONSTRAINT [electro_computer_category]
GO
ALTER TABLE [dbo].[electro_operators]  WITH CHECK ADD  CONSTRAINT [electro_category_operator] FOREIGN KEY([categoryId])
REFERENCES [dbo].[electro_categories] ([id])
GO
ALTER TABLE [dbo].[electro_operators] CHECK CONSTRAINT [electro_category_operator]
GO
ALTER TABLE [dbo].[electro_phone_colors]  WITH CHECK ADD  CONSTRAINT [electro_phone_model_color] FOREIGN KEY([modelId])
REFERENCES [dbo].[electro_phone_models] ([id])
GO
ALTER TABLE [dbo].[electro_phone_colors] CHECK CONSTRAINT [electro_phone_model_color]
GO
ALTER TABLE [dbo].[electro_phone_marks]  WITH CHECK ADD  CONSTRAINT [electro_category_mark] FOREIGN KEY([categoryId])
REFERENCES [dbo].[electro_categories] ([id])
GO
ALTER TABLE [dbo].[electro_phone_marks] CHECK CONSTRAINT [electro_category_mark]
GO
ALTER TABLE [dbo].[electro_phone_models]  WITH CHECK ADD  CONSTRAINT [electro_phone_mark_model] FOREIGN KEY([markId])
REFERENCES [dbo].[electro_phone_marks] ([id])
GO
ALTER TABLE [dbo].[electro_phone_models] CHECK CONSTRAINT [electro_phone_mark_model]
GO
ALTER TABLE [dbo].[electro_phone_storages]  WITH CHECK ADD  CONSTRAINT [electro_phone_model_storage] FOREIGN KEY([modelId])
REFERENCES [dbo].[electro_phone_models] ([id])
GO
ALTER TABLE [dbo].[electro_phone_storages] CHECK CONSTRAINT [electro_phone_model_storage]
GO
ALTER TABLE [dbo].[electro_photos]  WITH CHECK ADD  CONSTRAINT [electro_ad_photo] FOREIGN KEY([adId])
REFERENCES [dbo].[electro_ads] ([id])
GO
ALTER TABLE [dbo].[electro_photos] CHECK CONSTRAINT [electro_ad_photo]
GO
ALTER TABLE [dbo].[electro_types]  WITH CHECK ADD  CONSTRAINT [electro_category_type] FOREIGN KEY([categoryId])
REFERENCES [dbo].[electro_categories] ([id])
GO
ALTER TABLE [dbo].[electro_types] CHECK CONSTRAINT [electro_category_type]
GO
ALTER TABLE [dbo].[hobby_ads]  WITH CHECK ADD  CONSTRAINT [hobby_ads_category] FOREIGN KEY([categoryId])
REFERENCES [dbo].[hobby_categories] ([id])
GO
ALTER TABLE [dbo].[hobby_ads] CHECK CONSTRAINT [hobby_ads_category]
GO
ALTER TABLE [dbo].[hobby_ads]  WITH CHECK ADD  CONSTRAINT [hobby_ads_city] FOREIGN KEY([cityId])
REFERENCES [dbo].[cities] ([id])
GO
ALTER TABLE [dbo].[hobby_ads] CHECK CONSTRAINT [hobby_ads_city]
GO
ALTER TABLE [dbo].[hobby_ads]  WITH CHECK ADD  CONSTRAINT [hobby_ads_contact] FOREIGN KEY([contactId])
REFERENCES [dbo].[hobby_contacts] ([id])
GO
ALTER TABLE [dbo].[hobby_ads] CHECK CONSTRAINT [hobby_ads_contact]
GO
ALTER TABLE [dbo].[hobby_ads]  WITH CHECK ADD  CONSTRAINT [hobby_ads_currency] FOREIGN KEY([currencyId])
REFERENCES [dbo].[currency] ([id])
GO
ALTER TABLE [dbo].[hobby_ads] CHECK CONSTRAINT [hobby_ads_currency]
GO
ALTER TABLE [dbo].[hobby_ads]  WITH CHECK ADD  CONSTRAINT [hobby_ads_logs] FOREIGN KEY([logId])
REFERENCES [dbo].[hobby_logs] ([id])
GO
ALTER TABLE [dbo].[hobby_ads] CHECK CONSTRAINT [hobby_ads_logs]
GO
ALTER TABLE [dbo].[hobby_ads]  WITH CHECK ADD  CONSTRAINT [hobby_ads_package] FOREIGN KEY([packageId])
REFERENCES [dbo].[adPackages] ([id])
GO
ALTER TABLE [dbo].[hobby_ads] CHECK CONSTRAINT [hobby_ads_package]
GO
ALTER TABLE [dbo].[hobby_ads]  WITH CHECK ADD  CONSTRAINT [hobby_ads_status] FOREIGN KEY([statusId])
REFERENCES [dbo].[adStatuses] ([id])
GO
ALTER TABLE [dbo].[hobby_ads] CHECK CONSTRAINT [hobby_ads_status]
GO
ALTER TABLE [dbo].[hobby_ads]  WITH CHECK ADD  CONSTRAINT [hobby_ads_type] FOREIGN KEY([typeId])
REFERENCES [dbo].[hobby_types] ([id])
GO
ALTER TABLE [dbo].[hobby_ads] CHECK CONSTRAINT [hobby_ads_type]
GO
ALTER TABLE [dbo].[hobby_photos]  WITH CHECK ADD  CONSTRAINT [hobby_ad_photos] FOREIGN KEY([adId])
REFERENCES [dbo].[hobby_ads] ([id])
GO
ALTER TABLE [dbo].[hobby_photos] CHECK CONSTRAINT [hobby_ad_photos]
GO
ALTER TABLE [dbo].[hobby_types]  WITH CHECK ADD  CONSTRAINT [hobby_types_categories] FOREIGN KEY([categoryId])
REFERENCES [dbo].[hobby_categories] ([id])
GO
ALTER TABLE [dbo].[hobby_types] CHECK CONSTRAINT [hobby_types_categories]
GO
ALTER TABLE [dbo].[home_ads]  WITH CHECK ADD  CONSTRAINT [home_ads_category] FOREIGN KEY([categoryId])
REFERENCES [dbo].[home_categories] ([id])
GO
ALTER TABLE [dbo].[home_ads] CHECK CONSTRAINT [home_ads_category]
GO
ALTER TABLE [dbo].[home_ads]  WITH CHECK ADD  CONSTRAINT [home_ads_city] FOREIGN KEY([cityId])
REFERENCES [dbo].[cities] ([id])
GO
ALTER TABLE [dbo].[home_ads] CHECK CONSTRAINT [home_ads_city]
GO
ALTER TABLE [dbo].[home_ads]  WITH CHECK ADD  CONSTRAINT [home_ads_contact] FOREIGN KEY([contactId])
REFERENCES [dbo].[home_contacts] ([id])
GO
ALTER TABLE [dbo].[home_ads] CHECK CONSTRAINT [home_ads_contact]
GO
ALTER TABLE [dbo].[home_ads]  WITH CHECK ADD  CONSTRAINT [home_ads_currency] FOREIGN KEY([currencyId])
REFERENCES [dbo].[currency] ([id])
GO
ALTER TABLE [dbo].[home_ads] CHECK CONSTRAINT [home_ads_currency]
GO
ALTER TABLE [dbo].[home_ads]  WITH CHECK ADD  CONSTRAINT [home_ads_log] FOREIGN KEY([logId])
REFERENCES [dbo].[home_logs] ([id])
GO
ALTER TABLE [dbo].[home_ads] CHECK CONSTRAINT [home_ads_log]
GO
ALTER TABLE [dbo].[home_ads]  WITH CHECK ADD  CONSTRAINT [home_ads_package] FOREIGN KEY([packageId])
REFERENCES [dbo].[adPackages] ([id])
GO
ALTER TABLE [dbo].[home_ads] CHECK CONSTRAINT [home_ads_package]
GO
ALTER TABLE [dbo].[home_ads]  WITH CHECK ADD  CONSTRAINT [home_ads_status] FOREIGN KEY([statusId])
REFERENCES [dbo].[adStatuses] ([id])
GO
ALTER TABLE [dbo].[home_ads] CHECK CONSTRAINT [home_ads_status]
GO
ALTER TABLE [dbo].[home_ads]  WITH CHECK ADD  CONSTRAINT [home_ads_type] FOREIGN KEY([typeId])
REFERENCES [dbo].[home_types] ([id])
GO
ALTER TABLE [dbo].[home_ads] CHECK CONSTRAINT [home_ads_type]
GO
ALTER TABLE [dbo].[home_photos]  WITH CHECK ADD  CONSTRAINT [home_photos_ad] FOREIGN KEY([adId])
REFERENCES [dbo].[home_ads] ([id])
GO
ALTER TABLE [dbo].[home_photos] CHECK CONSTRAINT [home_photos_ad]
GO
ALTER TABLE [dbo].[home_types]  WITH CHECK ADD  CONSTRAINT [home_types_category] FOREIGN KEY([categoryId])
REFERENCES [dbo].[home_categories] ([id])
GO
ALTER TABLE [dbo].[home_types] CHECK CONSTRAINT [home_types_category]
GO
ALTER TABLE [dbo].[job_ads]  WITH CHECK ADD  CONSTRAINT [job_ad_category] FOREIGN KEY([categoryId])
REFERENCES [dbo].[job_categories] ([id])
GO
ALTER TABLE [dbo].[job_ads] CHECK CONSTRAINT [job_ad_category]
GO
ALTER TABLE [dbo].[job_ads]  WITH CHECK ADD  CONSTRAINT [job_ad_city] FOREIGN KEY([cityId])
REFERENCES [dbo].[cities] ([id])
GO
ALTER TABLE [dbo].[job_ads] CHECK CONSTRAINT [job_ad_city]
GO
ALTER TABLE [dbo].[job_ads]  WITH CHECK ADD  CONSTRAINT [job_ad_contact] FOREIGN KEY([contactId])
REFERENCES [dbo].[job_contacts] ([id])
GO
ALTER TABLE [dbo].[job_ads] CHECK CONSTRAINT [job_ad_contact]
GO
ALTER TABLE [dbo].[job_ads]  WITH CHECK ADD  CONSTRAINT [job_ad_education] FOREIGN KEY([educationId])
REFERENCES [dbo].[job_educations] ([id])
GO
ALTER TABLE [dbo].[job_ads] CHECK CONSTRAINT [job_ad_education]
GO
ALTER TABLE [dbo].[job_ads]  WITH CHECK ADD  CONSTRAINT [job_ad_log] FOREIGN KEY([logId])
REFERENCES [dbo].[job_logs] ([id])
GO
ALTER TABLE [dbo].[job_ads] CHECK CONSTRAINT [job_ad_log]
GO
ALTER TABLE [dbo].[job_ads]  WITH CHECK ADD  CONSTRAINT [job_ad_package] FOREIGN KEY([packageId])
REFERENCES [dbo].[adPackages] ([id])
GO
ALTER TABLE [dbo].[job_ads] CHECK CONSTRAINT [job_ad_package]
GO
ALTER TABLE [dbo].[job_ads]  WITH CHECK ADD  CONSTRAINT [job_ad_practice] FOREIGN KEY([practiceId])
REFERENCES [dbo].[job_practice_durations] ([id])
GO
ALTER TABLE [dbo].[job_ads] CHECK CONSTRAINT [job_ad_practice]
GO
ALTER TABLE [dbo].[job_ads]  WITH CHECK ADD  CONSTRAINT [job_ad_region] FOREIGN KEY([regionId])
REFERENCES [dbo].[regions] ([id])
GO
ALTER TABLE [dbo].[job_ads] CHECK CONSTRAINT [job_ad_region]
GO
ALTER TABLE [dbo].[job_ads]  WITH CHECK ADD  CONSTRAINT [job_ad_status] FOREIGN KEY([statusId])
REFERENCES [dbo].[adStatuses] ([id])
GO
ALTER TABLE [dbo].[job_ads] CHECK CONSTRAINT [job_ad_status]
GO
ALTER TABLE [dbo].[job_ads]  WITH CHECK ADD  CONSTRAINT [job_ad_type] FOREIGN KEY([typeId])
REFERENCES [dbo].[job_ad_types] ([id])
GO
ALTER TABLE [dbo].[job_ads] CHECK CONSTRAINT [job_ad_type]
GO
ALTER TABLE [dbo].[job_ads]  WITH CHECK ADD  CONSTRAINT [job_ad_village] FOREIGN KEY([villageId])
REFERENCES [dbo].[villages] ([id])
GO
ALTER TABLE [dbo].[job_ads] CHECK CONSTRAINT [job_ad_village]
GO
ALTER TABLE [dbo].[job_employee_photos]  WITH CHECK ADD  CONSTRAINT [job_ad_photos] FOREIGN KEY([adId])
REFERENCES [dbo].[job_ads] ([id])
GO
ALTER TABLE [dbo].[job_employee_photos] CHECK CONSTRAINT [job_ad_photos]
GO
ALTER TABLE [dbo].[metros]  WITH CHECK ADD  CONSTRAINT [FK_metros_city] FOREIGN KEY([cityId])
REFERENCES [dbo].[cities] ([id])
GO
ALTER TABLE [dbo].[metros] CHECK CONSTRAINT [FK_metros_city]
GO
ALTER TABLE [dbo].[private_ads]  WITH CHECK ADD  CONSTRAINT [private_ads_category] FOREIGN KEY([categoryId])
REFERENCES [dbo].[private_categories] ([id])
GO
ALTER TABLE [dbo].[private_ads] CHECK CONSTRAINT [private_ads_category]
GO
ALTER TABLE [dbo].[private_ads]  WITH CHECK ADD  CONSTRAINT [private_ads_city] FOREIGN KEY([cityId])
REFERENCES [dbo].[cities] ([id])
GO
ALTER TABLE [dbo].[private_ads] CHECK CONSTRAINT [private_ads_city]
GO
ALTER TABLE [dbo].[private_ads]  WITH CHECK ADD  CONSTRAINT [private_ads_clothesGender] FOREIGN KEY([clothesGenderId])
REFERENCES [dbo].[private_clothes_genders] ([id])
GO
ALTER TABLE [dbo].[private_ads] CHECK CONSTRAINT [private_ads_clothesGender]
GO
ALTER TABLE [dbo].[private_ads]  WITH CHECK ADD  CONSTRAINT [private_ads_clothesize] FOREIGN KEY([clothesSizeId])
REFERENCES [dbo].[clothes_sizes] ([id])
GO
ALTER TABLE [dbo].[private_ads] CHECK CONSTRAINT [private_ads_clothesize]
GO
ALTER TABLE [dbo].[private_ads]  WITH CHECK ADD  CONSTRAINT [private_ads_clothesType] FOREIGN KEY([clothesTypeId])
REFERENCES [dbo].[private_clothes_types] ([id])
GO
ALTER TABLE [dbo].[private_ads] CHECK CONSTRAINT [private_ads_clothesType]
GO
ALTER TABLE [dbo].[private_ads]  WITH CHECK ADD  CONSTRAINT [private_ads_color] FOREIGN KEY([colorId])
REFERENCES [dbo].[clothes_colors] ([id])
GO
ALTER TABLE [dbo].[private_ads] CHECK CONSTRAINT [private_ads_color]
GO
ALTER TABLE [dbo].[private_ads]  WITH CHECK ADD  CONSTRAINT [private_ads_contact] FOREIGN KEY([contactId])
REFERENCES [dbo].[private_contacts] ([id])
GO
ALTER TABLE [dbo].[private_ads] CHECK CONSTRAINT [private_ads_contact]
GO
ALTER TABLE [dbo].[private_ads]  WITH CHECK ADD  CONSTRAINT [private_ads_currency] FOREIGN KEY([currencyId])
REFERENCES [dbo].[currency] ([id])
GO
ALTER TABLE [dbo].[private_ads] CHECK CONSTRAINT [private_ads_currency]
GO
ALTER TABLE [dbo].[private_ads]  WITH CHECK ADD  CONSTRAINT [private_ads_log] FOREIGN KEY([logId])
REFERENCES [dbo].[private_logs] ([id])
GO
ALTER TABLE [dbo].[private_ads] CHECK CONSTRAINT [private_ads_log]
GO
ALTER TABLE [dbo].[private_ads]  WITH CHECK ADD  CONSTRAINT [private_ads_package] FOREIGN KEY([packageId])
REFERENCES [dbo].[adPackages] ([id])
GO
ALTER TABLE [dbo].[private_ads] CHECK CONSTRAINT [private_ads_package]
GO
ALTER TABLE [dbo].[private_ads]  WITH CHECK ADD  CONSTRAINT [private_ads_shoessize] FOREIGN KEY([shoesSizeId])
REFERENCES [dbo].[shoes_sizes] ([id])
GO
ALTER TABLE [dbo].[private_ads] CHECK CONSTRAINT [private_ads_shoessize]
GO
ALTER TABLE [dbo].[private_ads]  WITH CHECK ADD  CONSTRAINT [private_ads_status] FOREIGN KEY([statusId])
REFERENCES [dbo].[adStatuses] ([id])
GO
ALTER TABLE [dbo].[private_ads] CHECK CONSTRAINT [private_ads_status]
GO
ALTER TABLE [dbo].[private_ads]  WITH CHECK ADD  CONSTRAINT [private_ads_type] FOREIGN KEY([typeId])
REFERENCES [dbo].[private_types] ([id])
GO
ALTER TABLE [dbo].[private_ads] CHECK CONSTRAINT [private_ads_type]
GO
ALTER TABLE [dbo].[private_clothes_genders]  WITH CHECK ADD  CONSTRAINT [private_clothes_genders_categories] FOREIGN KEY([categoryId])
REFERENCES [dbo].[private_categories] ([id])
GO
ALTER TABLE [dbo].[private_clothes_genders] CHECK CONSTRAINT [private_clothes_genders_categories]
GO
ALTER TABLE [dbo].[private_clothes_types]  WITH CHECK ADD  CONSTRAINT [private_clothes_types_genders] FOREIGN KEY([clothesGenderId])
REFERENCES [dbo].[private_clothes_genders] ([id])
GO
ALTER TABLE [dbo].[private_clothes_types] CHECK CONSTRAINT [private_clothes_types_genders]
GO
ALTER TABLE [dbo].[private_photos]  WITH CHECK ADD  CONSTRAINT [private_photos_ads] FOREIGN KEY([adId])
REFERENCES [dbo].[private_ads] ([id])
GO
ALTER TABLE [dbo].[private_photos] CHECK CONSTRAINT [private_photos_ads]
GO
ALTER TABLE [dbo].[private_types]  WITH CHECK ADD  CONSTRAINT [private_types_categories] FOREIGN KEY([categoryId])
REFERENCES [dbo].[private_categories] ([id])
GO
ALTER TABLE [dbo].[private_types] CHECK CONSTRAINT [private_types_categories]
GO
ALTER TABLE [dbo].[regions]  WITH CHECK ADD  CONSTRAINT [FK_regions_city] FOREIGN KEY([cityId])
REFERENCES [dbo].[cities] ([id])
GO
ALTER TABLE [dbo].[regions] CHECK CONSTRAINT [FK_regions_city]
GO
ALTER TABLE [dbo].[service_ads]  WITH CHECK ADD  CONSTRAINT [service_ads_category] FOREIGN KEY([categoryId])
REFERENCES [dbo].[service_categories] ([id])
GO
ALTER TABLE [dbo].[service_ads] CHECK CONSTRAINT [service_ads_category]
GO
ALTER TABLE [dbo].[service_ads]  WITH CHECK ADD  CONSTRAINT [service_ads_city] FOREIGN KEY([cityId])
REFERENCES [dbo].[cities] ([id])
GO
ALTER TABLE [dbo].[service_ads] CHECK CONSTRAINT [service_ads_city]
GO
ALTER TABLE [dbo].[service_ads]  WITH CHECK ADD  CONSTRAINT [service_ads_contact] FOREIGN KEY([contactId])
REFERENCES [dbo].[service_contacts] ([id])
GO
ALTER TABLE [dbo].[service_ads] CHECK CONSTRAINT [service_ads_contact]
GO
ALTER TABLE [dbo].[service_ads]  WITH CHECK ADD  CONSTRAINT [service_ads_currency] FOREIGN KEY([currencyId])
REFERENCES [dbo].[currency] ([id])
GO
ALTER TABLE [dbo].[service_ads] CHECK CONSTRAINT [service_ads_currency]
GO
ALTER TABLE [dbo].[service_ads]  WITH CHECK ADD  CONSTRAINT [service_ads_logs] FOREIGN KEY([logId])
REFERENCES [dbo].[service_logs] ([id])
GO
ALTER TABLE [dbo].[service_ads] CHECK CONSTRAINT [service_ads_logs]
GO
ALTER TABLE [dbo].[service_ads]  WITH CHECK ADD  CONSTRAINT [service_ads_package] FOREIGN KEY([packageId])
REFERENCES [dbo].[adPackages] ([id])
GO
ALTER TABLE [dbo].[service_ads] CHECK CONSTRAINT [service_ads_package]
GO
ALTER TABLE [dbo].[service_ads]  WITH CHECK ADD  CONSTRAINT [service_ads_status] FOREIGN KEY([statusId])
REFERENCES [dbo].[adStatuses] ([id])
GO
ALTER TABLE [dbo].[service_ads] CHECK CONSTRAINT [service_ads_status]
GO
ALTER TABLE [dbo].[service_ads]  WITH CHECK ADD  CONSTRAINT [service_ads_type] FOREIGN KEY([typeId])
REFERENCES [dbo].[service_types] ([id])
GO
ALTER TABLE [dbo].[service_ads] CHECK CONSTRAINT [service_ads_type]
GO
ALTER TABLE [dbo].[service_photos]  WITH CHECK ADD  CONSTRAINT [service_photos_ads] FOREIGN KEY([adId])
REFERENCES [dbo].[service_ads] ([id])
GO
ALTER TABLE [dbo].[service_photos] CHECK CONSTRAINT [service_photos_ads]
GO
ALTER TABLE [dbo].[service_types]  WITH CHECK ADD  CONSTRAINT [service_types_category] FOREIGN KEY([categoryId])
REFERENCES [dbo].[service_categories] ([id])
GO
ALTER TABLE [dbo].[service_types] CHECK CONSTRAINT [service_types_category]
GO
ALTER TABLE [dbo].[villages]  WITH CHECK ADD  CONSTRAINT [FK_villages_regions] FOREIGN KEY([regionId])
REFERENCES [dbo].[regions] ([id])
GO
ALTER TABLE [dbo].[villages] CHECK CONSTRAINT [FK_villages_regions]
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[41] 4[28] 2[13] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1[51] 4[11] 3) )"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = -192
         Left = 0
      End
      Begin Tables = 
         Begin Table = "animal_ads"
            Begin Extent = 
               Top = 89
               Left = 259
               Bottom = 219
               Right = 429
            End
            DisplayFlags = 280
            TopColumn = 3
         End
         Begin Table = "adStatuses"
            Begin Extent = 
               Top = 2
               Left = 353
               Bottom = 98
               Right = 523
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "adPackages"
            Begin Extent = 
               Top = 25
               Left = 47
               Bottom = 121
               Right = 217
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "animal_categories"
            Begin Extent = 
               Top = 136
               Left = 515
               Bottom = 266
               Right = 685
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "animal_contacts"
            Begin Extent = 
               Top = 14
               Left = 589
               Bottom = 144
               Right = 762
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "animal_generas"
            Begin Extent = 
               Top = 262
               Left = 483
               Bottom = 375
               Right = 653
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "animal_logs"
            Begin Extent = 
               Top = 234
               Left = 38
               Bottom = 364
               Right = 208
         ' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_Animal_Ads'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane2', @value=N'   End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "animal_types"
            Begin Extent = 
               Top = 380
               Left = 428
               Bottom = 493
               Right = 598
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "cities"
            Begin Extent = 
               Top = 129
               Left = 24
               Bottom = 225
               Right = 194
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "currency"
            Begin Extent = 
               Top = 388
               Left = 33
               Bottom = 484
               Right = 203
            End
            DisplayFlags = 280
            TopColumn = 1
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 35
         Width = 284
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 1950
         Table = 2190
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_Animal_Ads'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=2 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_Animal_Ads'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1[50] 4[25] 3) )"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = -672
         Left = 0
      End
      Begin Tables = 
         Begin Table = "auto_ads"
            Begin Extent = 
               Top = 294
               Left = 38
               Bottom = 424
               Right = 236
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "cities"
            Begin Extent = 
               Top = 394
               Left = 561
               Bottom = 490
               Right = 731
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "auto_fuels"
            Begin Extent = 
               Top = 426
               Left = 38
               Bottom = 522
               Right = 208
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "auto_ban_types"
            Begin Extent = 
               Top = 278
               Left = 258
               Bottom = 374
               Right = 428
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "auto_colors"
            Begin Extent = 
               Top = 294
               Left = 482
               Bottom = 390
               Right = 652
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "auto_marks"
            Begin Extent = 
               Top = 504
               Left = 545
               Bottom = 600
               Right = 715
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "auto_models"
            Begin Extent = 
               Top = 463
               Left = 208
               Bottom = 593
               Right = 378
            End
   ' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_Auto_Ads'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane2', @value=N'         DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "auto_transmission_boxs"
            Begin Extent = 
               Top = 522
               Left = 38
               Bottom = 618
               Right = 208
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "auto_transmitters"
            Begin Extent = 
               Top = 594
               Left = 246
               Bottom = 690
               Right = 416
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "auto_ad_logs"
            Begin Extent = 
               Top = 600
               Left = 454
               Bottom = 730
               Right = 624
            End
            DisplayFlags = 280
            TopColumn = 1
         End
         Begin Table = "sellTypes"
            Begin Extent = 
               Top = 618
               Left = 38
               Bottom = 731
               Right = 208
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "auto_rentPaymentTypes"
            Begin Extent = 
               Top = 707
               Left = 241
               Bottom = 820
               Right = 411
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "auto_contacts"
            Begin Extent = 
               Top = 376
               Left = 353
               Bottom = 506
               Right = 523
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "adPackages"
            Begin Extent = 
               Top = 732
               Left = 38
               Bottom = 828
               Right = 208
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "adStatuses"
            Begin Extent = 
               Top = 732
               Left = 449
               Bottom = 828
               Right = 619
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 56
         Width = 284
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         ' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_Auto_Ads'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane3', @value=N'Column = 1440
         Alias = 1575
         Table = 2400
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_Auto_Ads'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=3 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_Auto_Ads'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[30] 4[30] 2[15] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1[50] 4[37] 3) )"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4[30] 2[40] 3) )"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = -96
      End
      Begin Tables = 
         Begin Table = "bina_ads_personal"
            Begin Extent = 
               Top = 42
               Left = 345
               Bottom = 278
               Right = 538
            End
            DisplayFlags = 280
            TopColumn = 58
         End
         Begin Table = "bina_repairs"
            Begin Extent = 
               Top = 750
               Left = 342
               Bottom = 846
               Right = 512
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "bina_land_Appointments"
            Begin Extent = 
               Top = 145
               Left = 640
               Bottom = 241
               Right = 810
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "bina_target_points"
            Begin Extent = 
               Top = 354
               Left = 587
               Bottom = 467
               Right = 757
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "bina_contract_types"
            Begin Extent = 
               Top = 714
               Left = 592
               Bottom = 810
               Right = 762
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "bina_selling_types"
            Begin Extent = 
               Top = 738
               Left = 134
               Bottom = 834
               Right = 304
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "cities"
            Begin Extent = 
               Top = 256
               Left = 647
               Bottom = 352
      ' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_Bina_Personal_General'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane2', @value=N'         Right = 817
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "adPackages"
            Begin Extent = 
               Top = 145
               Left = 139
               Bottom = 241
               Right = 309
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "adStatuses"
            Begin Extent = 
               Top = 29
               Left = 142
               Bottom = 125
               Right = 312
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "currency"
            Begin Extent = 
               Top = 280
               Left = 149
               Bottom = 376
               Right = 319
            End
            DisplayFlags = 280
            TopColumn = 1
         End
         Begin Table = "metro_ways"
            Begin Extent = 
               Top = 407
               Left = 141
               Bottom = 503
               Right = 311
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "metros"
            Begin Extent = 
               Top = 332
               Left = 379
               Bottom = 445
               Right = 549
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "regions"
            Begin Extent = 
               Top = 500
               Left = 350
               Bottom = 613
               Right = 520
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "sellTypes"
            Begin Extent = 
               Top = 526
               Left = 140
               Bottom = 622
               Right = 310
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "villages"
            Begin Extent = 
               Top = 468
               Left = 631
               Bottom = 581
               Right = 801
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "bina_categories"
            Begin Extent = 
               Top = 10
               Left = 617
               Bottom = 140
               Right = 800
            End
            DisplayFlags = 280
            TopColumn = 19
         End
         Begin Table = "bina_ads_personal_logs"
            Begin Extent = 
               Top = 582
               Left = 558
               Bottom = 712
               Right = 794
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "bina_personal_Contacts"
            Begin Extent = 
               Top = 618
               Left = 348
               Bottom = 748
               Right = 554
            End
            DisplayFlags = 280
            TopColumn = 4
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 72
         Width = 284
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 15' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_Bina_Personal_General'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane3', @value=N'00
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 3540
         Alias = 2880
         Table = 2250
         Output = 2250
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_Bina_Personal_General'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=3 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_Bina_Personal_General'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1[50] 4[38] 3) )"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "child_ads"
            Begin Extent = 
               Top = 102
               Left = 246
               Bottom = 232
               Right = 421
            End
            DisplayFlags = 280
            TopColumn = 12
         End
         Begin Table = "shoes_sizes"
            Begin Extent = 
               Top = 444
               Left = 38
               Bottom = 557
               Right = 208
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "adPackages"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 102
               Right = 208
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "adStatuses"
            Begin Extent = 
               Top = 6
               Left = 246
               Bottom = 102
               Right = 416
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "cities"
            Begin Extent = 
               Top = 6
               Left = 454
               Bottom = 102
               Right = 624
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "currency"
            Begin Extent = 
               Top = 102
               Left = 38
               Bottom = 198
               Right = 208
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "child_categories"
            Begin Extent = 
               Top = 102
               Left = 459
               Bottom = 232
               Right = 629
            End
            ' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_Child_Ads'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane2', @value=N'DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "child_clothes_genders"
            Begin Extent = 
               Top = 198
               Left = 38
               Bottom = 311
               Right = 208
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "child_clothes_types"
            Begin Extent = 
               Top = 234
               Left = 246
               Bottom = 347
               Right = 421
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "child_contacts"
            Begin Extent = 
               Top = 234
               Left = 459
               Bottom = 364
               Right = 632
            End
            DisplayFlags = 280
            TopColumn = 2
         End
         Begin Table = "child_logs"
            Begin Extent = 
               Top = 312
               Left = 38
               Bottom = 442
               Right = 208
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "child_types"
            Begin Extent = 
               Top = 348
               Left = 246
               Bottom = 461
               Right = 416
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "clothes_colors"
            Begin Extent = 
               Top = 366
               Left = 454
               Bottom = 462
               Right = 624
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "clothes_sizes"
            Begin Extent = 
               Top = 462
               Left = 246
               Bottom = 575
               Right = 416
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 35
         Width = 284
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 2040
         Table = 2835
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_Child_Ads'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=2 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_Child_Ads'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1[50] 4[25] 3) )"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = -288
         Left = 0
      End
      Begin Tables = 
         Begin Table = "electro_categories"
            Begin Extent = 
               Top = 13
               Left = 325
               Bottom = 143
               Right = 536
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "electro_computer_marks"
            Begin Extent = 
               Top = 6
               Left = 537
               Bottom = 119
               Right = 707
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "electro_logs"
            Begin Extent = 
               Top = 145
               Left = 29
               Bottom = 275
               Right = 199
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "electro_operators"
            Begin Extent = 
               Top = 138
               Left = 246
               Bottom = 251
               Right = 416
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "electro_phone_colors"
            Begin Extent = 
               Top = 252
               Left = 246
               Bottom = 365
               Right = 428
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "electro_phone_marks"
            Begin Extent = 
               Top = 252
               Left = 454
               Bottom = 365
               Right = 624
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "electro_phone_models"
            Begin Extent = 
               Top = 270
               Left = 38
               Bottom ' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_Electro_Ads'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane2', @value=N'= 383
               Right = 208
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "electro_phone_storages"
            Begin Extent = 
               Top = 366
               Left = 246
               Bottom = 479
               Right = 416
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "electro_types"
            Begin Extent = 
               Top = 384
               Left = 38
               Bottom = 497
               Right = 208
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "currency"
            Begin Extent = 
               Top = 480
               Left = 246
               Bottom = 576
               Right = 416
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "cities"
            Begin Extent = 
               Top = 366
               Left = 454
               Bottom = 462
               Right = 624
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "electro_contacts"
            Begin Extent = 
               Top = 105
               Left = 554
               Bottom = 235
               Right = 724
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "electro_ads"
            Begin Extent = 
               Top = 0
               Left = 13
               Bottom = 130
               Right = 225
            End
            DisplayFlags = 280
            TopColumn = 21
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 33
         Width = 284
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 2085
         Alias = 2595
         Table = 2940
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_Electro_Ads'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=2 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_Electro_Ads'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = -96
         Left = 0
      End
      Begin Tables = 
         Begin Table = "adPackages"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 102
               Right = 208
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "adStatuses"
            Begin Extent = 
               Top = 6
               Left = 246
               Bottom = 102
               Right = 416
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "cities"
            Begin Extent = 
               Top = 6
               Left = 454
               Bottom = 102
               Right = 624
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "currency"
            Begin Extent = 
               Top = 102
               Left = 38
               Bottom = 198
               Right = 208
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "hobby_ads"
            Begin Extent = 
               Top = 102
               Left = 246
               Bottom = 232
               Right = 416
            End
            DisplayFlags = 280
            TopColumn = 3
         End
         Begin Table = "hobby_categories"
            Begin Extent = 
               Top = 102
               Left = 454
               Bottom = 232
               Right = 624
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "hobby_contacts"
            Begin Extent = 
               Top = 198
               Left = 38
               Bottom = 328
               Right = 211
            End
       ' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_Hobby_Ads'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane2', @value=N'     DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "hobby_logs"
            Begin Extent = 
               Top = 234
               Left = 249
               Bottom = 364
               Right = 419
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "hobby_types"
            Begin Extent = 
               Top = 234
               Left = 457
               Bottom = 347
               Right = 627
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 26
         Width = 284
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 2265
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_Hobby_Ads'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=2 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_Hobby_Ads'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1[50] 4[34] 3) )"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = -192
         Left = 0
      End
      Begin Tables = 
         Begin Table = "home_ads"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 136
               Right = 208
            End
            DisplayFlags = 280
            TopColumn = 6
         End
         Begin Table = "home_categories"
            Begin Extent = 
               Top = 6
               Left = 246
               Bottom = 136
               Right = 416
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "home_contacts"
            Begin Extent = 
               Top = 6
               Left = 454
               Bottom = 136
               Right = 627
            End
            DisplayFlags = 280
            TopColumn = 3
         End
         Begin Table = "home_logs"
            Begin Extent = 
               Top = 138
               Left = 38
               Bottom = 268
               Right = 208
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "home_types"
            Begin Extent = 
               Top = 138
               Left = 454
               Bottom = 251
               Right = 624
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "adPackages"
            Begin Extent = 
               Top = 252
               Left = 454
               Bottom = 348
               Right = 624
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "adStatuses"
            Begin Extent = 
               Top = 270
               Left = 38
               Bottom = 366
               Right = 208
            End
     ' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_Home_Ads'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane2', @value=N'       DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "cities"
            Begin Extent = 
               Top = 270
               Left = 246
               Bottom = 366
               Right = 416
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "currency"
            Begin Extent = 
               Top = 348
               Left = 454
               Bottom = 444
               Right = 624
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 3255
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_Home_Ads'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=2 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_Home_Ads'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = -192
         Left = 0
      End
      Begin Tables = 
         Begin Table = "job_ad_types"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 102
               Right = 208
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "job_ads"
            Begin Extent = 
               Top = 6
               Left = 246
               Bottom = 136
               Right = 473
            End
            DisplayFlags = 280
            TopColumn = 27
         End
         Begin Table = "job_categories"
            Begin Extent = 
               Top = 6
               Left = 511
               Bottom = 102
               Right = 681
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "job_contacts"
            Begin Extent = 
               Top = 99
               Left = 27
               Bottom = 229
               Right = 200
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "job_educations"
            Begin Extent = 
               Top = 102
               Left = 511
               Bottom = 198
               Right = 681
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "job_practice_durations"
            Begin Extent = 
               Top = 234
               Left = 38
               Bottom = 330
               Right = 208
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "cities"
            Begin Extent = 
               Top = 254
               Left = 500
               Bottom = 350
               Right = 670
         ' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_Job_Ads'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane2', @value=N'   End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "job_logs"
            Begin Extent = 
               Top = 138
               Left = 246
               Bottom = 268
               Right = 416
            End
            DisplayFlags = 280
            TopColumn = 1
         End
         Begin Table = "regions"
            Begin Extent = 
               Top = 287
               Left = 269
               Bottom = 400
               Right = 439
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "villages"
            Begin Extent = 
               Top = 330
               Left = 38
               Bottom = 443
               Right = 208
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 38
         Width = 284
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 3045
         Alias = 900
         Table = 2280
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_Job_Ads'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=2 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_Job_Ads'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[26] 2[14] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1[50] 4[44] 3) )"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = -384
         Left = 0
      End
      Begin Tables = 
         Begin Table = "private_ads"
            Begin Extent = 
               Top = 102
               Left = 246
               Bottom = 232
               Right = 421
            End
            DisplayFlags = 280
            TopColumn = 17
         End
         Begin Table = "adPackages"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 102
               Right = 208
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "adStatuses"
            Begin Extent = 
               Top = 6
               Left = 246
               Bottom = 102
               Right = 416
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "cities"
            Begin Extent = 
               Top = 6
               Left = 454
               Bottom = 102
               Right = 624
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "currency"
            Begin Extent = 
               Top = 102
               Left = 38
               Bottom = 198
               Right = 208
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "private_categories"
            Begin Extent = 
               Top = 102
               Left = 459
               Bottom = 232
               Right = 629
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "private_clothes_genders"
            Begin Extent = 
               Top = 198
               Left = 38
               Bottom = 311
               Right = 208
          ' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_Private_Ads'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane2', @value=N'  End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "private_clothes_types"
            Begin Extent = 
               Top = 234
               Left = 246
               Bottom = 347
               Right = 421
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "private_contacts"
            Begin Extent = 
               Top = 234
               Left = 459
               Bottom = 364
               Right = 632
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "private_logs"
            Begin Extent = 
               Top = 312
               Left = 38
               Bottom = 442
               Right = 208
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "private_types"
            Begin Extent = 
               Top = 348
               Left = 246
               Bottom = 461
               Right = 416
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "shoes_sizes"
            Begin Extent = 
               Top = 366
               Left = 454
               Bottom = 479
               Right = 624
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "clothes_colors"
            Begin Extent = 
               Top = 444
               Left = 38
               Bottom = 540
               Right = 208
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "clothes_sizes"
            Begin Extent = 
               Top = 462
               Left = 246
               Bottom = 575
               Right = 416
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 2250
         Alias = 1980
         Table = 2835
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_Private_Ads'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=2 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_Private_Ads'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1[51] 4[41] 3) )"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "service_types"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 119
               Right = 208
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "service_logs"
            Begin Extent = 
               Top = 6
               Left = 454
               Bottom = 136
               Right = 624
            End
            DisplayFlags = 280
            TopColumn = 1
         End
         Begin Table = "service_contacts"
            Begin Extent = 
               Top = 120
               Left = 38
               Bottom = 250
               Right = 211
            End
            DisplayFlags = 280
            TopColumn = 3
         End
         Begin Table = "service_categories"
            Begin Extent = 
               Top = 2
               Left = 268
               Bottom = 132
               Right = 438
            End
            DisplayFlags = 280
            TopColumn = 1
         End
         Begin Table = "service_ads"
            Begin Extent = 
               Top = 138
               Left = 457
               Bottom = 268
               Right = 627
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "adPackages"
            Begin Extent = 
               Top = 252
               Left = 38
               Bottom = 348
               Right = 208
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "adStatuses"
            Begin Extent = 
               Top = 308
               Left = 232
               Bottom = 404
               Right = 402
          ' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_Service_Ads'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane2', @value=N'  End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "cities"
            Begin Extent = 
               Top = 270
               Left = 454
               Bottom = 366
               Right = 624
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "currency"
            Begin Extent = 
               Top = 348
               Left = 38
               Bottom = 444
               Right = 208
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 4065
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_Service_Ads'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=2 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'View_Service_Ads'
GO
USE [master]
GO
ALTER DATABASE [alApar] SET  READ_WRITE 
GO
