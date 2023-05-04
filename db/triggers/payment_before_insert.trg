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
    
END