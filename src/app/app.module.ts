import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';

import { BeginnerComponent } from './components/tab/beginner/beginner.component';
import { IntermediaryComponent } from './components/tab/intermediary/intermediary.component';
import { AdvancedComponent } from './components/tab/advanced/advanced.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './template/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './template/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { NgforComponent } from './diretives/ngfor/ngfor.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    BeginnerComponent,
    IntermediaryComponent,
    AdvancedComponent,
    HeaderComponent,
    NavComponent,
    NgforComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
