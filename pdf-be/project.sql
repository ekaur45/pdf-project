CREATE DATABASE  IF NOT EXISTS `pdfproject` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `pdfproject`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: pdfproject
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking` (
  `id` int NOT NULL AUTO_INCREMENT,
  `agentName` varchar(500) DEFAULT NULL,
  `date` varchar(500) DEFAULT NULL,
  `orderNo` varchar(45) DEFAULT NULL,
  `passengers` int DEFAULT NULL,
  `nights` int DEFAULT NULL,
  `departure` varchar(500) DEFAULT NULL,
  `arrival` varchar(500) DEFAULT NULL,
  `customerName` varchar(500) DEFAULT NULL,
  `isDeleted` bit(1) DEFAULT b'0',
  `staffName` varchar(500) DEFAULT NULL,
  `price` decimal(12,2) DEFAULT NULL,
  `discount` decimal(12,2) DEFAULT NULL,
  `extraCharges` decimal(12,2) DEFAULT NULL,
  `totalPrice` decimal(12,2) DEFAULT NULL,
  `currency` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `guestType` varchar(45) DEFAULT NULL,
  `transportationPrice` decimal(12,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `booking_features`
--

DROP TABLE IF EXISTS `booking_features`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking_features` (
  `id` int NOT NULL AUTO_INCREMENT,
  `booking_id` int DEFAULT NULL,
  `feature_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking_features`
--

LOCK TABLES `booking_features` WRITE;
/*!40000 ALTER TABLE `booking_features` DISABLE KEYS */;
INSERT INTO `booking_features` VALUES (1,1,2),(2,1,3),(3,2,2),(4,2,3),(5,3,2),(6,3,3),(7,3,10),(8,3,12),(9,4,2),(10,4,10),(11,5,2),(12,5,10),(13,6,2),(14,6,10),(15,7,2),(16,7,3),(17,7,10),(18,8,2),(19,8,3),(20,8,10),(21,9,2),(22,9,3),(23,9,10),(24,10,2),(25,10,3),(26,10,4),(29,11,2),(30,11,10),(37,12,2),(38,12,3),(39,12,4),(40,12,10),(41,12,11),(42,12,12),(43,13,2),(44,13,3),(45,13,11);
/*!40000 ALTER TABLE `booking_features` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `booking_rooms_types`
--

DROP TABLE IF EXISTS `booking_rooms_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking_rooms_types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `bookingId` int DEFAULT NULL,
  `roomTypeId` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking_rooms_types`
--

LOCK TABLES `booking_rooms_types` WRITE;
/*!40000 ALTER TABLE `booking_rooms_types` DISABLE KEYS */;
INSERT INTO `booking_rooms_types` VALUES (1,15,8),(2,15,9),(3,16,8),(4,16,9);
/*!40000 ALTER TABLE `booking_rooms_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `booking_schedule`
--

DROP TABLE IF EXISTS `booking_schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking_schedule` (
  `id` int NOT NULL AUTO_INCREMENT,
  `booking_id` int DEFAULT NULL,
  `day` varchar(500) DEFAULT NULL,
  `schedule` varchar(2000) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking_schedule`
--

LOCK TABLES `booking_schedule` WRITE;
/*!40000 ALTER TABLE `booking_schedule` DISABLE KEYS */;
INSERT INTO `booking_schedule` VALUES (1,10,'day 1 ',' we go to jakarta and visit the park',NULL,NULL),(3,11,'asdf','asdf',NULL,'23:00:00');
/*!40000 ALTER TABLE `booking_schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `booking_tocs`
--

DROP TABLE IF EXISTS `booking_tocs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking_tocs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `booking_id` int DEFAULT NULL,
  `toc_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking_tocs`
--

LOCK TABLES `booking_tocs` WRITE;
/*!40000 ALTER TABLE `booking_tocs` DISABLE KEYS */;
INSERT INTO `booking_tocs` VALUES (1,1,1),(2,1,2),(3,2,1),(4,2,2),(5,3,1),(6,3,2),(7,4,2),(8,4,3),(9,4,8),(10,5,2),(11,5,3),(12,5,8),(13,6,2),(14,6,3),(15,6,8),(16,7,1),(17,7,2),(18,7,3),(19,8,1),(20,8,2),(21,8,3),(22,9,1),(23,9,2),(24,9,3),(25,10,1),(26,10,2),(27,10,3),(30,11,1),(31,11,2),(35,12,1),(36,12,2),(37,12,3),(38,13,1),(39,13,8);
/*!40000 ALTER TABLE `booking_tocs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `booking_transportation`
--

DROP TABLE IF EXISTS `booking_transportation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking_transportation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `booking_id` int DEFAULT NULL,
  `transportation_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking_transportation`
--

LOCK TABLES `booking_transportation` WRITE;
/*!40000 ALTER TABLE `booking_transportation` DISABLE KEYS */;
INSERT INTO `booking_transportation` VALUES (1,11,4),(2,11,5),(3,11,1),(4,11,2),(5,12,1),(6,12,2),(7,12,3),(8,12,1),(9,12,2),(10,12,3),(11,13,1),(12,13,8);
/*!40000 ALTER TABLE `booking_transportation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bookingoffers`
--

DROP TABLE IF EXISTS `bookingoffers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookingoffers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `bookingNo` varchar(45) DEFAULT NULL,
  `roomType` varchar(500) DEFAULT NULL,
  `nights` int DEFAULT NULL,
  `hotel` varchar(500) DEFAULT NULL,
  `destinationTo` varchar(500) DEFAULT NULL,
  `destinationFrom` varchar(500) DEFAULT NULL,
  `destinationName` varchar(500) DEFAULT NULL,
  `isDeleted` bit(1) DEFAULT b'0',
  `flightTo` varchar(500) DEFAULT NULL,
  `flightFrom` varchar(45) DEFAULT NULL,
  `flightDateFrom` varchar(500) DEFAULT NULL,
  `flightDateTo` varchar(500) DEFAULT NULL,
  `bookingid` int DEFAULT NULL,
  `flightPrice` decimal(12,2) DEFAULT NULL,
  `priceCurrency` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookingoffers`
--

LOCK TABLES `bookingoffers` WRITE;
/*!40000 ALTER TABLE `bookingoffers` DISABLE KEYS */;
INSERT INTO `bookingoffers` VALUES (1,'123','8',1,'15','07/13/2023','07/13/2023','8',_binary '\0','123','123','07/13/2023','07/13/2023',1,123.00,NULL),(2,'123','8',1,'15','07/13/2023','07/13/2023','8',_binary '\0','123','123','07/13/2023','07/13/2023',2,123.00,NULL),(3,'123','8',123,'15','07/13/2023','07/13/2023','8',_binary '\0','123','123','07/13/2023','07/13/2023',3,123.00,NULL),(4,'123','8',123,'15','07/13/2023','07/13/2023','8',_binary '\0','123','12','07/13/2023','07/13/2023',4,123.00,NULL),(5,'123','8',123,'15','07/13/2023','07/13/2023','8',_binary '\0','123','12','07/13/2023','07/13/2023',5,123.00,NULL),(6,'123','8',123,'15','07/13/2023','07/13/2023','8',_binary '\0','123','12','07/13/2023','07/13/2023',6,123.00,NULL),(7,'123','8',123,'15','07/16/2023','07/16/2023','8',_binary '\0','123','123','07/16/2023','07/16/2023',7,123.00,NULL),(8,'123','8',123,'15','07/16/2023','07/16/2023','8',_binary '\0','123','123','07/16/2023','07/16/2023',8,123.00,NULL),(9,'123','8',123,'15','07/16/2023','07/16/2023','8',_binary '\0','123','123','07/16/2023','07/16/2023',9,123.00,NULL),(10,'123','8',123,'15','07/16/2023','07/16/2023','8',_binary '\0','123','123','07/16/2023','07/16/2023',10,123.00,NULL);
/*!40000 ALTER TABLE `bookingoffers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `currency`
--

DROP TABLE IF EXISTS `currency`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `currency` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(500) DEFAULT NULL,
  `code` varchar(45) DEFAULT NULL,
  `isDefault` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `currency`
--

LOCK TABLES `currency` WRITE;
/*!40000 ALTER TABLE `currency` DISABLE KEYS */;
INSERT INTO `currency` VALUES (6,'United Arab Emirates Dirham','AED',NULL),(7,'United States Dollar','USD',NULL),(8,'Pakistan Rupee','PKR',NULL);
/*!40000 ALTER TABLE `currency` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `currencyexchange`
--

DROP TABLE IF EXISTS `currencyexchange`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `currencyexchange` (
  `id` int NOT NULL AUTO_INCREMENT,
  `currencyFrom` int DEFAULT NULL,
  `currencyTo` int DEFAULT NULL,
  `currencyFromValue` decimal(12,2) DEFAULT NULL,
  `currencyToValue` decimal(12,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `currencyexchange`
--

LOCK TABLES `currencyexchange` WRITE;
/*!40000 ALTER TABLE `currencyexchange` DISABLE KEYS */;
INSERT INTO `currencyexchange` VALUES (1,6,7,1.00,0.27),(2,7,6,1.00,27.00);
/*!40000 ALTER TABLE `currencyexchange` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `destinations`
--

DROP TABLE IF EXISTS `destinations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `destinations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `display` varchar(500) DEFAULT NULL,
  `file` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `destinations`
--

LOCK TABLES `destinations` WRITE;
/*!40000 ALTER TABLE `destinations` DISABLE KEYS */;
INSERT INTO `destinations` VALUES (8,'Bali','/avatars/D84C2B298E41001.png'),(10,'Jakarta','/avatars/AA294BE48CB7eca740.png');
/*!40000 ALTER TABLE `destinations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `features`
--

DROP TABLE IF EXISTS `features`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `features` (
  `id` int NOT NULL AUTO_INCREMENT,
  `display` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `features`
--

LOCK TABLES `features` WRITE;
/*!40000 ALTER TABLE `features` DISABLE KEYS */;
INSERT INTO `features` VALUES (2,'Free wifi'),(3,'Kitchen'),(4,'Private hot tub'),(5,'Central air conditioning'),(6,'Backyard'),(7,'Hair dryer'),(8,'Fire pit'),(9,'Indoor fireplace: gas'),(10,'Private patio or balcony'),(11,'TV'),(12,'Free parking on premises ');
/*!40000 ALTER TABLE `features` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotel`
--

DROP TABLE IF EXISTS `hotel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotel` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(500) DEFAULT NULL,
  `location` varchar(500) DEFAULT NULL,
  `isDeleted` bit(1) DEFAULT b'0',
  `file` varchar(500) DEFAULT NULL,
  `price` decimal(12,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotel`
--

LOCK TABLES `hotel` WRITE;
/*!40000 ALTER TABLE `hotel` DISABLE KEYS */;
INSERT INTO `hotel` VALUES (15,'test hotel name test de hotel name test name of hotel','8',_binary '\0','/avatars/6372BFE5803Csohaib.png',601.00),(16,'Test','8',_binary '\0','/avatars/650160074481serena.jpg',10.00);
/*!40000 ALTER TABLE `hotel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roomtypes`
--

DROP TABLE IF EXISTS `roomtypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roomtypes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `display` varchar(500) DEFAULT NULL,
  `isDeleted` bit(1) DEFAULT b'0',
  `file` varchar(500) DEFAULT NULL,
  `description` varchar(1500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roomtypes`
--

LOCK TABLES `roomtypes` WRITE;
/*!40000 ALTER TABLE `roomtypes` DISABLE KEYS */;
INSERT INTO `roomtypes` VALUES (8,'test',_binary '\0','/avatars/6C5996DE288Asohaib.png','123456'),(9,'Abc',_binary '\0','/avatars/0A9B57FA5A1EMighty-post.jpg','sdfgsdf');
/*!40000 ALTER TABLE `roomtypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `termsandcondition`
--

DROP TABLE IF EXISTS `termsandcondition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `termsandcondition` (
  `id` int NOT NULL AUTO_INCREMENT,
  `termsAndCondition` varchar(5000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `termsandcondition`
--

LOCK TABLES `termsandcondition` WRITE;
/*!40000 ALTER TABLE `termsandcondition` DISABLE KEYS */;
INSERT INTO `termsandcondition` VALUES (1,'Lorem Ipsum is simply dummy text of the printing and typesetting industry'),(2,'Contrary to popular belief, Lorem Ipsum is not simply random text'),(3,'Lorem Ipsum is simply dummy text of the printing and typesetting industry'),(8,'Contrary to popular belief, Lorem Ipsum is not simply random text');
/*!40000 ALTER TABLE `termsandcondition` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transportation`
--

DROP TABLE IF EXISTS `transportation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transportation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(1000) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `isDeleted` bit(1) DEFAULT NULL,
  `currency` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transportation`
--

LOCK TABLES `transportation` WRITE;
/*!40000 ALTER TABLE `transportation` DISABLE KEYS */;
INSERT INTO `transportation` VALUES (1,NULL,NULL,_binary '',NULL),(2,NULL,NULL,_binary '',NULL),(3,'sdfasdfads',100.00,_binary '',NULL),(4,'sdgfsdg',100.00,NULL,NULL),(5,'asdfasd',1.00,NULL,'USD'),(6,'sdfgsfd',1.00,NULL,'PKR'),(7,'fdsgsfd',90.00,NULL,'AED');
/*!40000 ALTER TABLE `transportation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(500) DEFAULT NULL,
  `lastName` varchar(500) DEFAULT NULL,
  `userName` varchar(500) DEFAULT NULL,
  `email` varchar(500) DEFAULT NULL,
  `password` varchar(500) DEFAULT NULL,
  `isDeleted` bit(1) DEFAULT NULL,
  `userType` int DEFAULT NULL,
  `photo` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Admin','Admin','admin','admin@example.com','$2b$10$GWoK1WDbpanJW0tzwD4bXufAkKIPX7RKbost67620xl9Yx5kJ1Wui',NULL,1,'/avatars/E7E02CD73B3BScreenshot_2.png'),(8,'Agentindo','VIP','agentvip','agentvip@gmail.com','$2b$10$orePTMxqHLQX99jK2Q0zZOeax3ROXpwdmBH1TFkLXvYJicmB9f2mq',_binary '\0',3,'/avatars/372EFED77219sohaib.png'),(9,'User','CO','usertest','usertest@email.com','$2b$10$b26q91j6/tjEfYIuY6a1M.ww4M.BPJgZ9I/cg62EVeLcLJ2H5ICmm',_binary '\0',2,'/avatars/932154A0B5A4maxresdefault (1).jpg'),(10,'test','test','test','test@gmail.com','$2b$10$VwV/Xikn.OgpPM5ar9OFJe7.6Ns1hdE4XtL3DBwLBYcNHjqPF0RyC',_binary '\0',4,'/avatars/27C3E7961607sohaib.png'),(11,'Agent','Test','Agent','agent@ex.com','$2b$10$PmVUdM7.Vu/6vJu.mHoGQe9.jAOwwjPWME6KSE/eq1nCrqwTKC8Wa',_binary '\0',3,'/avatars/D4B02E394B6Echampion.jpg'),(12,'Staff','2','staff2','staff2@example.com','$2b$10$uNCEDiIEBC7ctmkO24UDhu8ZzFkDKGWBvIdSO2ZXvK6VHXbZpHfbS',_binary '\0',4,'/avatars/E3259F7EF3BAdefault.png');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usetypes`
--

DROP TABLE IF EXISTS `usetypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usetypes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usetypes`
--

LOCK TABLES `usetypes` WRITE;
/*!40000 ALTER TABLE `usetypes` DISABLE KEYS */;
INSERT INTO `usetypes` VALUES (1,'admin'),(2,'user'),(3,'agent'),(4,'staff');
/*!40000 ALTER TABLE `usetypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'pdfproject'
--
/*!50003 DROP PROCEDURE IF EXISTS `add_transportation` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `add_transportation`(
in _description varchar(1000),
in _price decimal(10,8),
in _currency varchar(45)
)
BEGIN
insert into transportation(`description`,price,currency)values(_description,_price,_currency);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `delete_transportation` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `delete_transportation`(
in _id int
)
BEGIN
update transportation set `isDeleted`= 1 where id = _id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_booking` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_booking`()
BEGIN
select *,
(select concat(users.firstName,' ',users.lastName) from users where users.id = booking.agentName) agentFullName, 
(select concat(users.id) from users where users.id = booking.agentName) agentId, 
(select concat(users.firstName,' ',users.lastName) from users where users.id = booking.staffName) staffFulName,
(select concat(users.id) from users where users.id = booking.staffName) staffId from booking where ifnull(isDeleted,0)=0;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_booking_by` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_booking_by`( in _id int)
BEGIN
-- select *,(select photo from users where users.id = booking.agentName limit 1) photo from booking where ifnull(isDeleted,0)=0 and id = _id;

select id, (select concat(users.firstName,' ',users.lastName) from users where users.id = booking.agentName limit 1) agentName,
(select concat(users.id) from users where users.id = booking.agentName limit 1) agentId,
(select concat(users.firstName,' ',users.lastName) from users where users.id = booking.staffName limit 1) staffName, 
(select concat(users.id) from users where users.id = booking.staffName limit 1) staffId, 
`date`, orderNo, passengers, nights, departure, arrival, customerName, isDeleted,  price, discount, extraCharges, totalPrice,currency, 
(select photo from users where users.id = booking.agentName limit 1) photo,
guestType,
transportationPrice
from booking where ifnull(isDeleted,0)=0 and id = _id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_booking_by_id` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_booking_by_id`(in _id int)
BEGIN
-- select * from bookingoffers where ifnull(isDeleted,0)=0 and bookingid = _id;
select id, bookingNo, 
(select display from roomTypes where roomTypes.id = bookingoffers.roomType) roomType, 
(select roomTypes.id from roomTypes where roomTypes.id = bookingoffers.roomType) roomTypeId, 
nights, 
(select `name` from hotel where id = bookingoffers.hotel) hotel,
(select hotel.id from hotel where id = bookingoffers.hotel) hotelId,
destinationTo, destinationFrom, 
(select display from destinations where destinations.id = bookingoffers.destinationName) destinationName, 
(select destinations.id from destinations where destinations.id = bookingoffers.destinationName) destinationId, 
isDeleted, flightTo, flightFrom, flightDateFrom, flightDateTo, bookingid, flightPrice 

from bookingoffers where ifnull(isDeleted,0)=0 and bookingid = _id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_exchange_rates` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_exchange_rates`()
BEGIN
select *,
(select `name` from currency where id = currencyFrom) currencyFromName,
(select `code` from currency where id = currencyFrom) currencyFromCode,
(select `name` from currency where id = currencyTo) currencyToName,
(select `code` from currency where id = currencyTo) currencyToCode
 from currencyexchange;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_stats` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_stats`(
in _start_date datetime,
in _last_date datetime
)
BEGIN

drop table if exists the_temp_table;
create temporary table the_temp_table 
select *,concat(month(str_to_date(`date`,'%m/%d/%Y')),'/' ,year(str_to_date(`date`,'%m/%d/%Y'))) as `month`, year(str_to_date(`date`,'%m/%d/%Y')) as year from booking
where str_to_date(`date`,'%m/%d/%Y') between _start_date and _last_date;


select 
sum(totalPrice) as totalPrice,
(select concat(firstName,' ',lastName) from users where id = staffName) as staff, 
`month`
from 
the_temp_table 
group by `month`,staffName;



select 
sum(totalPrice) as totalPrice,
(select concat(firstName,' ',lastName) from users where id = agentName) as agent, 
`month`

from 
the_temp_table
group by `month`,staffName;

select 
sum(totalPrice) as totalPrice,
`month`
from 
the_temp_table
group by `month`,staffName;






select 
sum(totalPrice) as totalPrice,
(select concat(firstName,' ',lastName) from users where id = agentName) as staff, 
`year`
from 
the_temp_table
group by `year`,agentName;

select 
sum(totalPrice) as totalPrice,
(select concat(firstName,' ',lastName) from users where id = agentName) as agent, 
`year`
from 
the_temp_table
group by `year`,agentName;

select 
sum(totalPrice) as totalPrice,
`year`
from 
the_temp_table
group by `year`;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_transportation` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_transportation`()
BEGIN
select * from transportation where ifnull(isDeleted,0) = 0;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `new_procedure` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `new_procedure`(
in _id int,
in _description varchar(1000),
in _price decimal(10,8)
)
BEGIN
update transportation set `description`=_description,price = _price where id = _id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_add_user` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_add_user`(
in _firstName varchar(500),
in _lastName varchar(500),
in _username varchar(500),
in _email varchar(500),
in _userType int,
in _password varchar(500),
in _photo varchar(500)
)
BEGIN
INSERT INTO `users`
(`firstName`,`lastName`,`userName`,`email`,`password`,`isDeleted`,`userType`,`photo`)
VALUES
(_firstName,
_lastName,
_username,
_email,
_password,
0,
_userType,_photo);

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_CreateCurrency` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_CreateCurrency`(
    IN p_name VARCHAR(500),
    IN p_code VARCHAR(45)
)
BEGIN
    INSERT INTO currency (name, code)
    VALUES (p_name, p_code);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_CreateCurrencyExchange` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_CreateCurrencyExchange`(
    IN p_currencyFrom INT,
    IN p_currencyTo INT,
    IN p_currencyFromValue DECIMAL(12,2),
    IN p_currencyToValue DECIMAL(12,2)
)
BEGIN
    INSERT INTO currencyexchange (currencyFrom, currencyTo, currencyFromValue, currencyToValue)
    VALUES (p_currencyFrom, p_currencyTo, p_currencyFromValue, p_currencyToValue);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_create_booking` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_create_booking`(
in _agentName varchar(500),
in _staffName varchar(500),
in _date varchar(500),
in _orderNo varchar(500),
in _passengers int,
in _nights int,
in _departure varchar(500),
in _arrival varchar(500),
in _customerName varchar(500),
in _price decimal(12,2),
in _discount decimal(12,2),
in _extraCharges decimal(12,2),
in _totalPrice decimal(12,2),
in _currency varchar(45),
in _guestType varchar(50),
in _transportationPrice decimal(12,2)
)
BEGIN
INSERT INTO `booking`
(`agentName`,`date`,`orderNo`,`passengers`,`nights`,`departure`,`arrival`,`customerName`,`staffName`,`price`, `discount`, `extraCharges`, `totalPrice`,`currency`,`guestType`,`transportationPrice`)
VALUES
(_agentName,_date,_orderNo,_passengers,_nights,_departure,_arrival,_customerName,_staffName,_price,_discount,_extraCharges,_totalPrice,_currency,_guestType,_transportationPrice);
select last_insert_id() as id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_DeleteCurrency` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_DeleteCurrency`(
    IN p_id INT
)
BEGIN
    DELETE FROM currency
    WHERE id = p_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_DeleteCurrencyExchange` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_DeleteCurrencyExchange`(
    IN p_id INT
)
BEGIN
    DELETE FROM currencyexchange
    WHERE id = p_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_GetAllCurrencies` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_GetAllCurrencies`()
BEGIN
    SELECT id, name, code, isDefault
    FROM currency;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_GetAllCurrencyExchanges` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_GetAllCurrencyExchanges`()
BEGIN
    -- SELECT id, currencyFrom, currencyTo, currencyFromValue, currencyToValue
    -- FROM currencyexchange;
    select *,
(select `name` from currency where id = currencyFrom) currencyFromName,
(select `code` from currency where id = currencyFrom) currencyFromCode,
(select `name` from currency where id = currencyTo) currencyToName,
(select `code` from currency where id = currencyTo) currencyToCode
 from currencyexchange;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_GetCurrencyById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_GetCurrencyById`(
    IN p_id INT
)
BEGIN
    SELECT id, name, code, isDefault
    FROM currency
    WHERE id = p_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_GetCurrencyExchangeById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_GetCurrencyExchangeById`(
    IN p_id INT
)
BEGIN
    SELECT id, currencyFrom, currencyTo, currencyFromValue, currencyToValue
    FROM currencyexchange
    WHERE id = p_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_get_hotels` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_get_hotels`(
in _id int
)
BEGIN
select * from hotel where location = _id and ifnull(isDeleted,0)=0;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_get_roomtypes` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_get_roomtypes`(
in _id int
)
BEGIN
select * from roomtypes
 where id in (SELECT roomTypeId FROM pdfproject.booking_rooms_types where bookingid = _id);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_get_users` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_get_users`()
BEGIN
select *,(select `name` from usetypes where usetypes.id = users.userType) userTypeText from users where ifnull(isDeleted,0)=0;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_get_user_by_email` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_get_user_by_email`(
in _text varchar(500)
)
BEGIN
select t1.*,t2.name as userTypeText from users t1 join usetypes t2 on t2.id = t1.userType  where (email = _text or username = _text) and ifnull(isDeleted,0)=0;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_UpdateCurrency` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_UpdateCurrency`(
    IN p_id INT,
    IN p_name VARCHAR(500),
    IN p_code VARCHAR(45)
)
BEGIN
    UPDATE currency
    SET name = p_name,
        code = p_code
    WHERE id = p_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_UpdateCurrencyExchange` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_UpdateCurrencyExchange`(
    IN p_id INT,
    IN p_currencyFrom INT,
    IN p_currencyTo INT,
    IN p_currencyFromValue DECIMAL(12,2),
    IN p_currencyToValue DECIMAL(12,2)
)
BEGIN
    UPDATE currencyexchange
    SET currencyFrom = p_currencyFrom,
        currencyTo = p_currencyTo,
        currencyFromValue = p_currencyFromValue,
        currencyToValue = p_currencyToValue
    WHERE id = p_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_update_booking` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_update_booking`(
in _id int,
in _agentName varchar(500),
in _staffName varchar(500),
in _date varchar(500),
in _orderNo varchar(500),
in _passengers int,
in _nights int,
in _departure varchar(500),
in _arrival varchar(500),
in _customerName varchar(500),
in _price decimal(12,2),
in _discount decimal(12,2),
in _extraCharges decimal(12,2),
in _totalPrice decimal(12,2),
in _guestType varchar(50),
in _transportationPrice decimal(12,2)
)
BEGIN
UPDATE `booking` SET
`agentName`=_agentName,
`date`=_date,
`orderNo`=_orderNo,
`passengers`=_passengers,
`nights`=_nights,
`departure`=_departure,
`arrival`=_arrival,
`customerName`=_customerName,
`staffName`=_staffName,
`price`=_price,
`discount` = _discount,
`extraCharges`=_extraCharges,
`totalPrice` =_totalPrice,
`guestType`=_guestType,
`transportationPrice`=_transportationPrice
WHERE id = _id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `update_transportation` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `update_transportation`(
in _id int,
in _description varchar(1000),
in _price decimal(10,8),
in _currency varchar(45)
)
BEGIN
update transportation set `description`=_description,price = _price,currency = _currency where id = _id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-27 19:19:11



ALTER TABLE `pdfproject`.`hotel` 
ADD COLUMN `address` VARCHAR(500) NULL AFTER `price`;



USE `pdfproject`;
DROP procedure IF EXISTS `get_booking_by_id`;

USE `pdfproject`;
DROP procedure IF EXISTS `pdfproject`.`get_booking_by_id`;
;

DELIMITER $$
USE `pdfproject`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_booking_by_id`(in _id int)
BEGIN
-- select * from bookingoffers where ifnull(isDeleted,0)=0 and bookingid = _id;
select id, bookingNo, 
(select display from roomtypes where roomtypes.id = bookingoffers.roomType) roomType, 
(select roomtypes.id from roomtypes where roomtypes.id = bookingoffers.roomType) roomTypeId, 
nights, 
(select `name` from hotel where id = bookingoffers.hotel) hotel,
(select `address` from hotel where id = bookingoffers.hotel) hotelAddress,
(select hotel.id from hotel where id = bookingoffers.hotel) hotelId,
destinationTo, destinationFrom, 
(select display from destinations where destinations.id = bookingoffers.destinationName) destinationName, 
(select destinations.id from destinations where destinations.id = bookingoffers.destinationName) destinationId, 
isDeleted, flightTo, flightFrom, flightDateFrom, flightDateTo, bookingid, flightPrice 

from bookingoffers where ifnull(isDeleted,0)=0 and bookingid = _id;
END$$

DELIMITER ;
;

