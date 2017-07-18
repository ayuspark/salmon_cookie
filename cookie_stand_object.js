'use strict';

var hours = ['6am', '7am', '8am', '9am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

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
    //create FIRST table row
    var trEl = document.createElement('tr');
    //create Top Left Corner (empty cell)
    var tdEl = document.createElement('td');
    tdEl.textContent = '';
    trEl.appendChild(tdEl);

    for(var i = 0; i < hours.length; i ++){
      tdEl = document.createElement('td');
      tdEl.textContent = hours[i];
      trEl.appendChild(tdEl);
    }

    salesTable.appendChild(trEl);





  //   for(var i = 0; i < this.cookiesPerHr.length; i ++) {
  //     var liEl = document.createElement('li');
  //     liEl.textContent = hours[i] + ': ' + this.cookiesPerHr[i] + ' cookies';
  //     pikeUL.appendChild(liEl);
  //   };
  //   var elTotal = document.createElement('li');
  //   var textTotal = document.createTextNode('Total: ' + this.totalCookiesPerDay + 'cookies');
  //   elTotal.appendChild(textTotal);
  //   var position = document.getElementById('pike');
  //   position.appendChild(elTotal);
  //
  };
} //end of constructor


















//
// //LOCATION: PIKE
// var pike = {
//   name: 'Pike Place',
//   minCustPerHr: 23,
//   maxCustPerHr: 65,
//   avgCookiesPerCust: 6.3,
//   //calculate cutomer total per hour
//   custPerHr: [],
//   calcCustPerHr: function(){
//     var i = 0;
//     while (i < hours.length) {
//       this.custPerHr.push(Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1) + this.minCustPerHr));
//       i ++;
//     }
//   },
//   //calculate cookies per hour
//   cookiesPerHr: [],
//   calcCookiesPerHr: function(){
//     for (var i = 0; i < this.custPerHr.length; i ++) {
//       this.cookiesPerHr.push(Math.floor(this.custPerHr[i] * this.avgCookiesPerCust));
//     }
//   },
//   //calculate total cookies per day
//   totalCookiesPerDay: 0,
//   calcTotalCookiesPerDay: function(){
//     for (var i = 0; i < this.cookiesPerHr.length; i++){
//       this.totalCookiesPerDay += this.cookiesPerHr[i];
//     }
//   },
//   //rendering html
//   render: function(){
//     this.calcCustPerHr();
//     this.calcCookiesPerHr();
//     this.calcTotalCookiesPerDay();
//     var pikeUL = document.getElementById('pike');
//     for(var i = 0; i < this.cookiesPerHr.length; i ++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ': ' + this.cookiesPerHr[i] + ' cookies';
//       pikeUL.appendChild(liEl);
//     };
//     var elTotal = document.createElement('li');
//     var textTotal = document.createTextNode('Total: ' + this.totalCookiesPerDay + 'cookies');
//     elTotal.appendChild(textTotal);
//     var position = document.getElementById('pike');
//     position.appendChild(elTotal);
//   },
// };
//
// pike.render();
//
// //LOCATION: SEATAC AIRPORT
// var seatac = {
//   name: 'SeaTac Airport',
//   minCustPerHr: 23,
//   maxCustPerHr: 65,
//   avgCookiesPerCust: 6.3,
//   //calculate cutomer total per hour
//   custPerHr: [],
//   calcCustPerHr: function(){
//     var i = 0;
//     while (i < hours.length) {
//       this.custPerHr.push(Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1) + this.minCustPerHr));
//       i ++;
//     }
//   },
//   //calculate cookies per hour
//   cookiesPerHr: [],
//   calcCookiesPerHr: function(){
//     for (var i = 0; i < this.custPerHr.length; i ++) {
//       this.cookiesPerHr.push(Math.floor(this.custPerHr[i] * this.avgCookiesPerCust));
//     }
//   },
//   //calculate total cookies per day
//   totalCookiesPerDay: 0,
//   calcTotalCookiesPerDay: function(){
//     for (var i = 0; i < this.cookiesPerHr.length; i++){
//       this.totalCookiesPerDay += this.cookiesPerHr[i];
//     }
//   },
//   //rendering html
//   render: function(){
//     this.calcCustPerHr();
//     this.calcCookiesPerHr();
//     this.calcTotalCookiesPerDay();
//     var seatacUL = document.getElementById('seatac');
//     for(var i = 0; i < this.cookiesPerHr.length; i ++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ': ' + this.cookiesPerHr[i] + ' cookies';
//       seatacUL.appendChild(liEl);
//     };
//     var elTotal = document.createElement('li');
//     var textTotal = document.createTextNode('Total: ' + this.totalCookiesPerDay + 'cookies');
//     elTotal.appendChild(textTotal);
//     var position = document.getElementById('seatac');
//     position.appendChild(elTotal);
//   },
// };
//
// seatac.render();
//
// //LOCATION: SEATTLE CENTER
// var center = {
//   name: 'Seattle Center',
//   minCustPerHr: 23,
//   maxCustPerHr: 65,
//   avgCookiesPerCust: 6.3,
//   //calculate cutomer total per hour
//   custPerHr: [],
//   calcCustPerHr: function(){
//     var i = 0;
//     while (i < hours.length) {
//       this.custPerHr.push(Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1) + this.minCustPerHr));
//       i ++;
//     }
//   },
//   //calculate cookies per hour
//   cookiesPerHr: [],
//   calcCookiesPerHr: function(){
//     for (var i = 0; i < this.custPerHr.length; i ++) {
//       this.cookiesPerHr.push(Math.floor(this.custPerHr[i] * this.avgCookiesPerCust));
//     }
//   },
//   //calculate total cookies per day
//   totalCookiesPerDay: 0,
//   calcTotalCookiesPerDay: function(){
//     for (var i = 0; i < this.cookiesPerHr.length; i++){
//       this.totalCookiesPerDay += this.cookiesPerHr[i];
//     }
//   },
//   //rendering html
//   render: function(){
//     this.calcCustPerHr();
//     this.calcCookiesPerHr();
//     this.calcTotalCookiesPerDay();
//     var centerUL = document.getElementById('center');
//     for(var i = 0; i < this.cookiesPerHr.length; i ++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ': ' + this.cookiesPerHr[i] + ' cookies';
//       centerUL.appendChild(liEl);
//     };
//     var elTotal = document.createElement('li');
//     var textTotal = document.createTextNode('Total: ' + this.totalCookiesPerDay + 'cookies');
//     elTotal.appendChild(textTotal);
//     var position = document.getElementById('center');
//     position.appendChild(elTotal);
//   },
// };
//
// center.render();
//
// //LOCATION: CAPITOL HILL
// var caphill = {
//   name: 'Capitol Hill',
//   minCustPerHr: 23,
//   maxCustPerHr: 65,
//   avgCookiesPerCust: 6.3,
//   //calculate cutomer total per hour
//   custPerHr: [],
//   calcCustPerHr: function(){
//     var i = 0;
//     while (i < hours.length) {
//       this.custPerHr.push(Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1) + this.minCustPerHr));
//       i ++;
//     }
//   },
//   //calculate cookies per hour
//   cookiesPerHr: [],
//   calcCookiesPerHr: function(){
//     for (var i = 0; i < this.custPerHr.length; i ++) {
//       this.cookiesPerHr.push(Math.floor(this.custPerHr[i] * this.avgCookiesPerCust));
//     }
//   },
//   //calculate total cookies per day
//   totalCookiesPerDay: 0,
//   calcTotalCookiesPerDay: function(){
//     for (var i = 0; i < this.cookiesPerHr.length; i++){
//       this.totalCookiesPerDay += this.cookiesPerHr[i];
//     }
//   },
//   //rendering html
//   render: function(){
//     this.calcCustPerHr();
//     this.calcCookiesPerHr();
//     this.calcTotalCookiesPerDay();
//     var caphillUL = document.getElementById('caphill');
//     for(var i = 0; i < this.cookiesPerHr.length; i ++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ': ' + this.cookiesPerHr[i] + ' cookies';
//       caphillUL.appendChild(liEl);
//     };
//     var elTotal = document.createElement('li');
//     var textTotal = document.createTextNode('Total: ' + this.totalCookiesPerDay + 'cookies');
//     elTotal.appendChild(textTotal);
//     var position = document.getElementById('caphill');
//     position.appendChild(elTotal);
//   },
// };
//
// caphill.render();
//
// //LOCATION: ALKI
// var alki = {
//   name: 'Alki',
//   minCustPerHr: 23,
//   maxCustPerHr: 65,
//   avgCookiesPerCust: 6.3,
//   //calculate cutomer total per hour
//   custPerHr: [],
//   calcCustPerHr: function(){
//     var i = 0;
//     while (i < hours.length) {
//       this.custPerHr.push(Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1) + this.minCustPerHr));
//       i ++;
//     }
//   },
//   //calculate cookies per hour
//   cookiesPerHr: [],
//   calcCookiesPerHr: function(){
//     for (var i = 0; i < this.custPerHr.length; i ++) {
//       this.cookiesPerHr.push(Math.floor(this.custPerHr[i] * this.avgCookiesPerCust));
//     }
//   },
//   //calculate total cookies per day
//   totalCookiesPerDay: 0,
//   calcTotalCookiesPerDay: function(){
//     for (var i = 0; i < this.cookiesPerHr.length; i++){
//       this.totalCookiesPerDay += this.cookiesPerHr[i];
//     }
//   },
//   //rendering html
//   render: function(){
//     this.calcCustPerHr();
//     this.calcCookiesPerHr();
//     this.calcTotalCookiesPerDay();
//     var alkiUL = document.getElementById('alki');
//     for(var i = 0; i < this.cookiesPerHr.length; i ++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ': ' + this.cookiesPerHr[i] + ' cookies';
//       alkiUL.appendChild(liEl);
//     };
//     var elTotal = document.createElement('li');
//     var textTotal = document.createTextNode('Total: ' + this.totalCookiesPerDay + 'cookies');
//     elTotal.appendChild(textTotal);
//     var position = document.getElementById('alki');
//     position.appendChild(elTotal);
//   },
// };
//
// alki.render();
