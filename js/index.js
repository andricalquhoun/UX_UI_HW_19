$('li').on("click", function(){
  
    if ($(this).hasClass("home")){
      $(".home").css("text-decoration", "underline");
    } else if ($(this).hasClass("portfolio")){
      $(".home").css("text-decoration", "overline");
    }
    if ($(this).hasClass("portfolio")){
      $(".portfolio").css("text-decoration", "underline");
    } else if ($(this).hasClass("home")){
      $(".portfolio").css("text-decoration", "overline");
    }
  });