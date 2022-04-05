using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlApar.Models.Auth
{
    [Table("Chats")]
    public class Chats
    {

        public Chats()
        {
            Messages = new HashSet<Messages>();
            ChatUser = new HashSet<ChatUsers>();
        }

        public long Id { get; set; }
        public DateTime? Created_Date { get; set; } = DateTime.UtcNow;


        [InverseProperty("Chat")]
        public virtual ICollection<Messages> Messages { get; set; }
        
        [InverseProperty("Chat")]
        public virtual ICollection<ChatUsers> ChatUser { get; set; }
    }
}
