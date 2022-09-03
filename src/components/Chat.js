import React, { useEffect, useState } from "react";


export default function Chat({socket , user , room}){
const [currentMessage, setCurrentMessage ] = useState('')
const sendMessage = async ()=> {
    if(currentMessage !== ''){
        const messageData = {
            room : room,
            author : user , 
            message : currentMessage,
            time: 
            new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
        }
        await socket.emit("sendMessage", messageData)
    }

}

useEffect(() => {
    socket.on("receive_message", (data) => {
        console.log(data);
    //   setMessageList((list) => [...list, data]);
    });
  }, [socket]);

    return <div>
        <div className="chat-header">
            <p>Live Chat</p>
        </div>
        <div className="chat-body"></div>
        <div className="chat-footer">
            <input type="text" value = {currentMessage} placeholder = "Hey..."  onChange = { (e) =>{setCurrentMessage(e.target.value)} }/>
            <button onClick={sendMessage}>send</button>
        </div>
        
    </div>
}