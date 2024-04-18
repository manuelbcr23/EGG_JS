const producto1 = {
  nombre: "celular",
  precio: 100000,
  stock: 2,
};

producto1.id = "id123";
producto1["foto"] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";

console.log(producto1);
console.log(producto1.nombre);

class Product {
  constructor(id, title, price, stock, images, onsale, supplier) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
    this._supplier = supplier;
  }

  get getSupplier() {
    return this._supplier;
  }

  set setSupplier(newName) {
    this._supplier = newName;
  }

  sellUnits(units) {
    if (units > this.stock) {
      throw new Error("No hay suficiente stock para vender");
    }
    this.stock -= units;
  }
}

const prod1 = new Product(
  1,
  "Producto 1",
  100,
  10,
  ["img1.jpg", "img2.jpg"],
  true
);
const prod2 = new Product(
  2,
  "Producto 2",
  200,
  5,
  ["img3.jpg", "img4.jpg"],
  false
);
const prod3 = new Product(
  3,
  "Producto 3",
  150,
  8,
  ["img5.jpg", "img6.jpg"],
  true
);

console.log(prod1);
console.log(prod2);
console.log(prod3);
console.log(prod2.title); // Acceder al título de prod2
console.log(prod3.onsale); // Acceder al estado de oferta de prod3

const prod4 = new Product(
  4,
  "Producto 4",
  300,
  6,
  ["img7.jpg", "img8.jpg"],
  true,
  "Proveedor 4"
);

console.log(prod4.getSupplier); // Obtener el proveedor de prod1
prod4.setSupplier = "Nuevo Proveedor"; // Establecer un nuevo proveedor para prod1
console.log(prod4.getSupplier); // Verificar el cambio del proveedor

const prod5 = new Product(
    5,
    "Producto 5",
    350,
    12,
    ["img9.jpg", "img10.jpg"],
    true,
    "Proveedor 5"
  );

  console.log(prod5.stock);

  prod5.sellUnits(10);
  prod5.sellUnits(2);

  console.log(prod5.stock);
