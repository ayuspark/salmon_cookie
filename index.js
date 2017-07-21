'use strict';
var articleAboutUs = document.getElementById('about_us');
var aboutUsNav = document.getElementById('about_us_nav');
function clickOnNav(){
  // event.preventDefault;
  articleAboutUs.style.margin = '10px auto 5px auto';
}
aboutUsNav.addEventListener('click', clickOnNav);
