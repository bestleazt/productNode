import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

   private apiServerUrl = environment.apiBaseUrl;
    constructor(private http: HttpClient){}

     public getProduct(){
      return this.http.get(this.apiServerUrl + '/product')
    }
}
