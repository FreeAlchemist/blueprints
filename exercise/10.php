<!DOCTYPE html>
<html>
<head>
<meta charset="windows-cp1251">
<link rel=Stylesheet href="10.css">
</head>
<body>
	
<?php

$encoding=iconv_get_encoding('all');
print_r($encoding);

$filename="10.xml";
if (file_exists($filename)) {
    $xml = simplexml_load_file($filename);
    // print_r($xml);
}
else {
    exit('Failed to open '.$filename);
}
echo '<form method="get" action="10form.php">';
echo '<input type="submit" value="�������� �������">';
echo '<input type="hidden" name="filename" value="'.$filename.'">';
echo '<input type="hidden" name="add" value="1">';
echo '</form>';
echo "<table rules=\"all\">";
	echo "<tr>
		<td>���</td>
		<td>�������</td>
		<td>���� ��������</td>
		<td>�����</td>
		</tr>";
foreach ($xml as $key => $value) {
	echo "<tr>";
	echo "<td>";
	echo "<a href=\"10form.php?id=".$value['id']."&filename=".$filename."\">"
	    .iconv("UTF-8","cp1251",$value->fio->lastname)." "
	    .iconv("UTF-8","cp1251",$value->fio->firstname)." "
	    .iconv("UTF-8","cp1251",$value->fio->surname)."</a>";
	echo "</td>";
	echo "<td>";
	echo $value->phone;
	echo "</td>";
	echo "<td>";
	echo iconv("UTF-8","cp1251",$value->birthdate->day)."."
		.iconv("UTF-8","cp1251",$value->birthdate->month)."."
		.iconv("UTF-8","cp1251",$value->birthdate->year);
	echo "</td>";
	echo "<td>";
	echo iconv("UTF-8","cp1251",$value->adress->country).", "
		.iconv("UTF-8","cp1251",$value->adress->city);
	echo "</td>";
	echo "</tr>";
}
echo "</table>";
?>
</body>