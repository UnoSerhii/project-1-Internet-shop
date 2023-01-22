import Showcase from "~/Components/Showcase/Showcase";
import Products from "~/Components/Products/Products";
import Category from "~/Components/Category/Category";
import News from "~/Components/News/News";
import Follow from "~/Components/Follow/Follow";

const Home = () => {
  return (
    <>
      <Showcase />
      <Products />
      <Category />
      <News />
      <Follow />
    </>
  );
};

export default Home;
