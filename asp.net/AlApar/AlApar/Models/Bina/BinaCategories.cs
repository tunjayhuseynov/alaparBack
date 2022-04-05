using AlApar.Classes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace AlApar.Models.Bina
{
    public partial class BinaCategories : TCategory
    {
        public BinaCategories()
        {
            BinaAdsPersonal = new HashSet<BinaAds>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public bool? BuildingFloor { get; set; }
        public bool? RoomAmount { get; set; }
        public bool? Floor { get; set; }
        public bool? LandAppointment { get; set; }
        public bool? Icare { get; set; }
        public bool? Belediyye { get; set; }
        public bool? Hamam { get; set; }
        public bool? Eyvan { get; set; }
        public bool? Lift { get; set; }
        public bool? Metbex { get; set; }
        public bool? Temir { get; set; }
        public bool? Hovuz { get; set; }
        public bool? Qaz { get; set; }
        public bool? Su { get; set; }
        public bool? Isig { get; set; }
        public bool? Kanalizasiya { get; set; }
        public bool? Barter { get; set; }
        public int? RentalProİd { get; set; }
        public string AreaUnit { get; set; }
        public string Subname { get; set; }
        public bool? SecondArea { get; set; }
        public bool? HouseFloor { get; set; }

        [Column("madeinHouse")]
        public bool? MadeinHouse { get; set; }

        [Column("centralHeatingSystem")]
        public bool? CentralHeatingSystem { get; set; }

        [Column("parkingArea")]
        public bool? ParkingArea { get; set; }

        [Column("cableTv")]
        public bool? CabelTv { get; set; }

        [Column("pvcWindow")]
        public bool? PVCWindow { get; set; }

        [Column("combi")]
        public bool? Combi { get; set; }

        [Column("kondisoner")]
        public bool? Kondisoner { get; set; }

        [Column("garaj")]
        public bool? Garaj { get; set; }

        public virtual ICollection<BinaAds> BinaAdsPersonal { get; set; }
        public virtual BinaRentalProps RentalPros { get; set; }
    }
}
