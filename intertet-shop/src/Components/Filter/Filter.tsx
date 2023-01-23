import classes from "~/Components/Filter/filter.module.scss";
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
    <section className="container">
      <div className={classes.Wrapper}>
        <div>
          <h3 className={classes.Title}>Filter</h3>
          <div className={classes.Inner}>
            <p className={classes.Description}>Selected 10 products</p>
            <div>Button Category</div>
            <div className={classes.Label}>
              <Select id="sorted-by" label="Сортувати за" options={options} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
