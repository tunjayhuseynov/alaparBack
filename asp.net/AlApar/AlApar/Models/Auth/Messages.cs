using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Auth
{
    [Table("Messages")]
    public class Messages
    {
        public long Id { get; set; }
        public string Message { get; set; }
        public long? SenderId { get; set; }
        public long? ChatId { get; set; }
        public bool? Checked { get; set; } = false;
        public DateTime Sent_Date { get; set; } = DateTime.UtcNow;

        [ForeignKey("ChatId")]
        public virtual Chats Chat { get; set; }

        [ForeignKey("SenderId")]
        public virtual Users User { get; set; }
    }
}
