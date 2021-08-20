using AlApar.Classes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace AlApar.Models.Job
{
    public partial class JobAd
    {
        public JobAd()
        {
            Images = new HashSet<JobEmployeePhoto>();
        }
        public long Id { get; set; }
        public string PrivateId { get; set; }
        public int? Viewed { get; set; }
        public int? LogId { get; set; }
        public int? StatusId { get; set; }
        public int? PackageId { get; set; }
        public int? TypeId { get; set; }
        public int? CategoryId { get; set; }
        public int? ContactId { get; set; }
        public int? EducationId { get; set; }
        public int? PracticeId { get; set; }
        public int? CityId { get; set; }

        [Column("regionId")]
        public int? RegionId { get; set; }

        [Column("villageId")]
        public int? VillageId { get; set; }

        public string Role { get; set; }
        public int? MinWage { get; set; }
        public int? MaxWage { get; set; }
        public int? MinAge { get; set; }
        public int? MaxAge { get; set; }
        public string AboutReq { get; set; }
        public string AboutJob { get; set; }
        public string CompanyName { get; set; }
        public string ContactName { get; set; }
        public string EmployeeName { get; set; }
        public string EmployeeSurname { get; set; }
        public string EmployeeFatherName { get; set; }
        public bool? EmployeeIsGirl { get; set; }
        public string EmployeeAboutEducation { get; set; }
        public string EmployeeAboutPractic { get; set; }
        public string EmployeeSkills { get; set; }
        public string EmployeeAboutExtra { get; set; }

        public virtual JobCategory Category { get; set; }
        public virtual JobContact Contact { get; set; }
        public virtual JobEducation Education { get; set; }
        public virtual JobLog Log { get; set; }
        public virtual JobPracticeDuration Practice { get; set; }
        public virtual JobAdType Type { get; set; }
        public virtual Cities City { get; set; }
        
        [ForeignKey("VillageId")]
        public virtual Villages Village { get; set; }
        
        [ForeignKey("RegionId")]
        public virtual Regions Region { get; set; }
        public virtual AdPackages Package { get; set; }
        public virtual AdStatuses Status { get; set; }

        public virtual ICollection<JobEmployeePhoto> Images { get; set; }
    }
}
