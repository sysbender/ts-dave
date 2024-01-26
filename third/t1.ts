import _, { forEach } from "lodash";
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { Product } from "./product.model";
console.log(_.shuffle([1, 2, 3]));

const p1: Product = new Product("book", 12);
console.log(p1.getInfo());

const products = [
  { title: "book", price: 12 },
  { title: "cloth", price: 34 },
];

const productObjects = products.map((v) => new Product(v.title, v.price));

const loaded = plainToClass(Product, products);
for (const p of productObjects) {
  console.log("p=", p.getInfo());
}
