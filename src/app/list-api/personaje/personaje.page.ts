import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
   selector: 'app-personaje',
   templateUrl: './personaje.page.html',
   styleUrls: ['./personaje.page.scss'],
})
export class PersonajePage implements OnInit {

   personaje: any;

   constructor(
      private http: HttpClient,
      private activateRoute: ActivatedRoute
   ) { }

   ngOnInit() {
      this.http.get<any>('https://rickandmortyapi.com/api/character/' + this.activateRoute.snapshot.paramMap.get('id'))
         .subscribe(res => {
            this.personaje = res;
            console.log(this.personaje);
         });
   }

}
