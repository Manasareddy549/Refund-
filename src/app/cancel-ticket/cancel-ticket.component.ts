import { Component, OnInit } from '@angular/core';
import { MovieServiceService, Refund } from '../movie-service.service';


@Component({
  selector: 'app-cancel-ticket',
  templateUrl: './cancel-ticket.component.html',
  styleUrls: ['./cancel-ticket.component.css']
})
export class CancelTicketComponent implements OnInit {
  refunddetails:Refund = new Refund(0,0,0,"");
  accountNo:number;
  booking_id:number;
  refund:any;
  refunddate:any;
  payment_message:string;
  refund_message:string;
  seat_data:any;
  seat_update_message:string;
  check:boolean = false;
  check1:boolean = false;
 
  message: string;
  updatedSeats: any;
 
  seat_info:any;

  account_data:any;
  account_update_message: string;

  constructor(private service:MovieServiceService) { 
    setInterval(()=>{
      let date = new Date();
      this.refunddate = date.toLocaleDateString();
    },1000)
  }
  ngOnInit(): void {
  
  }

  refund_data(){
    if(this.accountNo > 999 && this.accountNo < 10000 && !isNaN(this.accountNo) && !isNaN(this.booking_id) && this.booking_id > 0)
    {
      console.log("1");
    this.service.refund(this.accountNo, this.booking_id).subscribe((data)=>{this.refund=data;
    console.log("2");
    if(this.refund != null)
    {
      console.log("3");
      if(this.refund.money_collected > 0)
      {
        console.log("4");
        this.service.seat_details(this.refund.seat_type).subscribe((data)=>this.seat_info=data);
        //
        this.service.check_account(this.refund.account_no).subscribe((data)=>this.account_data=data);
        //
        console.log(this.account_data);
        //
      this.refunddetails.account_no = this.refund.account_no;
      this.refunddetails.booking_id = this.refund.booking_id;
      this.refunddetails.date_of_refund = this.refunddate;
      this.refunddetails.money_refunded = this.refund.money_collected;
      
      this.account_data.current_balance = this.account_data.current_balance + this.refund.money_collected;
      //
      this.refund.money_collected = this.refund.money_collected - this.refund.money_collected;
      //
      
      //
      this.service.update_customer(this.account_data).subscribe((data)=>this.account_update_message=data);
      //
      this.seat_info.available_seats = this.seat_info.available_seats + this.refund.seats_booked;
      //
      console.log(this.seat_info);
      //
      this.service.set_seat_details(this.seat_info).subscribe((data)=>this.message=data);
      //

      //
      this.refund.refund = this.refunddetails.money_refunded;
    
      this.service.update_pay(this.refund).subscribe((data)=>this.payment_message=data);

      
       this.service.refund_details(this.refunddetails).subscribe((data)=>this.refund_message=data);
      this.check = true;
      this.check1 = false;
    }
    else{
      console.log("5");
      this.check1 = true;
      this.check = false;
    }
  }
  else{
    console.log("6");
    this.check1 = true;
    this.check = false;
  }
});
    }
    else{
      console.log("7");
      this.check1 = true;
      this.check = false;
    }
  }
  }
