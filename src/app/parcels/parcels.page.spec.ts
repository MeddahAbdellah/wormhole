import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParcelsPage } from './parcels.page';

describe('ParcelsPage', () => {
  let component: ParcelsPage;
  let fixture: ComponentFixture<ParcelsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcelsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParcelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
