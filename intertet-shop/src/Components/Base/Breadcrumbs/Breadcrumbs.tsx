import { Typography, Breadcrumbs as BreadcrumbsMUI } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import ROUTER, { BREADCRUMB_NAME_MAP } from "~/constants/router";
import classes from "~/components/Base/Breadcrumbs/breadcrumbs.module.scss";
// import { Action } from "~/types/Redux";


const LinkRouter = (props: any) => <RouterLink {...props} component={RouterLink} />;

const Breadcrumbs = ({title}: any) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  
  return (
    <BreadcrumbsMUI aria-label="breadcrumb">
      <LinkRouter className={classes.Link} to="/">
        Home
      </LinkRouter>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to =
          ROUTER.CATALOG && index === 1
            ? `/${pathnames.slice(0, 1)}/:id`
            : `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography color="text.primary" key={to}>
            {to === ROUTER.CATALOG_WITH_ID && pathnames.length === 2 ? title : BREADCRUMB_NAME_MAP[to]}
          </Typography>
        ) : (
          <LinkRouter className={classes.Link} to={to} key={to}>
            {BREADCRUMB_NAME_MAP[to]}
          </LinkRouter>
        );
      })}
    </BreadcrumbsMUI>
  );
};

export default Breadcrumbs;
