document.addEventListener('DOMContentLoaded', function(){
  // the JavaScript you want to run after the page loads
  'use strict';

  var section = document.getElementsByTagName("section");
  var sections = {};
  var i = 0;

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    // var scrollPosition=document.documentElement.scrollTop;
    // var scrollPosition=Window.scrollY;
    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector('.active').setAttribute('class', ' col-lg-offset-1 col-lg-2 header-tab');
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
      }
    }

    if(scrollPosition>50){
        document.getElementById("#header").setAttribute('class','active');
    }
  };
}, false);