import { useState } from "react";
import "./styles.css";

export default function App() {
  const product = [
    {
      id: 1,
      name: "Apple"
    },
    {
      id: 2,
      name: "Banana"
    },
    {
      id: 3,
      name: "Mango"
    },
    {
      id: 4,
      name: "Santra"
    },
    {
      id: 5,
      name: "Chiku"
    },
    {
      id: 6,
      name: "Jamun"
    }
  ];
  const [cart, setCart] = useState([]);
  const clickHandler = (item) => {
    const index = cart.findIndex((one) => one.id === item.id);

    if (index === -1) {
      setCart([...cart, { ...item, qty: 1 }]);
    } else {
      setCart([
        ...cart.slice(0, index),
        { ...item, qty: cart[index].qty + 1 },
        ...cart.slice(index + 1)
      ]);
    }
  };

  return (
    <div className="App">
      <div>
        <h2>Add to Cart</h2>
        <div className="card-container">
          {product.map((ele, index) => {
            return (
              <div key={index}>
                <h3>{ele.name}</h3>
                <button onClick={() => clickHandler(ele)}>Add to Cart</button>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h2>My Cart</h2>
        <div className="card-container">
          {cart.map((item, index) => {
            return (
              <div key={index}>
                <h3> {item.name} </h3>
                <div>Quantity: {item.qty}</div>
                <button> Remove from Cart</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
