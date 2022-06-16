import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

export interface Tour {
    id: number,
    name: string,
    country: string,
    cost: number,
    days: number
}

@Injectable ({
    providedIn: 'root'
})

export class TourDataService {
    public tours: Tour[]= [];

    constructor(private http: HttpClient){}

    private baseUri = "http://localhost:3000"

    getTours(): Observable<any>{
        const path = `${this.baseUri}/tours`;
        return this.http.get(path);
    }
    getTour(id:number): Observable<any>{
        const path = `${this.baseUri}/tours/${id}`;
        return this.http.get(path);
    }
    addTour(tour:Tour): Observable<any>{
        const path = `${this.baseUri}/tours`;
        return this.http.post(path, tour);
    }
    editTour(tour:Tour): Observable<any>{
        const path = `${this.baseUri}/tours`;
        return this.http.put(path, tour);
    }
}