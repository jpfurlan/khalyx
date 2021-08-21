import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';

import { BegginerComponent } from './components/tab/begginer/begginer.component';
import { IntermediaryComponent } from './components/tab/intermediary/intermediary.component';
import { AdvancedComponent } from './components/tab/advanced/advanced.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './template/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './template/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    BegginerComponent,
    IntermediaryComponent,
    AdvancedComponent,
    HeaderComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
