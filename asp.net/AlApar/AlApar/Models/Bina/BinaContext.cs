using System;
using AlApar.Models.Bina;
using AlApar.Models.Bina.Views;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace AlApar.Models
{
    public partial class BinaContext : DbContext
    {
        public BinaContext()
        {
        }

        public BinaContext(DbContextOptions<BinaContext> options): base(options)
        {
        }

        public virtual DbSet<AdPackages> AdPackages { get; set; }
        public virtual DbSet<AdStatuses> AdStatuses { get; set; }
        public virtual DbSet<BinaAdsPersonal> BinaAdsPersonal { get; set; }
        public virtual DbSet<BinaAdsPersonalLogs> BinaAdsPersonalLogs { get; set; }
        public virtual DbSet<BinaCategories> BinaCategories { get; set; }
        public virtual DbSet<BinaLandAppointments> BinaLandAppointments { get; set; }
        public virtual DbSet<BinaPersonalPhotos> BinaPersonalPhotos { get; set; }
        public virtual DbSet<BinaRentPaymentTypes> BinaRentPaymentTypes { get; set; }
        public virtual DbSet<BinaRentalProps> BinaRentalPros { get; set; }
        public virtual DbSet<Cities> Cities { get; set; }
        public virtual DbSet<Currency> Currency { get; set; }
        public virtual DbSet<Metros> Metros { get; set; }
        public virtual DbSet<BinaPersonalContacts> PersonalContacts { get; set; }
        public virtual DbSet<Regions> Regions { get; set; }
        public virtual DbSet<SellTypes> SellTypes { get; set; }
        public virtual DbSet<Villages> Villages { get; set; }
        public virtual DbSet<MetroWays> MetroWays { get; set; }
        public virtual DbSet<LastSharedTimes> LastSharedTimes { get; set; }
        public virtual DbSet<ViewBinaPersonalGeneral> ViewBinaPersonalGenerals { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            GeneralModels.generateGeneralModels(in modelBuilder);

            modelBuilder.Entity<ViewBinaPersonalGeneral>(entity =>
            {

                entity.ToView("View_Bina_Personal_General");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ModifiedDate).HasColumnName("modifiedDate");

                entity.Property(e => e.PackageId).HasColumnName("packageId");

                entity.Property(e => e.StatusId).HasColumnName("statusId");

                entity.Property(e => e.Adress)
                    .HasColumnName("adress")
                    .HasColumnType("text");

                entity.Property(e => e.AreaSize).HasColumnName("areaSize");

                entity.Property(e => e.CategoryId).HasColumnName("categoryId");

                entity.Property(e => e.CityId).HasColumnName("cityId");


                entity.Property(e => e.CurrencyId).HasColumnName("currencyId");

                entity.Property(e => e.Floor).HasColumnName("floor");

                entity.Property(e => e.BuildingFloor).HasColumnName("buildingFloor");


                entity.Property(e => e.HasLicense).HasColumnName("hasLicense");

                entity.Property(e => e.HasMortgage).HasColumnName("hasMortgage");

                entity.Property(e => e.LandAppointmentId).HasColumnName("landAppointmentId");

                entity.Property(e => e.MetroId).HasColumnName("metroId");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.RegionId).HasColumnName("regionId");

                entity.Property(e => e.RentPaymentTypeId).HasColumnName("rentPaymentTypeId");

                entity.Property(e => e.RoomAmount).HasColumnName("roomAmount");

                entity.Property(e => e.SellTypeId).HasColumnName("sellTypeId");
                entity.Property(e => e.LogId).HasColumnName("logId");
                entity.Property(e => e.ContactId).HasColumnName("contactId");


                entity.Property(e => e.VillageId).HasColumnName("villageId");

                entity.Property(e => e.Barter).HasColumnName("barter");

                entity.Property(w => w.HasIcare).HasColumnName("hasIcare");

                entity.Property(w => w.HasBelediyye).HasColumnName("hasBelediyye");

                entity.Property(w => w.MetbexM).HasColumnName("metbexM");
                entity.Property(w => w.QabY).HasColumnName("qabY");
                entity.Property(w => w.PaltarY).HasColumnName("paltarY");
                entity.Property(w => w.Soyuducu).HasColumnName("soyuducu");
                entity.Property(w => w.Tv).HasColumnName("tv");
                entity.Property(w => w.Kondicioner).HasColumnName("kondicioner");
                entity.Property(w => w.Internet).HasColumnName("internet");
                entity.Property(w => w.Telefon).HasColumnName("telefon");
                entity.Property(w => w.Usag).HasColumnName("usag");
                entity.Property(w => w.Heyvan).HasColumnName("heyvan");

                entity.Property(w => w.MetroWayId).HasColumnName("metroWayId");
                entity.Property(w => w.MetroDuration).HasColumnName("metroDuration");

                entity.Property(w => w.SecondAreaSize).HasColumnName("secondAreaSize");

                entity.Property(w => w.CustomAdress).HasColumnName("customAdress");

                entity.Property(w => w.PackageName).HasColumnName("packageName");

                entity.Property(w => w.CityName).HasColumnName("cityName");

                entity.Property(w => w.RegionName).HasColumnName("regionName");

                entity.Property(w => w.VillageName).HasColumnName("villageName");

                entity.Property(w => w.MetroName).HasColumnName("metroName");

                entity.Property(w => w.SellTypeName).HasColumnName("sellTypeName");

                entity.Property(w => w.CurrencyName).HasColumnName("currencyName");

                entity.Property(w => w.StatusName).HasColumnName("statusName");

                entity.Property(w => w.MetroWayName).HasColumnName("metroWayName");

                entity.Property(w => w.ContactNumber).HasColumnName("contactNumber");

                entity.Property(w => w.IsCall).HasColumnName("isCall");

                entity.Property(w => w.IsWp).HasColumnName("isWp");

                entity.Property(w => w.Email).HasColumnName("email");

                entity.Property(w => w.PersonName).HasColumnName("personName");

                entity.Property(w => w.Owner).HasColumnName("owner");
                entity.Property(w => w.LandAppointmentName).HasColumnName("landAppointmentName");

                entity.Property(w => w.CategoryName).HasColumnName("categoryName");
                entity.Property(w => w.Longitude).HasColumnName("longitude");
                entity.Property(w => w.Latitude).HasColumnName("latitude");
                entity.Property(w => w.About).HasColumnName("about");
                entity.Property(w => w.Viewed).HasColumnName("viewed");


            });

            modelBuilder.Entity<MetroWays>(entity => {
                entity.ToTable("metro_ways");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.Name).HasColumnName("name");

            });



            modelBuilder.Entity<BinaAdsPersonalLogs>(entity =>
            {

                entity.ToTable("bina_ads_personal_logs");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CreatedDate).HasColumnName("createdDate").HasColumnType("datetime2");

                entity.Property(e => e.ModifiedDate).HasColumnName("modifiedDate").HasColumnType("datetime2");

                entity.Property(e => e.FromDate).HasColumnName("fromDate").HasColumnType("datetime2");

                entity.Property(e => e.TillDate).HasColumnName("tillDate").HasColumnType("datetime2");

            });

            modelBuilder.Entity<BinaAdsPersonal>(entity =>
            {
                entity.ToTable("bina_ads_personal");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.PrivateId).HasColumnName("privateId");

                entity.Property(e => e.LogId).HasColumnName("logId");

                entity.Property(e => e.About)
                    .HasColumnName("about")
                    .HasColumnType("text");

                entity.Property(e => e.PackageId).HasColumnName("packageId");

                entity.Property(e => e.StatusId).HasColumnName("statusId");

                entity.Property(e => e.Adress)
                    .HasColumnName("adress")
                    .HasColumnType("text");

                entity.Property(e => e.AreaSize).HasColumnName("areaSize");

                entity.Property(e => e.CategoryId).HasColumnName("categoryId");

                entity.Property(e => e.CityId).HasColumnName("cityId");


                entity.Property(e => e.CurrencyId).HasColumnName("currencyId");

                entity.Property(e => e.Floor).HasColumnName("floor");

                entity.Property(e => e.BuildingFloor).HasColumnName("buildingFloor");


                entity.Property(e => e.HasLicense).HasColumnName("hasLicense");

                entity.Property(e => e.HasMortgage).HasColumnName("hasMortgage");

                entity.Property(e => e.LandAppointmentId).HasColumnName("landAppointmentId");

                entity.Property(e => e.Latitude).HasColumnName("latitude");

                entity.Property(e => e.Longitude).HasColumnName("longitude");

                entity.Property(e => e.MetroId).HasColumnName("metroId");


                entity.Property(e => e.ContactId).HasColumnName("contactId");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.RegionId).HasColumnName("regionId");

                entity.Property(e => e.RentPaymentTypeId).HasColumnName("rentPaymentTypeId");

                entity.Property(e => e.RoomAmount).HasColumnName("roomAmount");

                entity.Property(e => e.SellTypeId).HasColumnName("sellTypeId");


                entity.Property(e => e.Viewed).HasColumnName("viewed");

                entity.Property(e => e.VillageId).HasColumnName("villageId");

                entity.Property(e => e.Barter).HasColumnName("barter");

                entity.Property(w => w.HasIcare).HasColumnName("hasIcare");

                entity.Property(w => w.HasBelediyye).HasColumnName("hasBelediyye");

                entity.Property(w => w.MetbexM).HasColumnName("metbexM");
                entity.Property(w => w.QabY).HasColumnName("qabY");
                entity.Property(w => w.PaltarY).HasColumnName("paltarY");
                entity.Property(w => w.Soyuducu).HasColumnName("soyuducu");
                entity.Property(w => w.Tv).HasColumnName("tv");
                entity.Property(w => w.Kondicioner).HasColumnName("kondicioner");
                entity.Property(w => w.Internet).HasColumnName("internet");
                entity.Property(w => w.Telefon).HasColumnName("telefon");
                entity.Property(w => w.Usag).HasColumnName("usag");
                entity.Property(w => w.Heyvan).HasColumnName("heyvan");

                entity.Property(w => w.MetroWayId).HasColumnName("metroWayId");
                entity.Property(w => w.MetroDuration).HasColumnName("metroDuration");

                entity.Property(w => w.SecondAreaSize).HasColumnName("secondAreaSize");

                entity.Property(w => w.CustomAdress).HasColumnName("customAdress");


                entity.HasOne(d => d.Infos)
                    .WithMany(p => p.BinaAdsPersonal)
                    .HasForeignKey(d => d.LogId)
                    .HasConstraintName("FK_bina_ads_personal_Info");

                entity.HasOne(d => d.AdPackage)
                    .WithMany(p => p.BinaAdsPersonal)
                    .HasForeignKey(d => d.PackageId)
                    .HasConstraintName("Adpack");

                entity.HasOne(d => d.AdStatus)
                    .WithMany(p => p.BinaAdsPersonal)
                    .HasForeignKey(d => d.StatusId)
                    .HasConstraintName("AdStatus");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.BinaAdsPersonal)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("FK__ads__categoryId__3B75D760");

                entity.HasOne(d => d.City)
                    .WithMany(p => p.BinaAdsPersonal)
                    .HasForeignKey(d => d.CityId)
                    .HasConstraintName("FK__ads__cityId__3C69FB99");

                entity.HasOne(d => d.Currency)
                    .WithMany(p => p.BinaAdsPersonal)
                    .HasForeignKey(d => d.CurrencyId)
                    .HasConstraintName("FK__ads__currencyId__412EB0B6");

                entity.HasOne(d => d.LandAppointment)
                    .WithMany(p => p.BinaAdsPersonal)
                    .HasForeignKey(d => d.LandAppointmentId)
                    .HasConstraintName("FK__ads__landAppoint__44FF419A");

                entity.HasOne(d => d.Metro)
                    .WithMany(p => p.BinaAdsPersonal)
                    .HasForeignKey(d => d.MetroId)
                    .HasConstraintName("FK__ads__metroId__3F466844");

                entity.HasOne(d => d.PersonalContact)
                    .WithMany(p => p.BinaAdsPersonal)
                    .HasForeignKey(d => d.ContactId)
                    .HasConstraintName("personContactID");

                entity.HasOne(d => d.Region)
                    .WithMany(p => p.BinaAdsPersonal)
                    .HasForeignKey(d => d.RegionId)
                    .HasConstraintName("FK__ads__regionId__3D5E1FD2");

                entity.HasOne(d => d.RentPaymentType)
                    .WithMany(p => p.BinaAdsPersonal)
                    .HasForeignKey(d => d.RentPaymentTypeId)
                    .HasConstraintName("FK__ads__rentPayment__45F365D3");

                entity.HasOne(d => d.SellType)
                    .WithMany(p => p.BinaAdsPersonal)
                    .HasForeignKey(d => d.SellTypeId)
                    .HasConstraintName("FK__ads__sellTypeId__440B1D61");

                entity.HasOne(d => d.Village)
                    .WithMany(p => p.BinaAdsPersonal)
                    .HasForeignKey(d => d.VillageId)
                    .HasConstraintName("FK__ads__villageId__3E52440B");

                entity.HasOne(d => d.MetroWay)
                      .WithMany(w => w.BinaAdsPersonals)
                      .HasForeignKey(w => w.MetroWayId)
                      .HasConstraintName("ad_metroWay");


            });

            modelBuilder.Entity<BinaRentalProps>(entity => 
            {

                entity.ToTable("bina_rentalProps");

                entity.Property(w => w.MetbexM).HasColumnName("metbexM");
                entity.Property(w => w.QabY).HasColumnName("qabY");
                entity.Property(w => w.PaltarY).HasColumnName("paltarY");
                entity.Property(w => w.Soyuducu).HasColumnName("soyuducu");
                entity.Property(w => w.Tv).HasColumnName("tv");
                entity.Property(w => w.Kondicioner).HasColumnName("kondicioner");
                entity.Property(w => w.Internet).HasColumnName("internet");
                entity.Property(w => w.Telefon).HasColumnName("telefon");
                entity.Property(w => w.Usag).HasColumnName("usag");
                entity.Property(w => w.Heyvan).HasColumnName("heyvan");

            

            });

            modelBuilder.Entity<BinaCategories>(entity =>
            {
                entity.ToTable("bina_categories");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .IsUnicode(true);

                entity.Property(w => w.RoomAmount)
                    .HasColumnName("roomAmount");

                entity.Property(w => w.BuildingFloor)
                    .HasColumnName("buildingFloor");

                entity.Property(w => w.Floor)
                    .HasColumnName("floor");

                entity.Property(w => w.LandAppointment)
                    .HasColumnName("landAppointment");

                entity.Property(w => w.Icare)
                    .HasColumnName("icare");

                entity.Property(w => w.Belediyye)
                    .HasColumnName("belediyye");

                entity.Property(w => w.Hamam)
                    .HasColumnName("hamam");

                entity.Property(w => w.Eyvan)
                    .HasColumnName("eyvan");

                entity.Property(w => w.Lift)
                    .HasColumnName("lift");

                entity.Property(w => w.Mebel)
                    .HasColumnName("mebel");

                entity.Property(w => w.Temir)
                    .HasColumnName("temir");

                entity.Property(w => w.Hovuz)
                    .HasColumnName("hovuz");

                entity.Property(w => w.Qaz)
                    .HasColumnName("qaz");

                entity.Property(w => w.Su)
                    .HasColumnName("su");

                entity.Property(w => w.Isig)
                    .HasColumnName("isig");

                entity.Property(w => w.Kanalizasiya)
                    .HasColumnName("kanalizasiya");

                entity.Property(w => w.Barter).HasColumnName("barter");

                entity.Property(w => w.RentalProİd).HasColumnName("rentalProİd");

                entity.Property(w=> w.Subname).HasColumnName("subname");

                entity.Property(w => w.AreaUnit).HasColumnName("areaUnit");

                entity.Property(w => w.SecondArea).HasColumnName("secondArea");

                entity.HasOne(d => d.RentalPros)
                      .WithMany(p => p.BinaCategories)
                      .HasForeignKey(d => d.RentalProİd)
                      .HasConstraintName("category_rentalPro");

            });

            modelBuilder.Entity<BinaLandAppointments>(entity =>
            {
                entity.ToTable("bina_land_Appointments");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<BinaPersonalPhotos>(entity =>
            {
                
                entity.ToTable("bina_personal_photos");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.AdId).HasColumnName("adId");

                entity.Property(e => e.PrimaryImage).HasColumnName("primaryImage");

                entity.Property(e => e.ImagePath)
                    .HasColumnName("imagePath")
                    .HasMaxLength(500);

                entity.Property(e => e.Thumbnail)
                    .HasColumnName("thumbnail");

                entity.HasOne(d => d.Ad)
                    .WithMany(p => p.Images)
                    .HasForeignKey(d => d.AdId)
                    .HasConstraintName("FK__personalPh__adId__4316F928");

                entity.HasOne(d => d.ViewAd)
                .WithMany(p => p.Images)
                .HasForeignKey(d => d.AdId);
            });

            modelBuilder.Entity<BinaRentPaymentTypes>(entity =>
            {
                entity.ToTable("bina_rentPaymentTypes");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(255);

                entity.HasOne(w => w.SellType)
                    .WithMany(w => w.RentPayment)
                    .HasForeignKey(w => w.RentId)
                    .HasConstraintName("rent_sellType");
            });



            modelBuilder.Entity<Metros>(entity =>
            {
                entity.ToTable("metros");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(255);

                entity.HasOne(w => w.City)
                .WithMany(w => w.Metros)
                .HasForeignKey(w => w.cityId)
                .HasConstraintName("FK_metros_city");
            });

            modelBuilder.Entity<BinaPersonalContacts>(entity =>
            {
                entity.ToTable("bina_personal_Contacts");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ContactNumber)
                    .HasColumnName("contactNumber")
                    .HasMaxLength(255);

                entity.Property(e => e.Name)
                .HasColumnName("name")
                .HasMaxLength(50);

                entity.Property(e => e.Email)
                    .HasColumnName("email")
                    .HasMaxLength(255);

                entity.Property(w => w.Timespan)
                      .HasColumnName("timespan");

                entity.Property(e => e.IsCall).HasColumnName("isCall");

                entity.Property(e => e.IsWp).HasColumnName("isWp");

                entity.Property(e => e.Owner).HasColumnName("owner");


            });

            modelBuilder.Entity<Regions>(entity =>
            {
                entity.ToTable("regions");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(255);

                entity.Property(e => e.cityId).HasColumnName("cityId");

                entity.HasOne(e => e.City)
                    .WithMany(p => p.Regions)
                    .HasForeignKey(w => w.cityId)
                    .HasConstraintName("FK_regions_city");
            });

            modelBuilder.Entity<SellTypes>(entity =>
            {
                entity.ToTable("sellTypes");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<Villages>(entity =>
            {
                entity.ToTable("villages");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(255);

                entity.Property(e => e.RegionId).HasColumnName("regionId");

                entity.HasOne(d => d.Region)
                    .WithMany(p => p.Villages)
                    .HasForeignKey(d => d.RegionId)
                    .HasConstraintName("FK_villages_regions");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
