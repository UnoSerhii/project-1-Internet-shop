import classes from "~/Components/Base/Checkbox/checkbox.module.scss";

const Checkbox = () => {
  return (
    <form action="">
      <label className={classes.FormControl}>
        <input type="checkbox" name="checkbox" />
      </label>
    </form>
  );
};

export default Checkbox;
