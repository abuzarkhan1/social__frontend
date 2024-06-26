import { MoreHoriz } from "@mui/icons-material";
import { Avatar, CardHeader, IconButton } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const UserChatCard = ({ chat }) => {
  const { message, auth } = useSelector((store) => store);
  return (
    <CardHeader
      avatar={
        <Avatar
          sx={{
            width: "3.5rem",
            height: "3.5rem",
            fontSize: "1.5rem",
            bgcolor: "#191c29",
            color: "rgb(88,199,250)",
          }}
          src="https://cdn.pixabay.com/photo/2022/03/28/14/58/forget-me-not-7097714_640.png"
        />
      }
      action={
        <IconButton>
          <MoreHoriz />
        </IconButton>
      }
      title={
        auth.user.id === chat.users[0].id
          ? chat.users[1].firstName + " " + chat.users[1].lastName
          : chat.users[0].firstName + " " + chat.users[0].lastName
      }
      subheader="new message"
    ></CardHeader>
  );
};

export default UserChatCard;
