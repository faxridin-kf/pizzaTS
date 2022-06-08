import React from "react";

export default function Category({ val, onClickcategory }) {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <>
      <div className="categories">
        <ul>
          {categories.map((data, i) => (
            <li
              key={data + i}
              onClick={() => {
                onClickcategory(i);
              }}
              className={val === i ? "active" : ""}
            >
              {data}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
