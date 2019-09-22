import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../store.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  selectedProduct = null

  constructor(private storeService: StoreService ,
    private route: ActivatedRoute,
    private navCtrl: NavController) { }

  ngOnInit() {
    let productId = this.route.snapshot.paramMap.get("productId")
    this.selectedProduct = this.storeService.stores.getValue().filter(product => {
      return product.id === parseInt(productId)
    })[0]
  }


}
