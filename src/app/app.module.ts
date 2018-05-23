import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { AddressComponent } from './address/address.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PaymentComponent } from './payment/payment.component';
import { PaypalComponent } from './payment/paypal/paypal.component';
import { CreditCardComponent } from './payment/credit-card/credit-card.component';
import { MenuComponent } from './navbar/menu/menu.component';
import { ShoppingCartComponent } from './navbar/shopping-cart/shopping-cart.component';
import { LoginComponent } from './navbar/login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    AddressComponent,
    ProductListComponent,
    PaymentComponent,
    PaypalComponent,
    CreditCardComponent,
    MenuComponent,
    ShoppingCartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }