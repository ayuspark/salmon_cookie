'use strict';
var articleAboutUs = document.getElementById('about_us');
var aboutUsNav = document.getElementById('about_us_nav');
var teeNav = document.getElementById('tee_nav');
var articleTee = document.getElementById('tee');
var buyCookieNav = document.getElementById('cookie_nav');
var divCookie = document.getElementById('cookie_div');
articleAboutUs.style.display = 'none';
articleTee.style.display = 'none';
divCookie.style.display = 'none';


//________ABOUT_US_NAV______________________________________
function clickOnAboutUsNav(){
  articleAboutUs.style.display = 'block';
  articleAboutUs.style.margin = '0px auto 0px auto';
  articleTee.style.display = 'none';
  divCookie.style.display = 'none';
}
aboutUsNav.addEventListener('click', clickOnAboutUsNav);

//________BUY_COOKIE______________________________________
function clickonCookieNav(){
  divCookie.style.display = 'block';
  divCookie.style.margin = '0px auto 0px auto';
  articleAboutUs.style.display = 'none';
  articleTee.style.display = 'none';
}
buyCookieNav.addEventListener('click', clickonCookieNav);

// ________COOL_TEES______________________________________
function clickOnTeeNav(){
  articleTee.style.display = 'block';
  articleTee.style.margin = '0px auto 0px auto';
  articleAboutUs.style.display = 'none';
  divCookie.style.display = 'none';
}
teeNav.addEventListener('click', clickOnTeeNav);

//________STAFF_ACCESS______________________________________
var staffNav = document.getElementById('staff');
function clickOnStaffNav(){
  var password = prompt('Enter your staff access code!');
  if(password === 'staff') {
    window.open(sales.html, '_blank');
  }
}
staffNav.addEventListener('click', clickOnStaffNav);
