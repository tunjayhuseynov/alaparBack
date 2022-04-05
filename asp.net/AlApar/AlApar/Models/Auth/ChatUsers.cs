using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Auth
{
    [Table("ChatUsers")]
    public class ChatUsers
    {
        public long Id { get; set; }
        public long? UserId { get; set; }
        public long? ChatId { get; set; }
        public DateTime? Last_Interaction { get; set; } = DateTime.UtcNow;

        [ForeignKey("UserId")]
        public virtual Users User { get; set; }

        [ForeignKey("ChatId")]
        public virtual Chats Chat { get; set; }
    }
}
