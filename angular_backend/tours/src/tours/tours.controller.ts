import { ToursService } from './tours.service'
import { BadRequestException, Body, Controller,Delete,Get, Param, ParseIntPipe, Post, Put, UsePipes } from '@nestjs/common';
import { TourDto } from './dto/tour.dto'
import { TourValidatorPipe } from './pipe/tour-validation.pipe';

@Controller('tours')
export class ToursController {
    constructor(private toursDataService: ToursService) {}

    @Get()
    getToursList(): TourDto[] {
        return this.toursDataService.getTours();
    }

    @Get(':id')
    getTour(@Param('id', new ParseIntPipe({
        exceptionFactory: error => new BadRequestException(
            `This is custom text. An error is: ${error}`
        )
        })) tourId: number) 
        : TourDto{
        return this.toursDataService.getTour(tourId);
    }

    @Post()
    @UsePipes(new TourValidatorPipe())
    addTour(@Body() body : TourDto): TourDto[] {
        return this.toursDataService.addTour(body);
    }

    @Put()
    EditTour(@Body() body : TourDto): TourDto[] {
        return this.toursDataService.editTour(body);
    }

    @Delete()
    RemoveTour(@Body() body : TourDto): TourDto[] {
        return this.toursDataService.removeTour(body);
    }
 
}
