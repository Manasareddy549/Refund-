import { Component, OnInit } from '@angular/core';
import { MovieServiceService, Seat } from '../movie-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateseats',
  templateUrl: './updateseats.component.html',
  styleUrls: ['./updateseats.component.css']
})
export class UpdateseatsComponent implements OnInit {
seat:Seat = new Seat(0,"abc",0,0);
  seat1:Seat= new Seat(0,"",0,0);
  message:string;
  check:boolean=false;
  allseats:any;
  click:boolean=false;
  seat_type:string;
  constructor(private service:MovieServiceService) { }

  ngOnInit(): void {
    this.service. seatslist().subscribe((data)=>this.allseats=data);
  }

  updateSeats(employeeData:Seat){
    this.seat1 = employeeData;
    this.click = true;
  }

  clickMe(){
    this.click = true;
  }

  updateDetails(){
    this.service.set_seat_details(this.seat1).subscribe((data)=>this.message=data);
    this.check=true;
  }
}
