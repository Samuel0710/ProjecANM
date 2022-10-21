import { TelaDeDadosPage } from './tela-de-dados/tela-de-dados.page';
import { SegundoComComponent } from './components/segundo-com/segundo-com.component';
import { ServerService } from 'src/app/server/server.service';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule, routing } from './app-routing.module';

@NgModule({
  declarations: [AppComponent,SegundoComComponent,TelaDeDadosPage],
  imports: [HttpClientModule,routing,BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [HttpClientModule,ServerService,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],

})
export class AppModule {}
