import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductsCardComponent } from './products-card/products-card.component';
import { app } from '../../server';
import { truncate } from 'fs';
import { TruncatePipe } from './pips/truncate.pipe';

@NgModule({
  declarations: [
    TruncatePipe,
    ProductsCardComponent
  ],
  exports: [ProductsCardComponent],
  imports: [],
  providers: [],
  bootstrap: []
})export class AppModule { }
