import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Rating from "@mui/material/Rating";
import classes from "~/Components/CatalogGrid/catalogGrid.module.scss";
import RatingStar from "../Base/Rating/RatingStar";
import iphone from "~/assets/images/original.jpg";

const CatalogGrid = () => {
  return (
    <div className={classes.Wrapper}>
      <nav className={classes.Categories}>
        <ul className={classes.ListItems}>
          <li className={classes.ListItem}>
            <a href="/">Button</a>
          </li>
          <li className={classes.ListItem}>
            <a href="/">Button</a>
          </li>
          <li className={classes.ListItem}>
            <a href="/">Button</a>
          </li>
          <li className={classes.ListItem}>
            <a href="/">Button</a>
          </li>
          <li className={classes.ListItem}>
            <a href="/">Button</a>
          </li>
          <li className={classes.ListItem}>
            <a href="/">Button</a>
          </li>
          <li className={classes.ListItem}>
            <a href="/">Button</a>
          </li>
          <li className={classes.ListItem}>
            <a href="/">Button</a>
          </li>
        </ul>
      </nav>
      <div className={classes.Sorted}>Sorted</div>
      <div className={classes.CatalogInner}>
        <div className={classes.CatalogCards}>
          <div className={classes.Card}>
            <h3 className={classes.Title}>Iphone 11 pro max sad </h3>
            <h5 className={classes.Subtitle}>128 gb SpaceGray</h5>
            <img className={classes.Image} src={iphone} alt="" />
            <RatingStar />
            <div className={classes.BlockPrice}>
              <div className={classes.Price}>
                <h3 className={classes.NewPrice}>1500$</h3>
                <h4 className={classes.OldPrice}>1800$</h4>
              </div>
              <ButtonGroup className={classes.Btn} variant="contained" aria-label="outlined primary button group">
                <Button>Buy now</Button>
              </ButtonGroup>
            </div>
          </div>
          <div className={classes.Card}>
            <h3 className={classes.Title}>Iphone 11 pro max sad </h3>
            <h5 className={classes.Subtitle}>128 gb SpaceGray</h5>
            <img className={classes.Image} src={iphone} alt="" />
            <RatingStar />
            <div className={classes.BlockPrice}>
              <div>
                <h3 className={classes.NewPrice}>1500$</h3>
                <h4 className={classes.OldPrice}>1800$</h4>
              </div>
              <ButtonGroup className={classes.Btn} variant="contained" aria-label="outlined primary button group">
                <Button>Buy now</Button>
              </ButtonGroup>
            </div>
          </div>
          <div className={classes.Card}>
            <h3 className={classes.Title}>Iphone 11 pro max sad </h3>
            <h5 className={classes.Subtitle}>128 gb SpaceGray</h5>
            <img className={classes.Image} src={iphone} alt="" />
            <RatingStar />
            <div className={classes.BlockPrice}>
              <div>
                <h3 className={classes.NewPrice}>1500$</h3>
                <h4 className={classes.OldPrice}>1800$</h4>
              </div>
              <ButtonGroup className={classes.Btn} variant="contained" aria-label="outlined primary button group">
                <Button>Buy now</Button>
              </ButtonGroup>
            </div>
          </div>
          <div className={classes.Card}>
            <h3 className={classes.Title}>Iphone 11 pro max sad </h3>
            <h5 className={classes.Subtitle}>128 gb SpaceGray</h5>
            <img className={classes.Image} src={iphone} alt="" />
            <RatingStar />
            <div className={classes.BlockPrice}>
              <div>
                <h3 className={classes.NewPrice}>1500$</h3>
                <h4 className={classes.OldPrice}>1800$</h4>
              </div>
              <ButtonGroup className={classes.Btn} variant="contained" aria-label="outlined primary button group">
                <Button>Buy now</Button>
              </ButtonGroup>
            </div>
          </div>
          <div className={classes.Card}>
            <h3 className={classes.Title}>Iphone 11 pro max sad </h3>
            <h5 className={classes.Subtitle}>128 gb SpaceGray</h5>
            <img className={classes.Image} src={iphone} alt="" />
            <RatingStar />
            <div className={classes.BlockPrice}>
              <div>
                <h3 className={classes.NewPrice}>1500$</h3>
                <h4 className={classes.OldPrice}>1800$</h4>
              </div>
              <ButtonGroup className={classes.Btn} variant="contained" aria-label="outlined primary button group">
                <Button>Buy now</Button>
              </ButtonGroup>
            </div>
          </div>
          <div className={classes.Card}>
            <h3 className={classes.Title}>Iphone 11 pro max sad </h3>
            <h5 className={classes.Subtitle}>128 gb SpaceGray</h5>
            <img className={classes.Image} src={iphone} alt="" />
            <RatingStar />
            <div className={classes.BlockPrice}>
              <div>
                <h3 className={classes.NewPrice}>1500$</h3>
                <h4 className={classes.OldPrice}>1800$</h4>
              </div>
              <ButtonGroup className={classes.Btn} variant="contained" aria-label="outlined primary button group">
                <Button>Buy now</Button>
              </ButtonGroup>
            </div>
          </div>
          <div className={classes.Card}>
            <h3 className={classes.Title}>Iphone 11 pro max sad </h3>
            <h5 className={classes.Subtitle}>128 gb SpaceGray</h5>
            <img className={classes.Image} src={iphone} alt="" />
            <RatingStar />
            <div className={classes.BlockPrice}>
              <div>
                <h3 className={classes.NewPrice}>1500$</h3>
                <h4 className={classes.OldPrice}>1800$</h4>
              </div>
              <ButtonGroup className={classes.Btn} variant="contained" aria-label="outlined primary button group">
                <Button>Buy now</Button>
              </ButtonGroup>
            </div>
          </div>
          <div className={classes.Card}>
            <h3 className={classes.Title}>Iphone 11 pro max sad </h3>
            <h5 className={classes.Subtitle}>128 gb SpaceGray</h5>
            <img className={classes.Image} src={iphone} alt="" />
            <RatingStar />
            <div className={classes.BlockPrice}>
              <div>
                <h3 className={classes.NewPrice}>1500$</h3>
                <h4 className={classes.OldPrice}>1800$</h4>
              </div>
              <ButtonGroup className={classes.Btn} variant="contained" aria-label="outlined primary button group">
                <Button>Buy now</Button>
              </ButtonGroup>
            </div>
          </div>
          <div className={classes.Card}>
            <h3 className={classes.Title}>Iphone 11 pro max sad </h3>
            <h5 className={classes.Subtitle}>128 gb SpaceGray</h5>
            <img className={classes.Image} src={iphone} alt="" />
            <RatingStar />
            <div className={classes.BlockPrice}>
              <div>
                <h3 className={classes.NewPrice}>1500$</h3>
                <h4 className={classes.OldPrice}>1800$</h4>
              </div>
              <ButtonGroup className={classes.Btn} variant="contained" aria-label="outlined primary button group">
                <Button>Buy now</Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogGrid;
