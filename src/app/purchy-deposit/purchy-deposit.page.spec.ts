import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PuraniparchijamaPage } from './purchy-deposit.page';

describe('PuraniparchijamaPage', () => {
  let component: PuraniparchijamaPage;
  let fixture: ComponentFixture<PuraniparchijamaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PuraniparchijamaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PuraniparchijamaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
