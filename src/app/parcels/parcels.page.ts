import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailsModalComponent } from '../details-modal/details-modal.component';
import { CustomFormComponent } from '../custom-form/custom-form.component';
@Component({
  selector: 'app-parcels',
  templateUrl: './parcels.page.html',
  styleUrls: ['./parcels.page.scss'],
})
export class ParcelsPage implements OnInit {
  parcels: Array<Object>;
  constructor(public modalController: ModalController) {
    this.parcels = [{expectedDeliveryDate:'22/01/2020',parcelId:"KL417DMS",volume:10,weight:2,pickupLocationDestination:"Alger"},
                    {expectedDeliveryDate:'13/05/2020',parcelId:"KL417DMS",volume:10,weight:2,pickupLocationDestination:"Alger"}];
  }

  ngOnInit() {
  }
  cancel(id){
    console.log("Cancelling parcel: "+id);
  }
  async details(p){
    const modal = await this.modalController.create({
      component: DetailsModalComponent,
      componentProps: {
      'fields' : p
      }
    });
    return await modal.present();
    }
  async newParcel(){
    const form = await this.modalController.create({
      component: CustomFormComponent,
      componentProps: {
        'title': "Send A New Parcel",
        'fields': [{label:'Sending Date',type:"datetime"},{label:'Drop Location',type:"select",options:["Paris ORY","Paris CDG","ALG"]},{label:'Pickup Location',type:"select",options:["Paris ORY","Paris CDG","ALG"]},{label:'Volume',type:"number"},{label:'Weight',type:"number"},{label:'Parcel Value',type:"text"}]
      }
    });
    return await form.present();
  }

}
