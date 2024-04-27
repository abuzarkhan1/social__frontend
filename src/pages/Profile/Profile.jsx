import { Avatar, Box, Button, Card, Tab, Tabs } from "@mui/material";
import React from "react";
import PostCard from "../../components/Post/PostCard";

const tabs = [
  { value: "post", name: "Post" },
  { value: "reels", name: " Reels" },
  { value: "saved", name: "Saved" },
  { value: "repost", name: "Repost" },
];

const posts = [1, 1, 1, 1, 1];

const Profile = () => {
  const [value, setValue] = React.useState("post");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const { id } = useParams();
  return (
    <Card className="my-10 w-[70%]">
      <div className="rounded-md">
        <div className="h-[15rem]">
          <img
            className="w-full h-full rounded-t-md"
            src="https://cdn.pixabay.com/photo/2014/01/13/20/01/pebbles-243910_640.jpg"
            alt=""
          />
        </div>
        <div className="px-5 flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            sx={{ width: "10rem", height: "10rem" }}
          />
          {true ? (
            <Button sx={{ borderRadius: "20px" }} variant="outlined">
              Edit Profile
            </Button>
          ) : (
            <Button sx={{ borderRadius: "20px" }} varient="outlined">
              Follow
            </Button>
          )}
        </div>
        <div className="p-5">
          <div>
            <h1 className="py-1 font-bold text-xl">Ismail Azam</h1>
            <p>@ismailAzaam</p>
          </div>
          <div className="flex gap-5 items-center py-3">
            <span>41 posts</span>
            <span>35 Followers</span>
            <span>5 followings</span>
          </div>
          <div>
            <p>lorem ipsum dolor sit amet consectetur adipiscing alit</p>
          </div>
        </div>

        <section>
          <Box sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="wrapped label tabs example"
            >
              {tabs.map((item) => (
                <Tab value={item.value} label={item.name} wrapped />
              ))}
            </Tabs>
          </Box>

          <div className="flex justify-center">
            {value === "post" ? (
              <div className="space-y-5 w-[70%] my-10">
                {posts.map((item) => (
                  <div className="border border-slate-100">
                    <PostCard />
                  </div>
                ))}
              </div>
            ) : value==="reels" ? <div className="flex gap-5">
            
            </div> : (
              ""
            )}
          </div>
        </section>
      </div>
    </Card>
  );
};

export default Profile;

// 3:00:55