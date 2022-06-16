import { Injectable } from '@nestjs/common';
import { tours } from './dto/db';
import { TourDto } from './dto/tour.dto';

@Injectable()
export class ToursService {
    private toursList = tours;

    getTours(): TourDto[] {
        return this.toursList;
    }

    getTour(id: number): TourDto {
        return this.toursList.find(
            elem => elem.id == id
        );
    }
    
    addTour(tour: TourDto): TourDto[] { 
        const id = this.toursList[
            this.toursList.length - 1
        ].id + 1;
        tour.id = id;
        this.toursList.push(
            tour
        );
        return this.toursList;
    }

    editTour(tour: TourDto): TourDto[] {
        let tourFromList = this.getTour(tour.id);
        tourFromList.name = tour.name;
        tourFromList.country = tour.country;
        tourFromList.cost = tour.cost;
        tourFromList.days = tour.days; 

        return this.toursList;
    }
    
    removeTour(tour: TourDto): TourDto[] {
        this.toursList = this.toursList.filter(
            elem => elem.id != tour.id
        );
        return this.toursList;
    }
}
