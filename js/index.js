$('.li').on("click", function(){
  
    if ($(this).hasClass("home")){
      $(".home").addClass("active");
      $(".portfolio").removeClass("active");
      $(".home").css("display", "block");
      $(".portfolio").css("display", "none");
    }
    else if ($(this).hasClass("tab2")){
      $(".tab2").addClass("active");
      $(".tab1").removeClass("active");
      $("#tabContent2").css("display", "block");
      $("#tabContent1").css("display", "none");
    }
  });