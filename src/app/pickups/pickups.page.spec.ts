import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PickupsPage } from './pickups.page';

describe('PickupsPage', () => {
  let component: PickupsPage;
  let fixture: ComponentFixture<PickupsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PickupsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
