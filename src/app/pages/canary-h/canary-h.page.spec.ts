import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CanaryHPage } from './canary-h.page';

describe('CanaryHPage', () => {
  let component: CanaryHPage;
  let fixture: ComponentFixture<CanaryHPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanaryHPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CanaryHPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
