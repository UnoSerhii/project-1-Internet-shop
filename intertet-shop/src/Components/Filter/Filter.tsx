import classes from "~/Components/Filter/filter.module.scss";
import Checkbox from "../Base/Checkbox/Checkbox";
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

const Filter = () => {
  return (
    <section className={classes.Content}>
      <div className={classes.Header}>Filter and Icon</div>
      <div className={classes.Body}>
        <div className={classes.SectionsFilter}>
          <h3 className={classes.FilterTitle}>Products</h3>
          <div className={classes.FilterOptions}>
            <Checkbox />
            <span>Product</span>
            <span>Count</span>
          </div>
        </div>
        <div className={classes.SectionsFilter}>
          <h3 className={classes.FilterTitle}>Products</h3>
          <div className={classes.FilterOptions}>
            <Checkbox />
            <span>Product</span>
            <span>Count</span>
          </div>
        </div>
        <div className={classes.SectionsFilter}>
          <h3 className={classes.FilterTitle}>Products</h3>
          <div className={classes.FilterOptions}>
            <Checkbox />
            <span>Product</span>
            <span>Count</span>
          </div>
          <div className={classes.FilterOptions}>
            <Checkbox />
            <span>Product</span>
            <span>Count</span>
          </div>
          <div className={classes.FilterOptions}>
            <Checkbox />
            <span>Product</span>
            <span>Count</span>
          </div>
          <div className={classes.FilterOptions}>
            <Checkbox />
            <span>Product</span>
            <span>Count</span>
          </div>
        </div>
        <div className={classes.SectionsFilter}>
          <h3 className={classes.FilterTitle}>Products</h3>
          <div className={classes.FilterOptions}>
            <Checkbox />
            <span>Product</span>
            <span>Count</span>
          </div>
        </div>
        <div className={classes.SectionsFilter}>
          <h3 className={classes.FilterTitle}>Products</h3>
          <div className={classes.FilterOptions}>
            <Checkbox />
            <span>Product</span>
            <span>Count</span>
          </div>
        </div>
      </div>
      <div className={classes.Footer}>
        <button>Refresh</button>
        <button>Go</button>
      </div>
    </section>
  );
};

export default Filter;
