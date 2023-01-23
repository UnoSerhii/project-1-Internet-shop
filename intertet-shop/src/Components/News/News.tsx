import classes from "~/Components/News/news.module.scss";
import CardNews from "../Card/CardNews";
import Title from "../Title/Title";

const News = () => {
  return (
    <section className="container">
      <Title titleText={"Technical News"} />
      <div className={`${classes.Wrapper} container`}>
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
      </div>
    </section>
  );
};

export default News;
