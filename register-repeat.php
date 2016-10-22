<?php
header('Content-Type: application/json;charset=UTF-8');

$uname = $_REQUEST['name'];


$conn = mysqli_connect('127.0.0.1', 'root', '', 'qqmusic', 3306);
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql = "SELECT * FROM qqmusic_user WHERE uname='$uname'";
$result = mysqli_query($conn,$sql);

$output = [];
$row = mysqli_fetch_assoc($result);
	if($row!=null){
		$output['msg'] = 'succ';	
	}else{
		$output['msg'] = 'fail';
	}

echo json_encode($output);