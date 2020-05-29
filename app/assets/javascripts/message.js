$(document).on('click','#start-btn',function(){
  if(window.confirm('読書を開始しますか？')){
    window.alert('読書を開始します！')
  } else {
    window.alert('本を準備してね！')
  }
})

function countdown(due){
  const now = new Date();

  const rest = due.getTime() - now.getTime();
  const sec = Math.floor(rest / 1000) % 60;
  const min = Math.floor(rest / 1000 / 60) % 60;
  const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
  const count = [hours,min,sec];

  return count;
}

let goal = new Date();
goal.setMinutes(59);
goal.setSeconds(59);

console.log(countdown(goal));
const counter = countdown(goal);
const time = `${counter[0]}分${counter[1]}秒`
document.getElementById('timer').textContent = time;
