import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppIntegerInputDirective } from './app-integer-input.directive';

// import { GrowerInfoComponent } from './components/grower-info/grower-info.component';
// import { GrowerLblInfoComponent } from './components/grower-lbl-info/grower-lbl-info.component';

@NgModule({
  declarations: [
    AppComponent,
    AppIntegerInputDirective,
    // GrowerInfoComponent,
    // GrowerLblInfoComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    //IonMarqueeModule,
  ],
  exports: [],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
