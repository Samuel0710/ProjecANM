import { SegundoComComponent } from './components/segundo-com/segundo-com.component';
import { ServerService } from 'src/app/server/server.service';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
@NgModule({
  declarations: [AppComponent,DataBindingComponent,SegundoComComponent],
  imports: [HttpClientModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [HttpClientModule,ServerService,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],

})
export class AppModule {}
