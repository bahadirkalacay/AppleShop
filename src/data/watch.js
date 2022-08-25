import watch from "../images/products/watch.webp";
import watch3 from "../images/products/watch3.webp";
import watch7 from "../images/products/watch7.webp";
import watch1 from "../images/products/watch1.webp";
import watch5 from "../images/products/watch5.webp";
import walpaper2 from "../images/products/walpaper2.jpg";
import watch2 from "../images/products/watch2.jpg";
import watchwalpaper from "../images/products/watchwalpaper.jpg";
import watch4 from "../images/products/watch4.webp";
import watch6 from "../images/products/watch6.webp";
import watch8 from "../images/products/watch8.webp";

const videoCards = [
  {
    category: "Watch",
    categoryId: "watch",
    id: "watch1",
    name: "Apple Watch Series 7",
    price: 500,
    image: watch,
    previewImage: watchwalpaper,
    gallery: [watch1, watch2],
  },
  {
    category: "Watch",
    categoryId: "watch",
    id: "watch3",
    name: "Apple Watch Series 3",
    price: 350,
    image: watch7,
    previewImage: walpaper2,
    gallery: [watch6, watch8],
  },
  {
    category: "Watch",
    categoryId: "watch",
    id: "watch2",
    name: "Apple Watch SE",
    price: 400,
    image: watch3,
    previewImage: walpaper2,
    gallery: [watch4, watch5],
  },
];

export default videoCards;
