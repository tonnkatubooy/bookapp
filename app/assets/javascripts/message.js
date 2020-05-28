$(document).on('click','#start-btn',function(){
  if(window.confirm('読書を開始しますか？')){
    window.alert('読書を開始します！')
  } else {
    window.alert('本を準備してね！')
  }
})