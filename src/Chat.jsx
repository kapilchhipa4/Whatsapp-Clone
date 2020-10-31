import React, { Component, useState, useEffect } from 'react';
import {Avatar, IconButton } from "@material-ui/core"
import { useParams } from 'react-router-dom'
import  SearchOutLined  from '@material-ui/icons/Search';
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVert from '@material-ui/icons/MoreVert';
import SentimentDissatisfiedIcon from '@material-ui/icons/InsertEmoticon';
import MicNoneIcon from '@material-ui/icons/Mic';
import db from './firebase'
const Chat = (props) => {

    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("")
    const  {roomId}  = useParams()
    const[roomName, setRoomName] = useState("")

    useEffect( () => {

        if(roomId)
        {
             db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                 setRoomName(snapshot.data().name)
             ))   
        }
    },[roomId])
   
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
        
    }, [])

    const sendMessage = (event) => {
            event.preventDefault()
            console.log(input)
            setInput("")
    }
    return ( 
        !roomId ? <div>hii</div> :(
        <div className = "chat">
            <div className = "chat__header">
            <Avatar npm src = { `https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className = "chat__headerInfo">
                   <h3>{roomName}</h3>
                   <p> Last seen at...</p>
                </div>
                <div className = "chat_headerRight">
                    <IconButton>
                        <SearchOutLined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>
            <div className = "chat__body">
            <p className = {`chat__message ${true && "chat__receiver"}`}>
            <span className = "chat__name"> kapil</span>
            dkjf]ddfdsfdsfdsfsdfsdfsdfsdfsdfsdfsddjdsfkjsdjkfsdkfsdjkfjsdfj
            dkfjs;fjsdlkfjsldfjlsdkjfsdlkfjsldkjfsdklfjsdlkfjsdkfjsdlkfjsldkjf
            skfjsd;flkjsdfjsdlkfjsdlfjsdlfjsldfjsdlfjsdlkfjsdlfjsdlkjdskfjsdjf
            slkdfjsdlkfjlsfjsdljfsd;ljfsdlkfjsdljfsdlkfjlsdkfjslkfjslfjsdlkfj
            sdlfjksdlfjslfjslkfjsdlkfj
            <span className = "chat__timestamp">3:40PM</span>
            </p>
            

            
            <p className = {`chat__message ${true && "chat__receiver"}`}>
            <span className = "chat__name"> kapil</span>
            dkjf]ddfdsfdsfdsfsdfsdfsdfsdfsdfsdfsddjdsfkjsdjkfsdkfsdjkfjsdfj
            dkfjs;fjsdlkfjsldfjlsdkjfsdlkfjsldkjfsdklfjsdlkfjsdkfjsdlkfjsldkjf
            skfjsd;flkjsdfjsdlkfjsdlfjsdlfjsldfjsdlfjsdlkfjsdlfjsdlkjdskfjsdjf
            slkdfjsdlkfjlsfjsdljfsd;ljfsdlkfjsdljfsdlkfjlsdkfjslkfjslfjsdlkfj
            sdlfjksdlfjslfjslkfjsdlkfj
            <span className = "chat__timestamp">3:40PM</span>
            </p>


            <p className = {`chat__message ${true && "chat__receiver"}`}>
            <span className = "chat__name"> kapil</span>
            dkjf]ddfdsfdsfdsfsdfsdfsdfsdfsdfsdfsddjdsfkjsdjkfsdkfsdjkfjsdfj
            dkfjs;fjsdlkfjsldfjlsdkjfsdlkfjsldkjfsdklfjsdlkfjsdkfjsdlkfjsldkjf
            skfjsd;flkjsdfjsdlkfjsdlfjsdlfjsldfjsdlfjsdlkfjsdlfjsdlkjdskfjsdjf
            slkdfjsdlkfjlsfjsdljfsd;ljfsdlkfjsdljfsdlkfjlsdkfjslkfjslfjsdlkfj
            sdlfjksdlfjslfjslkfjsdlkfj
            <span className = "chat__timestamp">3:40PM</span>
            </p>


            <p className = {`chat__message ${true && "chat__receiver"}`}>
            <span className = "chat__name"> kapil</span>
            dkjf]ddfdsfdsfdsfsdfsdfsdfsdfsdfsdfsddjdsfkjsdjkfsdkfsdjkfjsdfj
            dkfjs;fjsdlkfjsldfjlsdkjfsdlkfjsldkjfsdklfjsdlkfjsdkfjsdlkfjsldkjf
            skfjsd;flkjsdfjsdlkfjsdlfjsdlfjsldfjsdlfjsdlkfjsdlfjsdlkjdskfjsdjf
            slkdfjsdlkfjlsfjsdljfsd;ljfsdlkfjsdljfsdlkfjlsdkfjslkfjslfjsdlkfj
            sdlfjksdlfjslfjslkfjsdlkfj
            <span className = "chat__timestamp">3:40PM</span>
            </p>


            <p className = {`chat__message ${true && "chat__receiver"}`}>
            <span className = "chat__name"> kapil</span>
            dkjf]ddfdsfdsfdsfsdfsdfsdfsdfsdfsdfsddjdsfkjsdjkfsdkfsdjkfjsdfj
            dkfjs;fjsdlkfjsldfjlsdkjfsdlkfjsldkjfsdklfjsdlkfjsdkfjsdlkfjsldkjf
            skfjsd;flkjsdfjsdlkfjsdlfjsdlfjsldfjsdlfjsdlkfjsdlfjsdlkjdskfjsdjf
            slkdfjsdlkfjlsfjsdljfsd;ljfsdlkfjsdljfsdlkfjlsdkfjslkfjslfjsdlkfj
            sdlfjksdlfjslfjslkfjsdlkfj
            <span className = "chat__timestamp">3:40PM</span>
            </p>
            
            </div>

            <div className = "chat__footer">
            <SentimentDissatisfiedIcon/>
            <form>
                <input 
                value  = {input}
                onChange = { (e) => { setInput(e.target.value) }}
                type = "text" placeholder = "Type a message"/>
                <button onClick = {sendMessage}
                type="submit" >Send a message</button>
            </form>
            <MicNoneIcon/>
            </div>
        </div>)
     );
}
 
export default Chat;


