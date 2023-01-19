import classes from "~/Components/Header/header.module.scss";
import Logo from "~/assets/images/watch.svg";
import { Button, styled } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import Badge, { BadgeProps } from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import PlaceIcon from "@mui/icons-material/Place";
import AddIcon from "@mui/icons-material/Add";
import FreeSoloCreateOptionDialog from "../Base/InputSearch/InputSearch";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  return (
    <header className={classes.Header}>
      <div className="container">
        <div className={classes.WrapperUp}>
          <a href="/">
            <img src={Logo} alt="logo" width={200} />
          </a>
          <div className={classes.Place}>
            <PlaceIcon />
            <p>Ukraine</p>
          </div>
          <div className={classes.Contact}>
            <a href="tel:8 495 018-32-10">+8-495-018-32-10</a>
            <ArrowDropDownOutlinedIcon />
            <a href="/">Please Call Me</a>
          </div>
          <nav>
            <ul className={classes.Navigation}>
              <li>
                <a className={classes.NavStyled} href="/">
                  Pay
                </a>
              </li>
              <li>
                <a className={classes.NavStyled} href="/">
                  Delivery
                </a>
              </li>
              <li>
                <a className={classes.NavStyled} href="/">
                  About
                </a>
              </li>
              <li>
                <a className={classes.NavStyled} href="/">
                  Benefits
                </a>
              </li>
              <li>
                <a className={classes.NavStyled} href="/">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={classes.WrapperDown}>
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button className={classes.ButtonLg} color="info">
              Catalog
            </Button>
            <Button className={classes.ButtonMg}>Sale</Button>
            <Button className={classes.ButtonMg}>Brands</Button>
          </ButtonGroup>
          <div className={classes.Search}>
            <FreeSoloCreateOptionDialog />
            <Button className={classes.SearchIcon} color="info">
            <SearchOutlinedIcon />
            </Button>
          </div>
          <div>
            <div className={classes.Icons}>
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={1} color="warning">
                  <PermIdentityOutlinedIcon />
                </StyledBadge>
              </IconButton>
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={9} color="warning">
                  <FavoriteBorderOutlinedIcon />
                </StyledBadge>
              </IconButton>
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="warning">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
