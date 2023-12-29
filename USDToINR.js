/* 
3. Build a feature for Store's Inventory.
Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
use the map higher-order function to create a new object with the converted prices in Rupees.
*/
inventoryInUSD = {
  item1: 220,
  item2: 200,
  item3: 100,
};
const priceInINR = (usdPrice) => usdPrice * 80;

const inventoryInINR = Object.fromEntries(
  Object.entries(inventoryInUSD).map(([item, usdPrice]) => [
    item,
    priceInINR(usdPrice),
  ])
);

console.log("Original Inventory (USD):", inventoryInUSD);
console.log("Converted Inventory (INR):", inventoryInINR);
