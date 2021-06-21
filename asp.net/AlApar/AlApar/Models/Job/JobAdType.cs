using System;
using System.Collections.Generic;

#nullable disable

namespace AlApar.Models.Job
{
    public partial class JobAdType
    {
        public JobAdType()
        {
            JobAds = new HashSet<JobAd>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public bool? CategoryId { get; set; }
        public bool? EducationId { get; set; }
        public bool? PracticeId { get; set; }
        public bool? CityId { get; set; }
        public bool? Role { get; set; }
        public bool? MinWage { get; set; }
        public bool? MaxWage { get; set; }
        public bool? MinAge { get; set; }
        public bool? MaxAge { get; set; }
        public bool? AboutReq { get; set; }
        public bool? AboutJob { get; set; }
        public bool? CompanyName { get; set; }
        public bool? ContactName { get; set; }
        public bool? EmployeeName { get; set; }
        public bool? EmployeeSurname { get; set; }
        public bool? EmployeeFatherName { get; set; }
        public bool? EmployeeIsGirl { get; set; }
        public bool? EmployeeAboutEducation { get; set; }
        public bool? EmployeeAboutPractic { get; set; }
        public bool? EmployeeSkills { get; set; }
        public bool? EmployeeAboutExtra { get; set; }

        public virtual ICollection<JobAd> JobAds { get; set; }
    }
}
