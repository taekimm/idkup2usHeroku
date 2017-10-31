import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule, MatCheckboxModule, MatSliderModule, MatFormFieldModule, MatGridListModule, MatCardModule, MatProgressSpinnerModule, MatInputModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { YelpService } from './yelp.service';
import { LocationService } from './location.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSliderModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    YelpService,
    LocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
