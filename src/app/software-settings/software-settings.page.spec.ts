import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SoftwareniyantranPage } from './softwareniyantran.page';

describe('SoftwareniyantranPage', () => {
  let component: SoftwareniyantranPage;
  let fixture: ComponentFixture<SoftwareniyantranPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareniyantranPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SoftwareniyantranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
