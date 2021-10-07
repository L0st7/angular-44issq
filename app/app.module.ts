import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponent } from './test.component';
@NgModule({
  imports: [BrowserModule, FormsModule, AppRouting,],
  declarations: [AppComponent, HelloComponent, TestComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
