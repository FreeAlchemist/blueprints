var datefield = document.getElementById('deadline')
var timefield = document.getElementById('deadtime')
var timeinterval
GetDeadline()

function GetDeadline(){
deadline = datefield.value
deadtime = timefield.value
// console.log("deadtime "+deadtime)
timeline = deadline+" "+deadtime
// console.log("timeline "+timeline)
getTimeRemaining(timeline).minutes
stop()
initializeClock('clockdiv', timeline)
}

function getTimeRemaining(endtime){
  var maintitle = document.getElementById('maintitle')
  var t = Date.parse(endtime) - Date.parse(new Date())
  var seconds = Math.floor( (t/1000) % 60 )
  var minutes = Math.floor( (t/1000/60) % 60 )
  var hours = Math.floor( (t/(1000*60*60)) % 24 )
  var days = Math.floor( t/(1000*60*60*24) )
  return {
   'total': t,
   'days': days,
   'hours': hours,
   'minutes': minutes,
   'seconds': seconds
  }
}

getTimeRemaining(timeline).minutes

function initializeClock(id, endtime){
  var clock = document.getElementById(id)
  var daysSpan = clock.querySelector('.days')
  var hoursSpan = clock.querySelector('.hours')
  var minutesSpan = clock.querySelector('.minutes')
  var secondsSpan = clock.querySelector('.seconds')
  var secIn = secondsSpan.innerHTML

  function updateClock(){
    var t = getTimeRemaining(endtime)
    maintitle.innerHTML = "Нужно подождать"
	  daysSpan.innerHTML = t.days
	  hoursSpan.innerHTML = t.hours
	  minutesSpan.innerHTML = t.minutes
	  secondsSpan.innerHTML = ('0' + t.seconds).slice(-2)
    if(t.total<=0){
      // console.log(t.total)
      stop()
      maintitle = document.getElementById('maintitle')
      maintitle.innerHTML = "Дождались"
      daysSpan.innerHTML = "00"
      hoursSpan.innerHTML = "00"
      minutesSpan.innerHTML = "00"
      secondsSpan.innerHTML = "00"
    }
    if(t.total != t.total){
      stop()
      maintitle = document.getElementById('maintitle')
      maintitle.innerHTML = "Укажите дату и время"
      daysSpan.innerHTML = "--"
      hoursSpan.innerHTML = "--"
      minutesSpan.innerHTML = "--"
      secondsSpan.innerHTML = "--"
    }
  }

  function start(){
    timeinterval = setInterval(updateClock,1000)
    // console.log("Интервал запущен")
  }
  function stop(){
    clearInterval(timeinterval)
    // console.log("Интервал остановлен")
  }
  if(timeinterval){
  	// console.log("Нужно остановить это!")
    stop()
  }
  if(!secIn || secIn =="00" || secIn == "--"){
    // запуск функции один раз перед интервалом, чтобы избежать задержки
    updateClock();
  }
  start()
}


var a = 6
var b = 2
var c = 2
var d = 1

// var E = a/b*(c+d)

var E = (c+d)
var F = b*(c+d)
var G = a/F
var H = a/b*(c+d)
var N = a/(b*(c+d))
var N = Math.round(a/(b*(c+d)))


// var E = a/b*(c+d)

console.log("a: "+a)
console.log("b: "+b)
console.log("c: "+c)
console.log("d: "+d)
console.log("(c+d): "+E)
console.log("F: b*(c+d): "+F)
console.log("a/F: "+G)
console.log("a/b*(c+d): "+H)
console.log("a/(b*(c+d)): "+N)
