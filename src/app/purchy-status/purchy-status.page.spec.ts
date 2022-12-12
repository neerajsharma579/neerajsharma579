import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParchiyonkistithiPage } from './parchiyonkistithi.page';

describe('ParchiyonkistithiPage', () => {
  let component: ParchiyonkistithiPage;
  let fixture: ComponentFixture<ParchiyonkistithiPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ParchiyonkistithiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParchiyonkistithiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
