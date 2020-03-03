import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrianaPage } from './triana.page';

describe('TrianaPage', () => {
  let component: TrianaPage;
  let fixture: ComponentFixture<TrianaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrianaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrianaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
