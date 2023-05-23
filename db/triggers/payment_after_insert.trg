DELIMITER //
CREATE TRIGGER `payment_after_insert` AFTER INSERT ON `payment` FOR EACH ROW BEGIN

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