import Input from "../Base/InputSearch/Input";
import Btn from "../Button/Btn";
import classes from "~/Components/Follow/follow.module.scss";
import smartphone from '~/assets/images/img2.png'
import Title from "../Title/Title";

const Follow = () => {
  return (
    <div className="container">
      <Title titleText={'Contact Us'} />
      <div className={classes.Inner}>
        <div className={classes.Title}>
          <h2>Follow me | Sale Products</h2>
          <h4>Subtitle</h4>
          <div className={classes.Input}>
            <Input width={500} />
            <Btn />
          </div>
        </div>
        <div>
          <img className={classes.Image} src={smartphone} alt="Input Image" />
        </div>
      </div>
    </div>
  );
};

export default Follow;
