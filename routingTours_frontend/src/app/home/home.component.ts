import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  getData(){
    this.http.get('http://localhost:3000/tours-hello')
    .toPromise().then(
      (data: any) => console.log(data)
    );
  }

  ngOnInit(): void {
  }

}
