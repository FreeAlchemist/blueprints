/*
Компания набирает 30 случайных человек и подряд распределяет их на 10 групп по 3 человека (разработчик, тестировщик, менеджер)
Какова вероятноять, что в половине групп не будет разработчика?
*/
var allqroups = 10
var personpergroup = 3
var people = allqroups * personpergroup
var personclass = ['boss','tester','developer']
var randompeople = []
var bossnum = 0
var testernum = 0
var developernum = 0
var currentperson = 0

function getRandomInt(min, max){return Math.floor(Math.random() * (max - min + 1)) + min;}

for (var i = 0; i < people; i++) {
	var randomint = getRandomInt(1, 3)
	randompeople.push(personclass[randomint-1])
	if(personclass[randomint-1] == "boss"){bossnum += 1 }
	if(personclass[randomint-1] == "tester"){testernum += 1 }
	if(personclass[randomint-1] == "developer"){developernum += 1 }
};

for (var n = 1; n <= allqroups; n++) {
	$('#company').append($('<div />',{class:'group',id:'group-'+ n}))
	for (var m = 0; m < personclass.length; m++) {
		$('#group-'+ n).append($('<div />',{class:'person '+ randompeople[currentperson], id:'person-'+ n +'-' + (m + 1), text:randompeople[currentperson] + ' (' + currentperson + ')'}))
		currentperson += 1
	}
}

var devgroup = $( ".group" ).has( ".developer" )
var devgroupnum = devgroup.length
													console.log(randompeople)
													console.log(randompeople.length)
													console.log(devgroup)
													console.log(devgroupnum)
$('#stats').html('<h3>Задача:<h3>')
$('#stats').append('Компания набирает 30 случайных человек и подряд распределяет их на 10 групп по 3 человека (разработчик, тестировщик, менеджер)<br>Какова вероятноять, что в половине групп не будет разработчика?')											
$('#stats').append('<h3>Статистика:<h3>')
$('#stats').append('Всего сотрудников: '+people)
$('#stats').append('<br>Начальников: '+bossnum)
$('#stats').append('<br>Тестировщиков: '+testernum)
$('#stats').append('<br>Разработчиков: '+developernum)
$('#stats').append('<hr>')
$('#stats').append('<br>Всего групп: '+allqroups)
$('#stats').append('<br>Групп с разработчиками: '+devgroupnum)
$('#stats').append('<br>Групп неудачников: '+(allqroups-devgroupnum))
$('#stats').prepend($('<a />',{href:'index.html',id:'addpersons',text:'Нанять кучу случайных людей'}))