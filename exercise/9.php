<!DOCTYPE html>
<html>
<head>
<meta charset="windows-cp1251">
</head>
<body>

<form method='post' enctype='multipart/form-data' action='9.php'>
    File: <input type='file' name='file_upload'>
    <input type='submit'>
</form>
<hr>
<?php
$uploaddir = './uploads/';
$uploadfile = $uploaddir . "9.txt";

echo '<pre>';
if (move_uploaded_file($_FILES['file_upload']['tmp_name'], $uploadfile)) {
    echo "�����1.\n";
} else {
    echo "�����2!\n";
}

print_r($_POST);
if (!empty($_POST["filetext"])) {
file_put_contents($uploadfile, $_POST["filetext"]);
}

$content=file_get_contents($uploadfile);
// echo $content;
// $POST[filetext]=$content;

echo '�����3:';
print_r($_FILES);

print "</pre>";



?>
<form method="post" action='9.php'>
	<textarea name="filetext" value="place for text">
		<?=$content;?>
	</textarea>
	 <input type='submit'>
	 <a href=<?=$uploadfile;?> target="blank">�������</a>
</form>
<hr>
<form method="post" name="filedownload" action='filedownload.php'>
		 <input type='submit' value="download">
	 </form>
</body>