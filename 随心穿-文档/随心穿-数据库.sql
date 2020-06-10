/*
SQLyog Ultimate v12.08 (64 bit)
MySQL - 5.7.14 : Database - sxc
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`sxc` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `sxc`;

/*Table structure for table `address` */

DROP TABLE IF EXISTS `address`;

CREATE TABLE `address` (
  `addressid` varchar(20) NOT NULL,
  `addpro` varchar(20) NOT NULL,
  `userid` varchar(20) NOT NULL,
  `isdefault` tinyint(1) NOT NULL,
  `addcity` varchar(20) DEFAULT NULL,
  `addarea` varchar(20) DEFAULT NULL,
  `addinfo` varchar(20) DEFAULT NULL,
  `addtel` varchar(50) DEFAULT NULL,
  `addname` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`addressid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `address` */

insert  into `address`(`addressid`,`addpro`,`userid`,`isdefault`,`addcity`,`addarea`,`addinfo`,`addtel`,`addname`) values ('a784657','河北省','u123456',0,'石家庄市','新华区','体育路青溪小区','7652734','小李'),('a734788','河北省','u123456',1,'石家庄市','裕华区','图书路35号','3467288','李');

/*Table structure for table `collect` */

DROP TABLE IF EXISTS `collect`;

CREATE TABLE `collect` (
  `cid` varchar(20) NOT NULL,
  `merid` varchar(20) NOT NULL,
  `userid` varchar(20) NOT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `collect` */

insert  into `collect`(`cid`,`merid`,`userid`) values ('ci774723','m123456','u123456'),('ci657372','m123456','u654321');

/*Table structure for table `complain` */

DROP TABLE IF EXISTS `complain`;

CREATE TABLE `complain` (
  `compid` varchar(20) NOT NULL,
  `compcontent` varchar(100) NOT NULL,
  `userid` varchar(20) NOT NULL,
  PRIMARY KEY (`compid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `complain` */

insert  into `complain`(`compid`,`compcontent`,`userid`) values ('co742637','我就得不好。','u123456'),('co463267','我就得不好。','u654321');

/*Table structure for table `defaultadd` */

DROP TABLE IF EXISTS `defaultadd`;

CREATE TABLE `defaultadd` (
  `add` varchar(100) DEFAULT NULL,
  `addid` varchar(10) NOT NULL,
  PRIMARY KEY (`addid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `defaultadd` */

insert  into `defaultadd`(`add`,`addid`) values ('1','a001');

/*Table structure for table `denglu` */

DROP TABLE IF EXISTS `denglu`;

CREATE TABLE `denglu` (
  `userid` varchar(20) NOT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `denglu` */

insert  into `denglu`(`userid`) values ('u123456'),('u654321');

/*Table structure for table `manager` */

DROP TABLE IF EXISTS `manager`;

CREATE TABLE `manager` (
  `mid` varchar(20) NOT NULL,
  `mname` varchar(20) NOT NULL,
  `mrealname` varchar(20) NOT NULL,
  `msex` char(10) NOT NULL,
  `mtel` varchar(50) NOT NULL,
  `memail` varchar(50) NOT NULL,
  `mpwd` varchar(50) NOT NULL,
  PRIMARY KEY (`mid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `manager` */

insert  into `manager`(`mid`,`mname`,`mrealname`,`msex`,`mtel`,`memail`,`mpwd`) values ('m123456','小李','李梦雪','女','62367248','6452376@qq.com','123456'),('m654321','小郑','郑雨露','女','75983747','9868577@qq.com','654321');

/*Table structure for table `manerger` */

DROP TABLE IF EXISTS `manerger`;

CREATE TABLE `manerger` (
  `mid` varchar(20) NOT NULL,
  `mname` varchar(20) NOT NULL,
  `mrealname` varchar(20) NOT NULL,
  `msex` char(10) NOT NULL,
  `mtel` varchar(50) NOT NULL,
  `memail` varchar(50) NOT NULL,
  `mpwd` varchar(50) NOT NULL,
  PRIMARY KEY (`mid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `manerger` */

insert  into `manerger`(`mid`,`mname`,`mrealname`,`msex`,`mtel`,`memail`,`mpwd`) values ('m123456','小李','李梦雪','女','62367248','6452376@qq.com','123456'),('m654321','小郑','郑雨露','女','75983747','9868577@qq.com','654321');

/*Table structure for table `merchandise` */

DROP TABLE IF EXISTS `merchandise`;

CREATE TABLE `merchandise` (
  `merid` varchar(20) NOT NULL,
  `merimg` varchar(100) NOT NULL,
  `mermon` int(20) NOT NULL,
  `price` int(20) NOT NULL,
  `tit` varchar(30) NOT NULL,
  `sizeid` varchar(20) NOT NULL,
  `shopbrand` varchar(20) NOT NULL,
  `mercolor` varchar(20) NOT NULL,
  `mernum` int(20) NOT NULL,
  `saleid` varchar(20) DEFAULT NULL,
  `shopid` varchar(20) NOT NULL,
  `mtime` varchar(10) NOT NULL,
  `realp` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`merid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `merchandise` */

insert  into `merchandise`(`merid`,`merimg`,`mermon`,`price`,`tit`,`sizeid`,`shopbrand`,`mercolor`,`mernum`,`saleid`,`shopid`,`mtime`,`realp`) values ('m123456','https://liwenroul.github.io/Suixinchuan/Sxc-front/myAppN/assets/v2_q5klar.jpg',100,399,'BLANVHE 酒红色蕾丝优雅长款礼服','s147632','BLANVHE','酒红色',20,'sa475623','sp213456','4','5,500'),('m576383','https://liwenroul.github.io/Suixinchuan/Sxc-front/myAppN/assets/v2_q5klq0.jpg',200,299,'BLANVHE 渐变优雅长款礼服','s564536','BLANVHE','渐变',30,NULL,'sp123456','3','2,000'),('m756742','https://liwenroul.github.io/Suixinchuan/Sxc-front/myAppN/assets/v2_q5kl1u.jpg',100,199,'BLANVHE 黑色晚会包包','s853576','BLANVHE','黑色',10,NULL,'sp123456','5','3,000');

/*Table structure for table `rent` */

DROP TABLE IF EXISTS `rent`;

CREATE TABLE `rent` (
  `rentid` varchar(20) NOT NULL,
  `renttim` varchar(50) NOT NULL,
  `merid` varchar(20) NOT NULL,
  `userid` varchar(20) NOT NULL,
  `isback` tinyint(1) NOT NULL,
  `isevaluate` tinyint(1) NOT NULL,
  PRIMARY KEY (`rentid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `rent` */

insert  into `rent`(`rentid`,`renttim`,`merid`,`userid`,`isback`,`isevaluate`) values ('r736234','4.14-4.16','m123456','u123456',0,0),('r623647','4.14-4.16','m756742','u123456',0,0),('r643257','4.14-4.16','m123456','u654321',0,0);

/*Table structure for table `sale` */

DROP TABLE IF EXISTS `sale`;

CREATE TABLE `sale` (
  `saleid` varchar(20) NOT NULL,
  `saletit` varchar(20) NOT NULL,
  `salepercent` varchar(20) NOT NULL,
  `saleinfo` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`saleid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `sale` */

insert  into `sale`(`saleid`,`saletit`,`salepercent`,`saleinfo`) values ('sa475623','实用券攻略','130','礼盒券后直减130'),('sa758538','神价热销榜','0.5','全场5折优惠'),('sa547657','包包特价','0.92','打牌九二折'),('sa746573','防晒美白榜','100','礼盒券后直减130'),('sa573656','人气面膜榜','100','礼盒券后直减130'),('','','0',NULL);

/*Table structure for table `shop` */

DROP TABLE IF EXISTS `shop`;

CREATE TABLE `shop` (
  `shopid` varchar(20) NOT NULL,
  `shopname` varchar(20) NOT NULL,
  `shoptel` varchar(50) NOT NULL,
  `shoppwd` varchar(50) NOT NULL,
  `shopauatar` varchar(100) NOT NULL,
  PRIMARY KEY (`shopid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `shop` */

insert  into `shop`(`shopid`,`shopname`,`shoptel`,`shoppwd`,`shopauatar`) values ('sp123456','HM','4656273','123456','https://liwenroul.github.io/Suixinchuan/Sxc-front/myAppN/assets/v2_q5klq0.jpg'),('sp213456','ZARA','6436783','654321','');

/*Table structure for table `size` */

DROP TABLE IF EXISTS `size`;

CREATE TABLE `size` (
  `sizeid` varchar(20) NOT NULL,
  `sizes` varchar(50) DEFAULT NULL,
  `sizenum` varchar(20) DEFAULT NULL,
  `sizebody` varchar(50) DEFAULT NULL,
  `sizeinfo` varchar(50) DEFAULT NULL,
  `merid` varchar(20) NOT NULL,
  PRIMARY KEY (`sizeid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `size` */

insert  into `size`(`sizeid`,`sizes`,`sizenum`,`sizebody`,`sizeinfo`,`merid`) values ('s147632','S,160/64A,M,170/70A,L,170/75A','20,30,10','腰围,胸围,臀围','66,66,66,70,70,70,52,52,52','m123456'),('s564536','S,160/64A,M,170/70A,L,170/75A','10,23,22','腰围,胸围,臀围','66,66,66,70,70,70,52,52,52','m576383'),('s853576','均码','20','长,宽,高','22,10,10','m756742');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `userid` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `usertel` varchar(50) NOT NULL,
  `userpwd` varchar(50) NOT NULL,
  `userauatar` varchar(100) DEFAULT NULL,
  `userMon` int(20) DEFAULT NULL,
  `isloading` tinyint(1) NOT NULL,
  PRIMARY KEY (`userid`,`username`,`usertel`,`userpwd`,`isloading`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`userid`,`username`,`usertel`,`userpwd`,`userauatar`,`userMon`,`isloading`) values ('u123456','小黄','123456','123456','https://liwenroul.github.io/Suixinchuan/Sxc-front/myAppN/assets/v2_q5klq0.jpg',280,1),('u654321','小孙','654321','654321','https://liwenroul.github.io/Suixinchuan/Sxc-front/myAppN/assets/v2_q5klq0.jpg',0,0);

/*Table structure for table `wear` */

DROP TABLE IF EXISTS `wear`;

CREATE TABLE `wear` (
  `dynid` varchar(20) NOT NULL,
  `dynImg` varchar(100) NOT NULL,
  `dynContent` varchar(100) DEFAULT NULL,
  `likenum` int(10) NOT NULL,
  `userid` varchar(20) NOT NULL,
  PRIMARY KEY (`dynid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `wear` */

insert  into `wear`(`dynid`,`dynImg`,`dynContent`,`likenum`,`userid`) values ('d123456','https://liwenroul.github.io/Suixinchuan/Sxc-front/myAppN/assets/wish1.jpg','今天的衣服很好看，我的我的我的我的我的。',0,'u123456'),('d654321','https://liwenroul.github.io/Suixinchuan/Sxc-front/myAppN/assets/wish2.jpg','好吧好吧好吧好吧好吧好吧，好吧会不会好吧好吧不会好吧。',20,'u654321');

/*Table structure for table `wishs` */

DROP TABLE IF EXISTS `wishs`;

CREATE TABLE `wishs` (
  `wishId` varchar(20) NOT NULL,
  `wishPrice` int(11) NOT NULL,
  `wishTime` varchar(20) NOT NULL,
  `wishType` varchar(20) NOT NULL,
  `userid` varchar(30) NOT NULL,
  `dynid` varchar(20) NOT NULL,
  PRIMARY KEY (`wishId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `wishs` */

insert  into `wishs`(`wishId`,`wishPrice`,`wishTime`,`wishType`,`userid`,`dynid`) values ('w001',20,'1','上衣','u123456','d123456'),('w002',100,'3','套装','u123456','d123456'),('w003',40,'4','套装','u654321','d654321');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
