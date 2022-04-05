using AlApar.Models.Animal;
using AlApar.Models.Animal.View;
using AlApar.Models.Auth;
using AlApar.Models.Auto;
using AlApar.Models.Auto.View;
using AlApar.Models.Bina;
using AlApar.Models.Bina.Views;
using AlApar.Models.Child;
using AlApar.Models.Child.Views;
using AlApar.Models.Electro;
using AlApar.Models.Electro.Views;
using AlApar.Models.Hobby;
using AlApar.Models.Hobby.Views;
using AlApar.Models.Home;
using AlApar.Models.Home.View;
using AlApar.Models.Job;
using AlApar.Models.Job.Views;
using AlApar.Models.Private;
using AlApar.Models.Private.View;
using AlApar.Models.Service;
using AlApar.Models.Service.Views;
using AlApar.Models.View;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models
{


    [Table("Users")]
    public class Users
    {
        public Users() 
        {
            RefreshTokens = new HashSet<RefreshTokens>();
            ViewAnimals = new HashSet<ViewAnimalAd>();
            ViewAutos = new HashSet<ViewAutoAds>();
            ViewBinas = new HashSet<ViewBinaPersonalGeneral>();
            ViewChilds = new HashSet<ViewChildAd>();
            ViewElectros = new HashSet<ViewElectroAds>();
            ViewHobbys = new HashSet<ViewHobbyAd>();
            ViewHomes = new HashSet<ViewHomeAd>();
            ViewJobs = new HashSet<ViewJobAds>();
            ViewPrivates = new HashSet<ViewPrivateAd>();
            ViewServices = new HashSet<ViewServiceAd>();

            AnimalStories = new HashSet<AnimalStory>();
            AutoStories = new HashSet<AutoStory>();
            BinaStories = new HashSet<BinaStory>();
            ChildStories = new HashSet<ChildStory>();
            ElectroStories = new HashSet<ElectroStory>();
            HobbyStories = new HashSet<HobbyStory>();
            HomeStories = new HashSet<HomeStory>();
            JobStories = new HashSet<JobStory>();
            PrivateStories = new HashSet<PrivateStory>();
            ServiceStories = new HashSet<ServiceStory>();


            ChatUsers = new HashSet<ChatUsers>();
            UserMessages = new HashSet<Messages>();

        }


        public long Id { get; set; }

        [JsonIgnore]
        public string PrivateId { get; set; }
        public string PublicId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }

        [JsonIgnore]
        public string Password { get; set; }

        [JsonIgnore]
        public string Salt { get; set; }
        
        [JsonIgnore]
        public DateTime? CreatedDate { get; set; } = DateTime.UtcNow;
        
        [JsonIgnore]
        public DateTime? ModifiedDate { get; set; } = DateTime.UtcNow;
        
        [Column("role", TypeName= "varchar(50)")]
        public string Role { get; set; }

        [Column("accountType", TypeName = "varchar(50)")]
        public string AccountType { get; set; }

        [Column("status", TypeName = "varchar(50)")]
        public string Status { get; set; }

        public long? WalletId { get; set; }
        public long? BusinessAccountId { get; set; }

        [JsonProperty("limitless")]
        public bool? Limitless { get; set; } = false;

        [JsonProperty("limitlessDuration")]
        public DateTime? LimitlessDuration { get; set; }


        [InverseProperty("User")]
        [JsonIgnore]
        public virtual ICollection<RefreshTokens> RefreshTokens { get; set; }

        [ForeignKey("WalletId")]
        public virtual Wallets Wallet { get; set; }
        
        [ForeignKey("BusinessAccountId")]
        public virtual BusinessAccounts BusinessAccount { get; set; }


        [InverseProperty("User")]
        [JsonIgnore]
        public virtual BinaAds BinaAd { get; set; }

        [InverseProperty("User")]
        [JsonIgnore]
        public virtual AutoAds AutoAd { get; set; }

        [InverseProperty("User")]
        [JsonIgnore]
        public virtual ElectroAds ElectroAd { get; set; }

        [InverseProperty("User")]
        [JsonIgnore]
        public virtual HobbyAd HobbyAd { get; set; }

        [InverseProperty("User")]
        [JsonIgnore]
        public virtual AnimalAd AnimalAd { get; set; }

        [InverseProperty("User")]
        [JsonIgnore]
        public virtual HomeAd HomeAd { get; set; }

        [InverseProperty("User")]
        [JsonIgnore]
        public virtual PrivateAd PrivateAd { get; set; }

        [InverseProperty("User")]
        [JsonIgnore]
        public virtual ServiceAd ServiceAd { get; set; }

        [InverseProperty("User")]
        [JsonIgnore]
        public virtual ChildAd ChildAd { get; set; }

        [InverseProperty("User")]
        [JsonIgnore]
        public virtual JobAd JobAd { get; set; }

        [InverseProperty("User")]
        [JsonIgnore]
        public virtual ICollection<ViewAnimalAd> ViewAnimals { get; set; }

        [InverseProperty("User")]
        [JsonIgnore]
        public virtual ICollection<ViewAutoAds> ViewAutos { get; set; }

        [InverseProperty("User")]
        [JsonIgnore]
        public virtual ICollection<ViewBinaPersonalGeneral> ViewBinas { get; set; }

        [InverseProperty("User")]
        [JsonIgnore]
        public virtual ICollection<ViewChildAd> ViewChilds { get; set; }

        [InverseProperty("User")]
        [JsonIgnore]
        public virtual ICollection<ViewElectroAds> ViewElectros { get; set; }

        [InverseProperty("User")]
        [JsonIgnore]
        public virtual ICollection<ViewHobbyAd> ViewHobbys { get; set; }

        [InverseProperty("User")]
        [JsonIgnore]
        public virtual ICollection<ViewHomeAd> ViewHomes { get; set; }

        [InverseProperty("User")]
        [JsonIgnore]
        public virtual ICollection<ViewJobAds> ViewJobs { get; set; }

        [InverseProperty("User")]
        [JsonIgnore]
        public virtual ICollection<ViewPrivateAd> ViewPrivates { get; set; }

        [InverseProperty("User")]
        [JsonIgnore]
        public virtual ICollection<ViewServiceAd> ViewServices { get; set; }


        /***********/

        [InverseProperty("User")]
        [JsonIgnore]
        public virtual ICollection<AnimalStory> AnimalStories { get; set; }

        [InverseProperty("User")]
        [JsonIgnore]
        public virtual ICollection<AutoStory> AutoStories { get; set; }

        [InverseProperty("User")]
        [JsonIgnore]
        public virtual ICollection<BinaStory> BinaStories { get; set; }

        [InverseProperty("User")]
        [JsonIgnore]
        public virtual ICollection<ChildStory> ChildStories { get; set; }

        [InverseProperty("User")]
        [JsonIgnore]
        public virtual ICollection<ElectroStory> ElectroStories { get; set; }

        [InverseProperty("User")]
        [JsonIgnore]
        public virtual ICollection<HobbyStory> HobbyStories { get; set; }

        [InverseProperty("User")]
        [JsonIgnore]
        public virtual ICollection<HomeStory> HomeStories { get; set; }

        [InverseProperty("User")]
        [JsonIgnore]
        public virtual ICollection<JobStory> JobStories { get; set; }

        [InverseProperty("User")]
        [JsonIgnore]
        public virtual ICollection<PrivateStory> PrivateStories { get; set; }

        [InverseProperty("User")]
        [JsonIgnore]
        public virtual ICollection<ServiceStory> ServiceStories { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<ChatUsers> ChatUsers { get; set; }
        
        [InverseProperty("User")]
        public virtual ICollection<Messages> UserMessages { get; set; }
    }
}
