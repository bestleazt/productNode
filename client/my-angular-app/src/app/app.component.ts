import { Component, OnInit } from '@angular/core';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  listProduct:any = [];
  constructor(
    private productSerive:ProductService
  ){}

  ngOnInit(): void {
    this.getListProduct();
    //call
  }
  getListProduct(){
    this.productSerive.getProduct().subscribe((res)=>{
    this.listProduct = res
    })
  }
  title = 'my-angular-app';
}
