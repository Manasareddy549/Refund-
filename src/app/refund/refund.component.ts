import { Component, OnInit } from '@angular/core';
import { List } from '../cancel-ticket/list';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.css']
})
export class RefundComponent implements OnInit {
  list:List[];
  constructor(private service:MovieServiceService) { }

  ngOnInit(): void {
    this.getRefund();
  }
 
  getRefund():void{
    this.service.getAllRefund().subscribe((bookData:List[])=>{
      this.list=bookData,
      console.log(bookData)
    },(error)=>{
      console.log(error);
    });
    }
}
