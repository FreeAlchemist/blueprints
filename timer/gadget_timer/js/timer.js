// Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Firefox 1.0+
isFirefox = typeof InstallTrigger !== 'undefined';
// Safari 3.0+
isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
// Internet Explorer 6-11
isIE = /*@cc_on!@*/false || !!document.documentMode;
// Edge 20+
isEdge = !isIE && !!window.StyleMedia;
// Chrome 1+
isChrome = !!window.chrome && !!window.chrome.webstore;
// Blink engine detection
isBlink = (isChrome || isOpera) && !!window.CSS;

/* Results: */
// console.log("isOpera", isOpera);
// console.log("isFirefox", isFirefox);
// console.log("isSafari", isSafari);
// console.log("isIE", isIE);
// console.log("isEdge", isEdge);
// console.log("isChrome", isChrome);
// console.log("isBlink", isBlink);

var datefield = document.getElementById('deadline')
var timefield = document.getElementById('deadtime')
var timeinterval
GetDeadline()

// new Date(2017,8,15,17,00)
// console.log(Date)

function GetDeadline(){
  deadline = datefield.value
  deadtime = timefield.value
  console.log("deadtime "+deadtime)

  if(isIE == true){
    timeline = "31-12-2017 17:00"
  }
  else{
    timeline = deadline+" "+deadtime
  }
  // timeline = "15-09-2017 17:00"
  // timeline = "2017-09-15 17:00"
  // timeline = deadline+" "+deadtime
  console.log("timeline "+timeline)
  getTimeRemaining(timeline).minutes
  stop()
  initializeClock('clockdiv', timeline)
}

function getTimeRemaining(endtime){
  var maintitle = document.getElementById('maintitle')
  // var maintitle = $('#maintitle')
  // console.log(maintitle.html())
  if(isIE == true){
    // console.log("IE")
    // maintitle.html("Текущая версия Internet Explorer не позволяет вам насладится работой данного гаджета!")
    maintitle.innerHTML = "IE sucks...1"
  }
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
    // console.log("t.total "+t.total)
    // console.log("parseInt(t.total) "+parseInt(t.total))
    if(t.total<=0){
      stop()
      maintitle.innerHTML = "Дождались"
      daysSpan.innerHTML = "00"
      hoursSpan.innerHTML = "00"
      minutesSpan.innerHTML = "00"
      secondsSpan.innerHTML = "00"
    }
    if(t.total != t.total){
      stop()
      maintitle.innerHTML = "Укажите дату и время"
      daysSpan.innerHTML = "--"
      hoursSpan.innerHTML = "--"
      minutesSpan.innerHTML = "--"
      secondsSpan.innerHTML = "--"
    }
    if(isIE == true){
      maintitle.innerHTML = "No HTML5...IE sucks"
    }
  }

  function start(){
    timeinterval = setInterval(updateClock,1000)
    // console.log("Интервал запущен")
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

function stop(){
  clearInterval(timeinterval)
  // console.log("Интервал остановлен")
}