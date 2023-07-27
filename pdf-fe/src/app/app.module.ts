import { ApiInterceptor } from './shared/api.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from'@angular/common/http';
import { ApiService } from './utils/api.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UtilService } from './utils/util.service';
import { CCurrencyPipe } from './pipes/c-currency.pipe';
import { CONSTANTS } from './utils/constants';
@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [ApiService,UtilService,{provide:HTTP_INTERCEPTORS,useClass:ApiInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(api:ApiService) {
    api.get('util/exchangeRate').subscribe((res)=>{
      CONSTANTS.exchangeRates = res.data;
    })
  }
}
