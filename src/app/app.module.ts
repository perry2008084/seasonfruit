import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FruitsService } from './fruits/fruits.service';

import { AccordionModule } from 'ngx-bootstrap/accordion';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot()
  ],
  providers: [
    FruitsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
