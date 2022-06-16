import { ToursModule } from './tour/tours.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { TourEditComponent } from './tour-edit/tour-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TourEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToursModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
