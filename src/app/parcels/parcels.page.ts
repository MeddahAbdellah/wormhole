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
    this.getParcels();
    }

  ngOnInit() {}
  getParcels(){ // TODO: SERVICE
    this.parcels = [{parcel_id:"KKSDAZEM",Colis_remis:"Non",date_de_deposition_du_colis:"19/01/2020",date_de_livraison:'22/01/2020',Nom_du_livreur:"Mouloud",Numero_du_livreur:"+3322154785",Livraison_de:"Paris",Livraison_a:"Alger"},
                    {parcel_id:"QSMDAZEM",Colis_remis:"Oui",date_de_deposition_du_colis:"13/03/2020",date_de_livraison:'19/03/2020',Nom_du_livreur:"Fateh",Numero_du_livreur:"+3322154785",Livraison_de:"Paris",Livraison_a:"Alger"}];
  }
  cancel(p){
    console.log("Cancelling parcel: "+p.parcel_id); // TODO: SERVICE
  }
  async details(p,button){
    let self = this;
    const modal = await this.modalController.create({
      component: DetailsModalComponent,
      componentProps: {
      'fields' : p,
      'modalName':"Parcel",
      'button':{text:'Request Another Pickup',callback:function(id){self.requestAnotherPickup(id)},color:'primary'}
      }
    });
    return await modal.present();
  }
  async newParcel(){
    let self = this;
    const form = await this.modalController.create({
      component: CustomFormComponent,
      componentProps: {
        'title': "Send A New Parcel",
        'fields': [{label:'Sending Date',type:"datetime",value:new Date().toString()},{label:'Drop Location',type:"select",options:["Paris ORY","Paris CDG","ALG"],value:"Paris ORY"},{label:'Pickup Location',type:"select",options:["Paris ORY","Paris CDG","ALG"],value:"Paris ORY"},{label:'Volume',type:"number",value:0},{label:'Weight',type:"number",value:0},{label:'Parcel Value',type:"text",value:0}],
        'formName':'Parcel',
        'button':{text:'Nouveau Colis',callback:function(form){self.createNewParcel(form)},color:'primary'}
      }
    });
    return await form.present();
  }
  createNewParcel(form){
    console.log("Creating new parcel for user, details:");// TODO: SERVICE
    console.log(form);
  }
  requestAnotherPickup(id){
    console.log("NEW PICKUP FOR "+id);// TODO: SERVICE
  }
}
