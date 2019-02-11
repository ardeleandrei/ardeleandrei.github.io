$(document).ready(function(){
  var k1 = 0;
  var k2 = 0;
  var k3 = 0;
  $("#about").hover(function(){
    $(".rightrect").css("display","inline");
    $(".rightrectx").css("display","none");
	$("h1").text("about");
  $("h1").css("margin-left","80px");
  }, function(){
    $(".rightrect").css("display","none");
    if(k1 == 1){
    $(".rightrectx").css("display","inline");
  }else{
    $(".rightrect").css("animation","fade-in 0.1s");
  }
  });
  $("#work").hover(function(){
    $(".rightrect").css("display","inline");
    $(".rightrectx").css("display","none");
	$("h1").text("work");
  $("h1").css("margin-left","95px");
  }, function(){
    $(".rightrect").css("display","none");
    if(k2 == 1){
    $(".rightrectx").css("display","inline");
     }else{
       $(".rightrect").css("animation","fade-in 0.1s");
       $(".label").css("display","none");
     }
  });
  $("#contact").hover(function(){
    $(".rightrect").css("display","inline");
    $(".rightrectx").css("display","none");
	$(".rightrect").css("margin-left","1vw");
	$("h1").text("contact");
  $("h1").css("margin-left","46px");
  }, function(){
    $(".rightrect").css("display","none");
    if(k3 == 1){
    $(".rightrectx").css("display","inline");
    }else{
    $(".rightrect").css("animation","fade-in 0.1s");
    }
  });
  $(".projectbtn").hover(function(){
    if(k2 == 1){
    $(this).css("background-color","white");
    $(this).removeClass("btnUnhover");
    $(this).addClass("btnHover");
    $(".label").css("display","block");}
  }, function(){
    $(this).removeClass("btnHover");
    $(this).addClass("btnUnhover");
  });

  $("#about").click(function(){
	  if(k1 == 0){

	  $("#work").css("display","none");
	  $("#contact").css("display","none");
    $(".el7").removeClass("aboutClose");
    $(".el7").removeClass("workClose");
    $(".el7").removeClass("contactClose");
	  $(".el7").addClass("aboutOpen");
    $(".el8").css("z-index","10");
    $("#about").css("z-index","11");
    $(".rightrect").css("display","none");
    $(".rightrect").css("animation","none");
    $(".rightrectx").css("display","inline");
    setTimeout(function(){
      $(".aboutcontent").show();
    }, 400);

		k1 = 1;
		}else{
	  $("#work").css("display","block");
	  $("#contact").css("display","block");
	  $(".el7").removeClass("aboutOpen");
    $(".el7").addClass("aboutClose");
    $(".el8").css("z-index","2");
    $("#about").css("z-index","6");
    $(".rightrectx").css("display","none");
    $(".aboutcontent").css("display","none");
		k1 = 0;
		}
  });

  $("#work").click(function(){
	  if(k2 == 0){
	   $("#about").css("display","none");
	  $("#contact").css("display","none");
    $(".el7").removeClass("workClose");
    $(".el7").removeClass("aboutClose");
    $(".el7").removeClass("contactClose");
	  $(".el7").addClass("workOpen");
    $(".el9").css("z-index","10");
    $("#work").css("z-index","11");
    $(".rightrect").css("display","none");
    $(".rightrect").css("animation","none");
    $(".rightrectx").css("display","inline");
    $(".projects").removeClass("projectsHide");
    $(".projects").addClass("projectsShow");

		k2 = 1;
		}else{
		$("#about").css("display","block");
	  $("#contact").css("display","block");
    $(".el7").removeClass("workOpen");
    $(".el7").addClass("workClose");
     $(".el9").css("z-index","3");
     $("#work").css("z-index","7");
    $(".rightrectx").css("display","none");
    $(".projects").removeClass("projectsShow");
    $(".projects").addClass("projectsHide");
    $(".label").css("display","none");
		k2 = 0;
		}
  });

  $("#contact").click(function(){
      if(k3 == 0){

    $("#about").css("display","none");
    $("#work").css("display","none");
    $(".el7").removeClass("contactClose");
    $(".el7").removeClass("workClose");
    $(".el7").removeClass("aboutClose");
	  $(".el7").addClass("contactOpen");
    $(".rightrectx").css("display","inline");
    $(".rightrect").css("display","none");
    $(".rightrect").css("animation","none");
    $(".el10").css("z-index","10");
    $("#contact").css("z-index","11");
    setTimeout(function(){
      $(".contactcontent").show();
    }, 300);
	k3 = 1;
	}else{

    $("#about").css("display","block");
    $("#work").css("display","block");
    $(".el7").removeClass("contactOpen");
    $(".el7").addClass("contactClose");
    $(".rightrectx").css("display","none");
    $(".el10").css("z-index","4");
    $("#contact").css("z-index","8");
    $(".contactcontent").css("display","none");
	k3 = 0;
	}
  });
});
console.log("cats");