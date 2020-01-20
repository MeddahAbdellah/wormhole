import { Component, OnInit, Input } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-element',
  templateUrl: './action-element.component.html',
  styleUrls: ['./action-element.component.scss']
})
export class ActionElementComponent implements OnInit {
  @Input() imgSrc:string;
  @Input() title:string;
  @Input() description:string;
  @Input() deliveryDate:string;
  @Input() deliveryCost:string;
  @Input() productCost:string;

  buttonsObject: any ={
    header: 'Action',
    buttons: [ {
      text: 'Buy',
      icon: 'cash',
      handler: () => {
        console.log('Buy clicked');
      }
    }, {
      text: 'add to basket',
      icon: 'basket',
      handler: () => {
        console.log('Add to Basket clicked');
      }
    }, {
      text: 'Favorite',
      icon: 'heart',
      handler: () => {
        console.log('Favorite clicked');
      }
    }, {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    }]
  };
  constructor(public actionSheetController: ActionSheetController) {}
  ngOnInit(){
  }
  async presentActionSheet() {

    const actionSheet = await this.actionSheetController.create(this.buttonsObject);
    await actionSheet.present();
  }

}
