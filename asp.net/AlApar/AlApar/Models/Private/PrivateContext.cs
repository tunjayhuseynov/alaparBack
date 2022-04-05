using System;
using AlApar.Models.Private.View;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace AlApar.Models.Private
{
    public partial class PrivateContext : DbContext
    {
        public PrivateContext()
        {
        }

        public PrivateContext(DbContextOptions<PrivateContext> options)
            : base(options)
        {
        }

        public virtual DbSet<PrivateAd> PrivateAds { get; set; }
        public virtual DbSet<PrivateCategory> PrivateCategories { get; set; }
        public virtual DbSet<PrivateClothesGender> PrivateClothesGenders { get; set; }
        public virtual DbSet<PrivateClothesType> PrivateClothesTypes { get; set; }
        public virtual DbSet<PrivateContact> PrivateContacts { get; set; }
        public virtual DbSet<PrivateLog> PrivateLogs { get; set; }
        public virtual DbSet<PrivatePhoto> PrivatePhotos { get; set; }
        public virtual DbSet<PrivateType> PrivateTypes { get; set; }
        public virtual DbSet<ViewPrivateAd> ViewPrivateAds { get; set; }

        public virtual DbSet<ShoesSizes> ShoesSizes { get; set; }
        public virtual DbSet<ClothesSizes> ClothesSizes { get; set; }
        public virtual DbSet<ClothesColors> ClothesColors { get; set; }

        public virtual DbSet<Cities> Cities { get; set; }
        public virtual DbSet<Currency> Currencies { get; set; }
        public virtual DbSet<AdStatuses> AdStatuses { get; set; }
        public virtual DbSet<AdPackages> AdPackages { get; set; }
        public virtual DbSet<LastSharedTimes> LastSharedTimes { get; set; }

        public virtual DbSet<PrivateStory> PrivateStories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");


            GeneralModels.generateGeneralModels(in modelBuilder);

            modelBuilder.Entity<PrivateAd>(entity =>
            {
                entity.ToTable("private_ads");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.About).HasColumnName("about");

                entity.Property(e => e.CategoryId).HasColumnName("categoryId");

                entity.Property(e => e.CityId).HasColumnName("cityId");

                entity.Property(e => e.ClothesGenderId).HasColumnName("clothesGenderId");

                entity.Property(e => e.ClothesTypeId).HasColumnName("clothesTypeId");

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
                    .WithMany(p => p.PrivateAds)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("private_ads_category");

                entity.HasOne(d => d.ClothesGender)
                    .WithMany(p => p.PrivateAds)
                    .HasForeignKey(d => d.ClothesGenderId)
                    .HasConstraintName("private_ads_clothesGender");

                entity.HasOne(d => d.ClothesType)
                    .WithMany(p => p.PrivateAds)
                    .HasForeignKey(d => d.ClothesTypeId)
                    .HasConstraintName("private_ads_clothesType");

                entity.HasOne(d => d.Contact)
                    .WithMany(p => p.PrivateAds)
                    .HasForeignKey(d => d.ContactId)
                    .HasConstraintName("private_ads_contact");

                entity.HasOne(d => d.Log)
                    .WithMany(p => p.PrivateAds)
                    .HasForeignKey(d => d.LogId)
                    .HasConstraintName("private_ads_log");

                entity.HasOne(d => d.Type)
                    .WithMany(p => p.PrivateAds)
                    .HasForeignKey(d => d.TypeId)
                    .HasConstraintName("private_ads_type");

                entity.HasOne(d => d.Package)
                    .WithMany(p => p.PrivateAds)
                    .HasForeignKey(d => d.PackageId)
                    .HasConstraintName("private_ads_package");

                entity.HasOne(d => d.Status)
                    .WithMany(p => p.PrivateAds)
                    .HasForeignKey(d => d.StatusId)
                    .HasConstraintName("private_ads_status");

                entity.HasOne(d => d.City)
                    .WithMany(p => p.PrivateAds)
                    .HasForeignKey(d => d.CityId)
                    .HasConstraintName("private_ads_city");

                entity.HasOne(d => d.Currency)
                    .WithMany(p => p.PrivateAds)
                    .HasForeignKey(d => d.CurrencyId)
                    .HasConstraintName("private_ads_currency");

            });

            modelBuilder.Entity<PrivateCategory>(entity =>
            {
                entity.ToTable("private_categories");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Delivery).HasColumnName("delivery");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.Property(e => e.New).HasColumnName("new");
            });

            modelBuilder.Entity<PrivateClothesGender>(entity =>
            {
                entity.ToTable("private_clothes_genders");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CategoryId).HasColumnName("categoryId");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.PrivateClothesGenders)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("private_clothes_genders_categories");
            });

            modelBuilder.Entity<PrivateClothesType>(entity =>
            {
                entity.ToTable("private_clothes_types");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ClothesGenderId).HasColumnName("clothesGenderId");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.HasOne(d => d.ClothesGender)
                    .WithMany(p => p.PrivateClothesTypes)
                    .HasForeignKey(d => d.ClothesGenderId)
                    .HasConstraintName("private_clothes_types_genders");
            });

            modelBuilder.Entity<PrivateContact>(entity =>
            {
                entity.ToTable("private_contacts");

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

            modelBuilder.Entity<PrivateLog>(entity =>
            {
                entity.ToTable("private_logs");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CreatedDate).HasColumnName("createdDate");

                entity.Property(e => e.FromDate).HasColumnName("fromDate");

                entity.Property(e => e.ModifiedDate).HasColumnName("modifiedDate");

                entity.Property(e => e.TillDate).HasColumnName("tillDate");
            });

            modelBuilder.Entity<PrivatePhoto>(entity =>
            {
                entity.ToTable("private_photos");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.AdId).HasColumnName("adId");

                entity.Property(e => e.ImagePath)
                    .HasMaxLength(500)
                    .HasColumnName("imagePath");
                entity.Property(e => e.Blur).HasColumnName("blur");
                entity.Property(e => e.PrimaryImage).HasColumnName("primaryImage");

                entity.Property(e => e.Thumbnail)
                    .HasMaxLength(500)
                    .HasColumnName("thumbnail");

                entity.HasOne(d => d.Ad)
                    .WithMany(p => p.PrivatePhotos)
                    .HasForeignKey(d => d.AdId)
                    .HasConstraintName("private_photos_ads");

                entity.HasOne(d => d.ViewPrivateAd)
                    .WithMany(p => p.Images)
                    .HasForeignKey(d => d.AdId);
            });

            modelBuilder.Entity<PrivateType>(entity =>
            {
                entity.ToTable("private_types");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CategoryId).HasColumnName("categoryId");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.PrivateTypes)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("private_types_categories");
            });

            modelBuilder.Entity<ViewPrivateAd>(entity =>
            {

                entity.ToView("View_Private_Ads");

                entity.Property(e => e.About).HasColumnName("about");

                entity.Property(e => e.CategoryId).HasColumnName("categoryId");

                entity.Property(e => e.ContactNumber)
                    .HasMaxLength(255)
                    .HasColumnName("contactNumber");

                entity.Property(e => e.Email)
                    .HasMaxLength(255)
                    .HasColumnName("email");

                entity.Property(e => e.StatusName).HasMaxLength(255);

                entity.Property(e => e.CategoryName).HasMaxLength(50);

                entity.Property(e => e.CurrencyName).HasMaxLength(255);

                entity.Property(e => e.TypeName).HasMaxLength(50);

                entity.Property(e => e.ClothesTypeName).HasMaxLength(50);

                entity.Property(e => e.ContactName).HasMaxLength(50);

                entity.Property(e => e.ClothesGenderName).HasMaxLength(50);

                entity.Property(e => e.HasDelivery).HasColumnName("hasDelivery");

                entity.Property(e => e.IsCall).HasColumnName("isCall");

                entity.Property(e => e.IsNew).HasColumnName("isNew");

                entity.Property(e => e.IsWp).HasColumnName("isWp");

                entity.Property(e => e.ModifiedDate).HasColumnName("modifiedDate");

                entity.Property(e => e.CityId).HasColumnName("cityId");
                entity.Property(e => e.TypeId).HasColumnName("typeId");
                entity.Property(e => e.ContactId).HasColumnName("contactId");
                entity.Property(e => e.PackageId).HasColumnName("packageId");
                entity.Property(e => e.StatusId).HasColumnName("statusId");
                entity.Property(e => e.LogId).HasColumnName("logId");
                entity.Property(e => e.ClothesGenderId).HasColumnName("clothesGenderId");
                entity.Property(e => e.ClothesTypeId).HasColumnName("clothesTypeId");
                entity.Property(e => e.CurrencyId).HasColumnName("currencyId");

                entity.Property(e => e.PackageName)
                    .HasMaxLength(255)
                    .HasColumnName("packageName");

                entity.Property(e => e.Price).HasColumnName("price");

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
