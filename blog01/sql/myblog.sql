CREATE DATABASE  IF NOT EXISTS `myblog` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `myblog`;
-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: myblog
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blogs`
--

DROP TABLE IF EXISTS `blogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blogs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `content` longtext NOT NULL,
  `author` varchar(10) NOT NULL,
  `createTime` bigint(30) NOT NULL,
  `updateTime` bigint(30) DEFAULT '0',
  `isDel` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idblogs_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogs`
--

LOCK TABLES `blogs` WRITE;
/*!40000 ALTER TABLE `blogs` DISABLE KEYS */;
INSERT INTO `blogs` VALUES (1,'百度起飞了','考虑到公司历年公司领导那个牛奶','华纳',1252525252,0,0),(2,'谷歌见鬼了','看看历史年度概念股','华农',1252525252,0,0),(3,'必应站起来了','大哥大哥google的肩膀上','沸石',1252525252,0,0),(4,'大哥大','今天就打个赌，请吃饭','巫医',1252525252,1571237635308,0),(5,'酷酷的','大概多少三个但是格式的合适的话','巴适',1252525252,0,0),(6,'公对公','的的观点是广东省格式的','快递柜',1252525252,0,1),(7,'中国国家队获奖','嘻嘻嘻嘻嘻嘻嘻许拉进来看哪里哪里哪里','巫医',1571237520817,0,0),(10,'男的女成','今天就打个赌，请吃饭','BabyChin',1571238735129,0,0),(11,'定点杆','今天就打个赌，请吃饭','BabyChin',1571238793781,1571883295516,0),(12,'男的女成','今天就打个赌，请吃饭','BabyChin',1571238818943,0,0),(13,'男的女成','今天就打个赌，请吃饭','BabyChin',1571238960157,0,1),(14,'男的女成','今天就打个赌，请吃饭','BabyChin',1571238971275,0,1),(15,'男的女成','今天就打个赌，请吃饭','BabyChin',1571239244835,0,1),(16,'快递柜能','今天就打个赌，请吃饭','vddf',1571239694269,1571883307620,0),(17,'dg6哈哈','今天就打个赌，请吃饭','BabyChin',1571239720390,0,1),(18,'dg6','今天就打个赌，请吃饭','BabyChin',1571240983059,0,1),(19,'骨灰盒','今天就打个赌，请吃饭','BabyChin',1571241008247,0,1),(20,'格林威治的思恋','还记得标准时间吗','BabyChin',1571241053928,1571883332844,0),(21,'积极一点，孩子','今天就打个赌，请吃饭','BabyChin',1571241092420,1571882410639,0),(22,'一个像样的标题','今天回家学习职业发展会发的课程让我受益匪浅。','BabyChin',1571881518941,1571882438554,0),(23,'&lt;script&gt;alert(888)&lt;/script&gt;','都是噶傻大gas的gas','BabyChin',1575028743996,1575028772301,0),(24,'&lt;script&gt;alert(666)&lt;/script&gt;','格式负担和代发货','BabyChin',1575028781910,0,0);
/*!40000 ALTER TABLE `blogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(100) NOT NULL,
  `realname` varchar(10) NOT NULL,
  `createTime` bigint(20) DEFAULT NULL,
  `lastLoginTime` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idusers_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (4,'qinhua','55a21de11de8e6af38ccd00a4facaf3a','覃华',1571650217511,1575034958047),(8,'wuxi','14aace0c1b7bdcf6ad3c8bba79800ddb','吴曦',1575031143062,1575033844116);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-29 22:03:39
