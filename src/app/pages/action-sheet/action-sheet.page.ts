import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage  {
  constructor(
    private actionSCtrl: ActionSheetController
  ) {

   }
  async openActionSheet(){
    const actionSheet = await this.actionSCtrl.create({
      mode: 'ios',
      backdropDismiss: false,
      header: 'Mi primer action sheet',
      subHeader: 'Probando Action-Sheet',
      buttons: [
        {
          text: ' Añadir a favorito',
          icon: 'heart',
          handler: ()=> {
            console.log(' Añadido a favorito');
          },
        },
        {
          text: ' Ver mas...',
          icon: 'eye',
          handler: ()=> {
            console.log(' Ver mas info');
          },
        },
        {
          text: ' Eliminar',
          icon: 'trash',
          role: 'cancel',
          handler: ()=> {
            console.log(' Articulo eliminado');
          },
        }
      ]
    });
    await actionSheet.present();
  }

}
