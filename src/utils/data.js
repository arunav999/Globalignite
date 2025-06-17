import grilledSalmon from "../images/grilledSalmon.jpg";
import meatVegetable from "../images/meatVegetable.jpg";

const CART_DATA = [
  {
    id: 1,
    dishName: "Grilled Salmon",
    imageData: grilledSalmon,
    imageAlt: "Grilled Salmon Image",
    price: 96.01,
  },
  {
    id: 2,
    dishName: "Meat Vegetable",
    imageData: meatVegetable,
    imageAlt: "Meat Vegetable Image",
    price: 65.08,
  },
];

let totalPrice = 0;

CART_DATA.forEach((item) => {
  totalPrice += item.price;
});

export default CART_DATA;
export { totalPrice };
