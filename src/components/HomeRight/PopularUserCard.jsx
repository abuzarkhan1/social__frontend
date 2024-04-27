import { Avatar, Button, CardHeader } from '@mui/material'
import React from 'react'
import { red } from '@mui/material/colors';


const PopularUserCard = () => {
  return (
    <div className=''>
    <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            I
          </Avatar>
        }
        action={
          <Button size='small'>FOLLOW</Button>
        }
        title="Ismail Azam"
        subheader="@ismailAzam"
      />
    </div>
  )
}

export default PopularUserCard