using AlApar.Middleware;
using AlApar.Models;
using AlApar.Models.Auth;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace AlApar.Classes
{
    [Authorize]
    public class SocketHub : Hub
    {
        private readonly Jwt jwt;
        private readonly UserContext userContext;

        public SocketHub(UserContext userContext, IOptions<Jwt> option)
        {
            jwt = option.Value;
            this.userContext = userContext;
        }

        [HubMethodName("SendMessageTo")]
        public async Task<object> SendMessage(long id, long chatId, string message)
        {
            string userId = Context.User.FindFirstValue(ClaimTypes.Sid);
            long idLong = Convert.ToInt64(userId);
            long sentChat = chatId;
            using var transaction = await userContext.Database.BeginTransactionAsync();

            try
            {
                if (chatId > 0)
                {
                    var instance = new Messages()
                    {
                        Message = message,
                        SenderId = idLong,
                        ChatId = Convert.ToInt64(chatId),
                    };
                    await userContext.Messages.AddAsync(instance);

                    var chats = await userContext.ChatUsers.AsQueryable().FirstAsync(w => w.UserId == idLong && w.ChatId == chatId);
                    var peerchats = await userContext.ChatUsers.AsQueryable().FirstAsync(w => w.UserId == id && w.ChatId == chatId);
                    chats.Last_Interaction = DateTime.UtcNow;
                    peerchats.Last_Interaction = DateTime.UtcNow;

                    await userContext.SaveChangesAsync();
                    await transaction.CommitAsync();
                }
                else
                {
                    Chats chatInstance = new();
                    await userContext.Chats.AddAsync(chatInstance);
                    await userContext.SaveChangesAsync();

                    ChatUsers chatUserInstance = new()
                    {
                        ChatId = chatInstance.Id,
                        Last_Interaction = DateTime.UtcNow,
                        UserId = idLong,
                    };

                    ChatUsers chatPeerInstance = new()
                    {
                        ChatId = chatInstance.Id,
                        Last_Interaction = DateTime.UtcNow,
                        UserId = id,
                    };

                    await userContext.ChatUsers.AddRangeAsync(chatPeerInstance, chatUserInstance);
                    await userContext.SaveChangesAsync();


                    var instance = new Messages()
                    {
                        Message = message,
                        SenderId = idLong,
                        ChatId = chatInstance.Id,
                    };
                    await userContext.Messages.AddAsync(instance);
                    await userContext.SaveChangesAsync();

                    await transaction.CommitAsync();
                    sentChat = chatInstance.Id;
                }
            }
            catch (Exception e)
            {
                await transaction.RollbackAsync();
                Console.WriteLine(e.Message);
                throw;
            }

            await Clients.User(id.ToString()).SendAsync("ReceiveMessage", userId, sentChat, message);

            return new { message = "Sent", chatId = sentChat, peerId = id};
        }
    }
}
