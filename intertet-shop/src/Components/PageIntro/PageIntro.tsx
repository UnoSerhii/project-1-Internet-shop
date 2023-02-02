import Breadcrumbs from "../Base/Breadcrumbs/Breadcrumbs";
import classes from "~/Components/PageIntro/pageIntro.module.scss";
import Select from "../Base/Select/Select";

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

const PageIntro = () => {
  return (
    <section>
      <Breadcrumbs />
      <div className={classes.Container}>
        <div className={classes.Wrapper}>
          <nav className={classes.Categories}>
            <h3>Categories</h3>
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
            <div className={classes.Select}>
              <Select label={"Sorted by"} options={options} id={1} />
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default PageIntro;
