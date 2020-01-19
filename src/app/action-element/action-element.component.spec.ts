import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActionElementComponent } from './action-element.component';

describe('ActionElementComponent', () => {
  let component: ActionElementComponent;
  let fixture: ComponentFixture<ActionElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionElementComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActionElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
