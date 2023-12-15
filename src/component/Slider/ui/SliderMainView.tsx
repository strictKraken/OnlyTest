import * as React from "react";

type Event = {
  date: string;
  text: string;
};

type Item = {
  startYearDate: number;
  endYearDate: number;
  events: Event[];
};

type Props = {
  title: string;
  items: Item[];
};

const Slider: React.FC<Props> = ({ items, title }) => {
  return (
    <div>
      <Title title={title} />
    </div>
  );
};

const Title: React.FC<{ title: string }> = ({ title }) => {
  return <h2 className="slider__title">{title}</h2>;
};

const RangeDate: React.FC<{ startDate: number; endDate: number }> = ({ startDate, endDate }) => {
  return (
    <div>
      <span>{startDate}</span> <span>{endDate}</span>
    </div>
  );
};
export default Slider;
