import { ApiInterceptor } from './shared/api.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from'@angular/common/http';
import { ApiService } from './utils/api.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService,{provide:HTTP_INTERCEPTORS,useClass:ApiInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
