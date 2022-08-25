import Iphone13 from "../images/products/Iphone13.webp";
import Iphone12 from "../images/products/Iphone12.webp";
import ıphone11 from "../images/products/ıphone11.webp";
import ıphone11aa from "../images/products/ıphone11aa.webp";
import Iphone13A from "../images/products/ıphone12a.jpg";
import Iphone12a from "../images/products/Iphone13A.jpg";
import ıphone11a from "../images/products/ıphone11a.jpg";
import ıphone11b from "../images/products/ıphone11b.webp";
import walpaper13 from "../images/products/walpaper13.webp";
import walpaper13A from "../images/products/walpaper13A.webp";
import ıphone11walpaper from "../images/products/ıphone11walpaper.webp";
import ıphone11walpaper2 from "../images/products/ıphone11walpaper2.webp";
import ıphone12walpaper from "../images/products/ıphone12walpaper.webp";
import ıphone12walpaper2 from "../images/products/ıphone12walpaper2.webp";

const phone = [
  {
    category: "phone",
    categoryId: "phone",
    id: "ıphone-13",
    name: "Iphone 13 Pro 256GB",
    price: 1250,
    image: Iphone13,
    previewImage: Iphone13A,
    gallery: [walpaper13, walpaper13A],
  },
  {
    category: "phone",
    categoryId: "phone",
    id: "Iphone-12-Pro",
    name: "Iphone 12 Pro 256GB",
    price: 900,
    image: Iphone12,
    previewImage: Iphone12a,
    gallery: [ıphone12walpaper, ıphone12walpaper2],
  },
  {
    category: "phone",
    categoryId: "phone",
    id: "Iphone-11",
    name: "Iphone 11 128GB",
    price: 600,
    image: ıphone11,
    previewImage: ıphone11a,
    gallery: [ıphone11walpaper, ıphone11walpaper2],
  },
  {
    category: "phone",
    categoryId: "phone",
    id: "ıphone-11",
    name: "Iphone 11 64GB",
    price: 480,
    image: ıphone11aa,
    previewImage: ıphone11b,
    gallery: [ıphone11walpaper, ıphone11walpaper2],
  },
];

export default phone;
