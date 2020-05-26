$(document).on('mouseover','#icon',function(){
  $(this).next().toggleClass('memberLists');
})

$(document).on('mouseover','upper',function(){
  console.log('test')
  $(this).next().toggleClass('hidden');
})
// $('fa-users').on('click',function(){
//   console.log('test');
//   $(this).next().toggleClass('memberLists');
// });