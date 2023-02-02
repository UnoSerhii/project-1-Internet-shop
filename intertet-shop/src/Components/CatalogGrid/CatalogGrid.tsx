import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import classes from "~/Components/CatalogGrid/catalogGrid.module.scss";
import RatingStar from "../Base/Rating/RatingStar";
import iphone from "~/assets/images/original.jpg";
// import Select from "../Base/Select/Select";

const options = [
  {
    value: "За популярністю",
    id: 1,
  },
  {
    value: "Від найнижчої ціни",
    id: 2,
  },
  {
    value: "Від дорогих",
    id: 3,
  },
  {
    value: "За рейтингом",
    id: 4,
  },
  {
    value: "Акційні",
    id: 5,
  },
  {
    value: "Зі знижкою",
    id: 6,
  },
];

const CatalogGrid = () => {
  return (
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
  );
};

export default CatalogGrid;
