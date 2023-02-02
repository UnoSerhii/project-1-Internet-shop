import classes from "~/Components/CatalogSidebar/categoriesCatalog.module.scss";
import Checkbox from "../Base/Checkbox/Checkbox";



const CategoriesCatalog = () => {
  return (
    <aside className={classes.FilterWrapper}>
      <h3 className="sidebar-title">Категорія</h3>
      <div className={classes.FilterList}>
        <ul className={classes.ItemsWrapper}>
            <li  className={classes.Item}>
              <Checkbox />
              <p>Iphone 7</p>
              <span className={classes.ItemCount}>156</span>
            </li>
            <li  className={classes.Item}>
              <Checkbox />
              <p>Iphone 8</p>
              <span className={classes.ItemCount}>108</span>
            </li>
            <li  className={classes.Item}>
              <Checkbox />
              <p>Iphone 11</p>
              <span className={classes.ItemCount}>1000</span>
            </li>
            <li  className={classes.Item}>
              <Checkbox />
              <p>Iphone 12</p>
              <span className={classes.ItemCount}>10</span>
            </li>
            <li  className={classes.Item}>
              <Checkbox />
              <p>Iphone 13</p>
              <span className={classes.ItemCount}>100</span>
            </li>
            <li  className={classes.Item}>
              <Checkbox />
              <p>Iphone 14</p>
              <span className={classes.ItemCount}>1432</span>
            </li>
            <li  className={classes.Item}>
              <Checkbox />
              <p>Iphone 7</p>
              <span className={classes.ItemCount}>156</span>
            </li>
            <li  className={classes.Item}>
              <Checkbox />
              <p>Iphone 8</p>
              <span className={classes.ItemCount}>108</span>
            </li>
            <li  className={classes.Item}>
              <Checkbox />
              <p>Iphone 11</p>
              <span className={classes.ItemCount}>1000</span>
            </li>
            <li  className={classes.Item}>
              <Checkbox />
              <p>Iphone 12</p>
              <span className={classes.ItemCount}>10</span>
            </li>
            <li  className={classes.Item}>
              <Checkbox />
              <p>Iphone 13</p>
              <span className={classes.ItemCount}>100</span>
            </li>
            <li  className={classes.Item}>
              <Checkbox />
              <p>Iphone 14</p>
              <span className={classes.ItemCount}>1432</span>
            </li>
            <li  className={classes.Item}>
              <Checkbox />
              <p>Iphone 7</p>
              <span className={classes.ItemCount}>156</span>
            </li>
            <li  className={classes.Item}>
              <Checkbox />
              <p>Iphone 8</p>
              <span className={classes.ItemCount}>108</span>
            </li>
            <li  className={classes.Item}>
              <Checkbox />
              <p>Iphone 11</p>
              <span className={classes.ItemCount}>1000</span>
            </li>
            <li  className={classes.Item}>
              <Checkbox />
              <p>Iphone 12</p>
              <span className={classes.ItemCount}>10</span>
            </li>
            <li  className={classes.Item}>
              <Checkbox />
              <p>Iphone 13</p>
              <span className={classes.ItemCount}>100</span>
            </li>
            <li  className={classes.Item}>
              <Checkbox />
              <p>Iphone 14</p>
              <span className={classes.ItemCount}>1432</span>
            </li>
        </ul>
        <button className={classes.More}>Показати більше</button>
      </div>
    </aside>
  );
};

export default CategoriesCatalog;
