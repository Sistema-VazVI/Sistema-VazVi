DELIMITER //
CREATE TRIGGER `ticket_after_insert` AFTER INSERT ON `ticket` FOR EACH ROW BEGIN
	
	UPDATE client SET debt = debt + NEW.total WHERE id = NEW.clientId;
	
END//

DELIMITER ;