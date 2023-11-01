import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

function Seafood() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        console.log(res.data);
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemList = items.map(({strMeal, strMealThumb, idMeal}) => {
    return (
     <section className="card">
      <img src={strMealThumb}/>
      <section className="content">
        <p>{strMeal}</p>
        <p>#{idMeal}</p>
      </section>
     </section> 
    )
  });

  return <div className="items-container">
    {itemList};
  </div>
}

export default Seafood;
