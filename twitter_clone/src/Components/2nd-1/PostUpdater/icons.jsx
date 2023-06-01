import React from "react";
import ImageIcon from "@mui/icons-material/Image";
import GifBoxIcon from '@mui/icons-material/GifBox';
import PollIcon from '@mui/icons-material/Poll';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '@mui/material/Button';
import MultilineTextFields from './input'


function Icons() {
  return ( 
    <>
    <MultilineTextFields/>
      <div>
        <ImageIcon />
        <GifBoxIcon />
        <PollIcon />
        <EmojiEmotionsIcon/>
        <CalendarMonthIcon />
        <LocationOnIcon />
        <Button variant="contained">Tweet</Button>
      </div>
    </>
  );
}

export default Icons;
