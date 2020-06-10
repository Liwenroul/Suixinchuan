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

insert  into `address`(`addressid`,`addpro`,`userid`,`isdefault`,`addcity`,`addarea`,`addinfo`,`addtel`,`addname`) values ('a784657','æ²³åŒ—çœ','u123456',0,'çŸ³å®¶åº„å¸‚','æ–°ååŒº','ä½“è‚²è·¯é’æºªå°åŒº','7652734','å°æ'),('a734788','æ²³åŒ—çœ','u123456',0,'çŸ³å®¶åº„å¸‚','è£•ååŒº','å›¾ä¹¦è·¯35å·','3467288','æ');

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

insert  into `complain`(`compid`,`compcontent`,`userid`) values ('co742637','æˆ‘å°±å¾—ä¸å¥½ã€‚','u123456'),('co463267','æˆ‘å°±å¾—ä¸å¥½ã€‚','u654321');

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

insert  into `manager`(`mid`,`mname`,`mrealname`,`msex`,`mtel`,`memail`,`mpwd`) values ('m123456','å°æ','ææ¢¦é›ª','å¥³','62367248','6452376@qq.com','123456'),('m654321','å°éƒ‘','éƒ‘é›¨éœ²','å¥³','75983747','9868577@qq.com','654321');

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

insert  into `manerger`(`mid`,`mname`,`mrealname`,`msex`,`mtel`,`memail`,`mpwd`) values ('m123456','å°æ','ææ¢¦é›ª','å¥³','62367248','6452376@qq.com','123456'),('m654321','å°éƒ‘','éƒ‘é›¨éœ²','å¥³','75983747','9868577@qq.com','654321');

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

insert  into `merchandise`(`merid`,`merimg`,`mermon`,`price`,`tit`,`sizeid`,`shopbrand`,`mercolor`,`mernum`,`saleid`,`shopid`,`mtime`,`realp`) values ('m123456','https://liwenroul.github.io/Suixinchuan/Sxc-front/myAppN/assets/v2_q5klar.jpg',100,399,'BLANVHE é…’çº¢è‰²è•¾ä¸ä¼˜é›…é•¿æ¬¾ç¤¼æœ','s147632','BLANVHE','é…’çº¢è‰²',20,'sa475623','sp213456','4','5,500'),('m576383','https://liwenroul.github.io/Suixinchuan/Sxc-front/myAppN/assets/v2_q5klq0.jpg',200,299,'BLANVHE æ¸å˜ä¼˜é›…é•¿æ¬¾ç¤¼æœ','s564536','BLANVHE','æ¸å˜',30,NULL,'sp123456','3','2,000'),('m756742','https://liwenroul.github.io/Suixinchuan/Sxc-front/myAppN/assets/v2_q5kl1u.jpg',100,199,'BLANVHE é»‘è‰²æ™šä¼šåŒ…åŒ…','s853576','BLANVHE','é»‘è‰²',10,NULL,'sp123456','5','3,000');

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
  `saleimg` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`saleid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `sale` */

insert  into `sale`(`saleid`,`saletit`,`salepercent`,`saleinfo`,`saleimg`) values ('sa475623','å®ç”¨åˆ¸æ”»ç•¥','130','ç¤¼ç›’åˆ¸åç›´å‡130','https://liwenroul.gi'),('sa758538','ç¥ä»·çƒ­é”€æ¦œ','0.5','å…¨åœº5æŠ˜ä¼˜æƒ ','https://liwenroul.gi'),('sa547657','åŒ…åŒ…ç‰¹ä»·','0.92','æ‰“ç‰Œä¹äºŒæŠ˜','https://liwenroul.gi'),('sa746573','é˜²æ™’ç¾ç™½æ¦œ','100','ç¤¼ç›’åˆ¸åç›´å‡130','https://liwenroul.gi'),('sa573656','äººæ°”é¢è†œæ¦œ','100','ç¤¼ç›’åˆ¸åç›´å‡130','https://liwenroul.gi');

/*Table structure for table `shop` */

DROP TABLE IF EXISTS `shop`;

CREATE TABLE `shop` (
  `shopid` varchar(20) NOT NULL,
  `shopname` varchar(20) NOT NULL,
  `shoptel` varchar(50) NOT NULL,
  `shoppwd` varchar(50) NOT NULL,
  `shopauatar` tinyblob NOT NULL,
  PRIMARY KEY (`shopid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `shop` */

insert  into `shop`(`shopid`,`shopname`,`shoptel`,`shoppwd`,`shopauatar`) values ('sp123456','HM','4656273','123456','‰PNG\r\n\Z\n\0\0\0\rIHDR\0\0Ù\0\0\"\0\0\0:p?\0\0\0bKGD\0ÿ\0ÿ\0ÿ ½§“\0\0\0	pHYs\0\0Ä\0\0Ä•+\0\0 \0IDATxœì½iG¶-¶ÖÈ<CGqĞ@©µºo÷½îá°aÆıà÷0lxø]ü\'<\06çğsß×÷öínµ&R%Šçy,Ö©s23b/ˆÈÃ[­n–¤¦¤Ë\"Q¬bUFfFìX{íµwPÛÓ˜ÊÂ	FP@ùpP\'Ä$ˆn€˜(J”EÈ2!Âä†„$¸8\Z‹–‚É%2&ˆà—z#IF'),('sp213456','ZARA','6436783','654321','‰PNG\r\n\Z\n\0\0\0\rIHDR\0\0Ù\0\0\"\0\0\0:p?\0\0\0bKGD\0ÿ\0ÿ\0ÿ ½§“\0\0\0	pHYs\0\0Ä\0\0Ä•+\0\0 \0IDATxœì½iG¶-¶ÖÈ<CGqĞ@©µºo÷½îá°aÆıà÷0lxø]ü\'<\06çğsß×÷öínµ&R%Šçy,Ö©s23b/ˆÈÃ[­n–¤¦¤Ë\"Q¬bUFfFìX{íµwPÛÓ˜ÊÂ	FP@ùpP\'Ä$ˆn€˜(J”EÈ2!Âä†„$¸8\Z‹–‚É%2&ˆà—z#IF');

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

