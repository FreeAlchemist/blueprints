<!DOCTYPE html>
<html>
<head>
	<title>ajax_showfile</title>
	<meta charset="utf-8">
	<script type="text/javascript" src="request.js"></script>
	<?php
	include("showdir.php");
	// showpath("uploads");
	print_r(showpath("uploads"));
	?>
</head>
<body><ul>
<?php
$arr=showpath("uploads");
foreach ($arr as $key => $value) {

	echo "<li><span onclick=\"http_zapros('GET','uploads/".$value."',obrabotka)\">".$value."</span>"."<a href=\"uploads/".$value."\"> скачать</a></li>";

}
?>
</ul>
<form>
	<input type='submit' name="show" value="show">
	<hr>
	<textarea id="otvet" name="filetext" value="place for text" style="width:500px; height:200px;" >
		
	</textarea>
	<hr>
</form>
<form>
	<input type='submit' name="download" value="download">
</form>
</body>
</html>