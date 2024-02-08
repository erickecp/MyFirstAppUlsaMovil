import { Component } from '@angular/core';
import { rutaComponent } from '../interfaces/ruta.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: string = 'Erick Eduardo Corro';


  menu: rutaComponent[] = [
    {
      name: 'Action Sheet',
      ruta: '/action-sheet',
      icon: 'rocket',
      color: 'success'
    },
    {
      name: 'Alert',
      ruta: '/alert',
      icon: 'balloon',
      color: 'danger'
    },
    {
      name: 'Buttons',
      ruta: '/buttons',
      icon: 'cash',
      color: 'danger'
    },
  ];





  //* PAGE ->
  // *UNA PAGE HACE REFERENCIA A UNA PAGINA COMPLETA
  //

  //* COMPONENTES ->
  //* PARTE DE CODIGO QUE PODEMOS REUTILIZAR

  //*SERVICIO ->
  //* FUNCIONES QUE PODEMOS REUTILIZAR EN NUESTRA APP

  //* MODULO ->
  //* EL MODULO ADMINISTRA FUNCIONALIDES Y MOULOS DE NUESTRA APLICACION

 //* PIPES ->
 //* TRANFORMAN LA INFORMACION SIN MODIFICAR LA INFORMACION ORIGINAL


  constructor() {
  }

}
