$(document).ready(function(){
  $('fa-users').on('click',function(){
    console.log('test');
    $(this).next().toggleClass('memberLists');
  });
});