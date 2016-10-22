<?php
header('Content-Type: application/json;charset=UTF-8');

$uname = $_REQUEST['uname'];
$upwd = $_REQUEST['upwd'];


$conn = mysqli_connect('127.0.0.1', 'root', '', 'qqmusic', 3306);
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql = "SELECT * FROM qqmusic_user WHERE uname='$uname' AND upwd='$upwd'";
$result = mysqli_query($conn,$sql);

$output = [];
$row = mysqli_fetch_assoc($result);
	if($row===null){
		$output['msg'] = '帐号或密码错误';	
	}else{
		$output['msg'] = 'succ';	
	}

echo json_encode($output);
