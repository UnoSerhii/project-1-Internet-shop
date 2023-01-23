import { Button, ButtonGroup } from "@mui/material";
import classes from "~/Components/Category/category.module.scss";
import iphone from "~/assets/iphone.png";
import macbook from "~/assets/macbook.png";
import ipad from "~/assets/ipad.png";
import airpods from "~/assets/airpods.png";
import apptv from "~/assets/apptv.png";
import etui from "~/assets/case.png";
import iwach from "~/assets/iwach.png";
import accessories from "~/assets/accessories.png";
import Title from "../Title/Title";

const Category = () => {
  return (
    <section className={classes.Category}>
      <Title titleText={'Catalog Products'} />
      <div className={`${classes.Items} container`}>
        <div className={classes.ItemMedium}>
          <img className={classes.ImageMedium} src={iphone} alt="" />
          <div className={classes.Text}>
            <h2 className={classes.Title}>Iphone</h2>
            <h4 className={classes.Subtitle}>Buy Now</h4>
            <ButtonGroup variant="outlined" aria-label="outlined primary button group">
              <Button>Buy now</Button>
            </ButtonGroup>
          </div>
        </div>
        <div className={classes.ItemMedium}>
          <img className={classes.ImageSmall} src={ipad} alt="" />
          <div className={classes.Text}>
            <h2 className={classes.Title}>Ipad</h2>
            <h4 className={classes.Subtitle}>Buy Now</h4>
            <ButtonGroup variant="outlined" aria-label="outlined primary button group">
              <Button>Buy now</Button>
            </ButtonGroup>
          </div>
        </div>
        <div className={classes.ItemLarge}>
          <img className={classes.ImageLarge} src={macbook} alt="" />
          <div className={classes.Text}>
            <h2 className={classes.Title}>MacBook</h2>
            <h4 className={classes.Subtitle}>Buy Now</h4>
            <ButtonGroup variant="outlined" aria-label="outlined primary button group">
              <Button>Buy now</Button>
            </ButtonGroup>
          </div>
        </div>
        <div className={classes.ItemSmall}>
          <img className={classes.ImageSmallPods} src={airpods} alt="" />
          <div className={classes.Text}>
            <h2 className={classes.Title}>Airpods</h2>
            <h4 className={classes.Subtitle}>Buy Now</h4>
            <ButtonGroup variant="outlined" aria-label="outlined primary button group">
              <Button>Buy now</Button>
            </ButtonGroup>
          </div>
        </div>
        <div className={classes.ItemSmall}>
          <img className={classes.ImageSmallAny} src={iwach} alt="" />
          <div className={classes.Text}>
            <h2 className={classes.Title}>Apple Wach</h2>
            <h4 className={classes.Subtitle}>Buy Now</h4>
            <ButtonGroup variant="outlined" aria-label="outlined primary button group">
              <Button>Buy now</Button>
            </ButtonGroup>
          </div>
        </div>
        <div className={classes.ItemSmall}>
          <img className={classes.ImageSmallUp} src={etui} alt="" />
          <div className={classes.Text}>
            <h2 className={classes.Title}>Case</h2>
            <h4 className={classes.Subtitle}>Buy Now</h4>
            <ButtonGroup variant="outlined" aria-label="outlined primary button group">
              <Button>Buy now</Button>
            </ButtonGroup>
          </div>
        </div>
        <div className={classes.ItemSmall}>
          <img className={classes.ImageSmallUp} src={etui} alt="" />
          <div className={classes.Text}>
            <h2 className={classes.Title}>Apple Tv</h2>
            <h4 className={classes.Subtitle}>Buy Now</h4>
            <ButtonGroup variant="outlined" aria-label="outlined primary button group">
              <Button>Buy now</Button>
            </ButtonGroup>
          </div>
        </div>
        <div className={classes.ItemSmall}>
          <img className={classes.ImageSmallUp} src={etui} alt="" />
          <div className={classes.Text}>
            <h2 className={classes.Title}>Accessories</h2>
            <h4 className={classes.Subtitle}>Buy Now</h4>
            <ButtonGroup variant="outlined" aria-label="outlined primary button group">
              <Button>Buy now</Button>
            </ButtonGroup>
          </div>
        </div>
        <div className={classes.ItemLargeReverse}>
          <img className={classes.ImageLargeReverse} src={accessories} alt="" />
          <div className={classes.Text}>
            <h2 className={classes.Title}>Mac</h2>
            <h4 className={classes.Subtitle}>Buy Now</h4>
            <ButtonGroup variant="outlined" aria-label="outlined primary button group">
              <Button>Buy now</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
