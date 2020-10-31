import React, { Component, useState, useEffect } from 'react';
import {Avatar, IconButton } from "@material-ui/core"
import  ChatIcon  from '@material-ui/icons/Chat'
import MoreVertIcon  from '@material-ui/icons/MoreVert'
import DonutLargeIcon  from '@material-ui/icons/DonutLarge'
import SearchOutLined  from '@material-ui/icons/Search'
import SidebarChat from './SidebarChat' 
import db from './firebase'
const Sidebar = () => {

    const [ rooms, setRooms] = useState([])
    //useEffect hooks is same as component did mount
    useEffect( () =>{
        db.collection('rooms').onSnapshot( (snapshot) => {
            setRooms(snapshot.docs.map( (doc) => {
                return {
                    id:doc.id,
                    data:doc.data()
                }
            }))
        })
    },[])
    return (  
        <div className = "sidebar">

        <div className = "sidebar__header">
            <Avatar />
            <div className = "sidebar__headerRight">
                <IconButton>
                    <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
                
            </div>
        </div>

        <div className = "sidebar__search"> 
            <div className = "sidebar__searchContainer">
                <SearchOutLined/> 
                <input placeholder="Search or start new chat" type = "text" />
            </div>
        </div>
      
        <div className="sidebar__chats">
        <SidebarChat addNewChat/>
        {rooms.map( room =>(
            <SidebarChat 
            key = {room.id } 
            id = {room.id} 
            name = {room.data.name}/> 
        ))}
        
        </div>

        </div>
    );
}
 
export default Sidebar;