using System;
using AlApar.Models.Service.Views;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace AlApar.Models.Service
{
    public partial class ServiceContext : DbContext
    {
        public ServiceContext()
        {
        }

        public ServiceContext(DbContextOptions<ServiceContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ServiceAd> ServiceAds { get; set; }
        public virtual DbSet<ServiceCategory> ServiceCategories { get; set; }
        public virtual DbSet<ServiceContact> ServiceContacts { get; set; }
        public virtual DbSet<ServiceLog> ServiceLogs { get; set; }
        public virtual DbSet<ServicePhoto> ServicePhotos { get; set; }
        public virtual DbSet<ServiceType> ServiceTypes { get; set; }
        public virtual DbSet<ViewServiceAd> ViewServiceAds { get; set; }

        public virtual DbSet<Cities> Cities { get; set; }
        public virtual DbSet<Currency> Currencies { get; set; }
        public virtual DbSet<AdStatuses> AdStatuses { get; set; }
        public virtual DbSet<AdPackages> AdPackages { get; set; }
        public virtual DbSet<LastSharedTimes> LastSharedTimes { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            GeneralModels.generateGeneralModels(in modelBuilder);

            modelBuilder.Entity<ServiceAd>(entity =>
            {
                entity.ToTable("service_ads");

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
                    .HasMaxLength(50)
                    .HasColumnName("title");

                entity.Property(e => e.TypeId).HasColumnName("typeId");

                entity.Property(e => e.Viewed).HasColumnName("viewed");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.ServiceAds)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("service_ads_category");

                entity.HasOne(d => d.Contact)
                    .WithMany(p => p.ServiceAds)
                    .HasForeignKey(d => d.ContactId)
                    .HasConstraintName("service_ads_contact");

                entity.HasOne(d => d.Log)
                    .WithMany(p => p.ServiceAds)
                    .HasForeignKey(d => d.LogId)
                    .HasConstraintName("service_ads_logs");

                entity.HasOne(d => d.Type)
                    .WithMany(p => p.ServiceAds)
                    .HasForeignKey(d => d.TypeId)
                    .HasConstraintName("service_ads_type");

                entity.HasOne(d => d.City)
                    .WithMany(p => p.ServiceAds)
                    .HasForeignKey(d => d.CityId)
                    .HasConstraintName("service_ads_city");

                entity.HasOne(d => d.Currency)
                    .WithMany(p => p.ServiceAds)
                    .HasForeignKey(d => d.CurrencyId)
                    .HasConstraintName("service_ads_currency");

                entity.HasOne(d => d.Package)
                    .WithMany(p => p.ServiceAds)
                    .HasForeignKey(d => d.PackageId)
                    .HasConstraintName("service_ads_package");

                entity.HasOne(d => d.Status)
                    .WithMany(p => p.ServiceAds)
                    .HasForeignKey(d => d.StatusId)
                    .HasConstraintName("service_ads_status");
            });

            modelBuilder.Entity<ServiceCategory>(entity =>
            {
                entity.ToTable("service_categories");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Delivery).HasColumnName("delivery");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.Property(e => e.New).HasColumnName("new");
            });

            modelBuilder.Entity<ServiceContact>(entity =>
            {
                entity.ToTable("service_contacts");

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

            modelBuilder.Entity<ServiceLog>(entity =>
            {
                entity.ToTable("service_logs");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CreatedDate).HasColumnName("createdDate");

                entity.Property(e => e.FromDate).HasColumnName("fromDate");

                entity.Property(e => e.ModifiedDate).HasColumnName("modifiedDate");

                entity.Property(e => e.TillDate).HasColumnName("tillDate");
            });

            modelBuilder.Entity<ServicePhoto>(entity =>
            {
                entity.ToTable("service_photos");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.AdId).HasColumnName("adId");
                entity.Property(e => e.Blur).HasColumnName("blur");
                entity.Property(e => e.ImagePath)
                    .HasMaxLength(500)
                    .HasColumnName("imagePath");

                entity.Property(e => e.PrimaryImage).HasColumnName("primaryImage");

                entity.Property(e => e.Thumbnail)
                    .HasMaxLength(500)
                    .HasColumnName("thumbnail");

                entity.HasOne(d => d.Ad)
                    .WithMany(p => p.ServicePhotos)
                    .HasForeignKey(d => d.AdId)
                    .HasConstraintName("service_photos_ads");

                entity.HasOne(d => d.ViewServiceAd)
                    .WithMany(p => p.Images)
                    .HasForeignKey(d => d.AdId);
            });

            modelBuilder.Entity<ServiceType>(entity =>
            {
                entity.ToTable("service_types");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CategoryId).HasColumnName("categoryId");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.ServiceTypes)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("service_types_category");
            });

            modelBuilder.Entity<ViewServiceAd>(entity =>
            {

                entity.ToView("View_Service_Ads");
                
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.About).HasColumnName("about");

                entity.Property(e => e.AdId).HasColumnName("adId");

                entity.Property(e => e.CategoryId).HasColumnName("categoryId");

                entity.Property(e => e.CategoryName)
                    .HasMaxLength(50)
                    .HasColumnName("categoryName");

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


                entity.Property(e => e.CityId).HasColumnName("cityId");
                entity.Property(e => e.TypeId).HasColumnName("typeId");
                entity.Property(e => e.ContactId).HasColumnName("contactId");
                entity.Property(e => e.PackageId).HasColumnName("packageId");
                entity.Property(e => e.StatusId).HasColumnName("statusId");
                entity.Property(e => e.LogId).HasColumnName("logId");
                entity.Property(e => e.CurrencyId).HasColumnName("currencyId");

                entity.Property(e => e.ImagePath)
                    .HasMaxLength(500)
                    .HasColumnName("imagePath");

                entity.Property(e => e.IsCall).HasColumnName("isCall");

                entity.Property(e => e.IsNew).HasColumnName("isNew");

                entity.Property(e => e.IsWp).HasColumnName("isWp");

                entity.Property(e => e.ModifiedDate).HasColumnName("modifiedDate");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.Property(e => e.PackageName)
                    .HasMaxLength(255)
                    .HasColumnName("packageName");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.PrimaryImage).HasColumnName("primaryImage");

                entity.Property(e => e.StatusName)
                    .HasMaxLength(255)
                    .HasColumnName("statusName");

                entity.Property(e => e.Thumbnail)
                    .HasMaxLength(500)
                    .HasColumnName("thumbnail");

                entity.Property(e => e.Title)
                    .HasMaxLength(50)
                    .HasColumnName("title");

                entity.Property(e => e.Viewed).HasColumnName("viewed");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
