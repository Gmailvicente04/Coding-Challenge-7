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
  