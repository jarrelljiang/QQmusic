<?php
header('Content-Type: application/json;charset=UTF-8');

$name = $_REQUEST['name'];
$qname = $_REQUEST['qname'];
$pwd = $_REQUEST['pwd'];
$url='images/qq.png';

$conn = mysqli_connect('127.0.0.1', 'root', '', 'qqmusic', 3306);
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql = "INSERT INTO qqmusic_user VALUES('$qname','$name','$pwd','$url')";
$result = mysqli_query($conn,$sql);

