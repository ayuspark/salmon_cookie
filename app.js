'use strict';
var pike = {
  minCustPerHr: 23,
  maxCustPerHr: 65,
  avgCookiesPerCust: 6.3,
  custPerHr: [],
  calcCustPerHr: function(){
    var i = 0;
    while (i < 15) {
      this.custPerHr.push(Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1) + this.minCustPerHr));
      i ++;
    }
  },
  cookiesPerHr: [],
  calcCookiesPerHr: function(){
    for (var i = 0; i < this.custPerHr.length; i ++) {
      this.cookiesPerHr.push(Math.floor(this.custPerHr[i] * this.avgCookiesPerCust));
    }
  },
  totalCookiesPerDay: 0,
  calcTotalCookiesPerDay: function(){
    for (var i = 0; i < this.cookiesPerHr.length; i++){
      this.totalCookiesPerDay += this.cookiesPerHr[i];
    }
  },
};

pike.calcCustPerHr();
pike.calcCustPerHr();
pike.calcTotalCookiesPerDay();
