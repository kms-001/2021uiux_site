
$(document).ready(function(){
  $(".slider").bxSlider({
    pager:false,
  });

  $(".toggleMenu").click(function(){
    const toggle = $(".toggleMenu").attr("class");
    if(toggle == "toggleMenu"){
    $(".toggleMenu").addClass("change");
    $("#main_menu").stop().animate({left:0});

  }else{
    $(".toggleMenu").removeClass("change");
    $("#main_menu").stop().animate({left:"-100%"});
  }
  });

  $(window).resize(function(){
    $("#main_menu").removeAttr("style");
    $(".toggleMenu").removeClass("change");
  });

});
