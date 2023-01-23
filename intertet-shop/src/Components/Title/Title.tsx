import { FC } from "react";

interface TitleText {
  titleText: string;
}

const Title: FC<TitleText> = ({ titleText }) => {
  return (
    <section className="title-wrapper">
      <h2 className="title">{titleText}</h2>
    </section>
  );
};

export default Title;
