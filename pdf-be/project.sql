CREATE DATABASE  IF NOT EXISTS `pdfproject` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `pdfproject`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: pdfproject
-- ------------------------------------------------------
-- Server version	8.0.31

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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES (1,'8','07/13/2023','9a3Thsfv',1,1,'07/13/2023','07/13/2023','1',_binary '\0','10',847.00,0.00,0.00,847.00,'usd',NULL,'1',123.00),(2,'8','07/13/2023','9a3Thsfv',1,1,'07/13/2023','07/13/2023','1',_binary '\0','10',847.00,0.00,0.00,847.00,'usd',NULL,'1',123.00);
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking_features`
--

LOCK TABLES `booking_features` WRITE;
/*!40000 ALTER TABLE `booking_features` DISABLE KEYS */;
INSERT INTO `booking_features` VALUES (1,1,2),(2,1,3),(3,2,2),(4,2,3);
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking_tocs`
--

LOCK TABLES `booking_tocs` WRITE;
/*!40000 ALTER TABLE `booking_tocs` DISABLE KEYS */;
INSERT INTO `booking_tocs` VALUES (1,1,1),(2,1,2),(3,2,1),(4,2,2);
/*!40000 ALTER TABLE `booking_tocs` ENABLE KEYS */;
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookingoffers`
--

LOCK TABLES `bookingoffers` WRITE;
/*!40000 ALTER TABLE `bookingoffers` DISABLE KEYS */;
INSERT INTO `bookingoffers` VALUES (1,'123','8',1,'15','07/13/2023','07/13/2023','8',_binary '\0','123','123','07/13/2023','07/13/2023',1,123.00),(2,'123','8',1,'15','07/13/2023','07/13/2023','8',_binary '\0','123','123','07/13/2023','07/13/2023',2,123.00);
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `currency`
--

LOCK TABLES `currency` WRITE;
/*!40000 ALTER TABLE `currency` DISABLE KEYS */;
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
  `currencyFromValue` int DEFAULT NULL,
  `currencyToValue` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `currencyexchange`
--

LOCK TABLES `currencyexchange` WRITE;
/*!40000 ALTER TABLE `currencyexchange` DISABLE KEYS */;
INSERT INTO `currencyexchange` VALUES (1,2,3,1,286);
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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Admin','Admin','admin','admin@example.com','$2b$10$GWoK1WDbpanJW0tzwD4bXufAkKIPX7RKbost67620xl9Yx5kJ1Wui',NULL,1,'/avatars/E7E02CD73B3BScreenshot_2.png'),(8,'Agentindo','VIP','agentvip','agentvip@gmail.com','$2b$10$orePTMxqHLQX99jK2Q0zZOeax3ROXpwdmBH1TFkLXvYJicmB9f2mq',_binary '\0',3,'/avatars/372EFED77219sohaib.png'),(9,'User','CO','usertest','usertest@email.com','$2b$10$b26q91j6/tjEfYIuY6a1M.ww4M.BPJgZ9I/cg62EVeLcLJ2H5ICmm',_binary '\0',2,'/avatars/932154A0B5A4maxresdefault (1).jpg'),(10,'test','test','test','test@gmail.com','$2b$10$VwV/Xikn.OgpPM5ar9OFJe7.6Ns1hdE4XtL3DBwLBYcNHjqPF0RyC',_binary '\0',4,'/avatars/27C3E7961607sohaib.png'),(11,'Agent','Test','Agent','agent@ex.com','$2b$10$PmVUdM7.Vu/6vJu.mHoGQe9.jAOwwjPWME6KSE/eq1nCrqwTKC8Wa',_binary '\0',3,'/avatars/D4B02E394B6Echampion.jpg');
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
guestType 
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
isDeleted, flightTo, flightFrom, flightDateFrom, flightDateTo, bookingid 

from bookingoffers where ifnull(isDeleted,0)=0 and bookingid = _id;
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
/*!50003 DROP PROCEDURE IF EXISTS `sp_update_booking` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
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
in _totalPrice decimal(12,2)
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
`totalPrice` =_totalPrice

WHERE id = _id;
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

-- Dump completed on 2023-07-13  1:24:31
