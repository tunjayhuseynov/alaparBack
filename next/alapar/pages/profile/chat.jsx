import {
    MainContainer, VoiceCallButton, VideoCallButton, EllipsisButton,
    TypingIndicator, MessageSeparator, ConversationHeader, ChatContainer,
    MessageList, Message, MessageInput, Sidebar, Search, ConversationList, Conversation, Avatar
} from '@chatscope/chat-ui-kit-react';
import { useState, useEffect, useCallback, useMemo } from 'react'
import { GET_CONTACTS, GET_MESSAGES, GET_MORE_CONTACTS, GET_MORE_MESSAGES, GET_USER_PUBLIC, SEEN } from '@/Constructions/const'
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';

const signalR = require("@microsoft/signalr");

const ChatUI = ({ connection, user, auth }) => {
    const router = useRouter()
    const img = useMemo(()=>"https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png", [])
    // Set initial message input value to an empty string                                                                     
    const [messageInputValue, setMessageInputValue] = useState("");
    const [contacts, setContacts] = useState([])
    const [contactList, setContactList] = useState([])
    const [chatIdList, setChatIdList] = useState([])
    const [contactLoading, setContactLoading] = useState(true)
    const [messageLoading, setMessageLoading] = useState(true)
    const [selectedUserId, setSelectedUserId] = useState(null)
    const [selectedChatId, setSelectedChatId] = useState(null)
    const [selectedUser, setSelectedUser] = useState(null)
    const [header, setHeader] = useState(null)
    const [messages, setMessages] = useState(null)
    const [messageList, setMessageList] = useState([])

    const [loadingMoreConversations, setLoadingMoreConversations] = useState(false);
    const [stopLoadingConversations, setStopLoadingConversations] = useState(false);

    const [loadingMoreMessageList, setLoadingMoreMessageList] = useState(false);
    const [stopLoadingMessageList, SetStopLoadingMessageList] = useState(false);

    const process = async (id, chatId, data) => {
        if (selectedChatId == chatId) {
            setMessages(data)
            seen(selectedChatId)
        }
        else {
            getContacts(contactList.length)
        }
    }


    useEffect(async () => {
        if (connection != null && connection?.state !== signalR.HubConnectionState.Connected) {
            await connection.start()
            connection.off("ReceiveMessage")
            connection.on("ReceiveMessage", process)
        }
    }, [connection])

    useEffect(async () => {
        if (connection != null && connection?.state === signalR.HubConnectionState.Connected) {

            connection.off("ReceiveMessage")
            connection.on("ReceiveMessage", process)
        }
    }, [selectedUserId])

    useEffect(() => {
        if (messages) {
            const value = <Message key={uuidv4()} className="my-5" model={{
                message: messages,
                sender: selectedUser?.user?.name,
                direction: "incoming",
                position: "single"
            }}>
                <Avatar src={img} name={selectedUser?.user?.name} />
            </Message>
            setMessageList([...messageList, value])
        }
    }, [messages])

    useEffect(async () => {
        if (auth) {
            await getContacts();
        }
    }, [auth])


    useEffect(async () => {
        if (router.query?.id) {
            await getNewContact(router.query.id)
        }
    }, [router.query])

    useEffect(async () => {
        if (contacts) {
            const chatListId = [];
            const id = selectedUserId
            const list = contacts.map(s => {
                const w = s?.chat;
                chatListId.push(w?.id)
                const chatUser = w?.chatUser?.find(w => w.userId != user?.id)
                return <Conversation active={id == chatUser?.userId} key={uuidv4()} unreadCnt={s?.unread} onClick={() => { setSelectedUserId(chatUser?.userId); setSelectedUser(w); setSelectedChatId(w?.id) }} name={chatUser?.user?.name}>
                    <Avatar src={img} name={chatUser?.user?.name} />
                </Conversation>
            })
            setContactList(list)
            setChatIdList(chatIdList)
        }
    }, [contacts])

    useEffect(async () => {
        if (selectedUser) {
            const peer = selectedUser?.chatUser?.find(w => w?.userId != user?.id)
            if (peer?.user) {
                setHeader(peer.user)
            }
        }
    }, [selectedUser])

    useEffect(async () => {
        if (selectedChatId) {
            setLoadingMoreMessageList(false)
            SetStopLoadingMessageList(false)
            setMessageLoading(true)
            await getMessages(selectedChatId)
            await seen(selectedChatId)
            setMessageLoading(false)
            connection.off("ReceiveMessage")
            connection.on("ReceiveMessage", process)
        }
    }, [selectedChatId])

    const getNewContact = async (publicId) => {
        fetch(GET_USER_PUBLIC(publicId)).then(req => {
            if (req.ok) {
                return req.json()
            }
        }).then(json => {
            setHeader(json?.peer)
            setSelectedUserId(json?.peer?.id)
            setMessageLoading(false)
            if (json?.chatId) {
                setSelectedChatId(json.chatId)
            }
        })
    }

    const getContacts = async (length = 20) => {
        const req = await fetch(GET_CONTACTS(length))
        if (req.ok) {
            const res = await req.json()
            setContacts(res)
        } else {
            setContacts([])
        }
        setContactLoading(false)
        setStopLoadingConversations(false)

    }

    const seen = async (id) => {
        const req = fetch(SEEN(id)).then(async w => {
            if (w.ok) {
                await getContacts(contactList.length);
            }
        })
    }

    const getMessages = async (id) => {
        const req = await fetch(GET_MESSAGES(id))
        if (req.ok) {
            const res = await req.json()
            setMessageList(res?.map(w => <Message className="my-5" model={{
                message: w.message,
                sender: w?.senderId == user?.id ? user?.name : selectedUser?.user?.name,
                direction: w?.senderId == user?.id ? "outgoing" : "incoming",
                position: "single"
            }}>
                <Avatar src={img} name={w?.senderId == user?.id ? user?.name : selectedUser?.user?.name} />
            </Message>))
        } else {
            setMessageList([])
        }
        setMessageLoading(false)
    }


    const loadMoreContacts = async () => {
        //setLoadingMoreConversations(true)
        const req = await fetch(GET_MORE_CONTACTS(contactList.length))
        //setLoadingMoreConversations(false)
        if (req.ok) {
            const res = await req.json()
            if (res?.length > 0) {
                setLoadingMoreConversations(false)
                setContactList([...contactList, ...res?.map(s => {
                    const w = s?.chat;
                    const chatUser = w?.chatUser?.find(w => w.userId != user?.id)
                    return <Conversation key={uuidv4()} unreadCnt={s?.unread} onClick={() => { setSelectedUserId(chatUser?.userId); setSelectedUser(w); setSelectedChatId(w?.id) }} name={chatUser?.user?.name}>
                        <Avatar src={img} name={chatUser?.user?.name} />
                    </Conversation>
                })])
            }
        } else {
            //setLoadingMoreConversations(false)
            setStopLoadingConversations(true)
        }

    }

    useEffect(() => {
        if (stopLoadingConversations === true) {
            setLoadingMoreConversations(false)
        } else {
            setLoadingMoreConversations(true)
        }
    }, [stopLoadingConversations])

    useEffect(async () => {
        if (!stopLoadingConversations && loadingMoreConversations == true) {
            await loadMoreContacts()
        } else if (stopLoadingConversations == true) {
            setLoadingMoreConversations(false)
        }
    }, [loadingMoreConversations])


    /***************** */
    const loadMoreMessages = async () => {
        if (loadingMoreMessageList) {
            return
        }

        setLoadingMoreMessageList(true)
        const req = await fetch(GET_MORE_MESSAGES(selectedChatId, messageList.length))
        setLoadingMoreMessageList(false)
        if (req.ok) {
            const res = await req.json()
            if (res?.length > 0) {
                setMessageList([...res?.map(w => <Message className="my-5" model={{
                    message: w.message,
                    sender: w?.senderId == user?.id ? user?.name : selectedUser?.user?.name,
                    direction: w?.senderId == user?.id ? "outgoing" : "incoming",
                    position: "single"
                }}>
                    <Avatar src={img} name={w?.senderId == user?.id ? user?.name : selectedUser?.user?.name} />
                </Message>), ...messageList])
            }
        } else {
            SetStopLoadingMessageList(true)
        }
    }



    return <div style={{
        height: "100%",
        position: "relative"
    }}>
        <MainContainer responsive>
            <Sidebar position="left" scrollable={false}>
                {/*<Search placeholder="Search..." className="h-[50px]"/>*/}
                <ConversationList loading={contactLoading} loadingMore={loadingMoreConversations} onYReachEnd={() => {
                    /*if (!stopLoadingConversations && contactList.length > 19) {
                        await loadMoreContacts()
                    }*/
                    setLoadingMoreConversations(true)

                }}>
                    {contactList}
                </ConversationList>
            </Sidebar>
            <ChatContainer>
                {header && <ConversationHeader>
                    <ConversationHeader.Back />
                    <Avatar src={img} name={header?.name} />
                    <ConversationHeader.Content userName={header?.name} />
                </ConversationHeader>}
                <MessageList loading={selectedUserId && messageLoading} loadingMore={loadingMoreMessageList} onYReachStart={async () => {
                    if (messageList.length > 49 && !stopLoadingMessageList) {
                        await loadMoreMessages()
                    }
                }}>
                    {messageList}
                </MessageList>
                {selectedUserId && header && <MessageInput attachButton={false} placeholder="Mesaj Yazın..." onSend={(e) => {
                    connection.invoke("SendMessageTo", selectedUserId, (selectedChatId ?? 0), e).then(req => {
                        console.log(req)
                        setSelectedChatId(req.chatId)
                        setSelectedUserId(req.peerId);
                    })
                    setMessageInputValue("")
                    const value = <Message model={{
                        message: e,
                        sender: user?.name,
                        direction: "outgoing",
                        position: "single"
                    }}>
                        <Avatar src={img} name={user?.name} />
                    </Message>
                    setMessageList([...messageList, value])
                }} value={messageInputValue} onChange={val => setMessageInputValue(val)} />}
            </ChatContainer>
        </MainContainer>
    </div>;
}

export default ChatUI;