import * as React from "react";

import styles from "./styles.module.scss";

type Props = {
  onClickPrev: () => void;
  onClickNext: () => void;
  countSlides: number;
  currentSlide: number;
};

const Dot: React.FC<{ active?: boolean }> = ({ active }) => {
  return <div className={`${styles.dot} ${active && styles.active}`} />;
};

const Dots: React.FC<{ countSlides: number; activeSlide: number }> = ({ countSlides, activeSlide }) => {
  const dotsList = [];
  for (let i = 0; i < countSlides; i++) {
    dotsList.push(Dot({ active: i === activeSlide }));
  }

  return (
    <div className={styles['dot-list']}>
      {dotsList.map((item) => (
        <></>
      ))}
    </div>
  );
};

const SliderNavigation: React.FC<Props> = () => {
  return (
    <div>
      <div></div>
    </div>
  );
};

export default SliderNavigation;
