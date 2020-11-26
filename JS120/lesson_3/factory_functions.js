// 1) What are two disadvantages of working with factory functions?

/* 
1 - Every object created by a factory function has a full copy of all the methods,
 which uses up a lot of memory.
2 - You can't tell whether an object was created by a factory function by inspeciting it, which
means you can't identify whether you're working with the correct type of object.
*/

// 2) Rewrite the following code to use object-literal syntax to generate the returned object:

function makeObj(propA, propB) {
  return {
    propA,
    propB,
  };
}

let obj1 = makeObj(10, 20);
// console.log(obj1);

// 3) - We'll build a simple invoice processing program. Here's the code to process a single invoice:
// create a factory method that we can use to create invoices. Here are the requirements:
/* 
 - It returns an invoice object, with phone and internet properties, and a total method.
 - The default value for the phone service is 3000, and the internet service is 5500 (in cents).
 - The function takes an object argument whose attributes override the default values.
*/

// let invoice = {
//   phone: 3000,
//   internet: 6500,
// };

// let payment = {
//   phone: 1300,
//   internet: 5500,
// };

// let invoiceTotal = invoice.phone + invoice.internet;
// let paymentTotal = payment.phone + payment.internet;
// let remainingDue = invoiceTotal - paymentTotal;

// console.log(paymentTotal); // => 6800
// console.log(remainingDue); // => 2700

// function createInvoice(services = {}) {
//   let phoneCost = services.phone || 3000;
//   let internetCost = services.intern || 5500;

//   if (services.phone === 0) {
//     phoneCost = 0;
//   }

//   if (services.internet === 0) {
//     internetCost = 0;
//   }

//   return {
//     phone: phoneCost,
//     internet: internetCost,

//     total() {
//       return this.phone + this.internet;
//     },
//   };
// }

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

let invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({ internet: 6500 }));
invoices.push(createInvoice({ phone: 2000 }));
invoices.push(
  createInvoice({
    phone: 1000,
    internet: 4500,
  })
);

invoiceTotal(invoices); // 31000

// 4 - Now we can build a factory function to create payments.
// The function can take an object argument in one of 3 forms:

// Payment for one service, e.g., { internet: 1000 } or { phone: 1000 }.
// Payment for both services, e.g., { internet: 2000, phone: 1000 }.
// Payment with just an amount property, e.g., { amount: 2000 }.

// The function should return an object that has the amount paid for each service and a total
// method that returns the payment total. If the amount property is not present in the argument,
// it should return the sum of the phone and internet service charges; if the amount property
// is present, return the value of that property.

// Your function should work with the following code:

function createPayment(services = {}) {
  let phonePayment = services.phone || 0;
  let internetPayment = services.internet || 0;
  let amountPayment = services.amount;

  let payment = {
    phone: phonePayment,
    internet: internetPayment,
    amount: amountPayment,

    total() {
      if (this.amount) {
        return services.amount;
      }
      return this.phone + this.internet;
    },
  };

  return payment;
}

// function paymentTotal(payments) {
//   return payments.reduce((sum, payment) => sum + payment.total(), 0);
// }

// let payments = [];
// payments.push(createPayment());
// payments.push(
//   createPayment({
//     internet: 6500,
//   })
// );

// payments.push(
//   createPayment({
//     phone: 2000,
//   })
// );

// payments.push(
//   createPayment({
//     phone: 1000,
//     internet: 4500,
//   })
// );

// payments.push(
//   createPayment({
//     amount: 10000,
//   })
// );

// console.log(paymentTotal(payments)); // => 24000

// 5 - Update the createInvoice function so that it can add payment(s) to invoices.
// Use the following code as a guideline:

function createInvoice(services = {}) {
  let phoneCost = services.phone || 3000;
  let internetCost = services.internet || 5500;

  if (services.phone === 0) {
    phoneCost = 0;
  }

  if (services.internet === 0) {
    internetCost = 0;
  }

  return {
    phone: phoneCost,
    internet: internetCost,
    payments: [],

    total() {
      return this.phone + this.internet;
    },

    addPayment(payment) {
      this.payments.push(payment);
    },

    addPayments(payments) {
      payments.forEach(this.addPayment, this);
    },

    paymentTotal() {
      return this.payments.reduce((sum, payment) => sum + payment.total(), 0);
    },

    amountDue() {
      return this.total() - this.paymentTotal();
    },
  };
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue()); // this should return 0
