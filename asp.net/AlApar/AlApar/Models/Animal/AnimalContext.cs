using System;
using AlApar.Models.Animal.View;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace AlApar.Models.Animal
{
    public partial class AnimalContext : DbContext
    {
        public AnimalContext()
        {
        }

        public AnimalContext(DbContextOptions<AnimalContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AnimalAd> AnimalAds { get; set; }
        public virtual DbSet<AnimalCategory> AnimalCategories { get; set; }
        public virtual DbSet<AnimalContact> AnimalContacts { get; set; }
        public virtual DbSet<AnimalGenera> AnimalGeneras { get; set; }
        public virtual DbSet<AnimalLog> AnimalLogs { get; set; }
        public virtual DbSet<AnimalPhoto> AnimalPhotos { get; set; }
        public virtual DbSet<AnimalType> AnimalTypes { get; set; }
        public virtual DbSet<ViewAnimalAd> ViewAnimalAds { get; set; }

        public virtual DbSet<Cities> Cities { get; set; }
        public virtual DbSet<Currency> Currencies { get; set; }
        public virtual DbSet<AdStatuses> AdStatuses { get; set; }
        public virtual DbSet<AdPackages> AdPackages { get; set; }
        public virtual DbSet<LastSharedTimes> LastSharedTimes { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            GeneralModels.generateGeneralModels(in modelBuilder);


            modelBuilder.Entity<AnimalAd>(entity =>
            {
                entity.ToTable("animal_ads");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.About).HasColumnName("about");

                entity.Property(e => e.CategoryId).HasColumnName("categoryId");

                entity.Property(e => e.CityId).HasColumnName("cityId");

                entity.Property(e => e.ContactId).HasColumnName("contactId");

                entity.Property(e => e.CurrencyId).HasColumnName("currencyId");

                entity.Property(e => e.GeneraId).HasColumnName("generaId");

                entity.Property(e => e.HasDelivery).HasColumnName("hasDelivery");

                entity.Property(e => e.LogId).HasColumnName("logId");

                entity.Property(e => e.PackageId).HasColumnName("packageId");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.PrivateId)
                    .HasMaxLength(50)
                    .HasColumnName("privateId");

                entity.Property(e => e.StatusId).HasColumnName("statusId");

                entity.Property(e => e.Title)
                    .HasMaxLength(500)
                    .HasColumnName("title");

                entity.Property(e => e.TypeId).HasColumnName("typeId");

                entity.Property(e => e.Viewed).HasColumnName("viewed");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.AnimalAds)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("animal_ads_category");

                entity.HasOne(d => d.Contact)
                    .WithMany(p => p.AnimalAds)
                    .HasForeignKey(d => d.ContactId)
                    .HasConstraintName("animal_ads_contact");

                entity.HasOne(d => d.Genera)
                    .WithMany(p => p.AnimalAds)
                    .HasForeignKey(d => d.GeneraId)
                    .HasConstraintName("animal_ads_genera");

                entity.HasOne(d => d.Log)
                    .WithMany(p => p.AnimalAds)
                    .HasForeignKey(d => d.LogId)
                    .HasConstraintName("animal_ads_logs");

                entity.HasOne(d => d.Type)
                    .WithMany(p => p.AnimalAds)
                    .HasForeignKey(d => d.TypeId)
                    .HasConstraintName("animal_ads_types");

                entity.HasOne(d => d.City)
                      .WithMany(p => p.AnimalAds)
                      .HasForeignKey(d => d.CityId)
                      .HasConstraintName("animal_ads_city");

                entity.HasOne(d => d.Currency)
                      .WithMany(p => p.AnimalAds)
                      .HasForeignKey(d => d.CurrencyId)
                      .HasConstraintName("animal_ads_currency");

                entity.HasOne(d => d.Package)
                      .WithMany(p => p.AnimalAd)
                      .HasForeignKey(d => d.PackageId)
                      .HasConstraintName("animal_ads_package");

                entity.HasOne(d => d.Status)
                      .WithMany(p => p.AnimalAds)
                      .HasForeignKey(d => d.StatusId)
                      .HasConstraintName("animal_ads_status");

            });

            modelBuilder.Entity<AnimalCategory>(entity =>
            {
                entity.ToTable("animal_categories");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Genera).HasColumnName("genera");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.Property(e => e.Type).HasColumnName("type");
            });

            modelBuilder.Entity<AnimalContact>(entity =>
            {
                entity.ToTable("animal_contacts");

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

            modelBuilder.Entity<AnimalGenera>(entity =>
            {
                entity.ToTable("animal_generas");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CategoryId).HasColumnName("categoryId");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.AnimalGeneras)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("animal_categories_generas");
            });

            modelBuilder.Entity<AnimalLog>(entity =>
            {
                entity.ToTable("animal_logs");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CreatedDate).HasColumnName("createdDate");

                entity.Property(e => e.FromDate).HasColumnName("fromDate");

                entity.Property(e => e.ModifiedDate).HasColumnName("modifiedDate");

                entity.Property(e => e.TillDate).HasColumnName("tillDate");
            });

            modelBuilder.Entity<AnimalPhoto>(entity =>
            {
                entity.ToTable("animal_photos");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.AdId).HasColumnName("adId");

                entity.Property(e => e.ImagePath)
                    .HasMaxLength(500)
                    .HasColumnName("imagePath");

                entity.Property(e => e.PrimaryImage).HasColumnName("primaryImage");

                entity.Property(e => e.Thumbnail)
                    .HasMaxLength(500)
                    .HasColumnName("thumbnail");

                entity.Property(e => e.Blur).HasColumnName("blur");

                entity.HasOne(d => d.Ad)
                    .WithMany(p => p.AnimalPhotos)
                    .HasForeignKey(d => d.AdId)
                    .HasConstraintName("animal_ad_photos");

                entity.HasOne(w => w.ViewAnimalAd)
                      .WithMany(w => w.Images)
                      .HasForeignKey(w=>w.AdId);
            });

            modelBuilder.Entity<AnimalType>(entity =>
            {
                entity.ToTable("animal_types");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CategoryId).HasColumnName("categoryId");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.AnimalTypes)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("animal_categories_types");
            });

            modelBuilder.Entity<ViewAnimalAd>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.ToView("View_Animal_Ads");

                entity.Property(e => e.About).HasColumnName("about");

                entity.Property(e => e.AdId).HasColumnName("adId");

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

                entity.Property(e => e.Genera).HasColumnName("genera");

                entity.Property(e => e.GeneraName)
                    .HasMaxLength(50)
                    .HasColumnName("generaName");

                entity.Property(e => e.HasDelivery).HasColumnName("hasDelivery");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ImagePath)
                    .HasMaxLength(500)
                    .HasColumnName("imagePath");

                entity.Property(e => e.IsCall).HasColumnName("isCall");

                entity.Property(e => e.IsWp).HasColumnName("isWp");

                entity.Property(e => e.ModifiedDate).HasColumnName("modifiedDate");

                entity.Property(e => e.Name)
                    .HasMaxLength(255)
                    .HasColumnName("name");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.PrimaryImage).HasColumnName("primaryImage");

                entity.Property(e => e.StatusName)
                    .HasMaxLength(255)
                    .HasColumnName("statusName");

                entity.Property(e => e.Thumbnail)
                    .HasMaxLength(500)
                    .HasColumnName("thumbnail");

                entity.Property(e => e.Title)
                    .HasMaxLength(500)
                    .HasColumnName("title");

                entity.Property(e => e.Type).HasColumnName("type");

                entity.Property(e => e.TypeName)
                    .HasMaxLength(50)
                    .HasColumnName("typeName");

                entity.Property(e => e.Viewed).HasColumnName("viewed");

                entity.Property(e => e.CategoryId).HasColumnName("categoryId");
                entity.Property(e => e.GeneraId).HasColumnName("generaId");
                entity.Property(e => e.TypeId).HasColumnName("typeId");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
