const CartItems = ({ item, price }) => {
  return (
    <>
      <div className="item">
        <span>{item}</span>
        <span>${price}</span>
      </div>
    </>
  );
};

export default CartItems;
