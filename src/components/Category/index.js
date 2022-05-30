import React from "react";

export default function Category() {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const [activeIndex, setActiveIndex] = React.useState(0);
  const addChange = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <div className="categories">
        <ul>
          {categories.map((data, i) => (
            <li
              key={data + i}
              onClick={() => {
                addChange(i);
              }}
              className={activeIndex === i ? "active" : ""}
            >
              {data}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
