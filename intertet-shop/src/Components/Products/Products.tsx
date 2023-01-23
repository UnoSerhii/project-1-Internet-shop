import classes from "~/Components/Products/products.module.scss";
import SliderSwipe from "../Base/Slider/SliderSwipe";
import Title from "../Title/Title";

const Products = () => {
  return (
    <section className={`${classes.Container} container`}>
      <div className={classes.CardsInner}>
        <Title titleText={"New Products Buy Now"} />
        <SliderSwipe />
      </div>
    </section>
  );
};

export default Products;
