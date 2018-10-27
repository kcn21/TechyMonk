import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 public data1=[];
 public data2=[]; 
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.data1=this.dataService.pocoDetails();
    this.data2=this.dataService.vivoDetails();
  }
}
