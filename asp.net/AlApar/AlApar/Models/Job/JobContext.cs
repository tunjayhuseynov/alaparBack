using System;
using AlApar.Models.Job.Views;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace AlApar.Models.Job
{
    public partial class JobContext : DbContext
    {
        public JobContext()
        {
        }

        public JobContext(DbContextOptions<JobContext> options)
            : base(options)
        {
        }

        public virtual DbSet<JobAd> JobAds { get; set; }
        public virtual DbSet<JobAdType> JobAdTypes { get; set; }
        public virtual DbSet<JobCategory> JobCategories { get; set; }
        public virtual DbSet<JobContact> JobContacts { get; set; }
        public virtual DbSet<JobEducation> JobEducations { get; set; }
        public virtual DbSet<JobEmployeePhoto> JobEmployeePhotos { get; set; }
        public virtual DbSet<JobLog> JobLogs { get; set; }
        public virtual DbSet<JobPracticeDuration> JobPracticeDurations { get; set; }
        public virtual DbSet<ViewJobAds> ViewJobAds { get; set; }
        public virtual DbSet<LastSharedTimes> LastSharedTimes { get; set; }


        public virtual DbSet<Cities> Cities { get; set; }
        public virtual DbSet<Regions> Regions { get; set; }
        public virtual DbSet<Villages> Villages { get; set; }
        public virtual DbSet<Currency> Currency { get; set; }
        public virtual DbSet<AdStatuses> AdStatuses { get; set; } 
        public virtual DbSet<AdPackages> AdPackages { get; set; } 

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            GeneralModels.generateGeneralModels(in modelBuilder);

            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<JobAd>(entity =>
            {
                entity.ToTable("job_ads");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.AboutJob).HasColumnName("aboutJob");

                entity.Property(e => e.AboutReq).HasColumnName("aboutReq");

                entity.Property(e => e.CategoryId).HasColumnName("categoryId");

                entity.Property(e => e.CityId).HasColumnName("cityId");

                entity.Property(e => e.CompanyName)
                    .HasMaxLength(50)
                    .HasColumnName("companyName");

                entity.Property(e => e.ContactId).HasColumnName("contactId");

                entity.Property(e => e.ContactName)
                    .HasMaxLength(50)
                    .HasColumnName("contactName");

                entity.Property(e => e.EducationId).HasColumnName("educationId");

                entity.Property(e => e.EmployeeAboutEducation).HasColumnName("employeeAboutEducation");

                entity.Property(e => e.EmployeeAboutExtra).HasColumnName("employeeAboutExtra");

                entity.Property(e => e.EmployeeAboutPractic).HasColumnName("employeeAboutPractic");

                entity.Property(e => e.EmployeeFatherName)
                    .HasMaxLength(50)
                    .HasColumnName("employeeFatherName");

                entity.Property(e => e.EmployeeIsGirl).HasColumnName("employeeIsGirl");

                entity.Property(e => e.EmployeeName)
                    .HasMaxLength(50)
                    .HasColumnName("employeeName");

                entity.Property(e => e.EmployeeSkills).HasColumnName("employeeSkills");

                entity.Property(e => e.EmployeeSurname)
                    .HasMaxLength(50)
                    .HasColumnName("employeeSurname");

                entity.Property(e => e.LogId).HasColumnName("logId");

                entity.Property(e => e.MaxAge).HasColumnName("maxAge");

                entity.Property(e => e.MaxWage).HasColumnName("maxWage");

                entity.Property(e => e.MinAge).HasColumnName("minAge");

                entity.Property(e => e.MinWage).HasColumnName("minWage");

                entity.Property(e => e.PackageId).HasColumnName("packageId");

                entity.Property(e => e.PracticeId).HasColumnName("practiceId");

                entity.Property(e => e.PrivateId)
                    .HasMaxLength(50)
                    .HasColumnName("privateId");

                entity.Property(e => e.Role)
                    .HasMaxLength(50)
                    .HasColumnName("role");

                entity.Property(e => e.StatusId).HasColumnName("statusId");

                entity.Property(e => e.TypeId).HasColumnName("typeId");

                entity.Property(e => e.Viewed).HasColumnName("viewed");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.JobAds)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("job_ad_category");

                entity.HasOne(d => d.Contact)
                    .WithMany(p => p.JobAds)
                    .HasForeignKey(d => d.ContactId)
                    .HasConstraintName("job_ad_contact");

                entity.HasOne(d => d.Education)
                    .WithMany(p => p.JobAds)
                    .HasForeignKey(d => d.EducationId)
                    .HasConstraintName("job_ad_education");

                entity.HasOne(d => d.Log)
                    .WithMany(p => p.JobAds)
                    .HasForeignKey(d => d.LogId)
                    .HasConstraintName("job_ad_log");

                entity.HasOne(d => d.Practice)
                    .WithMany(p => p.JobAds)
                    .HasForeignKey(d => d.PracticeId)
                    .HasConstraintName("job_ad_practice");

                entity.HasOne(d => d.Type)
                    .WithMany(p => p.JobAds)
                    .HasForeignKey(d => d.TypeId)
                    .HasConstraintName("job_ad_type");

                entity.HasOne(d => d.City)
                    .WithMany(p => p.JobAds)
                    .HasForeignKey(d => d.CityId)
                    .HasConstraintName("job_ad_city");

                entity.HasOne(d => d.Status)
                    .WithMany(p => p.JobAds)
                    .HasForeignKey(d => d.StatusId)
                    .HasConstraintName("job_ad_status");

                entity.HasOne(d => d.Package)
                    .WithMany(p => p.JobAds)
                    .HasForeignKey(d => d.PackageId)
                    .HasConstraintName("job_ad_package");
            });

            modelBuilder.Entity<JobAdType>(entity =>
            {
                entity.ToTable("job_ad_types");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.AboutJob).HasColumnName("aboutJob");

                entity.Property(e => e.AboutReq).HasColumnName("aboutReq");

                entity.Property(e => e.CategoryId).HasColumnName("categoryId");

                entity.Property(e => e.CityId).HasColumnName("cityId");

                entity.Property(e => e.CompanyName)
                    .HasMaxLength(50)
                    .HasColumnName("companyName");

                entity.Property(e => e.ContactName)
                    .HasMaxLength(50)
                    .HasColumnName("contactName");

                entity.Property(e => e.EducationId).HasColumnName("educationId");

                entity.Property(e => e.EmployeeAboutEducation).HasColumnName("employeeAboutEducation");

                entity.Property(e => e.EmployeeAboutExtra).HasColumnName("employeeAboutExtra");

                entity.Property(e => e.EmployeeAboutPractic).HasColumnName("employeeAboutPractic");

                entity.Property(e => e.EmployeeFatherName)
                    .HasMaxLength(50)
                    .HasColumnName("employeeFatherName");

                entity.Property(e => e.EmployeeIsGirl).HasColumnName("employeeIsGirl");

                entity.Property(e => e.EmployeeName)
                    .HasMaxLength(50)
                    .HasColumnName("employeeName");

                entity.Property(e => e.EmployeeSkills).HasColumnName("employeeSkills");

                entity.Property(e => e.EmployeeSurname)
                    .HasMaxLength(50)
                    .HasColumnName("employeeSurname");


                entity.Property(e => e.MaxAge).HasColumnName("maxAge");

                entity.Property(e => e.MaxWage).HasColumnName("maxWage");

                entity.Property(e => e.MinAge).HasColumnName("minAge");

                entity.Property(e => e.MinWage).HasColumnName("minWage");

                entity.Property(e => e.PracticeId).HasColumnName("practiceId");


                entity.Property(e => e.Role)
                    .HasMaxLength(50)
                    .HasColumnName("role");

            });

            modelBuilder.Entity<JobCategory>(entity =>
            {
                entity.ToTable("job_categories");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.Property(w => w.Title).HasColumnName("title");
            });

            modelBuilder.Entity<JobContact>(entity =>
            {
                entity.ToTable("job_contacts");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .HasColumnName("email");

                entity.Property(e => e.IsWp).HasColumnName("isWp");

                entity.Property(e => e.PhoneNumber1)
                    .HasMaxLength(50)
                    .HasColumnName("phoneNumber1");

                entity.Property(e => e.PhoneNumber2)
                    .HasMaxLength(50)
                    .HasColumnName("phoneNumber2");

                entity.Property(e => e.PhoneNumber3)
                    .HasMaxLength(50)
                    .HasColumnName("phoneNumber3");

                entity.Property(e => e.PhoneNumber4)
                    .HasMaxLength(50)
                    .HasColumnName("phoneNumber4");

                entity.Property(e => e.Timespan).HasColumnName("timespan");
            });

            modelBuilder.Entity<JobEducation>(entity =>
            {
                entity.ToTable("job_educations");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");
            });

            modelBuilder.Entity<JobEmployeePhoto>(entity =>
            {
                entity.ToTable("job_employee_photos");

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

                entity.HasOne(w => w.Ad).WithMany(w => w.Images).HasForeignKey(w => w.AdId).HasConstraintName("job_ad_photos");
                entity.HasOne(w => w.ViewJobAd).WithMany(w => w.Images).HasForeignKey(w => w.AdId);
            });

            modelBuilder.Entity<JobLog>(entity =>
            {
                entity.ToTable("job_logs");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CreatedDate).HasColumnName("createdDate");

                entity.Property(e => e.FromDate).HasColumnName("fromDate");

                entity.Property(e => e.ModifiedDate).HasColumnName("modifiedDate");

                entity.Property(e => e.TillDate).HasColumnName("tillDate");
            });

            modelBuilder.Entity<JobPracticeDuration>(entity =>
            {
                entity.ToTable("job_practice_durations");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");
            });

            modelBuilder.Entity<ViewJobAds>(entity => {

                entity.ToTable("View_Job_Ads");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.LogId).HasColumnName("logId");

                entity.Property(e => e.ModifiedDate).HasColumnName("modifiedDate");


                entity.Property(e => e.AboutJob).HasColumnName("aboutJob");

                entity.Property(e => e.AboutReq).HasColumnName("aboutReq");

                entity.Property(e => e.CategoryId).HasColumnName("categoryId");

                entity.Property(e => e.CityId).HasColumnName("cityId");

                entity.Property(e => e.CompanyName)
                    .HasMaxLength(50)
                    .HasColumnName("companyName");

                entity.Property(e => e.ContactId).HasColumnName("contactId");

                entity.Property(e => e.ContactName)
                    .HasMaxLength(50)
                    .HasColumnName("contactName");

                entity.Property(e => e.EducationId).HasColumnName("educationId");

                entity.Property(e => e.EmployeeAboutEducation).HasColumnName("employeeAboutEducation");

                entity.Property(e => e.EmployeeAboutExtra).HasColumnName("employeeAboutExtra");

                entity.Property(e => e.EmployeeAboutPractic).HasColumnName("employeeAboutPractic");

                entity.Property(e => e.EmployeeFatherName)
                    .HasMaxLength(50)
                    .HasColumnName("employeeFatherName");

                entity.Property(e => e.EmployeeIsGirl).HasColumnName("employeeIsGirl");

                entity.Property(e => e.EmployeeName)
                    .HasMaxLength(50)
                    .HasColumnName("employeeName");

                entity.Property(e => e.EmployeeSkills).HasColumnName("employeeSkills");

                entity.Property(e => e.EmployeeSurname)
                    .HasMaxLength(50)
                    .HasColumnName("employeeSurname");

                entity.Property(e => e.MaxAge).HasColumnName("maxAge");

                entity.Property(e => e.MaxWage).HasColumnName("maxWage");

                entity.Property(e => e.MinAge).HasColumnName("minAge");

                entity.Property(e => e.MinWage).HasColumnName("minWage");

                entity.Property(e => e.PackageId).HasColumnName("packageId");

                entity.Property(e => e.PracticeId).HasColumnName("practiceId");


                entity.Property(e => e.Role)
                    .HasMaxLength(50)
                    .HasColumnName("role");

                entity.Property(e => e.StatusId).HasColumnName("statusId");

                entity.Property(e => e.TypeId).HasColumnName("typeId");

                entity.Property(e => e.Viewed).HasColumnName("viewed");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .HasColumnName("email");

                entity.Property(e => e.IsWp).HasColumnName("isWp");

                entity.Property(e => e.PhoneNumber1)
                    .HasMaxLength(50)
                    .HasColumnName("phoneNumber1");

                entity.Property(e => e.PhoneNumber2)
                    .HasMaxLength(50)
                    .HasColumnName("phoneNumber2");

                entity.Property(e => e.PhoneNumber3)
                    .HasMaxLength(50)
                    .HasColumnName("phoneNumber3");

                entity.Property(e => e.PhoneNumber4)
                    .HasMaxLength(50)
                    .HasColumnName("phoneNumber4");

                entity.Property(e => e.CategoryName).HasColumnName("categoryName");
                entity.Property(e => e.EducationName).HasColumnName("educationName");
                entity.Property(e => e.CityName).HasColumnName("cityName");


            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
