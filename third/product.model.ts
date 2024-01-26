class Product {
  title: string;
  price: number;

  constructor(t: string, p: number) {
    this.price = p;
    this.title = t;
  }

  getInfo() {
    return [this.title, ` $ ${this.price}`];
  }
}

export { Product };
