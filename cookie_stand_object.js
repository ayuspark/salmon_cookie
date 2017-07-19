'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var cookieStand = [];
var salesTable = document.getElementById('sales');

//cookie stand constructor
function CookieStand(name, minCustPerHr, maxCustPerHr, avgCookiesPerCust){
  this.name = name;
  this.minCustPerHr = minCustPerHr;
  this. maxCustPerHr = maxCustPerHr;
  this.avgCookiesPerCust = avgCookiesPerCust;

  //calculate TOTAL CUSTOMER per hour
  this.custPerHr = [];
  this.calcCustPerHr = function(){
    var i = 0;
    while (i < hours.length) {
      this.custPerHr.push(Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1) + this.minCustPerHr));
      i ++;
    }
  };

  //calculate COOKIES per hour
  this.cookiesPerHr = [];
  this.calcCookiesPerHr = function(){
    this.calcCustPerHr();
    for (var i = 0; i < hours.length; i ++){
      this.cookiesPerHr.push(Math.floor(this.custPerHr[i] * this.avgCookiesPerCust));
    }
  };

  //calculate TOTAL COOKIES per day
  this.totalCookiesPerDay = 0;
  this.calcTotalCookiesPerDay = function(){
    this.calcCookiesPerHr();
    for (var i = 0; i < hours.length; i ++){
      this.totalCookiesPerDay += this.cookiesPerHr[i];
    }
  };

  this.calcTotalCookiesPerDay(); //invoke previous calc functions

  cookieStand.push(this); //gather stand objects into an array

  this.render = function(){
    //create rows for each Cookie stand
    var trEl = document.createElement('tr'); //put the name in the first column
    var tdEl = document.createElement('td');
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);

    for(var n = 0; n < hours.length; n++){
      tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesPerHr[n];
      trEl.appendChild(tdEl);
    }//put cookies per hour into following cells

    var totalTdEl = document.createElement('td');
    totalTdEl.textContent = this.totalCookiesPerDay;
    trEl.appendChild(totalTdEl);

    totalTdEl.style.color = 'salmon';

    salesTable.appendChild(trEl);
  };
} //end of constructor

//create Table Header
function tableHeader(){
  //create FIRST table row
  var headTrEl = document.createElement('tr');
  //create Top Left Corner (empty cell)
  var emptyHeadCell = document.createElement('td');
  emptyHeadCell.textContent = '';
  headTrEl.appendChild(emptyHeadCell);

  emptyHeadCell.style.borderWidth = 0; //style the empty cell on table header

  //create Table Head
  for(var i = 0; i < hours.length; i ++){
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    headTrEl.appendChild(thEl);
  }

  //create 'Total' in table head
  var totalThEl = document.createElement('th');
  totalThEl.textContent = 'Total';
  headTrEl.appendChild(totalThEl);
  salesTable.appendChild(headTrEl);
}

//iterate to create rows for EACH STAND
function cookieStandRows(){
  for(var i = 0; i < cookieStand.length; i++){
    cookieStand[i].render();
  }
}

new CookieStand('1st and Pike', 23, 65, 6.3);
new CookieStand('SeaTac Airport', 3, 24, 1.2);
new CookieStand('Seattle Center', 11, 38, 3.7);
new CookieStand('Capitol Hill', 20, 38, 2.3);
new CookieStand('Alki', 2, 16, 4.6);

tableHeader();
cookieStandRows();
