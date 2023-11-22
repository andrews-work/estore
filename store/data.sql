-- MySQL dump 10.13  Distrib 8.1.0, for macos12.6 (x86_64)
--
-- Host: localhost    Database: estore
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text,
  `price` decimal(10,2) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `stripe_product_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES 
(1,'Pants 1','Description of pants 1',29.99,'pants_image1.jpg','pants','Tom','prod_P2q0dzjuvPeZFg'),
(2,'Pants 2','Description of pants 2',34.99,'pants_image2.jpg','pants','Bob','prod_P2q0pdXlEIj25Z'),
(3,'Pants 3','Description of pants 3',39.99,'pants_image3.jpg','pants','Alice','prod_P2q0SiLeCUNHfa'),
(4,'Pants 4','Description of pants 4',44.99,'pants_image4.jpg','pants','Charlie','prod_P2q0EvoNBbyIJL'),
(5,'Pants 5','Description of pants 5',49.99,'pants_image5.jpg','pants','Eve','prod_P2q0Zy0cZmNuEM'),
(6,'Pants 6','Description of pants 6',54.99,'pants_image6.jpg','pants','Frank','prod_P2q05V47UwzAWg'),
(7,'Pants 7','Description of pants 7',59.99,'pants_image7.jpg','pants','Grace','prod_P2q03Ra0KsOx9y'),
(8,'Pants 8','Description of pants 8',64.99,'pants_image8.jpg','pants','Henry','prod_P2q0hQWZLXgDHY'),
(9,'Pants 9','Description of pants 9',69.99,'pants_image9.jpg','pants','Ivy','prod_P2q01veAdYAWuJ'),
(10,'Pants 10','Description of pants 10',74.99,'pants_image10.jpg','pants','Jack','prod_P2q0IhR1VTvKL5'),

(11,'Shirt 1','Description of shirt 1',19.99,'shirt_image1.jpg','shirts','Tom','prod_P2q0fJaSznS7cB'),
(12,'Shirt 2','Description of shirt 2',24.99,'shirt_image2.jpg','shirts','Bob','prod_P2q0g8kjDRBohR'),
(13,'Shirt 3','Description of shirt 3',29.99,'shirt_image3.jpg','shirts','Alice','prod_P2q0Ca78Vsn165'),
(14,'Shirt 4','Description of shirt 4',34.99,'shirt_image4.jpg','shirts','Charlie','prod_P2q0oUsUCbxkdZ'),
(15,'Shirt 5','Description of shirt 5',39.99,'shirt_image5.jpg','shirts','Eve','prod_P2q0NmhCfHIlZa'),
(16,'Shirt 6','Description of shirt 6',44.99,'shirt_image6.jpg','shirts','Frank','prod_P2q01z3XHmHmFe'),
(17,'Shirt 7','Description of shirt 7',49.99,'shirt_image7.jpg','shirts','Grace','prod_P2q0iC2PtyEzbT'),
(18,'Shirt 8','Description of shirt 8',54.99,'shirt_image8.jpg','shirts','Henry','prod_P2q0DRm635lhJp'),
(19,'Shirt 9','Description of shirt 9',59.99,'shirt_image9.jpg','shirts','Ivy','prod_P2q0sfuI9RTMRE'),
(20,'Shirt 10','Description of shirt 10',64.99,'shirt_image10.jpg','shirts','Jack','prod_P2q0s2n90HOKPr'),

(21,'Shoes 1','Description of shoes 1',39.99,'shoes_image1.jpg','shoes','Eve','prod_P2q0Dc5WRAx3sT'),
(22,'Shoes 2','Description of shoes 2',44.99,'shoes_image2.jpg','shoes','Frank','prod_P2q02DxVgDeXnR'),
(23,'Shoes 3','Description of shoes 3',49.99,'shoes_image3.jpg','shoes','Alice','prod_P2q0eS418IsPjL'),
(24,'Shoes 4','Description of shoes 4',54.99,'shoes_image4.jpg','shoes','Charlie','prod_P2q0bR8236KVfO'),
(25,'Shoes 5','Description of shoes 5',59.99,'shoes_image5.jpg','shoes','Tom','prod_P2q0xnnUUg9ciW'),
(26,'Shoes 6','Description of shoes 6',64.99,'shoes_image6.jpg','shoes','Bob','prod_P2q0X3Za5i8RDH'),
(27,'Shoes 7','Description of shoes 7',69.99,'shoes_image7.jpg','shoes','Grace','prod_P2q0l5h9t3vpHd'),
(28,'Shoes 8','Description of shoes 8',74.99,'shoes_image8.jpg','shoes','Henry','prod_P2q0QWFTGTTVm0'),
(29,'Shoes 9','Description of shoes 9',79.99,'shoes_image9.jpg','shoes','Ivy','prod_P2q0BJMw57zR2D'),
(30,'Shoes 10','Description of shoes 10',84.99,'shoes_image10.jpg','shoes','Jack','prod_P2q0B1hSBeuaDr'),

(31,'Hat 1','Description of hat 1',14.99,'hat_image1.jpg','hats','Grace','prod_P2q0vGy9BIS9vM'),
(32,'Hat 2','Description of hat 2',19.99,'hat_image2.jpg','hats','Henry','prod_P2q0lv1hMKUaEH'),
(33,'Hat 3','Description of hat 3',24.99,'hat_image3.jpg','hats','Alice','prod_P2q0ZgznCDnmHr'),
(34,'Hat 4','Description of hat 4',29.99,'hat_image4.jpg','hats','Charlie','prod_P2q0CzRwxgJTUR'),
(35,'Hat 5','Description of hat 5',34.99,'hat_image5.jpg','hats','Eve','prod_P2q0NW6fNaZKPO'),
(36,'Hat 6','Description of hat 6',39.99,'hat_image6.jpg','hats','Frank','prod_P2q0gZFtE06t4P'),
(37,'Hat 7','Description of hat 7',44.99,'hat_image7.jpg','hats','Tom','prod_P2q0p4kfWzTgkR'),
(38,'Hat 8','Description of hat 8',49.99,'hat_image8.jpg','hats','Bob','prod_P2q04sDQ0DzgU5'),
(39,'Hat 9','Description of hat 9',54.99,'hat_image9.jpg','hats','Ivy','prod_P2q0PMvkrhqWxJ'),
(40,'Hat 10','Description of hat 10',59.99,'hat_image10.jpg','hats','Jack','prod_P2q0DHV9kgt5De');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-21 14:34:11
