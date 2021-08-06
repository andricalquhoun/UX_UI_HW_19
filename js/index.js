$('li').on("click", function(){
  
    if ($(this).hasClass("home")){
      $(".home").css("text-decoration", "underline");
    }
    if ($(this).hasClass("portfolio")){
      $(".portfolio").css("text-decoration", "underline");
    }
    if ($(this).hasClass("skill")){
      $(".skill").css("text-decoration", "underline");
    }
    if ($(this).hasClass("resume")){
      $(".resume").css("text-decoration", "underline");
    }
    if ($(this).hasClass("experience")){
      $(".experience").css("text-decoration", "underline");
    }
    if ($(this).hasClass("contact")){
      $(".contact").css("text-decoration", "underline");
    }
  });