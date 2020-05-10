package com.cap.anurag.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cap.anurag.dao.PaymentDao;
import com.cap.anurag.dao.RefundDao;
import com.cap.anurag.dao.SeatsDao;
import com.cap.anurag.entity.Payments;
import com.cap.anurag.entity.Refund;
import com.cap.anurag.entity.Seats;
@Service
@Transactional
public class MovieService implements MovieServiceInterface  {

	@Autowired 
	private PaymentDao payment;
	@Autowired
	private RefundDao refund;
	@Autowired
	private SeatsDao seats;
	

	 //Refund details
	@Override
	public Payments refund(int accountno, int bookingid) {
		return payment.refund(accountno, bookingid);
	}
	//Updating payment table
	@Override
	public String updatePayment(Payments pay) {
		boolean bool = payment.existsById(pay.getBooking_id());
		if(bool == true) {
			payment.save(pay);
			return "payment details updated successfully!!";
		}
		else {
			return "sorry,payment details not updated!!";
		}
	}
	//Refund details
	@Override
	public String refundDetails(Refund ref) {
		refund.save(ref);
		return "inserted the refund details successfully!!";
	}
	//Fetching remaining seats info
	@Override
	public Seats seatDetails(String s_type) {
		return seats.seatDetails(s_type);
	}
	//Updating seats after refund
	@Override
	public String setSeats(Seats seat) {
		boolean bool = seats.existsById(seat.getSno());
		if(bool == true) {
			seats.save(seat);
			return "seats updated successfully!!";
		}
		else {
			return "Sorry!!seats were not updated.";
		}
	}
}