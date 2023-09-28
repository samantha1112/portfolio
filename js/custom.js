window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

window.onload = function () {

  // document.getElementById("sidebar_active").addEventListener("mouseover", mouseOver);
  // document.getElementById("sidebar_active").addEventListener("mouseout", mouseOut);
  document.getElementById("sidebar_active").addEventListener("click", onClick);

  /*------------random font------------*/

  var fontArray = ['Pica', 'Garamond'],
      selectFont = fontArray[Math.floor(Math.random() * fontArray.length)];

  $('a').hover('font-family', selectFont)

  /*-----------------------------------*/

  var state = "homepage"

  // function mouseOver() {
  //     if (state == "homepage") {
  //         document.getElementById("over").style.transform = 'translateX(-10px)';
  //     }
  //     else {
  //         document.getElementById("over").style.transform = 'translateX(10px)';
  //     }
  // }

  // function mouseOut() {
  //     document.getElementById("over").style.transform = 'translateX(0px)';
  // }

  function onClick() {
      if (state == "homepage") {
          var translation = document.getElementById("sidebar_active").offsetWidth;
          document.getElementById("over").style.left = 'calc(-100vw + 30px)';
          // document.getElementById("over").style.transform = 'translateX(' + translation + 'px)';
          document.getElementById("title-sidebar").innerText = 'Projects';
          document.getElementById("arrow").innerHTML = "←";
          $("#under .infos").css("position", "sticky");
          state = "exp"
      }
      else {
          document.getElementById("over").style.left = '0';
          // document.getElementById("over").style.transform = 'translateX(0)';
          document.getElementById("title-sidebar").innerText = 'Experiments';
          document.getElementById("arrow").innerHTML = "→";
          $("#under .infos").css("position", "initial");
          state = "homepage"
      }

  }

  /*-------------------------------*/

  console.log("Top: " + $(window).height() / 2);

  let categoryTitles = $('.project');


  document.getElementById('left').addEventListener('scroll', throttle(callback, 400));

  function throttle(fn, wait) {
      var time = Date.now();
      return function () {
          if ((time + wait - Date.now()) < 0) {
              fn();
              time = Date.now();
          }
      }
  }

  function callback() {
  // $('#left').scroll(function () {
      let topCat = categoryTitles.filter((i, el) => $(el).offset().top > -$(window).height() / 2).first();
      // console.log(topCat.attr('name'));

      var name = topCat.attr('name');

      let params_array = []
      params_array.push([name]);

      let new_url = "#" + params_array;

      window.history.pushState("", "", new_url);

  // }).scroll();
  }


  /*-----------------------------*/

}