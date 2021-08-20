using AlApar.Models.Electro.Views;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Electro
{
    public partial class ElectroContext : DbContext
    {
        public ElectroContext()
        {

        }

        public ElectroContext(DbContextOptions<ElectroContext> options) : base(options)
        {

        }

        public virtual DbSet<ElectroAds> ElectroAds { get; set; }
        public virtual DbSet<ElectroCategories> ElectroCategories { get; set; }
        public virtual DbSet<ElectroContacts> ElectroContacts { get; set; }
        public virtual DbSet<ElectroLogs> ElectroLogs { get; set; }
        public virtual DbSet<ElectroOperators> ElectroOperators { get; set; }
        public virtual DbSet<ElectroPhoneColors> ElectroPhoneColors { get; set; }
        public virtual DbSet<ElectroPhoneMarks> ElectroPhoneMarks { get; set; }
        public virtual DbSet<ElectroPhoneModels> ElectroPhoneModels { get; set; }
        public virtual DbSet<ElectroPhoneStorages> ElectroPhoneStorages { get; set; }
        public virtual DbSet<ElectroPhotos> ElectroPhotos { get; set; }
        public virtual DbSet<ElectroTypes> ElectroTypes { get; set; }
        public virtual DbSet<ElectroComputerMarks> ElectroComputerMarks { get; set; }
        public virtual DbSet<ViewElectroAds> ViewElectroAds { get; set; }
        public virtual DbSet<LastSharedTimes> LastSharedTimes { get; set; }

        public virtual DbSet<Cities> Cities { get; set; } // ++
        public virtual DbSet<Currency> Currencies { get; set; } // ++
        public virtual DbSet<AdStatuses> AdStatuses { get; set; } // ++
        public virtual DbSet<AdPackages> AdPackages { get; set; } // ++

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            GeneralModels.generateGeneralModels(in modelBuilder);

            modelBuilder.Entity<ViewElectroAds>(entity => {

                entity.ToTable("View_Electro_Ads");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.StatusId).HasColumnName("statusId");
                entity.Property(w => w.PackageId).HasColumnName("packageId");
                entity.Property(w => w.Viewed).HasColumnName("viewed");
                entity.Property(w => w.CategoryId).HasColumnName("categoryId");
                entity.Property(w => w.TypeId).HasColumnName("typeId");
                entity.Property(w => w.Title).HasColumnName("title");
                entity.Property(w => w.IsNew).HasColumnName("isNew");
                entity.Property(w => w.HasDelivery).HasColumnName("hasDelivery");
                entity.Property(w => w.Price).HasColumnName("price");
                entity.Property(w => w.CurrencyId).HasColumnName("currencyId");
                entity.Property(w => w.ContactId).HasColumnName("contactId");
                entity.Property(w => w.About).HasColumnName("about");
                entity.Property(w => w.OperatorId).HasColumnName("operatorId");
                entity.Property(w => w.PhoneMarkId).HasColumnName("phoneMarkId");
                entity.Property(w => w.PhoneModelId).HasColumnName("phoneModelId");
                entity.Property(w => w.OperatorPhoneNumber).HasColumnName("operatorPhoneNumber");
                entity.Property(w => w.ModifiedDate).HasColumnName("modifiedDate");
                entity.Property(w => w.Category).HasColumnName("category");
                entity.Property(w => w.ComputerMark).HasColumnName("computerMark");
                entity.Property(w => w.Operator).HasColumnName("operator");
                entity.Property(w => w.PhoneModel).HasColumnName("phoneModel");
                entity.Property(w => w.PhoneColor).HasColumnName("phoneColor");
                entity.Property(w => w.PhoneMark).HasColumnName("phoneMark");
                entity.Property(w => w.PhoneStorage).HasColumnName("phoneStorage");
                entity.Property(w => w.PhoneType).HasColumnName("phoneType");
                entity.Property(w => w.Currency).HasColumnName("currency");
                entity.Property(w => w.City).HasColumnName("city");
                entity.Property(w => w.Name).HasColumnName("name");
                entity.Property(w => w.Email).HasColumnName("email");
                entity.Property(w => w.PhoneNumber).HasColumnName("phoneNumber");
                entity.Property(w => w.IsWp).HasColumnName("isWp");
                entity.Property(w => w.IsCall).HasColumnName("isCall");
                entity.Property(w => w.ColorId).HasColumnName("colorId");
                entity.Property(w => w.StorageId).HasColumnName("storageId");

            });

            modelBuilder.Entity<ElectroAds>(entity => {

                entity.ToTable("electro_ads");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.PrivateId).HasColumnName("privateId");
                entity.Property(w => w.LogId).HasColumnName("logId");
                entity.Property(w => w.StatusId).HasColumnName("statusId");
                entity.Property(w => w.PackageId).HasColumnName("packageId");
                entity.Property(w => w.Viewed).HasColumnName("viewed");
                entity.Property(w => w.CateogryId).HasColumnName("cateogryId");
                entity.Property(w => w.TypeId).HasColumnName("typeId");
                entity.Property(w => w.Title).HasColumnName("title");
                entity.Property(w => w.IsNew).HasColumnName("isNew");
                entity.Property(w => w.HasDelivery).HasColumnName("hasDelivery");
                entity.Property(w => w.Price).HasColumnName("price");
                entity.Property(w => w.CurrencyId).HasColumnName("currencyId");
                entity.Property(w => w.ContactId).HasColumnName("contactId");
                entity.Property(w => w.About).HasColumnName("about");
                entity.Property(w => w.OperatorId).HasColumnName("operatorId");
                entity.Property(w => w.PhoneMarkId).HasColumnName("phoneMarkId");
                entity.Property(w => w.PhoneModelId).HasColumnName("phoneModelId");
                entity.Property(w => w.OperatorPhoneNumber).HasColumnName("operatorPhoneNumber");
                entity.Property(w => w.ColorId).HasColumnName("colorId");
                entity.Property(w => w.StorageId).HasColumnName("storageId");

                entity.HasOne(w => w.Color).WithMany(w => w.Ads)
                      .HasForeignKey(w => w.ColorId).HasConstraintName("electro_ad_color");

                entity.HasOne(w => w.Storage).WithMany(w => w.Ads)
                      .HasForeignKey(w => w.StorageId).HasConstraintName("electro_ad_storage");

                entity.HasOne(w => w.Category).WithMany(w => w.Ads)
                      .HasForeignKey(w => w.CateogryId).HasConstraintName("electro_ad_category");

                entity.HasOne(w => w.Contact).WithMany(w => w.Ads)
                      .HasForeignKey(w => w.ContactId).HasConstraintName("electro_ad_contact");

                entity.HasOne(w => w.Currency).WithMany(w => w.ElectroAds)
                      .HasForeignKey(w => w.CurrencyId).HasConstraintName("electro_ad_currency");

                entity.HasOne(w => w.Log).WithMany(w => w.Ads)
                      .HasForeignKey(w => w.LogId).HasConstraintName("electro_ad_log");

                entity.HasOne(w => w.Operator).WithMany(w => w.Ads)
                      .HasForeignKey(w => w.OperatorId).HasConstraintName("electro_ad_operator");

                entity.HasOne(w => w.Package).WithMany(w => w.ElectroAds)
                      .HasForeignKey(w => w.PackageId).HasConstraintName("electro_ad_package");

                entity.HasOne(w => w.PhoneMarks).WithMany(w => w.Ads)
                      .HasForeignKey(w => w.PhoneMarkId).HasConstraintName("electro_ad_phone_mark");

                entity.HasOne(w => w.Status).WithMany(w => w.ElectroAds)
                      .HasForeignKey(w => w.StatusId).HasConstraintName("electro_ad_status");

                entity.HasOne(w => w.Type).WithMany(w => w.Ads)
                      .HasForeignKey(w => w.TypeId).HasConstraintName("electro_ad_type");

                entity.HasOne(w => w.PhoneModels).WithMany(w => w.Ads)
                      .HasForeignKey(w => w.PhoneModelId).HasConstraintName("electro_phone_ad_model");

                entity.HasOne(w => w.ComputerMarks).WithMany(w => w.Ads)
                      .HasForeignKey(w => w.ComputerMarkId).HasConstraintName("electro_computer_mark");

            });

            modelBuilder.Entity<ElectroComputerMarks>(entity => {

                entity.ToTable("electro_computer_marks");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.Name).HasColumnName("name");
                entity.Property(w => w.CategoryId).HasColumnName("categoryId");

                entity.HasOne(w => w.Category).WithMany(w => w.ComputerMarks)
                      .HasForeignKey(w=>w.CategoryId).HasConstraintName("electro_computer_category");
            });

            modelBuilder.Entity<ElectroCategories>(entity => {

                entity.ToTable("electro_categories");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.Name).HasColumnName("name");
                entity.Property(w => w.ActivateType).HasColumnName("activateType");
                entity.Property(w => w.ActivatePhoneMark).HasColumnName("activatePhoneMark");
                entity.Property(w => w.ActivateOperator).HasColumnName("activateOperator");
                entity.Property(w => w.ActivateComputerMark).HasColumnName("activateComputerMark");
            
            });

            modelBuilder.Entity<ElectroOperators>(entity => {

                entity.ToTable("electro_operators");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.Name).HasColumnName("name");
                entity.Property(w => w.CategoryId).HasColumnName("categoryId");

                entity.HasOne(w => w.Category).WithMany(w => w.Operators)
                      .HasForeignKey(w => w.CategoryId).HasConstraintName("electro_category_operator");

            });

            modelBuilder.Entity<ElectroTypes>(entity => {

                entity.ToTable("electro_types");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.Name).HasColumnName("name");
                entity.Property(w => w.CategoryId).HasColumnName("categoryId");

                entity.HasOne(w => w.Category).WithMany(w => w.Types).HasForeignKey(w => w.CategoryId).HasConstraintName("electro_ad_type");


            });

            modelBuilder.Entity<ElectroPhoneMarks>(entity => {

                entity.ToTable("electro_phone_marks");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.Name).HasColumnName("name");
                entity.Property(w => w.CategoryId).HasColumnName("categoryId");

                entity.HasOne(w => w.Category).WithMany(w => w.Marks).HasForeignKey(w => w.CategoryId)
                      .HasConstraintName("electro_category_mark");

            });

            modelBuilder.Entity<ElectroPhoneModels>(entity => {

                entity.ToTable("electro_phone_models");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.Name).HasColumnName("name");
                entity.Property(w => w.MarkId).HasColumnName("markId");

                entity.HasOne(w => w.Mark).WithMany(w => w.Models).HasForeignKey(w => w.MarkId).HasConstraintName("electro_phone_mark_model");

            });

            modelBuilder.Entity<ElectroPhoneColors>(entity => {

                entity.ToTable("electro_phone_colors");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.Name).HasColumnName("name");
                entity.Property(w => w.ModelId).HasColumnName("modelId");

                entity.HasOne(w => w.Model).WithMany(w => w.Colors).HasForeignKey(w => w.ModelId).HasConstraintName("electro_phone_model_color");

            });

            modelBuilder.Entity<ElectroPhoneStorages>(entity => {

                entity.ToTable("electro_phone_storages");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.Name).HasColumnName("name");
                entity.Property(w => w.ModelId).HasColumnName("modelId");

                entity.HasOne(w => w.Model).WithMany(w => w.Storages).HasForeignKey(w => w.ModelId).HasConstraintName("electro_phone_model_storage");

            });


            modelBuilder.Entity<ElectroPhotos>(entity => {

                entity.ToTable("electro_photos");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.ImagePath).HasColumnName("imagePath");
                entity.Property(w => w.AdId).HasColumnName("adId");
                entity.Property(w => w.PrimaryImage).HasColumnName("primaryImage");
                entity.Property(w => w.Thumbnail).HasColumnName("thumbnail");
                entity.Property(e => e.Blur).HasColumnName("blur");

                entity.HasOne(w => w.Ad).WithMany(w => w.Photos)
                      .HasForeignKey(w => w.AdId).HasConstraintName("electro_ad_photo");

                entity.HasOne(w => w.ViewAd).WithMany(w => w.Images).HasForeignKey(w => w.AdId);

            });


            modelBuilder.Entity<ElectroContacts>(entity => {

                entity.ToTable("electro_contacts");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.Name).HasColumnName("name");
                entity.Property(w => w.Email).HasColumnName("email");
                entity.Property(w => w.PhoneNumber).HasColumnName("phoneNumber");
                entity.Property(w => w.IsWp).HasColumnName("isWp");
                entity.Property(w => w.IsCall).HasColumnName("isCall");
                entity.Property(w => w.Timespan).HasColumnName("timespan");


            });

            modelBuilder.Entity<ElectroLogs>(entity => {

                entity.ToTable("electro_logs");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.CreatedDate).HasColumnName("createdDate");
                entity.Property(w => w.ModifiedDate).HasColumnName("modifiedDate");
                entity.Property(w => w.FromDate).HasColumnName("fromDate");
                entity.Property(w => w.TillDate).HasColumnName("tillDate");

            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
