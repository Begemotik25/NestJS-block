import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TourDataService } from '../services/tour-data.service';
import { Tour } from '../services/tour-data.service';

@Component({
  selector: 'app-tour-edit',
  templateUrl: './tour-edit.component.html',
  styleUrls: ['./tour-edit.component.scss']
})
export class TourEditComponent implements OnInit {

  editTour: Tour = {
    id: 0,
    name: "",
    country: "",
    cost: 0,
    days: 0
  };

  constructor(private tourDataService: TourDataService,
    private activatedRoute: ActivatedRoute,
    private toursData: TourDataService) { }

  ngOnInit(): void {
    const tourId = this.activatedRoute.snapshot.params['id'];
    const reg = this.tourDataService.getTour(tourId).subscribe(
      reg => {
        this.editTour.id = reg.id;
        this.editTour.name = reg.name;
        this.editTour.country = reg.country;
        this.editTour.cost = reg.cost;
        this.editTour.days = reg.days;
      }
    );
  }
  formSubmit(form:any) {
    this.toursData.editTour(
      this.editTour
    ).subscribe(
      data => this.toursData.tours = data
    );
  }
}

