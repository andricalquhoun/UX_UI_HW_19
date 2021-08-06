$('li').on("click", function(){
  
    if ($(this).hasClass("home")){
      $(".home").css("text-decoration", "underline");
    } else if ($(this).hasClass("portfolio")){
      $(".home").css("text-decoration", "overline");
    } else if ($(this).hasClass("skill")){
      $(".home").css("text-decoration", "overline");
    } else if ($(this).hasClass("resume")){
      $(".home").css("text-decoration", "overline");
    } else if ($(this).hasClass("experience")){
      $(".home").css("text-decoration", "overline");
    } else if ($(this).hasClass("contact")){
      $(".home").css("text-decoration", "overline");
    }

    if ($(this).hasClass("portfolio")){
      $(".portfolio").css("text-decoration", "underline");
    } else if ($(this).hasClass("home")){
      $(".portfolio").css("text-decoration", "overline");
    } else if ($(this).hasClass("skill")){
      $(".portfolio").css("text-decoration", "overline");
    } else if ($(this).hasClass("resume")){
      $(".portfolio").css("text-decoration", "overline");
    } else if ($(this).hasClass("experience")){
      $(".portfolio").css("text-decoration", "overline");
    } else if ($(this).hasClass("contact")){
      $(".portfolio").css("text-decoration", "overline");
    }

    if ($(this).hasClass("skill")){
      $(".skill").css("text-decoration", "underline");
    } else if ($(this).hasClass("home")){
      $(".skill").css("text-decoration", "overline");
    } else if ($(this).hasClass("portfolio")){
      $(".skill").css("text-decoration", "overline");
    } else if ($(this).hasClass("resume")){
      $(".skill").css("text-decoration", "overline");
    } else if ($(this).hasClass("experience")){
      $(".skill").css("text-decoration", "overline");
    } else if ($(this).hasClass("contact")){
      $(".skill").css("text-decoration", "overline");
    }

    if ($(this).hasClass("resume")){
      $(".resume").css("text-decoration", "underline");
    } else if ($(this).hasClass("home")){
      $(".resume").css("text-decoration", "overline");
    } else if ($(this).hasClass("portfolio")){
      $(".resume").css("text-decoration", "overline");
    } else if ($(this).hasClass("skill")){
      $(".resume").css("text-decoration", "overline");
    } else if ($(this).hasClass("experience")){
      $(".resume").css("text-decoration", "overline");
    } else if ($(this).hasClass("contact")){
      $(".resume").css("text-decoration", "overline");
    }

    if ($(this).hasClass("experience")){
      $(".experience").css("text-decoration", "underline");
    } else if ($(this).hasClass("home")){
      $(".experience").css("text-decoration", "overline");
    } else if ($(this).hasClass("portfolio")){
      $(".experience").css("text-decoration", "overline");
    } else if ($(this).hasClass("skill")){
      $(".experience").css("text-decoration", "overline");
    } else if ($(this).hasClass("resume")){
      $(".experience").css("text-decoration", "overline");
    } else if ($(this).hasClass("contact")){
      $(".experience").css("text-decoration", "overline");
    }

    if ($(this).hasClass("contact")){
      $(".contact").css("text-decoration", "underline");
    } else if ($(this).hasClass("home")){
      $(".contact").css("text-decoration", "overline");
    } else if ($(this).hasClass("portfolio")){
      $(".contact").css("text-decoration", "overline");
    } else if ($(this).hasClass("skill")){
      $(".contact").css("text-decoration", "overline");
    } else if ($(this).hasClass("resume")){
      $(".contact").css("text-decoration", "overline");
    } else if ($(this).hasClass("experience")){
      $(".contact").css("text-decoration", "overline");
    }
  });