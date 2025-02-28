import React from 'react'
import { useSocketContext } from '../context/SocketContext'
import useConversation from "../zustand/useConversation"
import { useEffect } from 'react'
import notificationSound from "../assets/sounds/notification.mp3"
const useListenMessages = () => {
const {socket}=useSocketContext()
const {messages,setMessages}=useConversation()

useEffect(()=>{
  socket?.on("newMessage",(newMessage)=>{
    newMessage.shouldShake=true;
    const sound=new Audio(notificationSound)
    sound.play()
    const currentMessages = useConversation.getState().messages;
    // setMessages([...messages,newMessage])
    if (Array.isArray(currentMessages)) {
      // Set the updated array directly
      setMessages([...currentMessages, newMessage]);
    } else {
      // If messages is not an array, initialize with just the new message
      setMessages([newMessage]);
    }

  }
)

return ()=>socket?.off("newMessage")
},[socket,setMessages])
}

export default useListenMessages



