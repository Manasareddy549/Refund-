import { Component, OnInit } from '@angular/core';
import { MovieServiceService, Payments } from '../movie-service.service';

@Component({
  selector: 'app-bookmovie',
  templateUrl: './bookmovie.component.html',
  styleUrls: ['./bookmovie.component.css']
})
export class BookMovieComponent implements OnInit {
  username:string;
  password:string;
  valid:any;
  cities:any;
  theatres:any;
  movie_details:any;
  show_details:any;
  language_details:any;
  seats:any;
  updatedSeats:any;
  no_of_seats:number;
  total_amount:number;
  accountNo:number;
  account_data:any;
  message:string;
  payments:Payments  = new Payments(0,0,0,"",0,"");
  payment_message:string;
  printdate:any;

  validation1:boolean = false;
  validation2:boolean = false;
  checkTheatre:boolean = false;
  checkMovies:boolean = false;
  checkShows:boolean = false;
  checkLanguage: boolean = false;
  checkSeats: boolean = false;
  seat:boolean= false;
  check1:boolean = false;
  check2:boolean = false;
  check3:boolean = false;
  check4:boolean = false;
  check5:boolean = false;

  
  ngOnInit(): void {
  }
constructor(private service:MovieServiceService) { 
    setInterval(()=>{
      let date = new Date();
      this.printdate = date.toLocaleDateString();
    },1000)
   }
  validate(){
    this.service.validation(this.username, this.password).subscribe((data)=>this.valid=data);
    if(this.valid != null){
      this.service.cityNames().subscribe((data)=>this.cities=data);
      this.validation1 = true;
      this.validation2 = false;
    }
    else{
      this.validation2 = true;
      this.validation1 = false;
    }
  }
  selectCity(city_name:string){
    this.service.selectedCity(city_name).subscribe((data)=>this.theatres=data);
    this.checkTheatre = true;
  }
  selectTheatre(theatre_name:string){
    this.service.selected_theatre(theatre_name).subscribe((data)=>this.movie_details=data);
    this.checkMovies = true;
  }

  selectMovie(){
    this.service.selected_movie().subscribe((data)=>this.show_details=data);
    this.checkShows = true;
  }

  selectShow(){
    this.service.selected_show().subscribe((data)=>this.language_details=data);
    this.checkLanguage = true;
  }

  selectLanguage(){
    this.service.selected_language().subscribe((data)=>this.seats=data);
    this.checkSeats = true;
  }

  chosenSeat(particular_seat_object:any){
    this.updatedSeats = particular_seat_object;
    this.seat = true;
  }

  no_of_seats_selected(){
    if(this.no_of_seats > 0 && this.no_of_seats <= this.updatedSeats.available_seats && !isNaN(this.no_of_seats))
    {
    this.updatedSeats.available_seats = this.updatedSeats.available_seats - this.no_of_seats;
    this.total_amount = this.updatedSeats.price * this.no_of_seats;
    this.check1 = true;
    this.check5 = false;
    }
    else
    {
      this.check5 = true;
      this.check1 = false;
    }
  }

  entered_accountNo(){
    if(this.accountNo > 500 && this.accountNo < 10000 && !isNaN(this.accountNo))
    {
    this.service.check_account(this.accountNo).subscribe((data)=>this.account_data=data);
    if(this.account_data != null){
      if(this.account_data.current_balance < this.updatedSeats.price){
        this.check2 = true;
        this.check3 = false;
        this.check4 = false;
      }
      else if(this.account_data.current_balance - this.total_amount < 0)
      {
        this.check2 = true;
        this.check3 = false;
        this.check4 = false;
      }
      else{
        this.check3 = true;
        this.check2 = false;
        this.check4 = false;
        this.payments.account_no = this.accountNo;
        this.payments.money_collected = this.total_amount;
        this.payments.refund = 0;
        this.payments.seat_type = this.updatedSeats.seat_type;
        this.payments.seats_booked = this.no_of_seats;
        this.payments.date_of_transac= this.printdate;
        this.service.pay(this.payments).subscribe((data)=>this.payment_message=data);
        this.service.update_seats(this.updatedSeats).subscribe((data)=>this.message=data);
      }
    }
  }
    else{
      this.check4 = true;
      this.check3 = false;
      this.check2 = false;
    }
  }
}
