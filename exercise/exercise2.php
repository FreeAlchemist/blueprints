<!DOCTYPE html>
<html>
<head>
<meta charset="windows-cp1251">
</head>
<body>

<?php
// echo "<hr>Exercise 06<br>";
$str=str_split("������ ������� �������� �������������");
print_r($str);
foreach ($str as $key => $value) {
	if ($value=="�") {
		unset($str[$key]);
	}
	if ($value=="�") {
		if ($str[$key-1]=="�"){
			unset($str[$key]);
			unset($str[$key-1]);
		}
	}
}
print_r(implode("", $str));
echo "<hr>";

// echo "<hr>Exercise 07<br>";
function func($m){
	print_r($m." - ");
	$mstr=str_split($m);
	$leftcount=0;
	$leftindex=0;
	$rightcount=0;
	$rightindex=0;
	foreach ($mstr as $key => $value) {
		if ($value=="(") {
			$leftcount++;
			$leftindex=$key;

		}
		if ($value==")") {
			$rightcount++;
			$rightindex=$key;
			if($rightcount > $leftcount){
				echo "�������<br>";
				return;
			}
		}
	}
	if ($leftcount==$rightcount and $leftindex<$rightindex) {
		echo "�����<br>";
	}
	else{
		echo "�������<br>";
	}
}

func("a+b+c)");
func("(b+(c+a))");
func("b+(c+a))");
func("(a+b)+(a+b)");
func("(a+b)+a+b)");
func("()a+b)+(a+b()");

?>
</body>