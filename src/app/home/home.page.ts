import { Component, ViewChildren } from '@angular/core';
//import { Router } from '@angular/router';
//import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // @ViewChildren('slides') slides: IonSlides;
  // buttonName = 'NEXT';
  // selecteSlides: any;
  // slideOpts = { slidesPreView: 1 };

  constructor(/*private router: Router*/) {}

  //ionSlideChanges(slides){}

  // nextTick() {
  //   this.selecteSlides.getActiveIndex().then((slidesIndex) => {
  //     if (slidesIndex == 2) {
  //       console.log("Done Slider");
  //       this.router.navigateByUrl('login');
  //     }else{
  //       this.selecteSlides.slideNext();
  //     }
  //   });
  // }
}
