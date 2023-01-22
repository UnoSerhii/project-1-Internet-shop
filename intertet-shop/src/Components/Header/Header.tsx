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
import FreeSoloCreateOptionDialog from "../Base/InputSearch/InputSearch";
import { Link } from "react-router-dom";
import ROUTER from "~/constants/router";
import Btn from "../Button/Btn";

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
          <nav>
            <ul className={classes.Navigation}>
              <li>
                <Link className={classes.NavStyled} to={ROUTER.PAY}>
                  Pay
                </Link>
              </li>
              <li>
                <Link className={classes.NavStyled} to={ROUTER.DELIVERY}>
                  Delivery
                </Link>
              </li>
              <li>
                <Link className={classes.NavStyled} to={ROUTER.ABOUT}>
                  About
                </Link>
              </li>
              <li>
                <Link className={classes.NavStyled} to={ROUTER.BENEFITS}>
                  Benefits
                </Link>
              </li>
              <li>
                <Link className={classes.NavStyled} to={ROUTER.CONTACTS}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <div className={classes.Icons}>
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={1} color="success">
                  <PermIdentityOutlinedIcon />
                </StyledBadge>
              </IconButton>
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={9} color="success">
                  <FavoriteBorderOutlinedIcon />
                </StyledBadge>
              </IconButton>
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="success">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </div>
          </div>
        </div>
        <div className={classes.WrapperDown}>
          <div className={classes.WrapperInner}>
            <Link to={ROUTER.HOME}>
              <img src={Logo} alt="logo" width={200} />
            </Link>
            <Link to={ROUTER.CATALOG}>
              <Btn />
            </Link>
          </div>
          <div className={classes.Search}>
            <FreeSoloCreateOptionDialog />
            <Button className={classes.SearchIcon} color="info">
              <SearchOutlinedIcon />
            </Button>
            <div className={classes.Contact}>
              <a href="tel:8 495 018-32-10">+8-495-018-32-10</a>
              <ArrowDropDownOutlinedIcon />
              <a className={classes.NavStyled} href="/">
                Please Call Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
