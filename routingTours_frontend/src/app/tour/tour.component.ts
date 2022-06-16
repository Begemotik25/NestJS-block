import { Component, OnInit } from '@angular/core';
import {Tour, TourDataService} from 'src/app/services/tour-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {

  tour : Tour | undefined;
  constructor(private toursData: TourDataService,
  private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.forEach(
      params=> {
        const tourId = +params['id'];
        this.toursData.getTour(tourId).subscribe(
          data => this.tour = data
        );
      }
    )
  }
  goBack(){
    if(this.tour) {
      this.router.navigate(
        ["../", {id: this.tour.id}],
        {relativeTo: this.activatedRoute});
    }
  }
  edit() {
    console.log(this.tour);
    if(this.tour) {
      this.router.navigate (
        ["../edit", this.tour.id],
        {relativeTo: this.activatedRoute}
      );
    }
  }

}
