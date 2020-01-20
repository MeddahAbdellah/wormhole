import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailsModalComponent } from '../details-modal/details-modal.component';
import { CustomFormComponent } from '../custom-form/custom-form.component';

@Component({
  selector: 'app-pickups',
  templateUrl: './pickups.page.html',
  styleUrls: ['./pickups.page.scss'],
})
export class PickupsPage implements OnInit {
  pickups: Array<Object>;
  constructor(public modalController: ModalController) {
    this.pickups = [{flightDate:'22/01/2020',ticketId:"KL417DMS",volume:10,weight:2,flightDeparture:"Paris",flightDestination:"Alger"},
                    {flightDate:'13/05/2020',ticketId:"KL417DMS",volume:10,weight:2,flightDeparture:"Paris",flightDestination:"Alger"}];
  }

  ngOnInit() {
  }
  cancel(id){
    console.log("Cancelling: "+id);
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
  async newPickup(){
    const form = await this.modalController.create({
      component: CustomFormComponent,
      componentProps: {
        'title': "Earn Money On Your Next Flight",
        'fields': [{label:'Flight Date',type:"datetime"},{label:'Flight Departure',type:"select",options:["Paris ORY","Paris CDG","ALG"]},{label:'Flight Destination',type:"select",options:["Paris ORY","Paris CDG","ALG"]},{label:'Volume',type:"number"},{label:'Weight',type:"number"},{label:'Flight Ticket',type:"text"}]
      }
    });
    return await form.present();
  }

}
