'use strict';
//__VARIABLE SETUP________________________________________________
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var cookieStand = [];//array of objects
var standNames = [];//array of object.prototype.name
var eachHrTotalArray = Array(hours.length).fill(0);
var totalAllLocations = 0;
var salesTable = document.getElementById('sales');
var newStandForm = document.getElementById('new_stand');

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
}//END of constructor

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Render table using the prototype
CookieStand.prototype.render = function(){
  //create rows for each Cookie stand
  var trEl = document.createElement('tr'); //put the name in the first column
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);

  tdEl.style.backgroundColor = '#353328';
  tdEl.style.color = '#D9BD7E'; //style the location column

  for(var n = 0; n < hours.length; n++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHr[n];
    trEl.appendChild(tdEl);
  }//put cookies per hour into following cells

  var totalTdEl = document.createElement('td');
  totalTdEl.textContent = this.totalCookiesPerDay;
  trEl.appendChild(totalTdEl);

  totalTdEl.style.color = 'white'; //style the total cookies

  salesTable.appendChild(trEl);
};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
    thEl.style.color = '#D9BD7E'; //style head row
  }

  //create 'Total' in table head
  var totalThEl = document.createElement('th');
  totalThEl.textContent = 'Store Total';
  headTrEl.appendChild(totalThEl);
  salesTable.appendChild(headTrEl);
  totalThEl.style.backgroundColor = '#D9BD7E';
  totalThEl.style.color = '#353328'; //style the Total table head
}

//iterate to create rows for EACH STAND
function cookieStandRows(){
  for(var i = 0; i < cookieStand.length; i++){
    cookieStand[i].render();
  }
}

//create Table Last Row
function makeLastRow(){
  var lastRow = document.createElement('tr');
  var lastRowHeader = document.createElement('td');
  lastRowHeader.textContent = 'Hourly Total';
  lastRow.appendChild(lastRowHeader);
  lastRowHeader.style.color = '#353328';
  lastRowHeader.style.backgroundColor = '#D9BD7E';

  for(var i = 0; i < hours.length; i++){
    for(var n = 0; n < cookieStand.length; n++){
      eachHrTotalArray[i] += cookieStand[n].cookiesPerHr[i];
    }
  }

  for(var m = 0; m < hours.length; m++){
    var hourlyTotalTdEl = document.createElement('td');
    hourlyTotalTdEl.textContent = eachHrTotalArray[m];
    lastRow.appendChild(hourlyTotalTdEl);
    hourlyTotalTdEl.style.color = 'white';
  }

  for(var k = 0; k < cookieStand.length; k++){
    totalAllLocations += cookieStand[k].totalCookiesPerDay;
  }//calculate total for ALL LOCATIONS of ALL HOURS

  var totalAllLocationsTdEl = document.createElement('td');
  totalAllLocationsTdEl.textContent = totalAllLocations;
  lastRow.appendChild(totalAllLocationsTdEl);

  salesTable.appendChild(lastRow);
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//create new instance of CookieStand
new CookieStand('1st and Pike', 23, 65, 6.3);
new CookieStand('SeaTac Airport', 3, 24, 1.2);
new CookieStand('Seattle Center', 11, 38, 3.7);
new CookieStand('Capitol Hill', 20, 38, 2.3);
new CookieStand('Alki', 2, 16, 4.6);

//__FUNCTION DECLARATION________________________________________
tableHeader();//make Table Head
cookieStandRows();//populate table body
makeLastRow();

function handleNewStandSubmit(event){
  event.preventDefault();

  if(!event.target.stand.value || !event.target.minCustPerHr.value || !event.target.maxCustPerHr.value || !event.target.avgCookiesPerCust.value) {
    return alert('Fields cannot be empty!');
  };
  //gather data from form
  var newStand = event.target.stand.value;
  var newMinCustPerHr = parseInt(event.target.minCustPerHr.value);
  var newMaxCustPerhr = parseInt(event.target.maxCustPerHr.value);
  var newAvgCookiePerCust = parseInt(event.target.avgCookiesPerCust.value);
  //verify if stand exist
  cookieStand.forEach(function(eachStand){
    standNames.push(eachStand.name);
  });
  newStandForm.reset();

  if(standNames.includes(newStand)){
    var keyInCookieStand = standNames.indexOf(newStand);
    cookieStand[keyInCookieStand].minCustPerHr = newMinCustPerHr;
    cookieStand[keyInCookieStand].maxCustPerHr = newMaxCustPerhr;
    cookieStand[keyInCookieStand].avgCookiesPerCust = newAvgCookiePerCust;
    cookieStand[keyInCookieStand].custPerHr = [];
    cookieStand[keyInCookieStand].cookiesPerHr = [];
    cookieStand[keyInCookieStand].totalCookiesPerDay = 0;
    cookieStand[keyInCookieStand].calcTotalCookiesPerDay();
    eachHrTotalArray = Array(hours.length).fill(0);
    totalAllLocations = 0;
    salesTable.innerHTML = '';
    return tableHeader(), cookieStandRows(), makeLastRow();
  } else {
    var newLineInTable = new CookieStand(newStand, newMinCustPerHr, newMaxCustPerhr, newAvgCookiePerCust);
    eachHrTotalArray = Array(hours.length).fill(0);
    totalAllLocations = 0;
    salesTable.innerHTML = '';
    return tableHeader(), cookieStandRows(), makeLastRow();
  }
}
newStandForm.addEventListener('submit', handleNewStandSubmit);
