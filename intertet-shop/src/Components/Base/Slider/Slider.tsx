// import React, { useRef, useState } from "react";
import classes from "~/Components/Base/Slider/slider.module.scss";
import image1 from "~/assets/images/img1.jpg";
import image2 from "~/assets/images/img2.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Button, ButtonGroup } from "@mui/material";

const Slider = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className={classes.mySwiper}
      >
        <SwiperSlide>
          <div className={classes.Intro}>
            <div className={classes.Text}>
              <h2 className={classes.Title}>Iphone 14 pro max</h2>
              <h4 className={classes.Subtitle}>Buy Now</h4>
              <ButtonGroup className={classes.Btn} variant="contained" aria-label="outlined primary button group">
                <Button>Buy now</Button>
              </ButtonGroup>
            </div>
            <img className={classes.ImageSlider} src={image2} alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className={classes.ImageSlider} src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={classes.ImageSlider} src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={classes.ImageSlider} src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={classes.ImageSlider} src={image1} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
