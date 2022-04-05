using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models
{
    [Table("refresh_tokens")]
    public class RefreshTokens
    {
        [Key]
        public long Id { get; set; }
        
        [Column("refresh_token")]
        public string RefreshToken { get; set; }

        [Column("user_id")]
        public long UserId { get; set; }

        [Column("created_date")]
        public DateTime? CreatedDate { get; set; } = DateTime.UtcNow;

        [ForeignKey("UserId")]
        public virtual Users User { get; set; }
    }
}
