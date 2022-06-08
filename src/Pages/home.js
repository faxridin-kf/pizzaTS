import React from "react";

import Category from "../components/Category";

import PizzaBlock from "../components/PizzaBlock";
import Sort from "../components/Sort";
import axios from "axios";
import PizzaLoadingBlock from "../components/PizzaLoading";
export default function Home() {
  const [items, setItems] = React.useState([]);
  const [isloading, setLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sort: "raiting",
  });

  React.useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://628f83850e69410599ddd5e1.mockapi.io/items?${
          categoryId > 0 ? `category=${categoryId}` : ""
        }&sortBy=${sortType.sort}&order=desc`
      )
      .then((data) => {
        setItems(data.data);
        setLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId]);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Category
            val={categoryId}
            onClickcategory={(i) => {
              setCategoryId(i);
            }}
          />
          <Sort
            val={sortType}
            onClickSort={(i) => {
              setSortType(i);
            }}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isloading
            ? [...new Array(6)].map((_, index) => (
                <PizzaLoadingBlock key={index} />
              ))
            : items.map((data) => (
                <PizzaBlock
                  key={data.id}
                  price={data.price}
                  title={data.name}
                  imgUrl={data.imageUrl}
                  size={data.sizes}
                  type={data.types}
                />
              ))}
          {/* {items.map((data, i) => (
                <PizzaLoadingBlock
                  //  {...data}
                  key={data + i}
                  price={data.price}
                  title={data.name}
                  imgUrl={data.imageUrl}
                  size={data.sizes}
                  type={data.types}
                />
              ))} */}
        </div>
      </div>
    </>
  );
}
