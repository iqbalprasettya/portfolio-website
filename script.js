  // search-box open close js code
  let navbar = document.querySelector(".navbar");
  let searchBox = document.querySelector(".search-box .bx-search");
  // let searchBoxCancel = document.querySelector(".search-box .bx-x");
  
  searchBox.addEventListener("click", ()=>{
    navbar.classList.toggle("showInput");
    if(navbar.classList.contains("showInput")){
      searchBox.classList.replace("bx-search" ,"bx-x");
    }else {
      searchBox.classList.replace("bx-x" ,"bx-search");
    }
  });
  
  // sidebar open
  let navLinks = document.querySelector(".nav-links");
  let menuOpenBtn = document.querySelector(".navbar .bx-menu");
  let menuCloseBtn = document.querySelector(".nav-links .bx-x");
  menuOpenBtn.onclick = function() {
  navLinks.style.left = "0";
  }
  menuCloseBtn.onclick = function() {
  navLinks.style.left = "-100%";
  }
  
  
  // sidebar1

  let linkArrow1 = document.querySelector(".link-nav-sub1");
  linkArrow1.onclick = function() {
   navLinks.classList.toggle("show1");
  }
  let linkArrow2 = document.querySelector(".link-nav-sub2");
  linkArrow2.onclick = function() {
   navLinks.classList.toggle("show2");
  }
  let linkArrow3 = document.querySelector(".link-nav-sub3");
  linkArrow3.onclick = function() {
   navLinks.classList.toggle("show3");
  }

  //sidebar more
  
  
  let moreArrow1 = document.querySelector(".link-more1, .more-arrow");
  moreArrow1.onclick = function() {
   navLinks.classList.toggle("show-more1");
  }
 
  let moreArrow2 = document.querySelector(".link-more2, .more-arrow2");
  moreArrow2.onclick = function() {
   navLinks.classList.toggle("show-more2");
  }

  let moreArrow3 = document.querySelector(".link-more3, .more-arrow3");
  moreArrow3.onclick = function() {
   navLinks.classList.toggle("show-more3");
  }
 
 
 






 

  