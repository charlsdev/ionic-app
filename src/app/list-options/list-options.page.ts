import { Component, OnInit } from '@angular/core';
import { calculateDigito } from 'src/helpers/validateCed';
import { ToastService } from '../toast.service';

@Component({
   selector: 'app-list-options',
   templateUrl: './list-options.page.html',
   styleUrls: ['./list-options.page.scss'],
})
export class ListOptionsPage implements OnInit {
   digito = 0;
   cedula: string;

   constructor(private toastService: ToastService) { }

   calculate() {
      if (!this.cedula) {
         this.toastService.presentToast({
            header: 'Campo Vacío',
            message: 'El campo de cédula está vacio.',
            icon: 'close-circle-outline',
            color: 'danger',
            position: 'top',
            duration: 2000
         });
      } else {
         const dig = calculateDigito(this.cedula);
         this.digito = dig;
      }
   }

   ngOnInit() {
   }

}
