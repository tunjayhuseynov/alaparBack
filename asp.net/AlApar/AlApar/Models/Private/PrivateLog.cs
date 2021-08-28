﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace AlApar.Models.Private
{
    public partial class PrivateLog
    {
        public PrivateLog()
        {
            PrivateAds = new HashSet<PrivateAd>();
        }

        public int Id { get; set; }
        public DateTime? CreatedDate { get; set; } = DateTime.UtcNow;
        public DateTime? ModifiedDate { get; set; } = DateTime.UtcNow;
        public DateTime? FromDate { get; set; } = DateTime.UtcNow;
        public DateTime? TillDate { get; set; } = DateTime.UtcNow.AddMonths(1);

        [Column("userIpAdresses")]
        public string UserIpAdresses { get; set; } = "{ipAdresses: []}";

        public virtual ICollection<PrivateAd> PrivateAds { get; set; }
    }
}
