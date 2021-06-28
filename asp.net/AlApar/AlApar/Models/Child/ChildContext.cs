using System;
using AlApar.Models.Child.Views;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace AlApar.Models.Child
{
    public partial class ChildContext : DbContext
    {
        public ChildContext()
        {
        }

        public ChildContext(DbContextOptions<ChildContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ChildAd> ChildAds { get; set; }
        public virtual DbSet<ChildCategory> ChildCategories { get; set; }
        public virtual DbSet<ChildClothesGender> ChildClothesGenders { get; set; }
        public virtual DbSet<ChildClothesType> ChildClothesTypes { get; set; }
        public virtual DbSet<ChildContact> ChildContacts { get; set; }
        public virtual DbSet<ChildLog> ChildLogs { get; set; }
        public virtual DbSet<ChildPhoto> ChildPhotos { get; set; }
        public virtual DbSet<ChildType> ChildTypes { get; set; }
        public virtual DbSet<ViewChildAd> ViewChildAds { get; set; }

        public virtual DbSet<Cities> Cities { get; set; }
        public virtual DbSet<Currency> Currencies { get; set; }
        public virtual DbSet<AdStatuses> AdStatuses { get; set; }
        public virtual DbSet<AdPackages> AdPackages { get; set; }
        public virtual DbSet<LastSharedTimes> LastSharedTimes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            GeneralModels.generateGeneralModels(in modelBuilder);

            modelBuilder.Entity<ChildAd>(entity =>
            {
                entity.ToTable("child_ads");

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
                    .WithMany(p => p.ChildAds)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("child_ads_category");

                entity.HasOne(d => d.ClothesGender)
                    .WithMany(p => p.ChildAds)
                    .HasForeignKey(d => d.ClothesGenderId)
                    .HasConstraintName("child_ads_clothesGender");

                entity.HasOne(d => d.ClothesType)
                    .WithMany(p => p.ChildAds)
                    .HasForeignKey(d => d.ClothesTypeId)
                    .HasConstraintName("child_ads_clothesType");

                entity.HasOne(d => d.Contact)
                    .WithMany(p => p.ChildAds)
                    .HasForeignKey(d => d.ContactId)
                    .HasConstraintName("child_ads_contact");

                entity.HasOne(d => d.Log)
                    .WithMany(p => p.ChildAds)
                    .HasForeignKey(d => d.LogId)
                    .HasConstraintName("child_ads_log");

                entity.HasOne(d => d.Type)
                    .WithMany(p => p.ChildAds)
                    .HasForeignKey(d => d.TypeId)
                    .HasConstraintName("child_ads_type");

                entity.HasOne(d => d.Package)
                    .WithMany(p => p.ChildAds)
                    .HasForeignKey(d => d.PackageId)
                    .HasConstraintName("child_ads_package");

                entity.HasOne(d => d.Status)
                    .WithMany(p => p.ChildAds)
                    .HasForeignKey(d => d.StatusId)
                    .HasConstraintName("child_ads_status");

                entity.HasOne(d => d.City)
                    .WithMany(p => p.ChildAds)
                    .HasForeignKey(d => d.CityId)
                    .HasConstraintName("child_ads_city");

                entity.HasOne(d => d.Currency)
                    .WithMany(p => p.ChildAds)
                    .HasForeignKey(d => d.CurrencyId)
                    .HasConstraintName("child_ads_currency");
            });

            modelBuilder.Entity<ChildCategory>(entity =>
            {
                entity.ToTable("child_categories");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Delivery).HasColumnName("delivery");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.Property(e => e.New).HasColumnName("new");
            });

            modelBuilder.Entity<ChildClothesGender>(entity =>
            {
                entity.ToTable("child_clothes_genders");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CategoryId).HasColumnName("categoryId");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.ChildClothesGenders)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("child_clothes_genders_categories");
            });

            modelBuilder.Entity<ChildClothesType>(entity =>
            {
                entity.ToTable("child_clothes_types");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ClothesGenderId).HasColumnName("clothesGenderId");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.HasOne(d => d.ClothesGender)
                    .WithMany(p => p.ChildClothesTypes)
                    .HasForeignKey(d => d.ClothesGenderId)
                    .HasConstraintName("child_clothes_types_genders");
            });

            modelBuilder.Entity<ChildContact>(entity =>
            {
                entity.ToTable("child_contacts");

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

            modelBuilder.Entity<ChildLog>(entity =>
            {
                entity.ToTable("child_logs");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CreatedDate).HasColumnName("createdDate");

                entity.Property(e => e.FromDate).HasColumnName("fromDate");

                entity.Property(e => e.ModifiedDate).HasColumnName("modifiedDate");

                entity.Property(e => e.TillDate).HasColumnName("tillDate");
            });

            modelBuilder.Entity<ChildPhoto>(entity =>
            {
                entity.ToTable("child_photos");

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
                    .WithMany(p => p.ChildPhotos)
                    .HasForeignKey(d => d.AdId)
                    .HasConstraintName("child_photos_ads");

                entity.HasOne(d => d.ViewChildAd)
                    .WithMany(p => p.Images)
                    .HasForeignKey(d => d.AdId);
            });

            modelBuilder.Entity<ChildType>(entity =>
            {
                entity.ToTable("child_types");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CategoryId).HasColumnName("categoryId");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.ChildTypes)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("child_types_categories");
            });

            modelBuilder.Entity<ViewChildAd>(entity =>
            {

                entity.ToView("View_Child_Ads");

                entity.Property(e => e.About).HasColumnName("about");

                entity.Property(e => e.CategoryId).HasColumnName("categoryId");

                entity.Property(e => e.CategoryName)
                    .HasMaxLength(50)
                    .HasColumnName("categoryName");

                entity.Property(e => e.ClothesGenderName)
                    .HasMaxLength(50)
                    .HasColumnName("clothesGenderName");

                entity.Property(e => e.ClothesTypeName)
                    .HasMaxLength(50)
                    .HasColumnName("clothesTypeName");

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

                entity.Property(e => e.ModifiedDate).HasColumnName("modifiedDate");

                entity.Property(e => e.Name)
                    .HasMaxLength(255)
                    .HasColumnName("name");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.StatusName)
                    .HasMaxLength(255)
                    .HasColumnName("statusName");

                entity.Property(e => e.Title)
                    .HasMaxLength(50)
                    .HasColumnName("title");

                entity.Property(e => e.TypeName)
                    .HasMaxLength(50)
                    .HasColumnName("typeName");

                entity.Property(e => e.Viewed).HasColumnName("viewed");

                entity.Property(e => e.LogId).HasColumnName("logId");
                entity.Property(e => e.StatusId).HasColumnName("statusId");
                entity.Property(e => e.PackageId).HasColumnName("packageId");
                entity.Property(e => e.CurrencyId).HasColumnName("currencyId");
                entity.Property(e => e.CityId).HasColumnName("cityId");
                entity.Property(e => e.ContactId).HasColumnName("contactId");
                entity.Property(e => e.ClothesGenderId).HasColumnName("clothesGenderId");
                entity.Property(e => e.ClothesTypeId).HasColumnName("clothesTypeId");
                entity.Property(e => e.TypeId).HasColumnName("typeId");
                entity.Property(e => e.LogId).HasColumnName("logId");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
