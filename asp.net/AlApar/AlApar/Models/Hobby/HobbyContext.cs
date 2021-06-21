using System;
using AlApar.Models.Hobby.Views;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace AlApar.Models.Hobby
{
    public partial class HobbyContext : DbContext
    {
        public HobbyContext()
        {
        }

        public HobbyContext(DbContextOptions<HobbyContext> options)
            : base(options)
        {
        }

        public virtual DbSet<HobbyAd> HobbyAds { get; set; }
        public virtual DbSet<HobbyCategory> HobbyCategories { get; set; }
        public virtual DbSet<HobbyContact> HobbyContacts { get; set; }
        public virtual DbSet<HobbyLog> HobbyLogs { get; set; }
        public virtual DbSet<HobbyPhoto> HobbyPhotos { get; set; }
        public virtual DbSet<HobbyType> HobbyTypes { get; set; }

        public virtual DbSet<Cities> Cities { get; set; }
        public virtual DbSet<Currency> Currencies { get; set; }
        public virtual DbSet<AdStatuses> Statuses { get; set; }
        public virtual DbSet<AdPackages> Packages { get; set; }
        public virtual DbSet<ViewHobbyAd> ViewHobbyAds { get; set; }
        public virtual DbSet<LastSharedTimes> LastSharedTimes { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<LastSharedTimes>(entity =>
            {
                entity.ToTable("last_shared_times");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.Name).HasColumnName("name");
            });

            modelBuilder.Entity<AdStatuses>(entity => {

                entity.ToTable("adStatuses");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.Name).HasColumnName("name");

            });

            modelBuilder.Entity<AdPackages>(entity => {

                entity.ToTable("adPackages");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.Name).HasColumnName("name");

            });

            modelBuilder.Entity<Currency>(entity => {

                entity.ToTable("currency");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.Name).HasColumnName("name");

            });

            modelBuilder.Entity<Cities>(entity => {

                entity.ToTable("cities");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.Name).HasColumnName("name");

            });

            modelBuilder.Entity<ViewHobbyAd>(entity =>
            {

                entity.ToView("View_Hobby_Ads");

                entity.Property(e => e.About).HasColumnName("about");

                entity.Property(e => e.CategoryId).HasColumnName("categoryId");

                entity.Property(e => e.CategoryName)
                    .HasMaxLength(50)
                    .HasColumnName("categoryName");

                entity.Property(e => e.CityId).HasColumnName("cityId");

                entity.Property(e => e.CityName)
                    .HasMaxLength(255)
                    .HasColumnName("cityName");

                entity.Property(e => e.ContactName)
                    .HasMaxLength(50)
                    .HasColumnName("contactName");

                entity.Property(e => e.ContactNumber)
                    .HasMaxLength(255)
                    .HasColumnName("contactNumber");

                entity.Property(e => e.CurrencyId).HasColumnName("currencyId");

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

                entity.Property(e => e.PackageId).HasColumnName("packageId");

                entity.Property(e => e.PackageName)
                    .HasMaxLength(255)
                    .HasColumnName("packageName");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.StatusId).HasColumnName("statusId");

                entity.Property(e => e.StatusName)
                    .HasMaxLength(255)
                    .HasColumnName("statusName");

                entity.Property(e => e.Title)
                    .HasMaxLength(50)
                    .HasColumnName("title");

                entity.Property(e => e.TypeId).HasColumnName("typeId");

                entity.Property(e => e.TypeName)
                    .HasMaxLength(50)
                    .HasColumnName("typeName");

                entity.Property(e => e.Viewed).HasColumnName("viewed");
            });

            modelBuilder.Entity<HobbyAd>(entity =>
            {
                entity.ToTable("hobby_ads");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.About).HasColumnName("about");

                entity.Property(e => e.CategoryId).HasColumnName("categoryId");

                entity.Property(e => e.CityId).HasColumnName("cityId");

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
                    .WithMany(p => p.HobbyAds)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("hobby_ads_category");

                entity.HasOne(d => d.Log)
                    .WithMany(p => p.HobbyAds)
                    .HasForeignKey(d => d.LogId)
                    .HasConstraintName("hobby_ads_logs");

                entity.HasOne(d => d.Type)
                    .WithMany(p => p.HobbyAds)
                    .HasForeignKey(d => d.TypeId)
                    .HasConstraintName("hobby_ads_type");

                entity.HasOne(d => d.City)
                      .WithMany(p => p.HobbyAds)
                      .HasForeignKey(d => d.CityId)
                      .HasConstraintName("hobby_ads_city");

                entity.HasOne(d => d.Currency)
                      .WithMany(p => p.HobbyAd)
                      .HasForeignKey(d => d.CurrencyId)
                      .HasConstraintName("hobby_ads_currency");

                entity.HasOne(d => d.Package)
                      .WithMany(p => p.HobbyAd)
                      .HasForeignKey(d => d.PackageId)
                      .HasConstraintName("hobby_ads_package");

                entity.HasOne(d => d.Status)
                      .WithMany(p => p.HobbyAd)
                      .HasForeignKey(d => d.StatusId)
                      .HasConstraintName("hobby_ads_status");

                entity.HasOne(d => d.Contact)
                      .WithMany(p => p.Ads)
                      .HasForeignKey(d => d.ContactId)
                      .HasConstraintName("hobby_ads_contact");
            });

            modelBuilder.Entity<HobbyCategory>(entity =>
            {
                entity.ToTable("hobby_categories");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Delivery).HasColumnName("delivery");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.Property(e => e.New).HasColumnName("new");
            });

            modelBuilder.Entity<HobbyContact>(entity =>
            {
                entity.ToTable("hobby_contacts");

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

            modelBuilder.Entity<HobbyLog>(entity =>
            {
                entity.ToTable("hobby_logs");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CreatedDate).HasColumnName("createdDate");

                entity.Property(e => e.FromDate).HasColumnName("fromDate");

                entity.Property(e => e.ModifiedDate).HasColumnName("modifiedDate");

                entity.Property(e => e.TillDate).HasColumnName("tillDate");
            });

            modelBuilder.Entity<HobbyPhoto>(entity =>
            {
                entity.ToTable("hobby_photos");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.AdId).HasColumnName("adId");

                entity.Property(e => e.ImagePath)
                    .HasMaxLength(500)
                    .HasColumnName("imagePath");

                entity.Property(e => e.PrimaryImage).HasColumnName("primaryImage");

                entity.Property(e => e.Thumbnail)
                    .HasMaxLength(500)
                    .HasColumnName("thumbnail");

                entity.HasOne(w => w.ViewHobbyAd).WithMany(w => w.Images).HasForeignKey(w => w.AdId);
            });

            modelBuilder.Entity<HobbyType>(entity =>
            {
                entity.ToTable("hobby_types");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CategoryId).HasColumnName("categoryId");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.HobbyTypes)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("hobby_types_categories");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
