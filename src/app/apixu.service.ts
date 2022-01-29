import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {
  myApiKey: string = '814b1cc6f53ac582f374a2e1e342c786';

  constructor(private http: HttpClient) { }

  getWeather(location) {
    return this.http.get(
      'https://api.weatherstack.com/current?access_key='+ this.myApiKey +'&query=' + location
    );
  }
}
