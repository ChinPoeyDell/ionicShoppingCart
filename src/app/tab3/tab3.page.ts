import { Component } from '@angular/core';
import { StoreService } from '../store.service';
import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
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

    deleteCart(index){
      this.actionSheetCtrl.create({
        header: "Remove Cart Item",
        buttons: [
          {
            text: "Remove",
            handler: () => {
              this.storeService.remove(this.carts[index].id)
              this.stores[index].selected = false
            }
          }
        ]
      }).then(actionSheet => {
        actionSheet.present()
      })
    }

}
