'use strict';
// const Seattle = {
//   heading: 'Sales Details',
//   cityName: 'Seattle',
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   minCookies: 23,
//   maxCookies: 65,
//   average: 6.3,
//   cookiePerHour: [],
//   customerPerHour: [],
//   totalSales: 0,
//   getSales: function () {
//     for (let i = 0; i < this.hours.length; i++) {
//       let cookie = Math.ceil(getRandomArbitrary(this.minCookies, this.maxCookies) * this.average);
//       this.cookiePerHour.push(cookie);
//       this.totalSales += cookie;
//       // this.totalSales += this.cookiePerHour[i];
//     }
//   },

//   getCustomer: function () {
//     for (let i = 0; i < this.hours.length; i++) {
//       let customer = getRandomArbitrary(this.minCookies, this.maxCookies);
//       this.customerPerHour.push(customer);
//     }
//   },

//   render: function () {
//     const fatherElement = document.getElementById('Sales Details');
//     const h1Element = document.createElement('h1');
//     fatherElement.appendChild(h1Element);
//     h1Element.textContent = this.heading;

//     const h3Element = document.createElement('h2');
//     fatherElement.appendChild(h3Element);
//     h3Element.textContent = this.cityName;

//     const ulElement = document.createElement('ul');
//     fatherElement.appendChild(ulElement);
//     for (let i = 0; i < this.hours.length; i++) {
//       const liElement = document.createElement('li');
//       ulElement.appendChild(liElement);
//       liElement.textContent = this.hours[i] + ' : ' + this.cookiePerHour[i] + ' cookies ';
//     }
//     const liElement = document.createElement('li');
//     ulElement.appendChild(liElement);
//     liElement.textContent = 'Total ' + this.totalSales + ' cookies';
//   },
// };
// function getRandomArbitrary(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// Seattle.getSales();
// Seattle.getCustomer();
// Seattle.render();
// console.log(Seattle);

// const Tokyo = {
//   cityName: 'Tokyo',
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   minCookies: 3,
//   maxCookies: 24,
//   average: 1.2,
//   cookiePerHour:[],
//   customerPerHour: [],
//   totalSales:0,
//   getSales: function () {
//     for (let i = 0; i < this.hours.length; i++) {
//       let cookie = Math.ceil(getRandomArbitrary(this.minCookies, this.maxCookies) * this.average);
//       this.cookiePerHour.push(cookie);
//       this.totalSales += cookie;
//       // this.totalSales += this.cookiePerHour[i];
//     }
//   },

//   getCustomer: function () {
//     for (let i = 0; i < this.hours.length; i++) {
//       let customer = getRandomArbitrary(this.minCookies, this.maxCookies);
//       this.customerPerHour.push(customer);
//     }
//   },

//   render: function () {
//     const fatherElement = document.getElementById('Sales Details');
//     const h3Element = document.createElement('h2');
//     fatherElement.appendChild(h3Element);
//     h3Element.textContent = this.cityName;

//     const ulElement = document.createElement('ul');
//     fatherElement.appendChild(ulElement);
//     for (let i = 0; i < this.hours.length; i++) {
//       const liElement = document.createElement('li');
//       ulElement.appendChild(liElement);
//       liElement.textContent = this.hours[i] + ' : ' + this.cookiePerHour[i] + ' cookies ';
//     }
//     const liElement = document.createElement('li');
//     ulElement.appendChild(liElement);
//     liElement.textContent = 'Total ' + this.totalSales + ' cookies';
//   },
// };

// Tokyo.getSales();
// Tokyo.getCustomer();
// Tokyo.render();
// console.log(Tokyo);

// const Dubai = {
//   cityName: 'Dubai',
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   minCookies: 11,
//   maxCookies: 38,
//   average: 3.7,
//   cookiePerHour:[],
//   customerPerHour: [],
//   totalSales:0,
//   getSales: function () {
//     for (let i = 0; i < this.hours.length; i++) {
//       let cookie = Math.ceil(getRandomArbitrary(this.minCookies, this.maxCookies) * this.average);
//       this.cookiePerHour.push(cookie);
//       this.totalSales += cookie;
//       // this.totalSales += this.cookiePerHour[i];
//     }
//   },

//   getCustomer: function () {
//     for (let i = 0; i < this.hours.length; i++) {
//       let customer = getRandomArbitrary(this.minCookies, this.maxCookies);
//       this.customerPerHour.push(customer);
//     }
//   },
//   render: function () {
//     const fatherElement = document.getElementById('Sales Details');
//     const h3Element = document.createElement('h2');
//     fatherElement.appendChild(h3Element);
//     h3Element.textContent = this.cityName;

