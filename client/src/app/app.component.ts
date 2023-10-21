import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { Pagination } from './models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ecommerce';
  products:Product[] =[]

  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    this.http.get<Pagination<Product[]>>('https://localhost:5001/api/products').subscribe({
      next: response => this.products = response.data,
      error: error=> console.error(error),
      complete:()=>{
        console.log('requested completed');
        console.log('extra statement');
      }

    })
  }
}