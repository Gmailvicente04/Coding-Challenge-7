// Task 1: Function Declaration
function calculateInvoice(subtotal, taxRate, discount) {
    const total = (subtotal + (subtotal * taxRate)) - discount;
    return `Total Invoice: $${total.toFixed(2)}`;
  }
  
  // Test Data
  console.log(calculateInvoice(100, 0.08, 5)); // Expected output: "Total Invoice: $103.00"
  console.log(calculateInvoice(500, 0.1, 20)); // Expected output: "Total Invoice: $530.00"

  // Task 2: Function Expression
const calculateHourlyWage = function(salary, hoursPerWeek) {
    const hourlyWage = salary / (hoursPerWeek * 52);
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`;
  };
  
  // Test Data
  console.log(calculateHourlyWage(52000, 40)); // Expected output: "Hourly Wage: $25.00"
  console.log(calculateHourlyWage(75000, 35)); // Expected output: "Hourly Wage: $41.21"

  // Task 3: Arrow Function
const calculateLoyaltyDiscount = (amount, years) => {
    let discountRate = 0.05;
    if (years >= 5) discountRate = 0.15;
    else if (years >= 3) discountRate = 0.10;
  
    const discountedPrice = amount * (1 - discountRate);
    return `Discounted Price: $${discountedPrice.toFixed(2)}`;
  };
  
  // Test Data
  console.log(calculateLoyaltyDiscount(100, 6)); // Expected output: "Discounted Price: $85.00"
  console.log(calculateLoyaltyDiscount(200, 2)); // Expected output: "Discounted Price: $190.00"
  

  // Task 4: Parameters and Arguments
function calculateShippingCost(weight, location, expedited = false) {
    let baseCost = 0;
    let perPoundRate = 0;
  
    if (location === "USA") {
      baseCost = 5;
      perPoundRate = 0.5;
    } else if (location === "Canada") {
      baseCost = 10;
      perPoundRate = 0.7;
    }
  
    let shippingCost = baseCost + (weight * perPoundRate);
    if (expedited) shippingCost += 10;
  
    return `Shipping Cost: $${shippingCost.toFixed(2)}`;
  }
  
  // Test Data
  console.log(calculateShippingCost(10, "USA", true)); // Expected output: "Shipping Cost: $20.00"
  console.log(calculateShippingCost(5, "Canada", false)); // Expected output: "Shipping Cost: $13.50"
  