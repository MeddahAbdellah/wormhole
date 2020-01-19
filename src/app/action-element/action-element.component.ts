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

  buttonsObject: object ={
    header: 'Action',
    buttons: [{
      text: 'Delete',
      role: 'destructive',
      icon: 'trash',
      handler: () => {
        console.log('Delete clicked');
      }
    }, {
      text: 'Share',
      icon: 'share',
      handler: () => {
        console.log('Share clicked');
      }
    }, {
      text: 'Play (open modal)',
      icon: 'arrow-dropright-circle',
      handler: () => {
        console.log('Play clicked');
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
