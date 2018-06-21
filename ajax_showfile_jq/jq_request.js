// function http_zapros(method, url){

// 	$.get(url,function(data){
		
// 		console.log($otvet[0]);
// 		$otvet.html(data);
// 	});
// }

function http_zapros_self(sel,flag){
	if (flag) return function(){
		var $otvet = $(sel);
		return function(method, url){
			$.get(url,function(data){
				$otvet.attr("value",data);
			});
		}
	}()
	else return function(){
		var $otvet = $(sel);
		
		return function(method, url){
			$.get(url,function(data){
				console.log($otvet);
				$otvet.html(data);
			});
		}
	}()
}
http_zapros = http_zapros_self("#show",1);
console.log(http_zapros+"")

http_zapros1 = http_zapros_self("#otvet");
console.log(http_zapros1+"")