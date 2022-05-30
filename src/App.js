import React from "react";
import Category from "./components/Category";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import "./scss/app.scss";
import Sort from "./components/Sort";
import axios from "axios";
import PizzaLoadingBlock from "./components/PizzaLoading";
function App() {
  const [items, setItems] = React.useState([]);
  const [isloading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get("https://628f83850e69410599ddd5e1.mockapi.io/items")
      .then((data) => {
        setTimeout(() => {
          setItems(data.data);
          setLoading(false);
        }, 1000);
      });
  }, []);

  return (
    <>
      {" "}
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Category />
              <Sort />
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
        </div>
      </div>
    </>
  );
}

export default App;
