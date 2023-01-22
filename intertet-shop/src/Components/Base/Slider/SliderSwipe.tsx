import { Swiper, SwiperSlide } from "swiper/react";
import classes from "~/Components/Base/Slider/sliderswipe.module.scss";
import iphone from "~/assets/images/original.jpg";

import "swiper/css";
import "swiper/css/pagination";

// import { Pagination } from "swiper";
import { Button, ButtonGroup } from "@mui/material";
import RatingStar from "../Rating/RatingStar";

const SliderSwipe = () => {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      // modules={[Pagination]}
      className={classes.StyleSwipe}
    >
      <SwiperSlide>
        <div className={classes.Card}>
          <h3 className={classes.Title}>Iphone 11 pro max sad </h3>
          <h5 className={classes.Subtitle}>128 gb SpaceGray</h5>
          <img className={classes.Image} src={iphone} alt="" />
          <RatingStar />
          <div className={classes.Price}>
            <h3 style={{color: 'red'}}>1500$</h3>
            <ButtonGroup className={classes.Btn} variant="contained" aria-label="outlined primary button group">
              <Button>Buy now</Button>
            </ButtonGroup>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={classes.Card}>
          <h3 className={classes.Title}>Iphone 11 pro max</h3>
          <h5 className={classes.Subtitle}>128 gb SpaceGray</h5>
          <img className={classes.Image} src={iphone} alt="" />
          <RatingStar />
          <ButtonGroup className={classes.Btn} variant="contained" aria-label="outlined primary button group">
            <Button>Buy now</Button>
          </ButtonGroup>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={classes.Card}>
          <h3 className={classes.Title}>Iphone 11 pro max</h3>
          <h5 className={classes.Subtitle}>128 gb SpaceGray</h5>
          <img className={classes.Image} src={iphone} alt="" />
          <RatingStar />
          <ButtonGroup className={classes.Btn} variant="contained" aria-label="outlined primary button group">
            <Button>Buy now</Button>
          </ButtonGroup>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={classes.Card}>
          <h3 className={classes.Title}>Iphone 11 pro max</h3>
          <h5 className={classes.Subtitle}>128 gb SpaceGray</h5>
          <img className={classes.Image} src={iphone} alt="" />
          <RatingStar />
          <ButtonGroup className={classes.Btn} variant="contained" aria-label="outlined primary button group">
            <Button>Buy now</Button>
          </ButtonGroup>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={classes.Card}>
          <h3 className={classes.Title}>Iphone 11 pro max</h3>
          <h5 className={classes.Subtitle}>128 gb SpaceGray</h5>
          <img className={classes.Image} src={iphone} alt="" />
          <RatingStar />
          <ButtonGroup className={classes.Btn} variant="contained" aria-label="outlined primary button group">
            <Button>Buy now</Button>
          </ButtonGroup>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={classes.Card}>
          <h3 className={classes.Title}>Iphone 11 pro max</h3>
          <h5 className={classes.Subtitle}>128 gb SpaceGray</h5>
          <img className={classes.Image} src={iphone} alt="" />
          <RatingStar />
          <ButtonGroup className={classes.Btn} variant="contained" aria-label="outlined primary button group">
            <Button>Buy now</Button>
          </ButtonGroup>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={classes.Card}>
          <h3 className={classes.Title}>Iphone 11 pro max</h3>
          <h5 className={classes.Subtitle}>128 gb SpaceGray</h5>
          <img className={classes.Image} src={iphone} alt="" />
          <RatingStar />
          <ButtonGroup className={classes.Btn} variant="contained" aria-label="outlined primary button group">
            <Button>Buy now</Button>
          </ButtonGroup>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={classes.Card}>
          <h3 className={classes.Title}>Iphone 11 pro max</h3>
          <h5 className={classes.Subtitle}>128 gb SpaceGray</h5>
          <img className={classes.Image} src={iphone} alt="" />
          <RatingStar />
          <ButtonGroup className={classes.Btn} variant="contained" aria-label="outlined primary button group">
            <Button>Buy now</Button>
          </ButtonGroup>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderSwipe;
