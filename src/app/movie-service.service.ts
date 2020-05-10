import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export class Payments{
  account_no:number;
  money_collected:number;
  seats_booked:number;
  seat_type:number;
  refund:number;
  date_of_transac:string;
  constructor(account_no, money_collected, seats_booked, seat_type, refund, date){
    this.account_no = account_no;
    this.money_collected = money_collected;
    this.seats_booked = seats_booked;
    this.seat_type = seat_type;
    this.refund = refund;
    this.date_of_transac = date;
  }
}

export class Seat{

  sno:number;
  seat_type:string;
 available_seats:number;
 price:number;
  constructor(sno:number, seat_type:string, available_seats:number,price:number){
          this.sno=sno,
          this.seat_type=seat_type,
          this.available_seats=available_seats,
          this.price=price
      }
}
export class Refund{
  account_no:number;
  money_refunded:number;
  booking_id:number;
  date_of_refund:string;
  constructor(account_no:number, money_refunded:number, booking_id:number, date_of_refund:string){
    this.account_no = account_no;
    this.booking_id = booking_id;
    this.money_refunded = money_refunded;
    this.date_of_refund = date_of_refund;
  }
}

@Injectable({
  providedIn: 'root'
})

export class MovieServiceService {
 

  constructor(private http:HttpClient) { }

  public validation(uname:string, pwd:string){
    return this.http.get("http://localhost:5454/validation/"+uname+"/"+pwd,{responseType:'json'});
  }

  public cityNames(){
    return this.http.get("http://localhost:5454/cities",{responseType: 'json'});
  }

  public selectedCity(city_name:string){
    return this.http.get("http://localhost:5454/theatres/"+city_name,{responseType:'json'});
  }
  
  public selected_theatre(theatre_name:string){
    return this.http.get("http://localhost:5454/movies/"+theatre_name,{responseType:'json'});
  }

  public selected_movie(){
    return this.http.get("http://localhost:5454/shows",{responseType:'json'});
  }

  public selected_show(){
    return this.http.get("http://localhost:5454/languages",{responseType:'json'});
  }

  public selected_language(){
    return this.http.get("http://localhost:5454/seats",{responseType:'json'});
  }
  public seatslist(){
  return this.http.get("http://localhost:5454/seats",{responseType:'json'});
  
}

  public check_account(account_No){
    return this.http.get("http://localhost:5454/account_data/"+account_No,{responseType:'json'});
  }
 
  public update_seats(seats){
    console.log(seats);
    return this.http.put("http://localhost:5454/update_seats",seats,{responseType:'text'});
  }

  public pay(payment:Payments){
    return this.http.post("http://localhost:5454/payments",payment,{responseType:'text'});
  }

  public refund(acc_no:number, book_id:number){
    return this.http.get("http://localhost:5454/refund/"+acc_no+"/"+book_id,{responseType:'json'});
  }

  public update_pay(payments){
    return this.http.put("http://localhost:5454/update_payment",payments,{responseType:'text'});
  }

  public refund_details(refund){
    return this.http.post("http://localhost:5454/refund_details",refund,{responseType:'text'});
  }

  public seat_details(seat_type){
    return this.http.get("http://localhost:5454/seat_details/"+seat_type,{responseType:'json'});
  }

  public set_seat_details(seat_obj){
    return this.http.put("http://localhost:5454/set_seats",seat_obj,{responseType:'text'});
  }
  public getAllRefund() {
    return this.http.get("http://localhost:5454/listrefund",{responseType:'json'});
 
  }
  public update_customer(cust){
    return this.http.put("http://localhost:5454/update_customer",cust,{responseType:'text'});
  }
}