insert  into `size`(`sizeid`,`sizes`,`sizenum`,`sizebody`,`sizeinfo`,`merid`) values ('s147632','S,160/64A,M,170/70A,L,170/75A','20,30,10','è…°å›´,èƒ¸å›´,è‡€å›´','66,66,66,70,70,70,52,52,52','m123456'),('s564536','S,160/64A,M,170/70A,L,170/75A','10,23,22','è…°å›´,èƒ¸å›´,è‡€å›´','66,66,66,70,70,70,52,52,52','m576383'),('s853576','å‡ç ','20','é•¿,å®½,é«˜','22,10,10','m756742');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `userid` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `usertel` varchar(50) NOT NULL,
  `userpwd` varchar(50) NOT NULL,
  `userauatar` tinyblob,
  `userMon` int(20) DEFAULT NULL,
  `isloading` tinyint(1) NOT NULL,
  PRIMARY KEY (`userid`,`username`,`usertel`,`userpwd`,`isloading`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`userid`,`username`,`usertel`,`userpwd`,`userauatar`,`userMon`,`isloading`) values ('u123456','å°é»„','123456','123456','ÿØÿà\0JFIF\0\0H\0H\0\0ÿÛ\0C\0\r	\n\n\r\n\r \' .)10.)-,3:J>36F7,-@WAFLNRSR2>ZaZP`JQROÿÛ\0C&&O5-5OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOÿÀ\0 î\"\0ÿÄ\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÄ\0C\0	\0!1AQa\"q‘25R’#%T',280,1),('u654321','å°å­™','654321','654321','ÿØÿà\0JFIF\0,,\0\0ÿÛ\0C\0		\n\r\Z\Z $.\' \",#(7),01444\'9=82<.342ÿÛ\0C			\r\r2!!22222222222222222222222222222222222222222222222222ÿÀ\0îô\"\0ÿÄ\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÄ\0C\0\0\0!1A\"Qaq2‘¡#B±Á',0,0);

/*Table structure for table `wear` */

DROP TABLE IF EXISTS `wear`;

CREATE TABLE `wear` (
  `dynid` varchar(20) NOT NULL,
  `dynImg` tinyblob NOT NULL,
  `dynContent` varchar(100) DEFAULT NULL,
  `likenum` int(10) NOT NULL,
  `userid` varchar(20) NOT NULL,
  PRIMARY KEY (`dynid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `wear` */

insert  into `wear`(`dynid`,`dynImg`,`dynContent`,`likenum`,`userid`) values ('d123456','ÿØÿà\0JFIF\0,,\0\0ÿÛ\0C\0		\n\r\Z\Z $.\' \",#(7),01444\'9=82<.342ÿÛ\0C			\r\r2!!22222222222222222222222222222222222222222222222222ÿÀ\0îô\"\0ÿÄ\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÄ\0C\0\0\0!1A\"Qaq2‘¡#B±Á','ä»Šå¤©çš„è¡£æœå¾ˆå¥½çœ‹ï¼Œæˆ‘çš„æˆ‘çš„æˆ‘çš„æˆ‘çš„æˆ‘çš„ã€‚',0,'u123456'),('d654321','ÿØÿà\0JFIF\0\0H\0H\0\0ÿÛ\0C\0		\n\r\Z\Z $.\' \",#(7),01444\'9=82<.342ÿÛ\0C			\r\r2!!22222222222222222222222222222222222222222222222222ÿÀ\0íô\"\0ÿÄ\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÄ\0A\0\0\0!1A\"Qaq#2‘B¡±Á','å¥½å§å¥½å§å¥½å§å¥½å§å¥½å§å¥½å§ï¼Œå¥½å§ä¼šä¸ä¼šå¥½å§å¥½å§ä¸ä¼šå¥½å§ã€‚',20,'u654321');

/*Table structure for table `wish` */

DROP TABLE IF EXISTS `wish`;

CREATE TABLE `wish` (
  `wishId` varchar(20) NOT NULL,
  `wishPrice` int(11) DEFAULT NULL,
  `wishTime` varchar(20) DEFAULT NULL,
  `wishType` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`wishId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `wish` */

insert  into `wish`(`wishId`,`wishPrice`,`wishTime`,`wishType`) values ('w001',20,'1','ä¸Šè¡£'),('w002',100,'3','å¥—è£…');

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

insert  into `wishs`(`wishId`,`wishPrice`,`wishTime`,`wishType`,`userid`,`dynid`) values ('w001',20,'1','ä¸Šè¡£','u123456','d123456'),('w002',100,'3','å¥—è£…','u123456','d123456'),('w003',40,'4','å¥—è£…','u654321','d654321');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
