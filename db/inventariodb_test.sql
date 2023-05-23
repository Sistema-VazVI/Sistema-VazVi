-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.30 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.4.0.6659
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para inventariodb_test
CREATE DATABASE IF NOT EXISTS `inventariodb_test` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `inventariodb_test`;

-- Volcando estructura para tabla inventariodb_test.brand
CREATE TABLE IF NOT EXISTS `brand` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `is_active` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla inventariodb_test.brand: ~2 rows (aproximadamente)
DELETE FROM `brand`;
INSERT INTO `brand` (`id`, `name`, `is_active`) VALUES
	(2, 'Prueba1', 1),
	(3, 'Prueba2', 1),
	(5, 'prueba toast2', 1);

-- Volcando estructura para tabla inventariodb_test.category
CREATE TABLE IF NOT EXISTS `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `is_active` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla inventariodb_test.category: ~4 rows (aproximadamente)
DELETE FROM `category`;
INSERT INTO `category` (`id`, `name`, `is_active`) VALUES
	(4, 'prueba10', 1),
	(5, 'Prueba3', 1),
	(6, 'Prueba4', 1),
	(7, 'prueba de categoria', 1),
	(8, 'prueba toast', 1);

-- Volcando estructura para tabla inventariodb_test.client
CREATE TABLE IF NOT EXISTS `client` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` tinytext NOT NULL,
  `phone` tinytext NOT NULL,
  `debt` float DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla inventariodb_test.client: ~2 rows (aproximadamente)
DELETE FROM `client`;
INSERT INTO `client` (`id`, `name`, `phone`, `debt`) VALUES
	(15, 'Oscar Flores', '444 135 9427', 364),
	(16, 'Massiel Vega', '4441359426', 0);

-- Volcando estructura para tabla inventariodb_test.item_ticket
CREATE TABLE IF NOT EXISTS `item_ticket` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ticketId` int NOT NULL,
  `productId` int NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productId_idx` (`productId`),
  KEY `ticketId_idx` (`ticketId`),
  CONSTRAINT `productId` FOREIGN KEY (`productId`) REFERENCES `product` (`id`),
  CONSTRAINT `ticketId2` FOREIGN KEY (`ticketId`) REFERENCES `ticket` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla inventariodb_test.item_ticket: ~4 rows (aproximadamente)
DELETE FROM `item_ticket`;
INSERT INTO `item_ticket` (`id`, `ticketId`, `productId`, `quantity`) VALUES
	(1, 9, 80, 1),
	(2, 9, 81, 2),
	(3, 9, 78, 1),
	(4, 10, 81, 1),
	(5, 11, 81, 1),
	(6, 12, 81, 1),
	(7, 13, 81, 1);

