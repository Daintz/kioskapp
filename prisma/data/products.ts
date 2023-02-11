
const products = [
  {
    name: "Coffee Caramel with Chocolate",
    price: 59.9,
    image: "coffee_01",
    categoryId: 1
  },
  {
    name: "Cold coffee with large chocolate",
    price: 49.9,
    image: "coffee_02",
    categoryId: 1
  },
  {
    name: "Large Chocolate Cold Latte",
    price: 54.9,
    image: "coffee_03",
    categoryId: 1
  },
  {
    name: "Large Chocolate Cold Latte",
    price: 54.9,
    image: "coffee_04",
    categoryId: 1
  },
  {
    name: "Large Chocolate Cold Milkshake",
    price: 54.9,
    image: "coffee_05",
    categoryId: 1
  },
  {
    name: "Café Mocha Hot Chico",
    price: 39.9,
    image: "coffee_06",
    categoryId: 1
  },
  {
    name: "Café Mocha Hot Grande con Chocolate",
    price: 59.9,
    image: "coffee_07",
    categoryId: 1
  },
  {
    name: "Large Cappuccino Hot Coffee",
    price: 59.9,
    image: "coffee_08",
    categoryId: 1
  },
  {
    name: "Medium Hot Mocha Coffee",
    price: 49.9,
    image: "coffee_09",
    categoryId: 1
  },
  {
    name: "Cold Mocha Coffee with Medium Caramel",
    price: 49.9,
    image: "coffee_10",
    categoryId: 1
  },
  {
    name: "Medium Chocolate Cold Mocha Coffee",
    price: 49.9,
    image: "coffee_11",
    categoryId: 1
  },
  {
    name: "Espresso Coffee",
    price: 29.9,
    image: "coffee_12",
    categoryId: 1
  },
  {
    name: "Large Cappuccino Coffee with Caramel",
    price: 59.9,
    image: "coffee_13",
    categoryId: 1
  },
  {
    name: "Large Caramel Coffee",
    price: 59.9,
    image: "coffee_14",
    categoryId: 1
  },
  {
    name: "Pack of 3 Chocolate donuts",
    price: 39.9,
    image: "donuts_01",
    categoryId: 4
  },
  {
    name: "Pack of 3 glazed donuts",
    price: 39.9,
    image: "donuts_02",
    categoryId: 4
  },
  {
    name: "Strawberry Donut",
    price: 19.9,
    image: "donuts_03",
    categoryId: 4
  },
  {
    name: "Donut with Chocolate Cookie",
    price: 19.9,
    image: "donuts_04",
    categoryId: 4
  },
  {
    name: "Donut glass with Strawberry Flavored Sprinkles",
    price: 19.9,
    image: "donuts_05",
    categoryId: 4
  },
  {
    name: "Donut glass with Chocolate",
    price: 19.9,
    image: "donuts_06",
    categoryId: 4
  },
  {
    name: "Chocolate Donation with MORE Chocolate",
    price: 19.9,
    image: "donuts_07",
    categoryId: 4
  },
  {
    name: "Pack of 3 Chocolate donuts",
    price: 39.9,
    image: "donuts_08",
    categoryId: 4
  },
  {
    name: "Pack of 3 doughnuts with Vanilla and Chocolate",
    price: 39.9,
    image: "donuts_09",
    categoryId: 4
  },
  {
    name: "Pack of 6 Doughnuts",
    price: 69.9,
    image: "donuts_10",
    categoryId: 4
  },
  {
    name: "Pack of 3 Assorted",
    price: 39.9,
    image: "donuts_11",
    categoryId: 4
  },
  {
    name: "Natural Donut with Chocolate",
    price: 19.9,
    image: "donuts_12",
    categoryId: 4
  },
  {
    name: "Pack of 3 Chocolate Doughnuts with Sprinkles",
    price: 39.9,
    image: "donuts_13",
    categoryId: 4
  },
  {
    name: "Donut Chocolate and Coconut",
    price: 19.9,
    image: "donuts_14",
    categoryId: 4
  },
  {
    name: "Chocolate Cookie Pack",
    price: 29.9,
    image: "cookies_01",
    categoryId: 6
  },
  {
    name: "Chocolate Oatmeal Cookie Pack",
    price: 39.9,
    image: "cookies_02",
    categoryId: 6
  },
  {
    name: "Package of Vanilla Muffins",
    price: 39.9,
    image: "cookies_03",
    categoryId: 6
  },
  {
    name: "Pack of 4 Oatmeal Cookies",
    price: 24.9,
    image: "cookies_04",
    categoryId: 6
  },
  {
    name: "Assorted Butter Cookies",
    price: 39.9,
    image: "cookies_05",
    categoryId: 6
  },
  {
    name: "Fruit flavored cookies",
    price: 39.9,
    image: "cookies_06",
    categoryId: 6
  },
  {
    name: "Simple Hamburger",
    price: 59.9,
    image: "hamburgers_01",
    categoryId: 2
  },
  {
    name: "Chicken Burger",
    price: 59.9,
    image: "hamburgers_02",
    categoryId: 2
  },
  {
    name: "Chicken and Chili Burger",
    price: 59.9,
    image: "hamburgers_03",
    categoryId: 2
  },
  {
    name: "Cucumber Cheeseburger",
    price: 59.9,
    image: "hamburgers_04",
    categoryId: 2
  },
  {
    name: "Quarter Pounder Burger",
    price: 59.9,
    image: "hamburgers_05",
    categoryId: 2
  },
  {
    name: "Double Cheeseburger",
    price: 69.9,
    image: "hamburgers_06",
    categoryId: 2
  },
  {
    name: "Hot Dog Special",
    price: 49.9,
    image: "hamburgers_07",
    categoryId: 2
  },
  {
    name: "Package 2 Hot Dogs",
    price: 69.9,
    image: "hamburgers_08",
    categoryId: 2
  },
  {
    name: "4 Slices of Cheesecake",
    price: 69.9,
    image: "cake_01",
    categoryId: 5
  },
  {
    name: "Waffle Special",
    price: 49.9,
    image: "cake_02",
    categoryId: 5
  },
  {
    name: "Croissants From the house",
    price: 39.9,
    image: "cake_03",
    categoryId: 5
  },
  {
    name: "Cheese Cake",
    price: 19.9,
    image: "cake_04",
    categoryId: 5
  },
  {
    name: "Chocolate Cake",
    price: 29.9,
    image: "cake_05",
    categoryId: 5
  },
  {
    name: "Sliced Chocolate Cake",
    price: 29.9,
    image: "cake_06",
    categoryId: 5
  },
  {
    name: "Spicy Pizza with Double Cheese",
    price: 69.9,
    image: "pizzas_01",
    categoryId: 3
  },
  {
    name: "Ham and Cheese Pizza",
    price: 69.9,
    image: "pizzas_02",
    categoryId: 3
  },
  {
    name: "Double Cheese Pizza",
    price: 69.9,
    image: "pizzas_03",
    categoryId: 3
  },
  {
    name: "House Special Pizza",
    price: 69.9,
    image: "pizzas_04",
    categoryId: 3
  },
  {
    name: "Chorizo Pizza",
    price: 69.9,
    image: "pizzas_05",
    categoryId: 3
  },
  {
    name: "Hawaiian Pizza",
    price: 69.9,
    image: "pizzas_06",
    categoryId: 3
  },
  {
    name: "Bacon Pizza",
    price: 69.9,
    image: "pizzas_07",
    categoryId: 3
  },
  {
    name: "Pizza Vegetables and Cheese",
    price: 69.9,
    image: "pizzas_08",
    categoryId: 3
  },
  {
    name: "Pepperoni and Cheese Pizza",
    price: 69.9,
    image: "pizzas_09",
    categoryId: 3
  },
  {
    name: "Olives and Cheese Pizza",
    price: 69.9,
    image: "pizzas_10",
    categoryId: 3
  },
  {
    name: "Cheese, Ham and Mushroom Pizza",
    price: 69.9,
    image: "pizzas_11",
    categoryId: 3
  }
]

export {
  products
}