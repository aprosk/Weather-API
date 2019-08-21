import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'; //to obtain url parameters
import { HttpService } from '../http.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  weather: any;
  

  iconUrl = 'http://openweathermap.org/img/wn/'

  
  cityRoutes = {
    'burbank': {name: 'Burbank',  id: 5331835, image: 'https://images.pexels.com/photos/2816168/pexels-photo-2816168.jpeg'},
    'chicago': {name: 'Chicago',  id: 4887398, image: 'https://images.pexels.com/photos/161963/chicago-illinois-skyline-skyscrapers-161963.jpeg'},
    'dallas': {name: 'Dallas',  id: 4684888, image: 'https://images.pexels.com/photos/2051002/pexels-photo-2051002.jpeg'},
    'dc': {name: 'Washington, DC',  id: 4366164, image: 'https://images.pexels.com/photos/2446915/pexels-photo-2446915.jpeg'},
    'sanjose': {name: 'San Jose', id: 5392171, image: 'https://images.pexels.com/photos/258447/pexels-photo-258447.jpeg'},
    'seattle': {name: 'Seattle',  id: 5809844, image: 'https://images.pexels.com/photos/1796730/pexels-photo-1796730.jpeg'},
  };

  cityRoute = 'dc';
  cityName = this.cityRoutes[this.cityRoute].name;
  cityName = this.cityRoutes[this.cityRoute].id;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.weather = {
      humidity: '',
      temp:'',
      tempH:'',
      tempL:'',
      wind:'',
      status:[]
    }
    this._route.params.subscribe((params: Params) => {
      console.log(params);
      let route = params.route;
      if (route in this.cityRoutes === false) {
        route = 'dc';
      }
      this.cityRoute =route;
      this.cityId = this.cityRoutes[route].id;
      this.cityName = this.cityRoutes[route].name;
      console.log(this.cityRoute, this.cityId, this.cityName)
      this.getWeather();
    });
  }

  goHome() {
    this._router.navigate(['/' + this.cityRoute]);
  }

  getWeather() {
    let observer = this._httpService.getWeatherById(this.cityId);
    observer.subscribe(data => {
      console.log(data);
      let weather = {
        humidity: data['main'].humidity,
        temp: Math.round(data['main'].temp),
        tempH: data['main'].temp_max,
        tempL: data['main'].temp_min,
        wind: data['wind'],
        status: data['weather']
      }
      this.weather = weather;
    })
  }

  getIcon(icon) {
    return `http://openweathermap.org/img/wn/${icon}`
  }


}
