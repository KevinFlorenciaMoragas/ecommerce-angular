import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService { 

  private cart:any[] = [];
  private updateCart(){
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  constructor() {
    const cartSave = localStorage.getItem('cart');
    if (cartSave) {
      this.cart = JSON.parse(cartSave);
    }
   }
   getCart(): any[] {
    return this.cart;
   }
   addToCart(product: any): void {
    this.cart.push(product);
    this.updateCart();
   }
   removeFromCart(product: any): void {
    const index = this.cart.indexOf(product);
    if (index > -1) {
      this.cart.splice(index, 1);
      this.updateCart();
    }
   }

}
