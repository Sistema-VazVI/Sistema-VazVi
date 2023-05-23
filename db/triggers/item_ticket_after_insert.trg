DELIMITER //
CREATE TRIGGER `item_ticket_after_insert` AFTER INSERT ON `item_ticket` FOR EACH ROW BEGIN
	UPDATE product SET stock = stock - NEW.quantity WHERE id = NEW.productId;
END//

DELIMITER ;