import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  // cities = {
  //   burbank: 5331835,
  //   chicago: 4887398,
  //   dallas: 4684888,
  //   dc: 4366164,
  //   sanjose: 4673475,
  //   seattle: 5809844,
  // }

  currentRoute = '';

  url = 'https://api.openweathermap.org/data/2.5/weather'
  params = {
    id: '',
    units: 'Imperial',
    APPID: '776fdde7119ba5a1d66b80692b7b22ca'
  }
  
  constructor(private _http: HttpClient) { }

  
  getWeatherById(cityId) {
    this.currentRoute = cityId;
    console.log('current route:', this.currentRoute);
    this.params.id = cityId;
    return this._http.get(this.url, {params: this.params});
  }


}
