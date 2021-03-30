import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HandsonComponent } from './handson/handson.component';
import { HotTableModule } from '@handsontable/angular';
import { HandsonService } from './handson.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HandsonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HotTableModule.forRoot(),
    HttpClientModule
  ],
  providers: [HandsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
