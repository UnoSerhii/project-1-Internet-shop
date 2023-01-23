import { Button, ButtonGroup } from "@mui/material";
import classes from "~/Components/Footer/footer.module.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Input from "../Base/InputSearch/Input";

const Footer = () => {
  return (
    <footer className={classes.Wrapper}>
      <div className={`${classes.BlockItems} container`}>
        <div className={classes.BlockAddress}>
          <h3 className={classes.Title}>Title</h3>
          <div className={classes.Follow}>
            <Input width={200} />
            {/* <input className={classes.Input} type="email" /> */}
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
              <Button>Subscribe</Button>
            </ButtonGroup>
          </div>
          <h3 className={classes.Title}>Address</h3>
          <p className={classes.Description}>Rivne naberegna 5</p>
          <div className={classes.Call}>
            <a className={classes.Links} href="/">Call me</a>
            <a className={classes.Link} href="tel:8 495 018-32-10">
              +8-495-018-32-10
            </a>
          </div>
        </div>
        <div className={classes.BlockSocials}>
          <h3 className={classes.Title}>Time Work</h3>
          <p className={classes.Description}>Internet Shop</p>
          <p className={classes.Description}>Mn-Fr 9:00 - 18:00</p>
          <p className={classes.Description}>Sunday 10:00 - 18:00</p>
          <h3 className={classes.Title}>Social</h3>
          <ul className={classes.Social}>
            <li>
              <a className={classes.SocialEffects} href="/">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a className={classes.SocialEffects} href="/">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a className={classes.SocialEffects} href="/">
                <TelegramIcon />
              </a>
            </li>
            <li>
              <a className={classes.SocialEffects} href="/">
                <TwitterIcon />
              </a>
            </li>
          </ul>
          <a href="http://Apple.com">Apple.com</a>
        </div>
        <div className={classes.Popular}>
          <h3 className={classes.Title}>Catalog</h3>
          <ul>
            <li className={classes.Link}>
              <a className={classes.Links} href="/">
                Iphone
              </a>
            </li>
            <li className={classes.Link}>
              <a className={classes.Links} href="/">
                Ipad
              </a>
            </li>
            <li className={classes.Link}>
              <a className={classes.Links} href="/">
                Airpods
              </a>
            </li>
            <li className={classes.Link}>
              <a className={classes.Links} href="/">
                Apple Watch
              </a>
            </li>
            <li className={classes.Link}>
              <a className={classes.Links} href="/">
                Apple Tv
              </a>
            </li>
            <li className={classes.Link}>
              <a className={classes.Links} href="/">
                Accessories
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.BlockInfo}>
          <h3 className={classes.Title}>Info</h3>
          <ul>
            <li className={classes.Link}>
              <a className={classes.Links} href="/">
                Info
              </a>
            </li>
            <li className={classes.Link}>
              <a className={classes.Links} href="/">
                Info
              </a>
            </li>
            <li className={classes.Link}>
              <a className={classes.Links} href="/">
                Info
              </a>
            </li>
            <li className={classes.Link}>
              <a className={classes.Links} href="/">
                Info
              </a>
            </li>
            <li className={classes.Link}>
              <a className={classes.Links} href="/">
                Info
              </a>
            </li>
            <li className={classes.Link}>
              <a className={classes.Links} href="/">
                Info
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className={classes.Author}>Made by Serhii Kokorskyi</p>
    </footer>
  );
};

export default Footer;
