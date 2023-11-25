import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private http: ProductsService, private router:Router, private route:ActivatedRoute,private sanitizer:DomSanitizer) { }

  product: any = [];
  idProduct = this.route.snapshot.paramMap.get('id');
  id: number = +this.idProduct!;
  ngOnInit(): void {
    const productIdParam = this.route.snapshot.paramMap.get('id');
    if(productIdParam !== null){
      this.id = +productIdParam;
    }
    console.log(this.id);
    this.http.getProductById(this.id).subscribe(data => {
        this.product = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
