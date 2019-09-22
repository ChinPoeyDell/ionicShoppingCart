import { Component } from '@angular/core';
import { StoreService } from '../store.service';
import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  stores = []
  carts = []

  constructor(private storeService: StoreService,
    private actionSheetCtrl: ActionSheetController, 
    private navCtrl: NavController) {}

    ngOnInit(){
      this.storeService.stores.subscribe(stores => {
        this.stores = stores
      })
      
      this.storeService.carts.subscribe(carts => {
        this.carts = carts
      })
    }
    
    onNavigatetoStore(id){
      this.navCtrl.navigateForward("/tab2/"+ id)
    }

    stopAction(event){
      event.stopPropagation()
    }
    
    addQuantity(event, index){
      event.stopPropagation()
      this.stores[index].quantity += 1
      console.log(this.stores)
    }

    reduceQuantity(event, index){
      event.stopPropagation()
      if(this.stores[index].quantity > 0){
      this.stores[index].quantity -= 1
      }
    }

    addToCart(event, store){
      event.stopPropagation()
      this.actionSheetCtrl.create({
        header: "Do you want add this item to Cart?",
        buttons: [
          {
            text: "Add to Cart",
            handler: () => {
                if(store.selected === false && store.quantity > 0){
                  store.selected = true
                  this.carts.push(Object.assign({},store))
                }
              console.log(this.carts)
            }
          }
        ]
      }).then(actionSheet => {
        actionSheet.present()
      })
    }

}
