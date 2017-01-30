/*Load Functions************************************************/
/*Adjusting all the first content and columns when < 1015*/
$(window).load(function() {
  if ($(this).width() < 1015){
      $('#First_content').addClass("sticky");
      $('.First_explan').addClass("sticky");
      $('#First').addClass("sticky");
      $('.row').addClass("sticky");
      $('.col_md_3').addClass("small")
    }
    else{
      $('#First_content').removeClass("sticky");
      $('.First_explan').removeClass("sticky");
      $('#First').removeClass("sticky");
      $('.row').removeClass("sticky");
      $('.col_md_3').removeClass("small")
    }
  });
/*Fixing nav bar with small screens*****************************/
$(window).load(function() {
  if ($(this).width() < 943){
      $('ul').addClass("small");
      $('#nav_bar_collapse').show();
      $('.nav_bar_ul').hide();
    }
    else{
      $('ul').removeClass("small");
      $('#nav_bar_collapse').hide();
      $('.nav_bar_ul').show();
    }
  });
/*Fixing Team Name + Location when < 1082***********************/
$(window).load(function() {
  if ($(this).width() < 1082){
      $('#team_name').addClass("small");
      $('#team_location').addClass("small");
    }
    else{
      $('#team_name').removeClass("small");
      $('#team_name').removeClass("small");
    }
  });
/*Adding stickyness to the nav bar******************************/
$(window).scroll(function() {
  if ($(this).scrollTop() > 450){
      $('header').addClass("sticky");
    }
    else{
      $('header').removeClass("sticky");
    }
  });
/*Resize functions**********************************************/
/*Resize Version of First + Column******************************/
$(window).resize(function() {
  if ($(this).width() < 1015){
      $('#First_content').addClass("sticky");
      $('.First_explan').addClass("sticky");
      $('#First').addClass("sticky");
      $('.row').addClass("sticky");
      $('.col_md_3').addClass("small")
    }
    else{
      $('#First_content').removeClass("sticky");
      $('.First_explan').removeClass("sticky");
      $('#First').removeClass("sticky");
      $('.row').removeClass("sticky");
      $('.col_md_3').removeClass("small")
    }
  });
/*Resize version of nav bar*************************************/
$(window).resize(function() {
  if ($(this).width() < 943){
      $('ul').addClass("small");
      $('#nav_bar_collapse').show();
      $('.nav_bar_ul').hide();
    }
    else{
      $('ul').removeClass("small");
      $('#nav_bar_collapse').hide();
      $('.nav_bar_ul').show();
    }
  });
/*Resize version of team name***********************************/
$(window).resize(function() {
  if ($(this).width() < 1082){
      $('#team_name').addClass("small");
      $('#team_location').addClass("small");
    }
    else{
      $('#team_name').removeClass("small");
      $('#team_location').removeClass("small");
    }
  });
/*Nav bar collapse and expand***********************************/
$(document).ready(function(){
  $('#nav_bar_collapse').click(function() {
        $('.nav_bar_ul').toggle();
      });
});
$(document).ready(function(){
  $('.nav_bar_ul').click(function() {
    if($(document).width() < 943){
      $('.nav_bar_ul').hide();
      $('#nav_bar_collapse').show();
    }
    else{
      $('.nav_bar_ul').show();
      $('#nav_bar_collapse').hide();
    }
  });
});
