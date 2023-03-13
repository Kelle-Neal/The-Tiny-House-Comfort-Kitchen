import React, { useState, useEffect } from "react";
import getData from "../../getData";

function Dinner() {
  const API = 'https://www.jsonkeeper.com/b/MDXW';
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData(API).then((data) => {
      setItems(
        data.filter(
          (item) =>
            item.category === "Dinner"
        )
      );
    });
  }, [API]);

  return (
    <>
      <div className="row" id="dinnerMenu"></div>
      <h1 className="Header text-center">Dinner Menu</h1>
      {items.map((item) => (
        <div key={item.id} id="info">
          <div className="card text-center width: 18rem;">
            <h4 className='card-title'>{item.title}</h4>
            <h5 className="card-subtitle mb-2 text-muted">{item.price}</h5>
            <p className='card-text'>{item.description}</p>
            <p className='card-text'>Spice Level {item.spicy_level}</p>
            <div className="vr"></div>
          </div>
        </div>
      ))}
    </>
  );
}
export default Dinner;




