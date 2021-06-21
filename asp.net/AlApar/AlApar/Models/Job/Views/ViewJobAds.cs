using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Job.Views
{
    public class ViewJobAds
    {
        public int Id { get; set; }
        public int? Viewed { get; set; }
        public int? StatusId { get; set; }
        public int? LogId { get; set; }
        public int? PackageId { get; set; }
        public int? TypeId { get; set; }
        public int? CategoryId { get; set; }
        public int? ContactId { get; set; }
        public int? EducationId { get; set; }
        public int? PracticeId { get; set; }
        public int? CityId { get; set; }
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

        public string CategoryName { get; set; }
        public string EducationName { get; set; }
        public string CityName { get; set; }

        public bool? IsWp { get; set; }
        public string PhoneNumber1 { get; set; }
        public string PhoneNumber2 { get; set; }
        public string PhoneNumber3 { get; set; }
        public string PhoneNumber4 { get; set; }
        public string Email { get; set; }

        public DateTime ModifiedDate { get; set; }


        public virtual ICollection<JobEmployeePhoto> Images { get; set; }

    }
}
