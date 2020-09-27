import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  private key = "7b6e2fc220928fc3ed1a9e6ad4fffe3b";
  location: String;
  result: String;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  fetch(){
    this.getWeather().subscribe(data => {
        this.result = JSON.stringify(data);
    }
    );
  }

  onKey(event: any) { 
    this.location = event.target.value;
  }

  getWeather():Observable<Object>{
    return this.http.get(
       "http://api.openweathermap.org/data/2.5/weather?q="+this.location+"&APPID="+this.key
    );
  }

}
