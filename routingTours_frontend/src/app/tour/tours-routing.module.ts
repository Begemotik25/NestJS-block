import { TourComponent } from '../tour/tour.component';
import { TourListComponent } from './tour-list/tour-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourEditComponent } from '../tour-edit/tour-edit.component';

const routes: Routes = [
    {path: "", redirectTo: "tours", pathMatch: "full"},
    {path: "tours", component: TourListComponent, 
        children: [
            {path: "", component: TourComponent},
            {path: ":id", component: TourComponent},
            {path: "edit/:id", component: TourEditComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ToursRoutingModule { }