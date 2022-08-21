import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListApiPage } from './list-api.page';

describe('ListApiPage', () => {
   let component: ListApiPage;
   let fixture: ComponentFixture<ListApiPage>;

   beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
         declarations: [ ListApiPage ],
         imports: [IonicModule.forRoot()]
      }).compileComponents();

      fixture = TestBed.createComponent(ListApiPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
   }));

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
