// nav shrink
window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "1rem 1rem";
    document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255, 0.16)"
    document.getElementById("navbar").style.backdropFilter = "blur(5px)"
    document.getElementById("navbar").style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.1)"
  } else {
    document.getElementById("navbar").style.padding = "1.5rem 1.5rem";
    document.getElementById("navbar").style.backgroundColor = "transparent"
    document.getElementById("navbar").style.backdropFilter = "none"
    document.getElementById("navbar").style.boxShadow = "none"

  }
}

var lastScrollTop;

navbar = document.getElementById('navbar');

window.addEventListener('scroll',function(){
  
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if(scrollTop > lastScrollTop){ 
    navbar.style.top='-500px';
  }
  
  else{
    navbar.style.top='0';
  }
  
  lastScrollTop = scrollTop; //New Position Stored
});

// end nav shrink

// type effect 
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="ketik">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('ketikan');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".ketikan > .ketik { color: #008CBA; border-right: 2px solid #fff}";
  document.body.appendChild(css);
};
  // end type effect


  // scroll up pop up
let offset = 600;
window.addEventListener("scroll", function () {
  let st = window.pageYOffset;
  if (st > offset) {
    document.querySelector(".fa-arrow-up").classList.add("active");
  } else {
    document.querySelector(".fa-arrow-up").classList.remove("active");
  }
});