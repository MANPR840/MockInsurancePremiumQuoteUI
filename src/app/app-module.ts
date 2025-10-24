import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MockPremiumQuoteComponent } from './mock-quote/mock-quote.component';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot([]),
    HttpClientModule, // ✅ Required for REST API
    MockPremiumQuoteComponent
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

