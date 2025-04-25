CREATE DATABASE  IF NOT EXISTS `ithelpdesk` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ithelpdesk`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: ithelpdesk
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `CustomerID` int unsigned NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(15) NOT NULL,
  `LastName` varchar(30) NOT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Address` varchar(50) DEFAULT NULL,
  `City` varchar(25) DEFAULT NULL,
  `State` varchar(2) DEFAULT NULL,
  `Country` varchar(50) DEFAULT NULL,
  `ZipCode` int DEFAULT NULL,
  `PhoneNumber` varchar(15) DEFAULT NULL,
  `IssueDesc` varchar(50) DEFAULT NULL,
  `Notes` varchar(50) DEFAULT NULL,
  `TotalCost` decimal(4,2) DEFAULT NULL,
  PRIMARY KEY (`CustomerID`)
) ENGINE=InnoDB AUTO_INCREMENT=108 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (100,'John','Smith','jsmith@email.com','1234 Oak Rd','Eau Claire','WI','USA',54701,'715-855-5585',NULL,NULL,NULL),(101,'Frank','Johnson','fjohnshon@email.com','2345 Ash Rd','Eau Claire','WI','USA',54703,'715-855-6541',NULL,NULL,NULL),(102,'Jane','Oliver','joliver@email.com','2221 Dane Pl','Eau Claire','WI','USA',54703,'715-456-1234',NULL,NULL,NULL),(103,'Homer','Simpson','hsimpson@email.com','564 Blue Rd','Eau Claire','WI','USA',54701,'715-245-9856',NULL,NULL,NULL),(104,'Teresa','Green','tgreen@email.com','774 Owen St','Eau Claire','WI','USA',54701,'715-655-6932',NULL,NULL,NULL),(105,'Brett','Lane','blane@email.com','6477 Main St','Eau Claire','WI','USA',54703,'715-834-8255',NULL,NULL,NULL),(106,'Blake','Brown','bbrown@email.com','3354 Greenway St','Eau Clarie','WI','USA',54701,'715-954-6652',NULL,NULL,NULL),(107,'Anna','Frank','afrank@email.com','3784 Planet St','Eau Claire','WI','USA',54703,'715-896-5541',NULL,NULL,NULL);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `device`
--

