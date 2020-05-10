package com.cap.anurag.service;

import com.cap.anurag.entity.Payments;
import com.cap.anurag.entity.Refund;
import com.cap.anurag.entity.Seats;

public interface MovieServiceInterface {

	Payments refund(int acc_no, int book_id);
	String updatePayment(Payments pay);
	String refundDetails(Refund ref);
	Seats seatDetails(String s_type);
	String setSeats(Seats seat);
	
}
