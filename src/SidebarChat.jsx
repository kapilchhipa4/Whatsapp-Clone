import React, { Component,useState,useEffect } from 'react';
import {Avatar } from "@material-ui/core"
import {Link, BrowserRouter } from 'react-router-dom'
import db from './firebase'
const SidebarChat = ({addNewChat, name, id}) => {

    const [seed, setSeed] = useState(0)
    
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
        
    }, [])
    
    const createChat = () => {
        const roomName = prompt("Please enter name for chat")
        
        if(roomName){
        db.collection('rooms').add({
            name:roomName
        }) 
        }
    }
    return !addNewChat ?(
        
        <Link to = {`/rooms/${id}`}>
        <div className = "sidebarChat">
            <Avatar src = { `https://avatars.dicebear.com/api/human/${seed}.svg`}
            />
            <div className = "sidebarChat__info">
                <h2>  {name}</h2>
                <p> Last Message...</p>
            </div>
        </div>
      </Link>)
      :(
          <div onClick = {createChat}
          className = "sidebarChat">
              <h2> Add New Chat</h2>
          </div>
      )
}
 
export default SidebarChat;