DROP TABLE IF EXISTS `device`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `device` (
  `DeviceID` int unsigned NOT NULL AUTO_INCREMENT,
  `CustomerID` int unsigned NOT NULL,
  `DeviceMake` varchar(10) NOT NULL,
  `DeviceModel` varchar(10) DEFAULT NULL,
  `SerialNumber` varchar(25) DEFAULT NULL,
  `Description` varchar(50) DEFAULT NULL,
  `DeviceType` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`DeviceID`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `device`
--

LOCK TABLES `device` WRITE;
/*!40000 ALTER TABLE `device` DISABLE KEYS */;
INSERT INTO `device` VALUES (1,8,'Dell','61153','530866181',NULL,'Tablet'),(2,4,'Acer','48709','555824069',NULL,'Printer'),(3,9,'Acer','10949','642272118',NULL,'Printer'),(4,5,'HP','57463','47292436',NULL,'Computer'),(5,4,'Apple','67400','285599004',NULL,'Printer'),(6,2,'Microsoft','16927','319269553',NULL,'Tablet'),(7,2,'Sony','72998','267087252',NULL,'Tablet'),(8,2,'Asus','90508','572374682',NULL,'Printer'),(9,8,'Microsoft','35889','967299181',NULL,'Tablet'),(10,3,'Sony','59880','603636725',NULL,'Printer'),(11,9,'Lenovo','19229','901727662',NULL,'Router'),(12,6,'HP','61536','696743978',NULL,'Computer'),(13,6,'HP','74097','561995530',NULL,'Computer'),(14,1,'Lenovo','45796','881450983',NULL,'Computer'),(15,1,'Lenovo','94516','377371389',NULL,'Computer'),(16,2,'Microsoft','97965','605244122',NULL,'Router'),(17,7,'Microsoft','71210','159633148',NULL,'Tablet'),(18,8,'Dell','71633','193167081',NULL,'Tablet'),(19,6,'Acer','55482','849904156',NULL,'Tablet'),(20,6,'Lenovo','57661','57150258',NULL,'Monitor'),(21,6,'Asus','59317','479583099',NULL,'Monitor'),(22,5,'Acer','76266','155985218',NULL,'Computer'),(23,5,'HP','26807','650289174',NULL,'Tablet'),(24,7,'Lenovo','9491','406050423',NULL,'Monitor'),(25,5,'Acer','71331','119351037',NULL,'Monitor'),(26,8,'Apple','34145','775099359',NULL,'Tablet'),(27,6,'HP','72604','157798810',NULL,'Tablet'),(28,5,'Acer','39036','727993448',NULL,'Monitor'),(29,6,'Dell','81063','195265440',NULL,'Tablet'),(30,6,'Lenovo','54059','831432504',NULL,'Monitor'),(31,9,'Asus','52686','306338649',NULL,'Monitor'),(32,8,'Sony','21535','294945857',NULL,'Printer'),(33,8,'Apple','38671','789709527',NULL,'Computer'),(34,6,'Sony','91463','865304663',NULL,'Router'),(35,9,'Lenovo','19950','909321456',NULL,'Tablet'),(36,3,'Apple','13267','131038394',NULL,'Printer'),(37,3,'HP','35551','58483375',NULL,'Tablet'),(38,3,'Asus','23134','992681403',NULL,'Tablet'),(39,2,'Dell','77972','305978571',NULL,'Computer'),(40,4,'Acer','32057','459442207',NULL,'Computer'),(41,4,'Asus','79234','946045240',NULL,'Computer'),(42,3,'Asus','35390','53897208',NULL,'Printer'),(43,4,'HP','13200','748877144',NULL,'Monitor'),(44,6,'Asus','56881','467469523',NULL,'Router'),(45,2,'Dell','32636','14326888',NULL,'Printer'),(46,7,'Sony','28523','517327396',NULL,'Monitor'),(47,4,'Asus','3100','899528871',NULL,'Monitor'),(48,4,'Dell','64976','662716108',NULL,'Tablet'),(49,3,'Sony','64012','224052231',NULL,'Tablet'),(50,3,'Acer','41484','99592285',NULL,'Tablet'),(51,8,'Lenovo','64155','735563128',NULL,'Computer'),(52,5,'HP','92427','242132659',NULL,'Router'),(53,9,'HP','58942','732506567',NULL,'Printer'),(54,3,'Dell','51170','356139534',NULL,'Tablet'),(55,9,'Apple','45845','448369906',NULL,'Monitor'),(56,2,'Dell','13208','113878962',NULL,'Tablet'),(57,4,'Acer','87259','198406918',NULL,'Monitor'),(58,2,'Asus','4088','456716421',NULL,'Printer'),(59,8,'Lenovo','17483','67938404',NULL,'Router'),(60,2,'Acer','56399','575019508',NULL,'Monitor'),(61,1,'Apple','52636','930873383',NULL,'Printer'),(62,6,'Lenovo','100555','517443175',NULL,'Printer'),(63,2,'Microsoft','39868','471869276',NULL,'Computer'),(64,8,'Acer','82652','650524119',NULL,'Monitor'),(65,2,'HP','30147','617531699',NULL,'Printer'),(66,7,'Acer','46612','8254862',NULL,'Router'),(67,6,'Acer','11012','588919368',NULL,'Printer'),(68,6,'Apple','89339','648693427',NULL,'Printer'),(69,3,'Microsoft','2772','670445975',NULL,'Router'),(70,3,'Apple','48853','136823408',NULL,'Printer'),(71,9,'Dell','89292','910405421',NULL,'Computer'),(72,7,'Microsoft','21188','72712058',NULL,'Router'),(73,2,'Asus','51165','129341143',NULL,'Computer'),(74,8,'Microsoft','35645','175976602',NULL,'Tablet'),(75,6,'Asus','87448','841997826',NULL,'Monitor'),(76,7,'Microsoft','44742','415434290',NULL,'Router'),(77,5,'HP','69524','913767235',NULL,'Router'),(78,5,'Lenovo','68606','299448548',NULL,'Tablet'),(79,5,'Dell','75226','548349717',NULL,'Computer'),(80,8,'Lenovo','58455','913484806',NULL,'Tablet'),(81,1,'Asus','100747','611813338',NULL,'Computer'),(82,7,'Lenovo','13936','21196906',NULL,'Printer'),(83,9,'Dell','82171','887815999',NULL,'Tablet'),(84,6,'Sony','83385','11960912',NULL,'Tablet'),(85,1,'Apple','43499','70258666',NULL,'Router'),(86,4,'HP','43705','526166138',NULL,'Tablet'),(87,2,'Sony','30177','215919933',NULL,'Computer'),(88,4,'Microsoft','26564','36954423',NULL,'Router'),(89,6,'Sony','61640','491311360',NULL,'Router'),(90,8,'Microsoft','89807','306291400',NULL,'Printer'),(91,7,'Apple','65638','943418888',NULL,'Monitor'),(92,5,'Dell','55460','34005828',NULL,'Computer'),(93,6,'Acer','86830','432793966',NULL,'Printer'),(94,1,'Microsoft','82206','104436145',NULL,'Printer'),(95,2,'Microsoft','65604','629147634',NULL,'Computer'),(96,6,'Acer','84696','821110291',NULL,'Tablet'),(97,2,'Apple','44350','501454335',NULL,'Monitor'),(98,5,'Microsoft','89636','23980368',NULL,'Tablet'),(99,4,'Microsoft','88077','3382260',NULL,'Tablet'),(100,6,'HP','76567','366310521',NULL,'Monitor');
/*!40000 ALTER TABLE `device` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service`
--

DROP TABLE IF EXISTS `service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service` (
  `ServiceID` int unsigned NOT NULL AUTO_INCREMENT,
  `Description` varchar(50) DEFAULT NULL,
  `ServiceCost` decimal(6,2) DEFAULT NULL,
  `ServiceTime` time DEFAULT NULL,
  PRIMARY KEY (`ServiceID`)
) ENGINE=InnoDB AUTO_INCREMENT=120 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service`
--

LOCK TABLES `service` WRITE;
/*!40000 ALTER TABLE `service` DISABLE KEYS */;
INSERT INTO `service` VALUES (1,'Cracked Screen',70.00,'01:00:00'),(2,'Dead Battery',25.00,'00:05:00'),(3,'Motherboard replacement',100.00,'01:20:00'),(4,'Lamp bulb replacement',15.00,'00:20:00'),(5,'Reset wifi router',30.00,'00:30:00'),(6,'Virus Removal',80.00,'01:20:00');
/*!40000 ALTER TABLE `service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicerequest`
--

DROP TABLE IF EXISTS `servicerequest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicerequest` (
  `RequestID` int unsigned NOT NULL AUTO_INCREMENT,
  `CustomerID` int unsigned NOT NULL,
  `TechnicianID` int unsigned NOT NULL,
  `DeviceID` int unsigned NOT NULL,
  `ServiceID` int unsigned NOT NULL,
  `CreatedDate` datetime DEFAULT NULL,
  `ClosedDate` datetime DEFAULT NULL,
  `Notes` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`RequestID`)
) ENGINE=InnoDB AUTO_INCREMENT=110 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicerequest`
--

LOCK TABLES `servicerequest` WRITE;
/*!40000 ALTER TABLE `servicerequest` DISABLE KEYS */;
INSERT INTO `servicerequest` VALUES (100,3,5,21,3,'2021-02-14 13:30:05','2024-06-14 13:30:05','Completed without issues'),(101,8,4,47,3,'2021-02-14 13:30:05','2024-06-14 13:30:05','Parts on backorder'),(102,4,4,32,2,'2021-02-14 13:30:05','2024-06-14 13:30:05','Completed without issues'),(103,7,3,24,5,'2021-02-14 13:30:05','2024-06-14 13:30:05','This is broken beyond repair'),(104,1,5,47,5,'2021-02-14 13:30:05','2024-06-14 13:30:05','Completed without issues'),(105,3,4,24,2,'2021-02-14 13:30:05','2024-06-14 13:30:05','Completed without issues'),(106,7,5,10,2,'2021-02-14 13:30:05','2024-06-14 13:30:05','Will need to order parts'),(107,1,3,12,4,'2021-02-14 13:30:05','2024-06-14 13:30:05','Parts on backorder'),(108,3,2,27,5,'2021-02-14 13:30:05','2024-06-14 13:30:05','Will need to talk to Customer. More repairs needed than original estimate'),(109,7,2,31,3,'2021-02-14 13:30:05','2024-06-14 13:30:05','Will need to talk to Customer. More repairs needed than original estimate');
/*!40000 ALTER TABLE `servicerequest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `technician`
--

DROP TABLE IF EXISTS `technician`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `technician` (
  `TechnicianID` int unsigned NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(15) NOT NULL,
  `LastName` varchar(30) NOT NULL,
  `Title` varchar(15) NOT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `PhoneNumber` varchar(15) DEFAULT NULL,
  `Salary` int DEFAULT NULL,
  PRIMARY KEY (`TechnicianID`)
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `technician`
--

LOCK TABLES `technician` WRITE;
/*!40000 ALTER TABLE `technician` DISABLE KEYS */;
INSERT INTO `technician` VALUES (100,'Joyce','Baker','Supervisor','jbaker@email.com','985-6584',80000),(101,'Andrew','Johnson','Lead Technician','ajohnson@email.com','123-548-5484',60000),(102,'Heather','Smith','Tech 2','hsmith@email.com','751-842-6512',55000),(103,'Paul','Pippins','Tech 1','ppippins@email.com','751-821-4512',48000),(104,'Natalie','Porters','Tech 1','nporters@email.com','654-854-9985',45000);
/*!40000 ALTER TABLE `technician` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'ithelpdesk'
--
/*!50003 DROP PROCEDURE IF EXISTS `GenData_Device` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GenData_Device`()
BEGIN
DECLARE loopCnt Integer;
DECLARE vDeviceType varchar(15);
DECLARE vSerialNumber varchar(25);
DECLARE vDeviceModel varchar(10);
DECLARE vDeviceMake varchar(10);
DECLARE tempValue1 INT;
DECLARE tempValue2 INT;
DECLARE vCustomerID INT;

SET loopCnt = 0;
mainLoop: WHILE loopCnt < 50 DO
	SET loopCnt = loopCnt + 1;

SET vDeviceModel = Floor(1000 + rand() * 100000);

SET vSerialNumber = Floor(1000000 + rand() * 1000000000);

SET vCustomerID = Floor(1 + rand()*9);

SET vDeviceType = Floor(1 + rand()*5);

SET tempValue1 = FLOOR(1 + RAND() * 5);
IF tempValue1 = 1 THEN
		SET vDeviceType = "Computer";
	ELSEIF tempValue1 = 2 THEN
		SET vDeviceType = "Printer";
	ELSEIF tempValue1 = 3 THEN
		SET vDeviceType = "Router";
	ELSEIF tempValue1 = 4 THEN
		SET vDeviceType = "Tablet";
    ELSEIF tempValue1 = 5 THEN
		SET vDeviceType = "Monitor";
END IF;

SET tempValue2 = FLOOR(1 + RAND() * 8);
IF tempValue2 = 1 THEN
		SET vDeviceMake = "HP";
	ELSEIF tempValue2 = 2 THEN
		SET vDeviceMake  = "Apple";
	ELSEIF tempValue2 = 3 THEN
		SET vDeviceMake  = "Dell";
	ELSEIF tempValue2 = 4 THEN
		SET vDeviceMake = "Lenovo";
    ELSEIF tempValue2 = 5 THEN
		SET vDeviceMake  = "Asus"; 
	ELSEIF tempValue2 = 6 THEN
		SET vDeviceMake  = "Sony";
	ELSEIF tempValue2 = 7 THEN
		SET vDeviceMake  = "Microsoft";
	ELSEIF tempValue2 = 8 THEN
		SET vDeviceMake  = "Acer";
END IF;

INSERT INTO `Device` (`CustomerID`, `DeviceMake`, `DeviceModel`, `SerialNumber`, `DeviceType`)
		VALUES		(vCustomerID,  vDeviceMake,   vDeviceModel,	vSerialNumber,  vDeviceType);

END WHILE;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GenData_ServiceRequest` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GenData_ServiceRequest`()
BEGIN

DECLARE loopCnt Integer;
DECLARE vCustomerID Integer;
DECLARE vTechnicianID Integer;
DECLARE vDeviceID Integer;
DECLARE vServiceID Integer;
DECLARE timeCreated DATETIME;
DECLARE timeClosed DATETIME;
DECLARE timeAt DATETIME;
DECLARE timeNow DATETIME;
DECLARE tempValue1 INT;
DECLARE vNotes VARCHAR(255);

SET loopCnt = 0;
mainLoop: WHILE loopCnt < 10 DO
	SET loopCnt = loopCnt + 1;


SET vCustomerID= Floor(1 + rand() * 8);

SET vTechnicianID= Floor(1 + rand() * 5);

SET vDeviceID= Floor(1 + rand() * 50);

SET vServiceID= Floor(1 + rand() * 6);

SET timeNow = Now();
  -- Use override timeNow for Database 1, set to start date of course
  -- Match timeAt in the GenData_StaticDates Stored Procedure also
  -- SET timeNow = "2023-10-23";
  SET timeCreated = ADDDATE(timeNow, INTERVAL -3 YEAR);
  SET timeClosed = ADDDATE(timeNow, INTERVAL 4 MONTH);
  SET timeAt = timeNow;
  
SET tempValue1 = FLOOR(1 + RAND() * 5);
IF tempValue1 = 1 THEN
		SET vNotes = "This is broken beyond repair";
	ELSEIF tempValue1 = 2 THEN
		SET vNotes = "Will need to order parts";
	ELSEIF tempValue1 = 3 THEN
		SET vNotes = "Parts on backorder";
	ELSEIF tempValue1 = 4 THEN
		SET vNotes = "Completed without issues";
    ELSEIF tempValue1 = 5 THEN
		SET vNotes = "Will need to talk to Customer. More repairs needed than original estimate";
END IF;




      
  INSERT INTO `servicerequest` (`CustomerID`, `TechnicianID`, `DeviceID`, `ServiceID`, `CreatedDate`, `ClosedDate`, `Notes`)
	VALUES                     (vCustomerID,    vTechnicianID,  vDeviceID, vServiceID,    timeCreated, timeClosed, vNotes);

END WHILE;  
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

-- Dump completed on 2024-02-14 13:35:22
