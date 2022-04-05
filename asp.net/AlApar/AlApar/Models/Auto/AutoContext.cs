using AlApar.Models.Auto.View;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Auto
{
    public partial class AutoContext : DbContext
    {
        public AutoContext()
        {

        }

        public AutoContext(DbContextOptions<AutoContext> options) : base(options)
        {

        }

        public virtual DbSet<ViewAutoAds> ViewAutoAds { get; set; }
        public virtual DbSet<AutoAdLogs> AutoAdLogs { get; set; }
        public virtual DbSet<AutoAds> AutoAds { get; set; }
        public virtual DbSet<AutoBanTypes> AutoBanTypes { get; set; }
        public virtual DbSet<AutoColors> AutoColors { get; set; }
        public virtual DbSet<AutoContacts> AutoContacts { get; set; }
        public virtual DbSet<AutoFuels> AutoFuels { get; set; }
        public virtual DbSet<AutoMarks> AutoMarks { get; set; }
        public virtual DbSet<AutoModels> AutoModels { get; set; }
        public virtual DbSet<AutoPhotos> AutoPhotos { get; set; }
        public virtual DbSet<AutoTransmissionBoxs> AutoTransmissionBoxs { get; set; }
        public virtual DbSet<AutoTransmitters> AutoTransmitters { get; set; }
        public virtual DbSet<Cities> Cities { get; set; }
        public virtual DbSet<Currency> Currencies { get; set; }
        public virtual DbSet<AdStatuses> AdStatuses { get; set; }
        public virtual DbSet<AdPackages> AdPackages { get; set; }
        public virtual DbSet<LastSharedTimes> LastSharedTimes { get; set; }
        public virtual DbSet<SellTypes> SellTypes { get; set; }
        public virtual DbSet<AutoRentPaymentTypes> AutoRentPaymentTypes { get; set; }

        public virtual DbSet<AutoTypes> AutoTypes { get; set; }

        public virtual DbSet<AutoStory> AutoStories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            GeneralModels.generateGeneralModels(in modelBuilder);

            modelBuilder.Entity<AutoAdLogs>(entity => {

                entity.ToTable("auto_ad_logs");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.CreatedDate).HasColumnName("createdDate");
                entity.Property(w => w.ModifiedDate).HasColumnName("modifiedDate");
                entity.Property(w => w.FromDate).HasColumnName("fromDate");
                entity.Property(w => w.TillDate).HasColumnName("tillDate");

            });

            modelBuilder.Entity<AutoBanTypes>(entity => {

                entity.ToTable("auto_ban_types");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.Name).HasColumnName("name");

            });

            modelBuilder.Entity<AutoColors>(entity => {

                entity.ToTable("auto_colors");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.Name).HasColumnName("name");

            });

            modelBuilder.Entity<AutoFuels>(entity => {

                entity.ToTable("auto_fuels");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.Name).HasColumnName("name");

            });

            modelBuilder.Entity<AutoMarks>(entity => {

                entity.ToTable("auto_marks");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.Name).HasColumnName("name");

            });

            modelBuilder.Entity<AutoTransmissionBoxs>(entity => {

                entity.ToTable("auto_transmission_boxs");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.Name).HasColumnName("name");

            });

            modelBuilder.Entity<AutoTransmitters>(entity => {

                entity.ToTable("auto_transmitters");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.Name).HasColumnName("name");

            });

            modelBuilder.Entity<AutoModels>(entity => {

                entity.ToTable("auto_models");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.Name).HasColumnName("name");
                entity.Property(w => w.MarkId).HasColumnName("markId");
                entity.Property(w => w.Title).HasColumnName("title");

                entity.HasOne(w => w.Mark).WithMany(w => w.AutoModels)
                      .HasForeignKey(w => w.MarkId).HasConstraintName("auto_mark_model");

            });

            modelBuilder.Entity<AutoPhotos>(entity => {

                entity.ToTable("auto_photos");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.ImagePath).HasColumnName("imagePath");
                entity.Property(w => w.AdId).HasColumnName("adId");
                entity.Property(w => w.PrimaryImage).HasColumnName("primaryImage");
                entity.Property(w => w.Thumbnail).HasColumnName("thumbnail");
                entity.Property(e => e.Blur).HasColumnName("blur");

                entity.HasOne(w => w.AutoAd).WithMany(w => w.AutoPhotos)
                      .HasForeignKey(w => w.AdId).HasConstraintName("auto_ad_photo");

                entity.HasOne(w => w.ViewAutoAd).WithMany(w => w.Images)
                      .HasForeignKey(w => w.AdId);

            });


            modelBuilder.Entity<AutoContacts>(entity => {

                entity.ToTable("auto_contacts");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.Name).HasColumnName("name");
                entity.Property(w => w.Email).HasColumnName("email");
                entity.Property(w => w.PhoneNumber).HasColumnName("phoneNumber");
                entity.Property(w => w.IsWp).HasColumnName("isWp");
                entity.Property(w => w.IsCall).HasColumnName("isCall");
                entity.Property(w => w.Timespan).HasColumnName("timespan");


            });



            modelBuilder.Entity<AutoAds>(entity => {

                entity.ToTable("auto_ads");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.PrivateId).HasColumnName("privateId");
                entity.Property(w => w.Viewed).HasColumnName("viewed");
                entity.Property(w => w.Title).HasColumnName("title");
                entity.Property(w => w.LogId).HasColumnName("logId");
                entity.Property(w => w.StatusId).HasColumnName("statusId");
                entity.Property(w => w.PackageId).HasColumnName("packageId");
                entity.Property(w => w.CategoryId).HasColumnName("markId");
                entity.Property(w => w.ModelId).HasColumnName("modelId");
                entity.Property(w => w.BanTypeId).HasColumnName("banTypeId");
                entity.Property(w => w.CurrencyId).HasColumnName("currencyId");
                entity.Property(w => w.ColorId).HasColumnName("colorId");
                entity.Property(w => w.FuelId).HasColumnName("fuelId");
                entity.Property(w => w.TransmitterId).HasColumnName("transmitterId");
                entity.Property(w => w.TransmissionBoxId).HasColumnName("transmissionBoxId");
                entity.Property(w => w.ContactId).HasColumnName("contactId");
                entity.Property(w => w.CarYear).HasColumnName("carYear");
                entity.Property(w => w.Mileage).HasColumnName("mileage");
                entity.Property(w => w.Price).HasColumnName("price");
                entity.Property(w => w.MotorPower).HasColumnName("motorPower");
                entity.Property(w => w.MotorCapacity).HasColumnName("motorCapacity");
                entity.Property(w => w.About).HasColumnName("about");
                entity.Property(w => w.Kredit).HasColumnName("kredit");
                entity.Property(w => w.Barter).HasColumnName("barter");

                entity.Property(w => w.SellTypeId).HasColumnName("sellTypeId");
                entity.Property(w => w.RentPaymentTypeId).HasColumnName("rentPaymentTypeId");

                entity.Property(w => w.Abs).HasColumnName("abs");
                entity.Property(w => w.YungulDisk).HasColumnName("yungulDisk");
                entity.Property(w => w.Lyuk).HasColumnName("lyuk");
                entity.Property(w => w.YagisSensor).HasColumnName("yagisSensor");
                entity.Property(w => w.MerkeziQapanma).HasColumnName("merkeziQapanma");
                entity.Property(w => w.ParkRadar).HasColumnName("parkRadar");
                entity.Property(w => w.Kondisioner).HasColumnName("kondisioner");
                entity.Property(w => w.OturacaqIsitme).HasColumnName("oturacaqIsitme");
                entity.Property(w => w.DeriSalon).HasColumnName("deriSalon");
                entity.Property(w => w.YanPerde).HasColumnName("yanPerde");
                entity.Property(w => w.OturacaqVentilyasiya).HasColumnName("oturacaqVentilyasiya");
                entity.Property(w => w.KsenonLampa).HasColumnName("ksenonLampa");
                entity.Property(w => w.ArxaKamera).HasColumnName("arxaKamera");
                entity.Property(w => w.BortKomputer).HasColumnName("bortKomputer");
                entity.Property(w => w.Esp).HasColumnName("esp");
                entity.Property(w => w.KruizKontrol).HasColumnName("kruizKontrol");
                entity.Property(w => w.StartStopSistem).HasColumnName("startStopSistem");
                entity.Property(w => w.TypeId).HasColumnName("typeId");


                entity.HasOne(w => w.BanType).WithMany(w => w.AutoAds)
                      .HasForeignKey(w => w.BanTypeId).HasConstraintName("auto_ad_ban");
                
                entity.HasOne(w => w.RentPaymentType).WithMany(w => w.AutoAds)
                      .HasForeignKey(w => w.BanTypeId).HasConstraintName("auto_ad_rentpayment");

                entity.HasOne(w => w.SellType).WithMany(w => w.AutoAd)
                      .HasForeignKey(w => w.BanTypeId).HasConstraintName("auto_ad_selltype");

                entity.HasOne(w => w.Color).WithMany(w => w.AutoAds)
                      .HasForeignKey(w => w.ColorId).HasConstraintName("auto_ad_color");

                entity.HasOne(w => w.Contact).WithMany(w => w.AutoAds)
                      .HasForeignKey(w => w.ContactId).HasConstraintName("auto_ad_contract");

                entity.HasOne(w => w.Currency).WithMany(w => w.AutoAds)
                      .HasForeignKey(w => w.CurrencyId).HasConstraintName("auto_ad_currency");

                entity.HasOne(w => w.Fuel).WithMany(w => w.AutoAds)
                      .HasForeignKey(w => w.FuelId).HasConstraintName("auto_ad_fuel");

                entity.HasOne(w => w.Log).WithMany(w => w.AutoAds)
                      .HasForeignKey(w => w.LogId).HasConstraintName("auto_ad_log");

                entity.HasOne(w => w.Mark).WithMany(w => w.AutoAds)
                      .HasForeignKey(w => w.CategoryId).HasConstraintName("auto_ad_mark");

                entity.HasOne(w => w.Model).WithMany(w => w.AutoAds)
                      .HasForeignKey(w => w.ModelId).HasConstraintName("auto_ad_model");

                entity.HasOne(w => w.Package).WithMany(w => w.AutoAds)
                      .HasForeignKey(w => w.PackageId).HasConstraintName("auto_ad_package");

                entity.HasOne(w => w.Status).WithMany(w => w.AutoAds)
                      .HasForeignKey(w => w.StatusId).HasConstraintName("auto_ad_status");

                entity.HasOne(w => w.TransmissionBox).WithMany(w => w.AutoAds)
                      .HasForeignKey(w => w.TransmissionBoxId).HasConstraintName("auto_ad_transmission_box");

                entity.HasOne(w => w.Transmitter).WithMany(w => w.AutoAds)
                      .HasForeignKey(w => w.TransmitterId).HasConstraintName("auto_ad_transmitter");

            });


            modelBuilder.Entity<AutoRentPaymentTypes>(entity =>
            {
                entity.ToTable("auto_rentPaymentTypes");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(255);

                entity.HasOne(w => w.SellType)
                    .WithMany(w => w.AutoRentPaymentTypes)
                    .HasForeignKey(w => w.RentId)
                    .HasConstraintName("payment_selltypes");
            });


            modelBuilder.Entity<ViewAutoAds>(entity=> {

                entity.ToView("View_Auto_Ads");

                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.Viewed).HasColumnName("viewed");
                entity.Property(w => w.Title).HasColumnName("title");
                entity.Property(w => w.StatusId).HasColumnName("statusId");
                entity.Property(w => w.PackageId).HasColumnName("packageId");
                entity.Property(w => w.CategoryId).HasColumnName("markId");
                entity.Property(w => w.ModelId).HasColumnName("modelId");
                entity.Property(w => w.BanTypeId).HasColumnName("banTypeId");
                entity.Property(w => w.CurrencyId).HasColumnName("currencyId");
                entity.Property(w => w.ColorId).HasColumnName("colorId");
                entity.Property(w => w.FuelId).HasColumnName("fuelId");
                entity.Property(w => w.TransmitterId).HasColumnName("transmitterId");
                entity.Property(w => w.TransmissionBoxId).HasColumnName("transmissionBoxId");
                entity.Property(w => w.CarYear).HasColumnName("carYear");
                entity.Property(w => w.Mileage).HasColumnName("mileage");
                entity.Property(w => w.Price).HasColumnName("price");
                entity.Property(w => w.MotorPower).HasColumnName("motorPower");
                entity.Property(w => w.MotorCapacity).HasColumnName("motorCapacity");
                entity.Property(w => w.About).HasColumnName("about");
                entity.Property(w => w.Kredit).HasColumnName("kredit");
                entity.Property(w => w.Barter).HasColumnName("barter");


                entity.Property(w => w.Mark).HasColumnName("Mark");
                entity.Property(w => w.Model).HasColumnName("Model");
                entity.Property(w => w.ModelTitle).HasColumnName("ModelTitle");
                entity.Property(w => w.BanType).HasColumnName("BanType");
                entity.Property(w => w.Color).HasColumnName("Color");
                entity.Property(w => w.Fuel).HasColumnName("Fuel");
                entity.Property(w => w.Transmitter).HasColumnName("Transmitter");

                entity.Property(w => w.Name).HasColumnName("name");
                entity.Property(w => w.Email).HasColumnName("email");
                entity.Property(w => w.PhoneNumber).HasColumnName("phoneNumber");
                entity.Property(w => w.IsWp).HasColumnName("isWp");
                entity.Property(w => w.IsCall).HasColumnName("isCall");

                entity.Property(w => w.CityName).HasColumnName("cityName");
                entity.Property(w => w.CityId).HasColumnName("CityId");
                entity.Property(w => w.LogId).HasColumnName("logId");
                entity.Property(w => w.ModifiedDate).HasColumnName("modifiedDate");

                entity.Property(w => w.Abs).HasColumnName("abs");
                entity.Property(w => w.YungulDisk).HasColumnName("yungulDisk");
                entity.Property(w => w.Lyuk).HasColumnName("lyuk");
                entity.Property(w => w.YagisSensor).HasColumnName("yagisSensor");
                entity.Property(w => w.MerkeziQapanma).HasColumnName("merkeziQapanma");
                entity.Property(w => w.ParkRadar).HasColumnName("parkRadar");
                entity.Property(w => w.Kondisioner).HasColumnName("kondisioner");
                entity.Property(w => w.OturacaqIsitme).HasColumnName("oturacaqIsitme");
                entity.Property(w => w.DeriSalon).HasColumnName("deriSalon");
                entity.Property(w => w.YanPerde).HasColumnName("yanPerde");
                entity.Property(w => w.OturacaqVentilyasiya).HasColumnName("oturacaqVentilyasiya");
                entity.Property(w => w.KsenonLampa).HasColumnName("ksenonLampa");
                entity.Property(w => w.ArxaKamera).HasColumnName("arxaKamera");
                entity.Property(w => w.BortKomputer).HasColumnName("bortKomputer");
                entity.Property(w => w.Esp).HasColumnName("esp");
                entity.Property(w => w.KruizKontrol).HasColumnName("kruizKontrol");
                entity.Property(w => w.StartStopSistem).HasColumnName("startStopSistem");

            });

            OnModelCreatingPartial(modelBuilder);
        }
        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
