import { Avatar, Grid, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import WestIcon from "@mui/icons-material/West";
import { AddIcCall, AddPhotoAlternate, ChatBubbleOutline, FlashlightOffTwoTone, VideoCall } from "@mui/icons-material";
import SearchUser from "../../components/SearchUser/SearchUser";
import UserChatCard from "./UserChatCard";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { createMessage, getAllChats } from "../../Redux/Message/message.action";
import uploadToCloudinary from "../../utils/uploadToCloudinary";

const Message = () => {
  const [currentChat, setCurrentChat] = useState();
  const [messages, setMessages] = useState();
  const [loading,setLoading] = useState(FlashlightOffTwoTone);
  const [selectedImage, setSelectedImage] = useState();

  const dispatch = useDispatch();

  const { message,auth } = useSelector((store) => store);
  const handleSelectImage = async(e) => {
    setLoading(true)
    const imgUrl = await uploadToCloudinary(e.target.files[0],"image")
    selectedImage(imgUrl)
    setLoading(false)
  };

  useEffect(() => {
    dispatch(getAllChats());
  }, []);

  const handleCreateMessage = (value) => {
    const message = {
      chatId: currentChat.id,
      content: value,
      image: selectedImage,
    };
    dispatch(createMessage(message))
  };
  return (
    <div>
      <Grid container className="h-screen overflow-y-hidden">
        <Grid className="px-5" item xs={3}>
          <div className="flex h-full justify-between space-x-2">
            <div className="w-full">
              <div className="flex space-x-4 items-center py-5">
                <WestIcon />
                <h1 className="text-x1 font-bold">Home</h1>
              </div>
              <div className="h-[83vh]">
                <div className="">
                  <SearchUser />
                </div>
                <div className="h-full space-y-4 mt-5 overflow-y-scroll hideScrollbar">
                  {message.chats.map((item) => {
                    return (
                      <div
                        onClick={() => {
                          setCurrentChat(item);
                          setMessages(item.messages);
                        }}
                      >
                        <UserChatCard chat={item} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid className="h-full" item xs={9}>
          {currentChat ? (
            <div>
              <div className="flex justify-between items-center border-l p-5">
                <div className="flex items-center space-x-3">
                  <Avatar src="https://firebasestorage.googleapis.com/v0/b/chat-messenger-3f7c3.appspot.com/o/Upload%2FXciJ06h3uyf1GQgB1aJDJYb5nCs2?alt=media&token=35e458de-b1f8-4b83-a541-247bf7c1a074" />
                  <p>
                  {
                    auth.user.id === currentChat.users[0].id
                    ? currentChat.users[1].firstName + " " + currentChat.users[1].lastName
                    : currentChat.users[0].firstName + " " + currentChat.users[0].lastName
                  }
                  </p>
                </div>
                <div className="flex space-x-3">
                  <IconButton>
                    <AddIcCall />
                  </IconButton>

                  <IconButton>
                    <VideoCall />
                  </IconButton>
                </div>
              </div>

              <div className="hideScrollbar overflow-y-scroll h-[82vh] px-2 space-y-5 py-5">
             {messages.map((item) => <ChatMessage item={item} /> )   }
              </div>

              <div className="sticky bottom-0 border-l">
                <div className="py-5 flex items-center justify-center space-x-5">
                  <input
                    onKeyPress={(e)=>{
                      if(e.key==="Enter" && e.target.value){
                        handleCreateMessage(e.target.value)
                      }
                    }}
                    className="bg-transparent border border-[#3b40544] rounded-full w-[90%] py-3 px-5"
                    placeholder="Type Message..."
                    type="text"
                  />
                  <div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleSelectImage}
                      className="hidden"
                      id="image-input"
                    />
                    <label htmlFor="image-input">
                      <AddPhotoAlternate />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full space-y-5 flex flex-col justify-center items-center">
            <ChatBubbleOutline sx={{fontSize:"15rem"}}/>
            <p className="text-xl font-semibold">No Chat selected</p>
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Message;
