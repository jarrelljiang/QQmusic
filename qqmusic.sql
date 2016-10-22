SET NAMES utf8;


DROP DATABASE IF EXISTS qqmusic;
CREATE DATABASE qqmusic CHARSET=UTF8;
USE qqmusic;

CREATE TABLE qqmusic_user(
  qname VARCHAR(128),
  uname VARCHAR(128),
  upwd VARCHAR(128),
  uhead VARCHAR(128)
);
INSERT INTO qqmusic_user(qname,uname,upwd,uhead) VALUES
('迅捷斥候','364002527','123456','images/head-big.png'),
('蜡笔小新','1966246022','456789','images/head-big2.jpg');