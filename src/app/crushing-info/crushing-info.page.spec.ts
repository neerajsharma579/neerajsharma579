import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrushingInfoPage } from './crushing-info.page';

describe('PiraikeaakedePage', () => {
  let component: CrushingInfoPage;
  let fixture: ComponentFixture<CrushingInfoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrushingInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();


    fixture = TestBed.createComponent(CrushingInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
