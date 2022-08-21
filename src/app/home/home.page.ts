import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../toast.service';

@Component({
   selector: 'app-home',
   templateUrl: 'home.page.html',
   styleUrls: ['home.page.scss'],
})
export class HomePage {

   constructor(private toastService: ToastService, private router: Router) { }

   alerta() {
      this.toastService.presentToast({
         header: 'Bienvenido!!!',
         message: 'Sea bienvenido al sistema CharlsDEV.',
         icon: 'checkmark-done-outline',
         color: 'warning',
         position: 'top',
         duration: 2000
      });
   }

   pageCed() {
      this.router.navigate(['/cedula']);
   }

   pageAPI() {
      this.router.navigate(['/api']);
   }

   pageNotes() {
      this.toastService.presentToast({
         header: 'Mis Notas',
         message: 'Muy pronto será habilitado.',
         icon: 'checkmark-done-outline',
         color: 'tertiary',
         position: 'top',
         duration: 2000
      });
   }
}
