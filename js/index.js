$('li').on("click", function(){
  
    if ($(this).hasClass("home")){
      $(".home").addClass("active");
      $(".home").css("display", "block");
    }
    else if ($(this).hasClass("portfolio")){
      $(".portfolio").addClass("active");
      $(".portfolio").css("display", "block");
    }
  });