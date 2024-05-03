import React from "react";
import { useSelector } from "react-redux";

const ChatMessage = ({item}) => {
  const {auth,message} = useSelector((store)=>store)
  const isReqUserMessage = auth.user?.id===item.user?.id
  return (
    <div
      className={`flex ${isReqUserMessage ? "justify-start" : "justify-end"} text-white`}
    >
      <div
        className={`p-1 ${
          true ? "rounded-md" : "px-5 rounded-full"
        } bg-[#191c29]`}
      >
        {item.image && (
          <img
            className="w-[12rem] h-[17rem] object-cover rounded-md"
            src="https://cdn.pixabay.com/photo/2023/11/24/10/15/cockatoo-8409655_640.jpg"
            alt=""
          />
        )}

        <p className={`${true ? "py-2" : "py-1"}`}>{item.content}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
