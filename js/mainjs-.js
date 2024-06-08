 /* Navbar Fixed */ 
 $(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      var height = $(".header").outerHeight();
      if (scroll > height) {
        $(".navbar").css("background-color" , "#000" );
        $(".navbar a").css("color" , "#eee");
      }
      if (scroll <  height) {
        $(".navbar").css("background-color" , "transparent");
        $(".navbar a").css("color" , "#fff");
      }
    })
  })