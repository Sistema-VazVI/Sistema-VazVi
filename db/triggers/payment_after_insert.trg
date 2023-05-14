CREATE TRIGGER `payment_after_insert` AFTER INSERT ON `payment` FOR EACH ROW BEGIN

	DECLARE ticketTotal FLOAT;
   DECLARE amountPayed FLOAT;

   SELECT COALESCE(SUM(amount), 0) INTO amountPayed FROM payment WHERE ticketId = NEW.ticketId;
   SELECT total INTO ticketTotal FROM ticket WHERE id = NEW.ticketId;
    
   IF amountPayed = ticketTotal THEN
		UPDATE ticket SET is_payed = 1 WHERE Id = NEW.ticketId;
	END IF;

END