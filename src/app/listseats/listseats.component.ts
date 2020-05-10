import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-listseats',
  templateUrl: './listseats.component.html',
  styleUrls: ['./listseats.component.css']
})
export class ListseatsComponent implements OnInit {

  seat:any;

  seat_type:string;

  check:boolean = false;
  check1:boolean = false;

  constructor(private service:MovieServiceService) { }

  ngOnInit(): void {
  }

  fetchSeats(){
    console.log("list of seats by seat-type");
    this.service.seat_details(this.seat_type).subscribe((data)=>this.seat=data);

    if(this.seat== null){
      this.check1 = true;
      this.check = false;
    }
    else{
      this.check1 = false;
      this.check = true;
    }
  }
}
