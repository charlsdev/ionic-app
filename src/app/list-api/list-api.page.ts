import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../../models/interfaces.model';

@Component({
   selector: 'app-list-api',
   templateUrl: './list-api.page.html',
   styleUrls: ['./list-api.page.scss'],
})
export class ListApiPage implements OnInit {

   personajes: API[];

   constructor(private http: HttpClient) { }

   ngOnInit() {
      this.http.get<any>('https://rickandmortyapi.com/api/character')
         .subscribe(res => {
            this.personajes = res.results;
         });
   }

}
