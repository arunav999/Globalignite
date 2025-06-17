import Cart from "./components/Cart";
import CartItems from "./components/CartItems";
import CART_DATA, { totalPrice } from "./utils/data";

const App = () => {
  return (
    <>
      <div className="container">
        {/* Heading of the cart */}
        <div className="heading">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </div>
          <div className="head-name">
            <h2>Item Carts</h2>
          </div>
          <div className="icon cart-helper">
            <span className="cart-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </span>
            <span className="cart-num">3</span>
          </div>
        </div>

        {/* CART ITEMS */}
        <div className="cart-items">
          <h2>Your Food Cart</h2>
          {CART_DATA.map((item) => (
            <Cart
              key={item.id}
              dishName={item.dishName}
              imageData={item.imageData}
              imageAlt={item.imageAlt}
              price={item.price}
            />
          ))}
        </div>

        {/* PROMO-CODE-INPUT */}
        <div className="promo">
          <div className="promo-input">
            <input type="text" placeholder="Add Your Promo Code" />
          </div>

          <div className="icon promo-color">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* TOTAL-PRICE */}
        <div className="total">
          <div>
            {CART_DATA.map((item) => (
              <CartItems
                key={item.id}
                item={item.dishName}
                price={item.price}
              />
            ))}
          </div>

          <div className="total-price">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        {/* PAYMENT */}
        <div className="payment">
          <div className="heading">
            <h2>Payment Method</h2>
          </div>

          <div className="method">
            <span>Credit/Debit Card</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
