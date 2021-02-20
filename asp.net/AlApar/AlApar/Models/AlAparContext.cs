using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace AlApar.Models
{
    public partial class alAparContext : DbContext
    {
        public alAparContext()
        {
        }

        public alAparContext(DbContextOptions<alAparContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AdPackages> AdPackages { get; set; }
        public virtual DbSet<AdStatuses> AdStatuses { get; set; }
        public virtual DbSet<BinaAdsPersonal> BinaAdsPersonal { get; set; }
        public virtual DbSet<BinaAdsPersonalInfos> BinaAdsPersonalInfos { get; set; }
        public virtual DbSet<BinaCategories> BinaCategories { get; set; }
        public virtual DbSet<BinaLandAppointments> BinaLandAppointments { get; set; }
        public virtual DbSet<BinaPersonalPhotos> BinaPersonalPhotos { get; set; }
        public virtual DbSet<BinaRentPaymentTypes> BinaRentPaymentTypes { get; set; }
        public virtual DbSet<Cities> Cities { get; set; }
        public virtual DbSet<Curreny> Curreny { get; set; }
        public virtual DbSet<Metros> Metros { get; set; }
        public virtual DbSet<PersonalContacts> PersonalContacts { get; set; }
        public virtual DbSet<Regions> Regions { get; set; }
        public virtual DbSet<SellTypes> SellTypes { get; set; }
        public virtual DbSet<Villages> Villages { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AdPackages>(entity =>
            {
                entity.ToTable("adPackages");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<AdStatuses>(entity =>
            {
                entity.ToTable("adStatuses");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<BinaAdsPersonalInfos>(entity =>
            {

                entity.ToTable("bina_ads_personal_infos");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CreatedDate).HasColumnName("createdDate").HasColumnType("datetime"); ;

                entity.Property(e => e.ModifiedDate).HasColumnName("modifiedDate").HasColumnType("datetime"); ;

                entity.Property(e => e.FromDate).HasColumnName("fromDate").HasColumnType("datetime"); ;

                entity.Property(e => e.TillDate).HasColumnName("tillDate").HasColumnType("datetime"); ;

            });

            modelBuilder.Entity<BinaAdsPersonal>(entity =>
            {
                entity.ToTable("bina_ads_personal");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.privateId).HasColumnName("privateId");

                entity.Property(e => e.InfoId).HasColumnName("infoId");

                entity.Property(e => e.About)
                    .HasColumnName("about")
                    .HasColumnType("text");

                entity.Property(e => e.AdPackageId).HasColumnName("adPackageId");

                entity.Property(e => e.AdStatusId).HasColumnName("adStatusId");

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


                entity.Property(e => e.PersonalContactId).HasColumnName("personalContactId");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.RegionId).HasColumnName("regionId");

                entity.Property(e => e.RentPaymentTypeId).HasColumnName("rentPaymentTypeId");

                entity.Property(e => e.RoomAmount).HasColumnName("roomAmount");

                entity.Property(e => e.SellTypeId).HasColumnName("sellTypeId");


                entity.Property(e => e.Viewed).HasColumnName("viewed");

                entity.Property(e => e.VillageId).HasColumnName("villageId");

                entity.Property(e => e.Barter).HasColumnName("barter");

                entity.HasOne(d => d.Infos)
                    .WithMany(p => p.BinaAdsPersonal)
                    .HasForeignKey(d => d.InfoId)
                    .HasConstraintName("FK_bina_ads_personal_Info");

                entity.HasOne(d => d.AdPackage)
                    .WithMany(p => p.BinaAdsPersonal)
                    .HasForeignKey(d => d.AdPackageId)
                    .HasConstraintName("Adpack");

                entity.HasOne(d => d.AdStatus)
                    .WithMany(p => p.BinaAdsPersonal)
                    .HasForeignKey(d => d.AdStatusId)
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
                    .HasForeignKey(d => d.PersonalContactId)
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

                entity.Property(w => w.HasIcare)
                .HasColumnName("hasIcare");

                entity.Property(w => w.HasBelediyye)
                .HasColumnName("hasBelediyye");
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
                    .HasMaxLength(255);

                entity.HasOne(d => d.Ad)
                    .WithMany(p => p.BinaPersonalPhotos)
                    .HasForeignKey(d => d.AdId)
                    .HasConstraintName("FK__personalPh__adId__4316F928");
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

            modelBuilder.Entity<Cities>(entity =>
            {
                entity.ToTable("cities");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<Curreny>(entity =>
            {
                entity.ToTable("curreny");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(255);
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

            modelBuilder.Entity<PersonalContacts>(entity =>
            {
                entity.ToTable("personalContacts");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.AdId).HasColumnName("adId");

                entity.Property(e => e.ContactNumber)
                    .HasColumnName("contactNumber")
                    .HasMaxLength(255);

                entity.Property(e => e.Name)
                .HasColumnName("name")
                .HasMaxLength(50);

                entity.Property(e => e.Email)
                    .HasColumnName("email")
                    .HasMaxLength(255);

                entity.Property(e => e.IsCall).HasColumnName("isCall");

                entity.Property(e => e.IsWp).HasColumnName("isWp");

                entity.HasOne(d => d.Ad)
                    .WithMany(p => p.PersonalContacts)
                    .HasForeignKey(d => d.AdId)
                    .HasConstraintName("FK__personalCo__adId__4222D4EF");
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
