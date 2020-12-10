import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

import { CartService } from '../cart.service';


@Component ({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  product:any;

    constructor(
        private route: ActivatedRoute,
        private cartService: CartService,
    ){}

    addToCart(){
      window.alert('เพิ่มใส่ตะกร้าแล้ว');
      this.cartService.addToCart(this.product);
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
        this.product = products[+params.getAll('productId')];
        })

      }
    }
