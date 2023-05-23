DELIMITER //
CREATE TRIGGER `payment_after_insert` AFTER INSERT ON `payment` FOR EACH ROW BEGIN

	BEGIN
	DECLARE ticketTotal FLOAT;
	DECLARE amountPayed FLOAT;
	DECLARE clientID INT;
	
	SELECT COALESCE(SUM(amount), 0) INTO amountPayed FROM payment WHERE ticketId = NEW.ticketId;
	SELECT total INTO ticketTotal FROM ticket WHERE id = NEW.ticketId;
	SELECT clientId INTO clientID FROM ticket WHERE id = NEW.ticketId; 
	
	UPDATE ticket SET payed = payed + NEW.amount WHERE id = NEW.ticketId;
	UPDATE client SET debt = debt - NEW.amount WHERE id = cilentID;
	
	IF amountPayed = ticketTotal THEN
		UPDATE ticket SET is_payed = 1 WHERE id = NEW.ticketId;
	END IF;
	
	
END//

DELIMITER ;