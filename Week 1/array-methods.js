//Products in a store
const products = [
    {
      name: "Laptop",
      category: "Electronics",
      price: 1200,
      stock: 10,
    },
    {
      name: "Smartphone",
      category: "Electronics",
      price: 800,
      stock: 25,
    },
    {
      name: "Coffee Maker",
      category: "Home Appliances",
      price: 100,
      stock: 15,
    },
    {
      name: "Desk Chair",
      category: "Furniture",
      price: 250,
      stock: 5,
    },
    {
      name: "Book - JavaScript Guide",
      category: "Books",
      price: 30,
      stock: 50,
    },
    {
      name: "Gaming Console",
      category: "Electronics",
      price: 500,
      stock: 8,
    },
    {
      name: "Headphones",
      category: "Accessories",
      price: 150,
      stock: 20,
    },
    {
      name: "Electric Kettle",
      category: "Home Appliances",
      price: 60,
      stock: 12,
    },
  ];
  

//Get a list of products that have a price greater than $200

const filteredProducts = products.filter((item) => item.price >200)
console.log(filteredProducts)

//Extract and create an array of product names.

const productNames = products.map((product) => product.name)
console.log("Product Names -> ", productNames)

//Find the first product that belongs to the "Electronics" category.

const productFound = products.find((product) => product.category === "Electronics")
console.log(productFound)

//Print out each product’s name and its stock quantity.

products.forEach((product) => {
  console.log(product.name, product.stock)
})

//Check if there is any product in the list that costs more than $1000.

const isCostly = products.some((product) => {
  return product.price > 1000;
})
console.log(isCostly)

//Verify if all products in the list have a stock quantity greater than or equal to 10.

const inStock = products.every((product) => {
  return product.stock >= 10
});
console.log("Products in stock - ", inStock)

//Calculate the total value of all products in stock (price × stock for each product, then sum them up).

const total = products.reduce((curr, product ) => {
return (product.price* product.stock) + curr
},0)
console.log("Total value of all products -> ", total)

//Create an array of product categories from the products array, then check if it includes "Furniture".

const productCategories = products.map((product) => product.category)

console.log("Check if furtniture exists in category", productCategories.includes("Furniture"))

