import { Component } from '@angular/core';
import { StoreService } from '../store.service';
import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  carts = []
  constructor(private storeService: StoreService,
    private actionSheetCtrl: ActionSheetController, 
    private navCtrl: NavController) {}


    ngOnInit(){    
      this.storeService.carts.subscribe(carts => {
        this.carts = carts
      })
    }

  // onNavigateToCart(){
  //   this.navCtrl.navigateForward("tab3")
  // }

  totalPrice(){
    let totalPrice = 0
    for(let cart of this.carts){
      totalPrice += cart.price * cart.quantity
    }
    return totalPrice
  }

}
