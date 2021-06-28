using System;
using AlApar.Models.Home.View;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace AlApar.Models.Home
{
    public partial class HomeContext : DbContext
    {
        public HomeContext()
        {
        }

        public HomeContext(DbContextOptions<HomeContext> options)
            : base(options)
        {
        }

        public virtual DbSet<HomeAd> HomeAds { get; set; }
        public virtual DbSet<HomeCategory> HomeCategories { get; set; }
        public virtual DbSet<HomeContact> HomeContacts { get; set; }
        public virtual DbSet<HomeLog> HomeLogs { get; set; }
        public virtual DbSet<HomePhoto> HomePhotos { get; set; }
        public virtual DbSet<HomeType> HomeTypes { get; set; }
        public virtual DbSet<ViewHomeAd> ViewHomeAds { get; set; }

        public virtual DbSet<Cities> Cities { get; set; }
        public virtual DbSet<Currency> Currencies { get; set; }
        public virtual DbSet<AdStatuses> Statuses { get; set; }
        public virtual DbSet<AdPackages> Packages { get; set; }
        public virtual DbSet<LastSharedTimes> LastSharedTimes { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");


            GeneralModels.generateGeneralModels(in modelBuilder);


            modelBuilder.Entity<HomeAd>(entity =>
            {
                entity.ToTable("home_ads");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.About).HasColumnName("about");

                entity.Property(e => e.CategoryId).HasColumnName("categoryId");

                entity.Property(e => e.CityId).HasColumnName("cityId");

                entity.Property(e => e.ContactId).HasColumnName("contactId");

                entity.Property(e => e.CurrencyId).HasColumnName("currencyId");

                entity.Property(e => e.HasDelivery).HasColumnName("hasDelivery");

                entity.Property(e => e.IsNew).HasColumnName("isNew");

                entity.Property(e => e.LogId).HasColumnName("logId");

                entity.Property(e => e.PackageId).HasColumnName("packageId");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.PrivateId)
                    .HasMaxLength(50)
                    .HasColumnName("privateId");

                entity.Property(e => e.StatusId).HasColumnName("statusId");

                entity.Property(e => e.Title)
                    .HasMaxLength(100)
                    .HasColumnName("title");

                entity.Property(e => e.TypeId).HasColumnName("typeId");

                entity.Property(e => e.Viewed).HasColumnName("viewed");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.HomeAds)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("home_ads_category");

                entity.HasOne(d => d.Contact)
                    .WithMany(p => p.HomeAds)
                    .HasForeignKey(d => d.ContactId)
                    .HasConstraintName("home_ads_contact");

                entity.HasOne(d => d.Log)
                    .WithMany(p => p.HomeAds)
                    .HasForeignKey(d => d.LogId)
                    .HasConstraintName("home_ads_log");

                entity.HasOne(d => d.Type)
                    .WithMany(p => p.HomeAds)
                    .HasForeignKey(d => d.TypeId)
                    .HasConstraintName("home_ads_type");

                entity.HasOne(d => d.Package)
                    .WithMany(p => p.HomeAds)
                    .HasForeignKey(d => d.PackageId)
                    .HasConstraintName("home_ads_package");

                entity.HasOne(d => d.Status)
                    .WithMany(p => p.HomeAds)
                    .HasForeignKey(d => d.StatusId)
                    .HasConstraintName("home_ads_status");

                entity.HasOne(d => d.City)
                    .WithMany(p => p.HomeAds)
                    .HasForeignKey(d => d.CityId)
                    .HasConstraintName("home_ads_city");

                entity.HasOne(d => d.Currency)
                    .WithMany(p => p.HomeAds)
                    .HasForeignKey(d => d.CurrencyId)
                    .HasConstraintName("home_ads_currency");

            });

            modelBuilder.Entity<HomeCategory>(entity =>
            {
                entity.ToTable("home_categories");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.Property(e => e.New).HasColumnName("new");

                entity.Property(e => e.Type).HasColumnName("type");
            });

            modelBuilder.Entity<HomeContact>(entity =>
            {
                entity.ToTable("home_contacts");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ContactNumber)
                    .HasMaxLength(255)
                    .HasColumnName("contactNumber");

                entity.Property(e => e.Email)
                    .HasMaxLength(255)
                    .HasColumnName("email");

                entity.Property(e => e.IsCall).HasColumnName("isCall");

                entity.Property(e => e.IsWp).HasColumnName("isWp");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.Property(e => e.Timespan).HasColumnName("timespan");
            });

            modelBuilder.Entity<HomeLog>(entity =>
            {
                entity.ToTable("home_logs");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CreatedDate).HasColumnName("createdDate");

                entity.Property(e => e.FromDate).HasColumnName("fromDate");

                entity.Property(e => e.ModifiedDate).HasColumnName("modifiedDate");

                entity.Property(e => e.TillDate).HasColumnName("tillDate");
            });

            modelBuilder.Entity<HomePhoto>(entity =>
            {
                entity.ToTable("home_photos");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.AdId).HasColumnName("adId");

                entity.Property(e => e.ImagePath)
                    .HasMaxLength(500)
                    .HasColumnName("imagePath");

                entity.Property(e => e.PrimaryImage).HasColumnName("primaryImage");

                entity.Property(e => e.Thumbnail)
                    .HasMaxLength(500)
                    .HasColumnName("thumbnail");

                entity.HasOne(d => d.Ad)
                    .WithMany(p => p.HomePhotos)
                    .HasForeignKey(d => d.AdId)
                    .HasConstraintName("home_photos_ad");
            });

            modelBuilder.Entity<HomeType>(entity =>
            {
                entity.ToTable("home_types");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CategoryId).HasColumnName("categoryId");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.HomeTypes)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("home_types_category");
            });

            modelBuilder.Entity<ViewHomeAd>(entity =>
            {

                entity.ToView("View_Home_Ads");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CategoryId).HasColumnName("categoryId");

                entity.Property(e => e.About).HasColumnName("about");

                entity.Property(e => e.CityName)
                    .HasMaxLength(255)
                    .HasColumnName("cityName");

                entity.Property(e => e.ContactName)
                    .HasMaxLength(50)
                    .HasColumnName("contactName");

                entity.Property(e => e.ContactNumber)
                    .HasMaxLength(255)
                    .HasColumnName("contactNumber");

                entity.Property(e => e.CurrencyName)
                    .HasMaxLength(255)
                    .HasColumnName("currencyName");

                entity.Property(e => e.Email)
                    .HasMaxLength(255)
                    .HasColumnName("email");

                entity.Property(e => e.HasDelivery).HasColumnName("hasDelivery");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.IsCall).HasColumnName("isCall");

                entity.Property(e => e.IsNew).HasColumnName("isNew");

                entity.Property(e => e.IsWp).HasColumnName("isWp");

                entity.Property(e => e.CurrencyId).HasColumnName("isWp");

                entity.Property(e => e.CityId).HasColumnName("cityId");
                entity.Property(e => e.TypeId).HasColumnName("typeId");
                entity.Property(e => e.ContactId).HasColumnName("contactId");
                entity.Property(e => e.PackageId).HasColumnName("packageId");
                entity.Property(e => e.StatusId).HasColumnName("statusId");
                entity.Property(e => e.LogId).HasColumnName("logId");

                entity.Property(e => e.ModifiedDate).HasColumnName("modifiedDate");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.Property(e => e.PackageName)
                    .HasMaxLength(255)
                    .HasColumnName("packageName");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.StatusName)
                    .HasMaxLength(255)
                    .HasColumnName("statusName");

                entity.Property(e => e.Title)
                    .HasMaxLength(100)
                    .HasColumnName("title");

                entity.Property(e => e.TypeName)
                    .HasMaxLength(50)
                    .HasColumnName("typeName");

                entity.Property(e => e.Viewed).HasColumnName("viewed");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
