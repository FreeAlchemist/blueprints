<!DOCTYPE html>
<html>
<head>
	<title>ajax_showfile</title>
	<meta charset="utf-8">

	<script type="text/javascript" src="jquery/jquery-1.12.0.js"></script>

	<?php
	
	include("jq_showdir.php");
	// showpath("uploads");
	print_r(showpath("uploads"));
	?>
</head>
<body>

<ul>
<?php
$arr=showpath("uploads");
foreach ($arr as $key => $value) {

	
	echo "<li>
	<span onclick=\"http_zapros('GET','uploads/".$value."')\">"
	.$value.
	"</span>"
	." <span onclick=\"http_zapros1('GET','uploads/".$value."')\">"
	.$value.
	"</span>"
	."<a href=\"uploads/".$value."\"> скачать</a></li>";
}
?>
</ul>
<form>
	<input type='submit' name="show" id="show" value="show">
	<hr>
	<textarea id="otvet" name="filetext" value="place for text" style="width:500px; height:200px;" >
	</textarea>
	<hr>
</form>
<form>
	<input type='submit' name="download" value="download">
</form>
<script type="text/javascript" src="jq_request.js"></script>
</body>
</html>