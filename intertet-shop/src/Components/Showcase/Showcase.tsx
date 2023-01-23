import classes from "~/Components/Showcase/showcase.module.scss";
import Slider from "../Base/Slider/Slider";
import image3 from "~/assets/images/original.jpg";
import image4 from "~/assets/images/other.png";
import { Button, ButtonGroup } from "@mui/material";

const Showcase = () => {
  return (
    <section className="container">
      <div className={classes.Wrapper}>
        <div className={classes.Slider}>
          <Slider />
        </div>
        <div className={classes.WrapperCard}>
          <div className={classes.Sale}>
            <div className={`${classes.Intro} color`}>
              <img className={classes.PositionImg} src={image4} alt="" height={200} />
              <div className={classes.Text}>
                <h2 className={classes.Title}>Accessories</h2>
                <h4 className={classes.Subtitle}>and other</h4>
                <ButtonGroup className={classes.Btn} variant="contained" aria-label="outlined primary button group">
                  <Button>Buy now</Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className={classes.Products}>
            <div className={classes.Intro}>
              <div className={classes.Text}>
                <h2 className={classes.Title}>Sale iphone</h2>
                <h4 className={classes.Subtitle}>300$ - 800$</h4>
                <ButtonGroup className={classes.Btn} variant="contained" aria-label="outlined primary button group">
                  <Button>Buy now</Button>
                </ButtonGroup>
              </div>
              <img className={classes.PositionImg} src={image3} alt="" height={200} />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Showcase;
