<?php
header('Content-Type: application/json;charset=UTF-8');

$uname = $_REQUEST['uname'];
$upwd = $_REQUEST['upwd'];


$conn = mysqli_connect('127.0.0.1', 'root', '', 'qqmusic', 3306);
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql = "SELECT * FROM qqmusic_user WHERE uname='$uname' AND upwd='$upwd'";
$result = mysqli_query($conn,$sql);


$row = mysqli_fetch_assoc($result);


echo json_encode($row);