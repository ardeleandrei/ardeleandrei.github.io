$prevItem = 0;
$(document).ready(function(){
  $('a').click(function(){
    if($prevItem !== 0){
    $prevItem.removeClass('selectedThis');
    $prevItem.parent().prev().find('a').removeClass('selectedPrev');
    $prevItem.parent().next().find('a').removeClass('selectedNext');
   }
    $(this).removeClass('hoverBorder');
    $(this).addClass('selectedThis');
    $(this).parent().prev().find('a').addClass('selectedPrev');
    $(this).parent().next().find('a').addClass('selectedNext');
    if($(this).parent().is(':first-child'))
      $(this).addClass('noRadiusLeft');
    if($(this).parent().is(':last-child'))
      $(this).addClass('noRadiusRight');
    $prevItem = $(this);
  });
   $('a').hover(function(){
     if(!$(this).hasClass('selectedThis'))
     $(this).addClass('hoverBorder');
   }, function(){
     $(this).removeClass('hoverBorder');
   });
  
  
});