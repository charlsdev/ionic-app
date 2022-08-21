import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListOptionsPage } from './list-options.page';

describe('ListOptionsPage', () => {
   let component: ListOptionsPage;
   let fixture: ComponentFixture<ListOptionsPage>;

   beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
         declarations: [ ListOptionsPage ],
         imports: [IonicModule.forRoot()]
      }).compileComponents();

      fixture = TestBed.createComponent(ListOptionsPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
   }));

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
