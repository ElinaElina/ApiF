import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';

import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatCheckboxModule, 
  MatListModule, 
  MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatListModule,
    MatCardModule,

  ],
  providers: [DataService
  // {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
