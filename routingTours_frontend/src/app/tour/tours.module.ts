import { TourComponent } from '../tour/tour.component';
import { TourListComponent } from './tour-list/tour-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToursRoutingModule } from './tours-routing.module';

@NgModule({
    declarations: [
        TourComponent,
        TourListComponent
    ],
    imports: [
        BrowserModule,
        ToursRoutingModule
    ]
})
export class ToursModule { }