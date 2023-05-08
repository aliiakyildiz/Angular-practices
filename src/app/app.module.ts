import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExampleDirective } from './directives/example.directive';
import { CustomifDirective } from './directives/customif.directive';
import { CustomforDirective } from './directives/customfor.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExampleDirective,
    CustomifDirective,
    CustomforDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {provide:DEFAULT_CURRENCY_CODE,useValue:'₺'}
  ],
  bootstrap: [AppComponent]//Ana component'i bildiriyoruz.
})
export class AppModule { }
