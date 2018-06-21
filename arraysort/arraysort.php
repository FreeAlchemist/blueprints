<?php
$arr1 = array(0,10,1,8,2,5,3,4,"a","b","f","e");
// $arr1 = array(0,10,1,8,2,5,3,4,11);

printarr($arr1);

$arr3 = array();

while (sizeof($arr1) > 0 ) {
	$val=null;
	foreach ($arr1 as $key =>$value) {
		if($val===null){
			$val=$value;
		}
		if($value <= $val){
			$val=$value;
			$k=$key;
		}
	}
	$arr3[]=$val;
	unset($arr1[$k]);
}

printarr($arr1);

printarr($arr3);
// asort($arr1);
// printarr($arr1);

// arsort($arr1);
// printarr($arr1);

$arr2 = array("street"=>"Lenina","home"=>10,"room"=>5);
printarr($arr2);
function printarr($a){
	foreach ($a as $key => $value) {
		echo $value."<br>";
	}
echo "<hr>";
}

?>