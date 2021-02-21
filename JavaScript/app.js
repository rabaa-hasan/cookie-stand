'use strict';
const Seattle = {
  heading: 'Sales Details',
  cityName: 'Seattle',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCookies: 23,
  maxCookies: 65,
  average: 6.3,
  cookiePerHour:[],
  totalSales:0,
  randomCookieNumber: function (min, max, average) {
    return Math.ceil((Math.random() * (max - min + 1) + min) * average);
  },

  render: function () {
    const fatherElement = document.getElementById('Sales Details');
    const h1Element = document.createElement('h1');
    fatherElement.appendChild(h1Element);
    h1Element.textContent = this.heading;

    const h3Element = document.createElement('h2');
    fatherElement.appendChild(h3Element);
    h3Element.textContent = this.cityName;

    const ulElement = document.createElement('ul');
    fatherElement.appendChild(ulElement);
    for (let i = 0; i < this.hours.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = this.hours[i] +' : '+ this.randomCookieNumber(this.minCookies, this.maxCookies, this.average) + ' cookies ';
      this.cookiePerHour[i]=this.randomCookieNumber(this.minCookies,this.maxCookies,this.average);
      this.totalSales +=this.cookiePerHour[i];
    }
    const liTotalElement = document.createElement('li');
    ulElement.appendChild(liTotalElement);
    liTotalElement.textContent = 'Total ' + this.totalSales + ' cookies' ;
  }
};
Seattle.render();


const Tokyo = {
  cityName: 'Tokyo',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCookies: 3,
  maxCookies: 24,
  average: 1.2,
  cookiePerHour:[],
  totalSales:0,
  randomCookieNumber: function (min, max, average) {
    return Math.ceil((Math.random() * (max - min + 1) + min) * average);
  },

  render: function () {
    const fatherElement = document.getElementById('Sales Details');
    const h3Element = document.createElement('h2');
    fatherElement.appendChild(h3Element);
    h3Element.textContent = this.cityName;

    const ulElement = document.createElement('ul');
    fatherElement.appendChild(ulElement);
    for (let i = 0; i < this.hours.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = this.hours[i] +' : '+ this.randomCookieNumber(this.minCookies, this.maxCookies, this.average) + ' cookies ';
      this.cookiePerHour[i]=this.randomCookieNumber(this.minCookies,this.maxCookies,this.average);
      this.totalSales +=this.cookiePerHour[i];
    }
    const liTotalElement = document.createElement('li');
    ulElement.appendChild(liTotalElement);
    liTotalElement.textContent = 'Total ' + this.totalSales + ' cookies' ;
  }
};
Tokyo.render();


const Dubai = {
  cityName: 'Dubai',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCookies: 11,
  maxCookies: 38,
  average: 3.7,
  cookiePerHour:[],
  totalSales:0,
  randomCookieNumber: function (min, max, average) {
    return Math.ceil((Math.random() * (max - min + 1) + min) * average);
  },

  render: function () {
    const fatherElement = document.getElementById('Sales Details');
    const h3Element = document.createElement('h2');
    fatherElement.appendChild(h3Element);
    h3Element.textContent = this.cityName;

    const ulElement = document.createElement('ul');
    fatherElement.appendChild(ulElement);
    for (let i = 0; i < this.hours.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = this.hours[i] +' : '+ this.randomCookieNumber(this.minCookies, this.maxCookies, this.average) + ' cookies ';
      this.cookiePerHour[i]=this.randomCookieNumber(this.minCookies,this.maxCookies,this.average);
      this.totalSales +=this.cookiePerHour[i];
    }
    const liTotalElement = document.createElement('li');
    ulElement.appendChild(liTotalElement);
    liTotalElement.textContent = 'Total ' + this.totalSales + ' cookies' ;
  }
};
Dubai.render();


const Paris = {
  cityName: 'Paris',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCookies: 20,
  maxCookies: 38,
  average: 2.3,
  cookiePerHour:[],
  totalSales:0,
  randomCookieNumber: function (min, max, average) {
    return Math.ceil((Math.random() * (max - min + 1) + min) * average);
  },

  render: function () {
    const fatherElement = document.getElementById('Sales Details');
    const h3Element = document.createElement('h2');
    fatherElement.appendChild(h3Element);
    h3Element.textContent = this.cityName;

    const ulElement = document.createElement('ul');
    fatherElement.appendChild(ulElement);
    for (let i = 0; i < this.hours.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = this.hours[i] +' : '+ this.randomCookieNumber(this.minCookies, this.maxCookies, this.average) + ' cookies ';
      this.cookiePerHour[i]=this.randomCookieNumber(this.minCookies,this.maxCookies,this.average);
      this.totalSales +=this.cookiePerHour[i];
    }
    const liTotalElement = document.createElement('li');
    ulElement.appendChild(liTotalElement);
    liTotalElement.textContent = 'Total ' + this.totalSales + ' cookies' ;
  }
};
Paris.render();



const Lima	 = {
  cityName: 'Lima	',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCookies: 2,
  maxCookies: 16,
  average: 4.6,
  cookiePerHour:[],
  totalSales:0,
  randomCookieNumber: function (min, max, average) {
    return Math.ceil((Math.random() * (max - min + 1) + min) * average);
  },

  render: function () {
    const fatherElement = document.getElementById('Sales Details');
    const h3Element = document.createElement('h2');
    fatherElement.appendChild(h3Element);
    h3Element.textContent = this.cityName;

    const ulElement = document.createElement('ul');
    fatherElement.appendChild(ulElement);
    for (let i = 0; i < this.hours.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = this.hours[i] +' : '+ this.randomCookieNumber(this.minCookies, this.maxCookies, this.average) + ' cookies ';
      this.cookiePerHour[i]=this.randomCookieNumber(this.minCookies,this.maxCookies,this.average);
      this.totalSales +=this.cookiePerHour[i];
    }
    const liTotalElement = document.createElement('li');
    ulElement.appendChild(liTotalElement);
    liTotalElement.textContent = 'Total ' + this.totalSales + ' cookies' ;
  }
};
Lima	.render();

