// nav shrink
window.onscroll = function() {
    scrollFunction()
  }
  
  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.padding = "1rem 1rem";
      document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255, 0.16)"
      document.getElementById("navbar").style.backdropFilter ="blur(5px)"
      document.getElementById("navbar").style.boxShadow ="0 4px 30px rgba(0, 0, 0, 0.1)"
    } else {
      document.getElementById("navbar").style.padding = "1.5rem 1.5rem";
      document.getElementById("navbar").style.backgroundColor = "transparent"
      document.getElementById("navbar").style.backdropFilter ="none"
      document.getElementById("navbar").style.boxShadow ="none"
      
    }
  }
  // end nav shrink
  