-- Volcando estructura para tabla inventariodb_test.payment
CREATE TABLE IF NOT EXISTS `payment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `amount` float NOT NULL,
  `ticketId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ticketId_idx` (`ticketId`),
  CONSTRAINT `ticketId` FOREIGN KEY (`ticketId`) REFERENCES `ticket` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla inventariodb_test.payment: ~7 rows (aproximadamente)
DELETE FROM `payment`;
INSERT INTO `payment` (`id`, `amount`, `ticketId`) VALUES
	(5, 994, 9),
	(6, 1, 9),
	(7, 332, 11),
	(8, 300, 10),
	(9, 32, 10),
	(10, 300, 13);

-- Volcando estructura para tabla inventariodb_test.product
CREATE TABLE IF NOT EXISTS `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` tinytext NOT NULL,
  `price` float NOT NULL,
  `stock` int NOT NULL,
  `categoryId` int NOT NULL,
  `brandId` int NOT NULL,
  `is_active` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `idcategory_idx` (`categoryId`),
  KEY `idbrand_idx` (`brandId`),
  CONSTRAINT `id_brand` FOREIGN KEY (`brandId`) REFERENCES `brand` (`id`),
  CONSTRAINT `id_category` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla inventariodb_test.product: ~4 rows (aproximadamente)
DELETE FROM `product`;
INSERT INTO `product` (`id`, `name`, `price`, `stock`, `categoryId`, `brandId`, `is_active`) VALUES
	(76, 'massielito', 100000, 2, 4, 3, 1),
	(78, 'esta es una prueba', 100, 49, 4, 2, 1),
	(79, 'Esta es una nueva prueba de edit', 1234, 2312, 6, 3, 1),
	(80, 'Esta es otra prueba', 231, 1230, 5, 3, 1),
	(81, 'asdfa', 332, 0, 7, 3, 1),
	(82, 'prueba de toast', 1231, 2131, 7, 3, 1),
	(83, 'asdfa3', 234, 3423, 5, 3, 1),
	(84, 'Esta es otra pruebasd', 12312, 12312, 4, 2, 1),
	(85, 'hola', 23, 23, 7, 3, 1);

-- Volcando estructura para tabla inventariodb_test.ticket
CREATE TABLE IF NOT EXISTS `ticket` (
  `id` int NOT NULL AUTO_INCREMENT,
  `total` float NOT NULL,
  `payed` float NOT NULL DEFAULT '0',
  `is_payed` tinyint NOT NULL DEFAULT '0',
  `paymentId` int DEFAULT NULL,
  `clientId` int NOT NULL,
  `createdOn` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `clientId_idx` (`clientId`),
  CONSTRAINT `clientId` FOREIGN KEY (`clientId`) REFERENCES `client` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla inventariodb_test.ticket: ~8 rows (aproximadamente)
DELETE FROM `ticket`;
INSERT INTO `ticket` (`id`, `total`, `payed`, `is_payed`, `paymentId`, `clientId`, `createdOn`) VALUES
	(9, 995, 995, 1, NULL, 15, '2023-05-23 01:10:23'),
	(10, 332, 332, 1, NULL, 15, '2023-05-23 01:33:16'),
	(11, 332, 332, 1, NULL, 15, '2023-05-23 01:35:28'),
	(12, 332, 0, 0, NULL, 15, '2023-05-23 03:10:37'),
	(13, 332, 300, 0, NULL, 15, '2023-05-23 03:17:24');

-- Volcando estructura para disparador inventariodb_test.item_ticket_after_insert
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `item_ticket_after_insert` AFTER INSERT ON `item_ticket` FOR EACH ROW BEGIN
	UPDATE product SET stock = stock - NEW.quantity WHERE id = NEW.productId;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Volcando estructura para disparador inventariodb_test.payment_after_insert
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `payment_after_insert` BEFORE INSERT ON `payment` FOR EACH ROW BEGIN
	DECLARE ticketTotal FLOAT;
   DECLARE amountPayed FLOAT;
   DECLARE currentClient INT;

   SELECT COALESCE(SUM(amount), 0) INTO amountPayed FROM payment WHERE ticketId = NEW.ticketId;
   SELECT total INTO ticketTotal FROM ticket WHERE id = NEW.ticketId;
   SELECT clientId INTO currentClient FROM ticket WHERE id = NEW.ticketId;
   
   UPDATE ticket SET payed = payed + NEW.amount WHERE id = NEW.ticketId;
	UPDATE client SET debt = debt - NEW.amount WHERE id = currentClient;
    
   IF amountPayed + NEW.amount = ticketTotal THEN
		UPDATE ticket SET is_payed = 1 WHERE Id = NEW.ticketId;
	END IF;
	
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Volcando estructura para disparador inventariodb_test.payment_before_insert
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `payment_before_insert` BEFORE INSERT ON `payment` FOR EACH ROW BEGIN
	 DECLARE ticketTotal FLOAT;
    DECLARE amountPayed FLOAT;
    DECLARE flag INT;
   	
    SELECT is_payed INTO flag FROM ticket WHERE id = NEW.ticketId;
   
    IF flag = 1 THEN
    	SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El Ticket Ya Ha Sido Pagado';
    END IF;

    SELECT COALESCE(SUM(amount), 0) INTO amountPayed FROM payment WHERE ticketId = NEW.ticketId;
    SELECT total INTO ticketTotal FROM ticket WHERE id = NEW.ticketId;
   
   IF (amountPayed + NEW.amount) > ticketTotal THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La Cantidad A Ingresar Sobrepasa El Total Del Ticket';
   END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Volcando estructura para disparador inventariodb_test.ticket_after_insert
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `ticket_after_insert` AFTER INSERT ON `ticket` FOR EACH ROW BEGIN
	UPDATE client SET debt = debt + NEW.total WHERE id = NEW.clientId;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
