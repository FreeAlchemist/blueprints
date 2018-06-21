<!DOCTYPE html>
<html>
<head>
<meta charset="windows-cp1251">
</head>
<body>

<form method="post">
<input type="submit" value="count" name="count">
</form>

<?php
$filename="./8.txt";
// print_r(scandir("./"));
// $handle=fopen($filename, 'r+');
// $content=fread($handle, filesize($filename));
// // echo filesize($filename);
// fclose($handle);

// $handle=fopen($filename, 'w+');
// echo $content;
// $content++;
// echo "/";
// echo $content;
// fwrite($handle, $content);
// fclose($handle);

if (!empty($_POST[count])) {
	$content=file_get_contents($filename);
	$content++;
	file_put_contents($filename, $content);
	echo $content;
}


print_r ($_POST);

?>

</body>