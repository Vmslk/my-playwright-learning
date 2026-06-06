const retries: string = "five";  // What does VS Code show?
const user = { email: "john@test.com", password: "12345" };  // What does VS Code show?
console.log(user.password);      // What does VS Code show?

function getTimeout(seconds: number): number {
  return seconds * 1000;  // Hint: look at the return type
}

const config = { baseURL: "https://staging.example.com" };
console.log(config.baseURL);  // Hint: case matters

function printName(name: string) {
  console.log(name);
}
const userName: string | undefined = undefined;
if (userName) {
printName(userName); }  // Hint: what if userName is undefined?

///////////////////////
// You can define the shape of an object with a "type"
type Product = {
  name: string;
  price: number;
  inStock: boolean;  // ? means optional — can be missing
};

const product: Product = {
  name: "Laptop",
  price: 999.99,
  inStock: true
};

const anotherProduct: Product = {
  name: "Phone",
  price: 499.99,
  inStock: false
}; 

function formatPrice(price: number): string {
    return `$${price.toFixed(2)}`;
}
console.log(formatPrice(19.5));