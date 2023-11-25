import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private cartService:CarritoService, private http: ProductsService) { }
  products: any = [];
  cart: any[] = []; 

  ngOnInit(): void {
    this.http.listAllProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
    this.cart = this.cartService.getCart();
    console.log(this.cart);
  }
  addToCart(product: any): void {
    this.cartService.addToCart(product);
    this.cart = this.cartService.getCart();
    console.log(this.cart);
  }
  removeFromCart(product: any): void {
    this.cartService.removeFromCart(product);
    this.cart = this.cartService.getCart();
  }
}