//     const ulElement = document.createElement('ul');
//     fatherElement.appendChild(ulElement);
//     for (let i = 0; i < this.hours.length; i++) {
//       const liElement = document.createElement('li');
//       ulElement.appendChild(liElement);
//       liElement.textContent = this.hours[i] + ' : ' + this.cookiePerHour[i] + ' cookies ';
//     }
//     const liElement = document.createElement('li');
//     ulElement.appendChild(liElement);
//     liElement.textContent = 'Total ' + this.totalSales + ' cookies';
//   },
// };
// Dubai.getSales();
// Dubai.getCustomer();
// Dubai.render();
// console.log(Dubai);

// const Paris = {
//   cityName: 'Paris',
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   minCookies: 20,
//   maxCookies: 38,
//   average: 2.3,
//   cookiePerHour:[],
//   customerPerHour: [],
//   totalSales:0,
//   getSales: function () {
//     for (let i = 0; i < this.hours.length; i++) {
//       let cookie = Math.ceil(getRandomArbitrary(this.minCookies, this.maxCookies) * this.average);
//       this.cookiePerHour.push(cookie);
//       this.totalSales += cookie;
//       // this.totalSales += this.cookiePerHour[i];
//     }
//   },

//   getCustomer: function () {
//     for (let i = 0; i < this.hours.length; i++) {
//       let customer = getRandomArbitrary(this.minCookies, this.maxCookies);
//       this.customerPerHour.push(customer);
//     }
//   },

//   render: function () {
//     const fatherElement = document.getElementById('Sales Details');
//     const h3Element = document.createElement('h2');
//     fatherElement.appendChild(h3Element);
//     h3Element.textContent = this.cityName;

//     const ulElement = document.createElement('ul');
//     fatherElement.appendChild(ulElement);
//     for (let i = 0; i < this.hours.length; i++) {
//       const liElement = document.createElement('li');
//       ulElement.appendChild(liElement);
//       liElement.textContent = this.hours[i] + ' : ' + this.cookiePerHour[i] + ' cookies ';
//     }
//     const liElement = document.createElement('li');
//     ulElement.appendChild(liElement);
//     liElement.textContent = 'Total ' + this.totalSales + ' cookies';
//   },
// };
// Paris.getSales();
// Paris.getCustomer();
// Paris.render();
// console.log(Paris);



// const Lima	 = {
//   cityName: 'Lima	',
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   minCookies: 2,
//   maxCookies: 16,
//   average: 4.6,
//   cookiePerHour:[],
//   customerPerHour: [],
//   totalSales:0,
//   getSales: function () {
//     for (let i = 0; i < this.hours.length; i++) {
//       let cookie = Math.ceil(getRandomArbitrary(this.minCookies, this.maxCookies) * this.average);
//       this.cookiePerHour.push(cookie);
//       this.totalSales += cookie;
//       // this.totalSales += this.cookiePerHour[i];
//     }
//   },

//   getCustomer: function () {
//     for (let i = 0; i < this.hours.length; i++) {
//       let customer = getRandomArbitrary(this.minCookies, this.maxCookies);
//       this.customerPerHour.push(customer);
//     }
//   },


//   render: function () {
//     const fatherElement = document.getElementById('Sales Details');
//     const h3Element = document.createElement('h2');
//     fatherElement.appendChild(h3Element);
//     h3Element.textContent = this.cityName;

//     const ulElement = document.createElement('ul');
//     fatherElement.appendChild(ulElement);
//     for (let i = 0; i < this.hours.length; i++) {
//       const liElement = document.createElement('li');
//       ulElement.appendChild(liElement);
//       liElement.textContent = this.hours[i] + ' : ' + this.cookiePerHour[i] + ' cookies ';
//     }
//     const liElement = document.createElement('li');
//     ulElement.appendChild(liElement);
//     liElement.textContent = 'Total ' + this.totalSales + ' cookies';
//   },
// };
// Lima.getSales();
// Lima.getCustomer();
// Lima.render();
// console.log(Lima);

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
const fatherElement = document.getElementById('Sales Details');

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function City(name, minCookies, maxCookies, average) {
  this.name = name;
  this.minCookies = minCookies;
  this.maxCookies = maxCookies;
  this.average = average;
  this.totalSales=0;
  this.cookiePerHour = [];
  this.customerPerHour = [];
}


City.prototype.getSales = function () {
  for (let i = 0; i < hours.length; i++) {
    let cookie = Math.ceil(getRandomArbitrary(this.minCookies, this.maxCookies) * this.average);
    this.cookiePerHour.push(cookie);
    this.totalSales += cookie;
  }
};
City.prototype.getCustomer = function (min,max) {
  for (let i = 0; i < hours.length; i++) {
    let customer = getRandomArbitrary(min,max);
    this.customerPerHour.push(customer);
  }
};
const Seattle = new City('Seattle', 23, 65, 6.3);
console.log(Seattle);
